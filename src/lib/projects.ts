/**
 * Les cinq projets BananaOps, source unique pour la documentation.
 *
 * `slug` sert à la fois d'identifiant de page (projects/<slug>) et de nom de
 * fichier d'icône (public/icons/<slug>.svg), les deux étant alignés sur le nom
 * du dépôt GitHub.
 */
export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** Icône dédiée dans bananaops-icons. Faux tant qu'elle n'existe pas. */
  hasLogo: boolean;
}

export const projects: Project[] = [
  { slug: 'tracker',   name: 'Tracker',   tagline: 'Track deployments, incidents and drift',        hasLogo: true },
  { slug: 'homer-k8s', name: 'Homer-k8s', tagline: 'Homer dashboard generated from your CRDs',      hasLogo: true },
  { slug: 'cloudoff',  name: 'Cloudoff',  tagline: 'Scheduled shutdown of EC2 instances',           hasLogo: true },
  { slug: 'scope',     name: 'Scope',     tagline: 'Sync Helm charts to an OCI registry',           hasLogo: true },
  // Pas encore d'icône dédiée : on retombe sur le badge de marque.
  { slug: 'offly',     name: 'Offly',     tagline: 'Self-hosted time-off manager',                  hasLogo: false },
];

/** Chemin du logo d'un projet, badge de marque en repli. */
export function logoFor(slug: string): string {
  const project = projects.find((p) => p.slug === slug);
  return `/icons/${project?.hasLogo ? slug : 'bananaops'}.svg`;
}

/**
 * Logo correspondant à un identifiant de route Starlight
 * (`projects/tracker`), ou null hors pages projet.
 */
export function projectLogo(routeId: string): string | null {
  const match = /(?:^|\/)projects\/([a-z0-9-]+)\/?$/.exec(routeId ?? '');
  if (!match) return null;
  return projects.some((p) => p.slug === match[1]) ? logoFor(match[1]) : null;
}
