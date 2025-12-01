# Lewis Jones — Portfolio SPA

A single-page, terminal-inspired portfolio built with HTML, CSS, and vanilla JavaScript. Content is loaded from local JSON files in `/data`, and routing is handled client-side via URL hashes.

## Features

- Single-page app with hash-based routing: Home, Projects, Contact
- Data-driven content from `/data/profile.json` and `/data/projects.json`
- Projects page with search and filters by tag/tech stack
- Terminal-style UI: monospaced font, prompt-style headings, neon accents
- Accessible: semantic HTML, skip link, keyboard focus, good contrast
- No frameworks or backend required — just static files

## Current structure

```
index.html
main.js
styles.css
data/
  profile.json
  projects.json
assets/
  avatar.png (optional)
```

## Data schema

- `data/projects.json`: array of objects

  ```jsonc
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "techStack": ["Java", "Spring Boot"],
    "repoUrl": "https://github.com/...", // optional
    "liveUrl": "https://...", // optional
    "images": ["/assets/..."], // optional
    "tags": ["backend", "personal"], // optional
    "featured": true, // optional
    "date": "2024-01-01" // optional
  }
  ```

- `data/profile.json`: single object
  ```jsonc
  {
    "name": "Lewis Jones",
    "bio": "Short intro for the hero section",
    "avatarUrl": "/assets/avatar.png", // optional
    "socials": {
      "github": "https://github.com/...", // used in footer
      "linkedin": "https://linkedin.com/in/...",
      "twitter": "https://twitter.com/...",
      "email": "you@example.com"
    }
  }
  ```

Update these JSON files to change profile details, social links, and projects. The Home page highlights `featured: true` projects automatically.

## Local development

1. Install Node (>= 18).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local static server:
   ```bash
   npm run dev
   ```
4. Open the printed URL in your browser (typically `http://localhost:4000`).

## Routes

- `#/` — Home (hero, combined About section, featured projects)
- `#/projects` — All projects with search + filters
- `#/contact` — Contact section with email CTA

## Deploy

This is a static site, so any static host will work.

### GitHub Pages

- Push this repo to GitHub.
- In repository **Settings → Pages**:
  - Source: `Deploy from a branch`
  - Branch: `main`, folder `/` (root)
- The app will be available at `https://<username>.github.io/<repo>/`.

### Netlify / Vercel / Other

- Build command: none (static) or `npm run build` if you later add a build step.
- Publish/output directory: `/` (repository root).

## License

MIT
