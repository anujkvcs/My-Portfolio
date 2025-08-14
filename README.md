

# My Portfolio

This is a personal portfolio built with React and Vite.

Updates in this version:
- Added a dedicated Connect section for social media links (LinkedIn, X/Twitter, GitHub).
- Separated Contact section to only include email, phone, and location.
- Added GitHub profile link (https://github.com/anujkvcs/) to the footer.

Sections:
- Hero
- About
- Skills
- Projects
- Connect (social media)
- Contact (email, phone, address)

Configure contact details in `src/components/ContactSection.jsx` and social links in `src/components/ConnectSection.jsx`.

## Deployment

You can deploy this app in two common ways:

### Option A: Vercel (recommended)
Vercel configuration is included.

1. Ensure the project builds locally:
   - npm install
   - npm run build
2. Push the repository to GitHub.
3. On https://vercel.com:
   - New Project → Import your GitHub repo.
   - Framework Preset: Vite.
   - Build Command: npm run build (already set in vercel.json).
   - Output Directory: dist (already set in vercel.json).
4. Click Deploy.

Client-side routing is handled by vercel.json via a fallback rewrite to index.html.

### Option B: GitHub Pages
The project includes gh-pages scripts. If deploying to GitHub Pages under a subpath, you may need to set a base in Vite or use HashRouter.

Quick start with current setup:
1. npm install
2. npm run build
3. npm run deploy

If assets don’t load after publishing, configure one of the following:
- Set base in vite.config.js to "/My_Portfolio/" and rebuild, or
- Switch to HashRouter in src/App.jsx for GitHub Pages compatibility.
