# Publish on GitHub Pages

This folder is the complete site. No build step is needed.

1. Create a new **public** repository on github.com (for example `mve`). Do not add a README or licence.
2. Put the *contents* of this folder in the repository root, so `index.html` sits at the top level.
   The GitHub website accepts at most 100 files per upload and this site has about 430, so use
   GitHub Desktop or git instead of drag-and-drop:

       git init -b main
       git add -A
       git commit -m "TCS MS Digital Sovereignty - Experience V5.5"
       git remote add origin https://github.com/YOUR-NAME/mve.git
       git push -u origin main

3. In the repository: Settings -> Pages -> Source "Deploy from a branch" -> Branch `main`, folder `/ (root)` -> Save.
4. After a minute or two the site is live at `https://YOUR-NAME.github.io/mve/`.
5. Test on a phone: `https://YOUR-NAME.github.io/mve/download/?m=bank`

## QR codes

Opened from GitHub Pages, the QR code points at the site automatically.
Only when the app runs offline on a kiosk (`file:///C:/mve/index.html`) does it need to know the
address: set `BASE_URL` in `data.js` (line 6) to `https://YOUR-NAME.github.io/mve/`.

## Notes

- `.nojekyll` tells GitHub to serve the files as they are. Keep it.
- File names are case-sensitive on GitHub Pages.
- Leads entered in the form are stored only in the browser of the device used; nothing is sent to GitHub.
