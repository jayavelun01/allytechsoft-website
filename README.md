# AllyTechSoft Solutions — Website

An elegant, modern, light-themed marketing site for **AllyTechSoft Solutions**, built with **React + Vite + Tailwind CSS**. Easy to re-theme, extend, and push to GitHub.

Services highlighted:
- Mobile Apps Development
- Web Apps Development
- ERP Products
- AIML Products
- Digital Marketing

---

## 1. Prerequisites

- **Node.js** ≥ 18 ([download](https://nodejs.org))
- **npm** (ships with Node) or **yarn** / **pnpm**
- **Git** ([download](https://git-scm.com))

Check your versions:

```bash
node -v
npm -v
git --version
```

---

## 2. Run locally

```bash
# 1. install dependencies
npm install

# 2. start the dev server
npm run dev
```

Open http://localhost:5173 — the site will hot-reload as you edit.

Build for production:

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

---

## 3. Project structure

```
allytechsoft-website/
├── index.html                 # HTML shell + Google Fonts (Syne + Manrope)
├── package.json               # dependencies & scripts
├── vite.config.js             # Vite config
├── tailwind.config.js         # colors, fonts, animations
├── postcss.config.js
├── .gitignore
├── README.md
├── public/
│   └── logo.png               # AllyTechSoft Solutions logo
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # page composition
    ├── index.css              # Tailwind + global styles + atmospheric gradients
    └── components/
        ├── Navbar.jsx         # sticky nav with logo + mobile drawer
        ├── Hero.jsx           # hero + stats strip
        ├── Marquee.jsx        # scrolling tech strip
        ├── Services.jsx       # 5 services (Mobile / Web / ERP / AIML / Marketing)
        ├── Process.jsx        # 4-step working method
        ├── About.jsx          # studio story & values
        ├── Portfolio.jsx      # selected work cards
        ├── Contact.jsx        # dark contact section + form
        └── Footer.jsx
```

---

## 4. Branding & theme

### Logo
Replace `public/logo.png` with a new version any time; the filename is referenced in `Navbar.jsx` and `Footer.jsx` as `/logo.png`.

### Color palette (from the logo)
Edit `tailwind.config.js` — the whole theme lives there:

```js
colors: {
  mist:            '#F5F8FB',  // page background
  ice:             '#EAF2F9',  // section surfaces
  ink:             '#0B2845',  // primary text / dark sections
  ash:             '#3B4A5C',  // body text
  mute:            '#7B8A9A',  // labels
  brandBlue:       '#1E5FA5',  // primary brand blue (from logo)
  brandBlueDark:   '#154680',
  brandTeal:       '#2CA8A8',  // mid accent (from logo)
  brandGreen:      '#5EB33C',  // secondary brand green (from logo)
  brandGreenLight: '#86C23E',
  brandGreenDark:  '#4A8F2E',
}
```

A **brand gradient** (blue → teal → green, matching the logo) is available as:
- Tailwind utility: `bg-brand-gradient`
- Text gradient: `text-brand-gradient` (custom utility in `src/index.css`)

### Fonts
- **Display**: [Syne](https://fonts.google.com/specimen/Syne) — geometric, modern, matches the angular logo
- **Body**: [Manrope](https://fonts.google.com/specimen/Manrope) — clean, warm, readable
- **Mono**: JetBrains Mono — for labels and meta text

Swap any of these in `index.html` (the Google Fonts `<link>`) and `tailwind.config.js`.

### Atmospheric backdrop
The hero has soft blue+green radial gradient blobs that gently animate — see `.atmos` in `src/index.css`. Remove the `atmos` class from `Hero.jsx` if you prefer a flat background.

---

## 5. Editing content

- **Services** — `src/components/Services.jsx`, top `services` array
- **Process steps** — `src/components/Process.jsx`, top `steps` array
- **Portfolio cards** — `src/components/Portfolio.jsx`, top `work` array
- **Stats** — `src/components/Hero.jsx`, inside the stats grid
- **Contact email + address** — `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Wire up the contact form
The form in `src/components/Contact.jsx` currently logs to the console. To actually send emails to `allytechsoft@gmail.com`, drop in one of:

- **Formspree** — change `handleSubmit` to `POST` to `https://formspree.io/f/YOUR_ID`
- **EmailJS** — client-side, no server needed
- **Netlify Forms** — add `data-netlify="true"` and deploy on Netlify
- **Resend / SendGrid** — hit your own API endpoint

---

## 6. Upload to GitHub

From inside the project folder:

```bash
# Initialise a git repo
git init
git add .
git commit -m "Initial commit: AllyTechSoft Solutions website"

# Rename the default branch to main
git branch -M main

# Create a new empty repo on github.com, copy its URL, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Future changes:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Feature branches (recommended for bigger changes):

```bash
git checkout -b feature/new-section
# ... make changes ...
git add .
git commit -m "Add new section"
git push -u origin feature/new-section
# then open a Pull Request on github.com
```

---

## 7. Deploy (optional)

One-click deploys work out of the box:

- **Vercel** — import the GitHub repo at [vercel.com/new](https://vercel.com/new)
- **Netlify** — import at [app.netlify.com/start](https://app.netlify.com/start), build command `npm run build`, publish directory `dist`
- **Cloudflare Pages** — similar: build command `npm run build`, output `dist`
- **GitHub Pages** — use the `gh-pages` package or a GitHub Action; remember to set `base: '/REPO_NAME/'` in `vite.config.js`

---

## 8. Design notes

**Aesthetic direction:** modern, clean, tech-forward. The theme pulls its colors directly from the logo — a deep **brand blue** (`#1E5FA5`), a mid **teal** (`#2CA8A8`), and a vibrant **brand green** (`#5EB33C`). The light page background is a very subtle blue-tinted off-white (`#F5F8FB`), with soft animated gradient blobs in the hero for atmosphere.

Typography pairs **Syne** (geometric display) with **Manrope** (body) and **JetBrains Mono** (meta labels) — distinctive enough to feel designed, clean enough to stay readable.

Headline accents use a `text-brand-gradient` that runs through all three logo colors, tying the identity into the typography itself.

---

## License

Use this freely for your own studio or client work.
