# BananaOps — Identité visuelle

**Version** v1 · Août 2026
**Périmètre** logo, palette, typographie, règles d'usage
**Activité** développement logiciel · DevOps · cloud · CTO à temps partagé

---

## 1. Le concept

Une mascotte banane souriante, tracée en aplats jaunes sur bleu nuit. Le ton est
volontairement chaleureux : sur un marché où tout le monde communique en gris et en
schémas d'architecture, la banane fait le travail de mémorisation, et le bleu nuit
fait le travail de crédibilité.

Le nom fonctionne en un mot, tout en minuscules dans le logo (`bananaops`), et en
casse mixte dans un texte courant (BananaOps).

---

## 2. Les quatre pistes explorées

| Piste | Principe | Pour | Contre |
|---|---|---|---|
| **A — Badge mascotte** ✅ | La banane dans un carré arrondi bleu nuit | Protège la mascotte partout : avatar GitHub, LinkedIn, favicon 16 px. Immédiatement utilisable. | Le badge est un format très courant chez les studios tech. |
| **B — Accolades** | La banane encadrée par `{ }` | Dit « code » sans un mot, pas de fond imposé, s'intègre sur n'importe quel document. | Format large : il faut un badge séparé pour les usages carrés, et les accolades s'effacent sous 32 px. |
| **C — Terminal** | La banane dépasse d'une fenêtre de terminal avec un prompt `>_` | La plus explicite sur le métier. | Deux idées dans une seule marque, et l'imagerie terminal vieillit si tu glisses vers le conseil CTO. |
| **D — Nuage** | La banane posée sur un nuage bleu nuit | Plante le cloud sans jargon, ton doux et rassurant. | Le nuage est le symbole le plus utilisé du secteur, et la silhouette large tient mal dans un carré de 16 px. |

**Piste retenue par défaut : A.** Les déclinaisons et la charte ci-dessous sont
construites dessus. Si tu retiens B, C ou D, tout le reste se transpose sans
retoucher le dessin de la banane, qui est commun aux quatre.

---

## 3. Palette

| Nom | Hex | Rôle |
|---|---|---|
| **Banana Yellow** | `#FFC83D` | La mascotte, les accents, un seul bouton primaire par écran |
| **Midnight Ops** | `#10264A` | Fonds sombres, texte principal, badge du logo |
| **Cream** | `#FFF7E8` | Fond clair par défaut, plus chaud qu'un blanc pur |
| **Peel Deep** | `#E5A521` | États survol du jaune, ombres du jaune |
| **Cloud Blue** | `#2E5288` | Texte secondaire, `ops` du wordmark, éléments d'interface |
| **Stem** | `#8A6A2E` | Le pédoncule de la banane, uniquement |

**Règle** : le jaune ne porte jamais de texte. Il sert de fond ou d'accent, le texte
reste en Midnight Ops. Peel Deep est réservé aux états d'interaction, jamais au logo.

Variables CSS prêtes à coller :

```css
:root {
  --banana:    #FFC83D;
  --peel:      #E5A521;
  --midnight:  #10264A;
  --cloud:     #2E5288;
  --cream:     #FFF7E8;
  --stem:      #8A6A2E;
}
```

---

## 4. Typographie

| Usage | Famille | Graisses | Repli |
|---|---|---|---|
| Logo et titres | **Gabarito** | 800 (`banana`), 500 (`ops`), 700 (titres) | `'Trebuchet MS', system-ui, sans-serif` |
| Texte courant, interface | **Space Grotesk** | 400, 500, 600 | `system-ui, sans-serif` |

Les deux sont sur Google Fonts, gratuites, embarquables sur un site commercial.

```html
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Gabarito:wght@500;600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap">
```

Le wordmark se compose en Gabarito, interlettrage `-0.02em` :
`banana` en 800 Midnight Ops, `ops` en 500 Cloud Blue.

```html
<span style="font-family: Gabarito, 'Trebuchet MS', system-ui; letter-spacing: -0.02em; color: #10264A;">
  <b style="font-weight: 800;">banana</b><span style="font-weight: 500; color: #2E5288;">ops</span>
</span>
```

---

## 5. Déclinaisons

