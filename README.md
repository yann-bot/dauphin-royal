# Dauphin Royal — Site Web

Site vitrine de **Dauphin Royal**, leader des fournitures de bureau, équipements
informatiques et imprimerie en République centrafricaine (Bangui, depuis 2006).

```
Astro 4            → Framework (rendu hybride : statique + serverless)
Tailwind v4        → Styling, via @tailwindcss/vite + tokens CSS @theme (pas de tailwind.config)
Zod                → Validation des formulaires (client + serveur)
@astrojs/vercel    → Adapter serverless (déploiement Vercel)
@astrojs/sitemap   → Génération automatique du sitemap.xml
Sanity Client      → Présent (src/lib/sanity.ts) mais non consommé par les pages
```

---

## 🚀 Démarrage

Gestionnaire de paquets : **bun** (`bun.lock`).

```bash
bun install
cp .env.example .env     # facultatif (voir Variables d'environnement)
bun run dev              # → http://localhost:4321
```

| Commande | Effet |
| --- | --- |
| `bun run dev` | Serveur de développement (`http://localhost:4321`) |
| `bun run build` | Build de production (sortie dans `.vercel/output/`) |
| `bun run preview` | Sert le build localement |
| `bunx astro check` | Vérification de types Astro / TypeScript |

---

## 🎨 Direction « Éditoriale v2 »

Esthétique éditoriale / cabinet de conseil : **angles à 0px** (imposés globalement),
contraste maximal, libellés monospace, **or** comme seul accent — et le **vert WhatsApp**
partout où WhatsApp est mentionné.

Typographie : **Space Grotesk** (display) · **Instrument Serif** (italique, accents) ·
**JetBrains Mono** (libellés) · **Inter** (corps).

- **Page unique** (`/`) à ancres : `#accueil`, `#apropos`, `#services`, `#produits`, `#contact`.
- **Fiches produit** sur de vraies routes pré-rendues : `/produit/[slug]` (SEO-friendly).
- Animations : reveal au scroll, compteurs animés (stats), ticker « Secteurs servis »,
  miniatures au survol des services, filtre catalogue par catégorie.

La palette et la typo sont définies dans `src/styles/global.css` via un bloc Tailwind v4
`@theme`. Chaque token `--color-X` génère automatiquement les utilitaires `text-X` /
`bg-X` / `border-X` : **pour ajouter une couleur, on ajoute un token** — on n'écrit pas
de hex en dur dans le markup.

---

## 📝 Contenu — source unique

Tout le contenu éditorial (produits + détails, services, stats, témoignages, coordonnées,
URLs d'images) vit dans **`src/lib/data.ts`**. C'est la **source unique de vérité** : pour
modifier un texte, un produit, un prix ou une image, on édite ce fichier.

> Le client Sanity (`src/lib/sanity.ts`) et ses requêtes GROQ existent mais ne sont
> consommés par aucune page. Le contenu ne provient pas (encore) du CMS.

---

## 📦 Structure

```
src/
├── styles/global.css         ← Tailwind v4 @theme (palette + type) + styles custom
├── lib/
│   ├── data.ts               ← Contenu statique du site (source unique)
│   ├── validate.ts           ← Schémas Zod (partagés client + API)
│   └── sanity.ts             ← Client Sanity (présent, non consommé)
├── layouts/Layout.astro      ← SEO complet (meta, OG, JSON-LD) + FAB WhatsApp + reveal au scroll
├── components/               ← Sections (Hero, Stats, Services, Products, WhyUs, Contact…),
│                                Btn.astro, WhatsAppIcon.astro
└── pages/
    ├── index.astro           ← Page unique (compose toutes les sections)
    ├── demande-de-devis.astro← Formulaire de devis
    ├── produit/[slug].astro  ← Fiches produit pré-rendues (getStaticPaths)
    └── api/{contact,devis}.ts← Routes SSR (prerender = false) → serverless
```

---

## ✉️ Formulaires

Les schémas **Zod** de `src/lib/validate.ts` sont partagés entre la validation côté client
et les routes API. Chaque route parse le `FormData`, valide (réponse **422** en cas d'erreur),
puis transmet à **Formspree** uniquement si `FORMSPREE_ID` est défini — sans cette variable,
l'endpoint répond « succès » mais n'envoie rien. Le formulaire de devis est en
`multipart/form-data` pour permettre l'envoi d'un fichier joint.

---

## 🔐 Variables d'environnement

Lues côté serveur / build (pas de préfixe `PUBLIC_`). Voir `.env.example`.

| Variable | Usage |
| --- | --- |
| `SANITY_PROJECT_ID` | Client Sanity (`process.env`) |
| `SANITY_DATASET` | Dataset Sanity (défaut : `production`) |
| `FORMSPREE_ID` | Envoi des formulaires (`import.meta.env`) — optionnel |

---

## 🌍 Déploiement

Build via Vercel (adapter `@astrojs/vercel/serverless`, `output: 'hybrid'`) :

```bash
bun run build      # → .vercel/output/
```

Les pages sont pré-rendues (statique) ; seules les routes `api/contact` et `api/devis`
sont déployées comme fonctions serverless. Renseigner les variables d'environnement
ci-dessus côté Vercel.

---

*Réalisé par [Blanche Mind](https://www.blanchemind.com) — Bangui, République centrafricaine*
