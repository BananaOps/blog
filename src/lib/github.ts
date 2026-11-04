/**
 * Métadonnées des dépôts BananaOps, récupérées au moment du build.
 *
 * Le site est statique : ces appels ont lieu pendant `astro build`, jamais dans
 * le navigateur. Les cartes projet restent donc à jour sans intervention, à
 * condition de rebuilder (le workflow Pages tourne aussi sur un cron quotidien).
 *
 * Toute erreur réseau, rate limit ou dépôt sans release est absorbée : la
 * fonction renvoie un champ vide et l'appelant garde sa valeur écrite en dur.
 * Un build ne doit jamais échouer parce que l'API GitHub tousse.
 */

const ORG = "BananaOps";
const API = "https://api.github.com";
const TIMEOUT_MS = 8000;

export interface RepoInfo {
  /** Dernière release, normalisée en `v1.2.3`. */
  version?: string;
  /** Identifiant SPDX, ex. `Apache-2.0`. */
  license?: string;
}

const cache = new Map<string, Promise<RepoInfo>>();

function headers(): Record<string, string> {
  const h: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "bananaops-blog-build",
  };
  // En CI, GITHUB_TOKEN fait passer la limite de 60 à 5000 requêtes/heure.
  const token = process.env.GITHUB_TOKEN;
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

async function json(url: string): Promise<any> {
  const res = await fetch(url, {
    headers: headers(),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
  return res.json();
}

/**
 * Les tags amont sont préfixés du nom du dépôt (`tracker-0.21.1`) ou non
 * (`v0.4.0`). On n'affiche que la partie sémantique, préfixée d'un `v`.
 */
function normalizeTag(tag: string): string | undefined {
  const m = String(tag ?? "").match(/(\d+\.\d+(?:\.\d+)?(?:[-+].*)?)$/);
  return m ? `v${m[1]}` : undefined;
}

async function load(repo: string): Promise<RepoInfo> {
  const [meta, release] = await Promise.allSettled([
    json(`${API}/repos/${ORG}/${repo}`),
    json(`${API}/repos/${ORG}/${repo}/releases/latest`),
  ]);

  const info: RepoInfo = {};

  if (meta.status === "fulfilled") {
    const spdx = meta.value?.license?.spdx_id;
    // NOASSERTION = licence non reconnue par GitHub, inutile à afficher.
    if (spdx && spdx !== "NOASSERTION") info.license = spdx;
  } else {
    console.warn(`[github] ${repo} : métadonnées indisponibles — ${meta.reason}`);
  }

  if (release.status === "fulfilled") {
    info.version = normalizeTag(release.value?.tag_name);
  } else {
    console.warn(`[github] ${repo} : pas de release lisible — ${release.reason}`);
  }

  return info;
}

/** Renvoie les infos d'un dépôt. Mémoïsé : un seul appel réseau par build. */
export function getRepoInfo(repo: string): Promise<RepoInfo> {
  let pending = cache.get(repo);
  if (!pending) {
    pending = load(repo).catch((err) => {
      console.warn(`[github] ${repo} : ${err}`);
      return {} as RepoInfo;
    });
    cache.set(repo, pending);
  }
  return pending;
}

/** Applique les infos GitHub par-dessus des valeurs de repli. */
export function withRepoInfo<T extends RepoInfo>(fallback: T, info: RepoInfo): T {
  return {
    ...fallback,
    version: info.version ?? fallback.version,
    license: info.license ?? fallback.license,
  };
}
