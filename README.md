# Dark Modern IT Portfolio — Multi-Page Edition

## Pages
- `index.html` — Home
- `about.html` — About Me
- `skills.html` — Skills
- `projects.html` — Project cards
- `project-django-portfolio.html` — Django project details
- `project-student-management.html` — Student Management concept details
- `project-coffee-zan.html` — Coffee Zan concept details
- `contact.html` — Contact details
- `style.css` — Shared design
- `script.js` — Navigation, scroll reveals, back behavior

## Open locally
Extract ZIP, open `index.html` in your browser, or run VS Code Live Server. Open individual pages via navigation.

## Customize
- Update your email address in `contact.html` (currently `YOUR_EMAIL@example.com`).
- Change the GitHub link in `contact.html` from `https://github.com/` to your profile.
- Edit project descriptions to match your real work; add screenshots and working demo links as available.
- All links are relative, so GitHub Pages can serve the site statically.

## Publish on GitHub Pages
1. Create a public repository, e.g. `YOUR_USERNAME.github.io`.
2. Upload all the extracted files (not the ZIP) to the repository root.
3. Go to Settings > Pages; deploy from `main` branch, folder `/(root)`.
4. Open `https://YOUR_USERNAME.github.io/` once published.

Navigation uses separate real HTML pages. Project `Back to Projects` buttons return to the source page when browser history allows; otherwise they link to `projects.html`. The browser Back button also works.
