# Akthar — Portfolio (React + Vite)

## Run on Windows with VS Code
1. Install Node.js LTS (https://nodejs.org) — restart VS Code afterwards.
2. Unzip, then in VS Code: File → Open Folder → select the `akthar-portfolio` folder
   (the one that contains `package.json`).
3. Open the terminal (Ctrl + `) and run:

       npm install
       npm run dev

4. Open http://localhost:5173 (Ctrl+click the link shown in the terminal).

Other commands: `npm run build` (production build into `dist/`), `npm run preview` (serve that build).

## Contact form
Submits to Formspree: endpoint is `LINKS.formspree` in `src/data.js`.
The first real submission may ask you to confirm your email in Formspree.

## Structure
    package.json  index.html  vite.config.js
    public/images/   all images
    src/components/  Header, Hero, Work, Services, Process, About, Tools, Contact, Footer
    src/styles/      tokens.css, base.css, sections.css
    src/data.js      copy + links (incl. Formspree URL, Instagram — please confirm)
    src/hooks.js     scroll reveal + active nav