| Version | Quand l'utiliser |
|---|---|
| **Horizontale** (badge + nom + baseline) | Header de site, signature de mail, en-tête de document |
| **Verticale** (badge au-dessus du nom) | Carte de visite, formats carrés, kakémono |
| **Badge seul** | Favicon, avatar, app icon, watermark |
| **Mascotte détourée** | Avatar rond (LinkedIn, GitHub, Slack), fonds photo |
| **Aplat une couleur** | Impression une couleur, tampon, gravure |

**Réduction** : le sourire disparaît sous 48 px, les yeux sous 32 px. En dessous,
seule la silhouette jaune reste — c'est la version favicon.

**Tailles minimales**
- Badge seul : 24 px à l'écran, 8 mm à l'impression
- Logo complet avec le nom : 130 px à l'écran, 32 mm à l'impression

**Zone de protection** : une marge libre égale à la moitié de la hauteur du badge,
tout autour. Rien n'y entre — ni texte, ni cadre, ni bord de page.

---

## 6. À éviter

- Étirer ou compresser le logo (garder le ratio)
- Changer les couleurs de la mascotte
- Incliner ou faire pivoter le badge
- Ajouter une ombre portée, un relief ou un contour
- Poser du texte sur l'aplat jaune
- Écrire « Banana Ops » en deux mots

---

## 7. Sources SVG

### Badge principal (160 × 160)

```svg
<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BananaOps">
  <rect width="160" height="160" rx="38" fill="#10264A"/>
  <g transform="translate(28,22) scale(1.12)">
    <path d="M 28.5 9.5 C 28 3, 33 0.5, 37.5 2.5 L 40.5 8 C 37 6.5, 33 6.5, 28.5 9.5 Z" fill="#8A6A2E"/>
    <path d="M 26 14 C 8 46, 14 84, 50 93 C 72 98, 94 90, 91 79 C 88 69, 72 78, 58 72 C 40 64, 34 42, 42 18 C 45 8, 29 6, 26 14 Z" fill="#FFC83D"/>
    <circle cx="24" cy="45" r="3.6" fill="#10264A"/>
    <circle cx="35.5" cy="48" r="3.6" fill="#10264A"/>
    <path d="M 24.5 56.5 q 6 7.5 12.5 1.5" fill="none" stroke="#10264A" stroke-width="3.4" stroke-linecap="round"/>
  </g>
</svg>
```

### Mascotte détourée (100 × 100) — avatar rond, fonds photo

```svg
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BananaOps">
  <path d="M 28.5 9.5 C 28 3, 33 0.5, 37.5 2.5 L 40.5 8 C 37 6.5, 33 6.5, 28.5 9.5 Z" fill="#8A6A2E"/>
  <path d="M 26 14 C 8 46, 14 84, 50 93 C 72 98, 94 90, 91 79 C 88 69, 72 78, 58 72 C 40 64, 34 42, 42 18 C 45 8, 29 6, 26 14 Z" fill="#FFC83D"/>
  <circle cx="24" cy="45" r="3.6" fill="#10264A"/>
  <circle cx="35.5" cy="48" r="3.6" fill="#10264A"/>
  <path d="M 24.5 56.5 q 6 7.5 12.5 1.5" fill="none" stroke="#10264A" stroke-width="3.4" stroke-linecap="round"/>
</svg>
```

### Favicon (silhouette, lisible à 16 px)

```svg
<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BananaOps">
  <rect width="160" height="160" rx="38" fill="#10264A"/>
  <g transform="translate(26,20) scale(1.2)">
    <path d="M 26 14 C 8 46, 14 84, 50 93 C 72 98, 94 90, 91 79 C 88 69, 72 78, 58 72 C 40 64, 34 42, 42 18 C 45 8, 29 6, 26 14 Z" fill="#FFC83D"/>
  </g>
</svg>
```

### Aplat une couleur (impression, tampon)

Reprendre la mascotte détourée, remplacer `#FFC83D` et `#8A6A2E` par `#10264A`, et
les traits du visage par la couleur du support (`#FFFFFF` ou `#FFF7E8`).

---

## 8. Ce qui reste à faire

- Choisir définitivement entre les pistes A, B, C et D
- Remplacer `[EMAIL]` et `[SITE]` sur la carte de visite
- Exporter les PNG (`512`, `192`, `180`, `32`, `16`) et le `favicon.ico`
- Déposer la marque si le nom est destiné à durer
