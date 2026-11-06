# JiaHao Xu — Academic Homepage

A bilingual (English / Chinese) static academic homepage, styled after the traditional faculty-page structure of William H. Greene's NYU Stern website.

## Files

- `index.html` — page content and sections
- `styles.css` — layout and visual styling
- `script.js` — language switch and current year
- `assets/` — optional profile photo, CV PDF, and other static files

## 1. Preview locally

You can simply double-click `index.html` to open it in a browser. For a local server, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## 2. Personalize before publishing

Open `index.html` and replace these placeholders:

1. The public email is currently set to `xujiahao@ucass.deu.cn`.
2. Add your graduation year in the Education section.
3. The GitHub profile is set to `https://github.com/jiahaoxu`. Replace the Google Scholar and ORCID links with your own profile URLs when available.
4. Replace the two example project descriptions with accurate project titles and status.
5. If you have a profile photo, place it in `assets/` and replace the `.profile-mark` block in `index.html` with an `<img>` element.
6. If you have a CV, put the PDF at `assets/JiaHao_Xu_CV.pdf`; otherwise remove the CV download link until the file is ready.
7. Update the “Last updated” text in the footer when you make a substantial content revision.

The current research items are explicitly labeled as works in progress / projects in development. Do not present them as published papers unless they have actually been published.

## 3. Publish with GitHub Pages (free)

### A. Create a GitHub repository

1. Sign in to GitHub or create an account at <https://github.com/>.
2. Click **New repository**.
3. Name it exactly `jiahaoxu.github.io` (use `jiahaoxu` as your GitHub username).
4. Set visibility to **Public**.
5. Create the repository.

### B. Upload the website

1. Open the new repository.
2. Choose **Add file → Upload files**.
3. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder (or upload the extracted project contents).
4. Commit the files to the `main` branch.

### C. Enable GitHub Pages

For a user site named `jiahaoxu.github.io`, GitHub Pages is commonly published automatically. If it is not:

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`.
4. Click **Save**.

Your website address will be:

`https://jiahaoxu.github.io/`

It may take a few minutes for the first deployment to become available. Check **Settings → Pages** for the published URL and deployment status.

## 4. Updating the website

Edit `index.html`, `styles.css`, or `script.js` directly on GitHub, or upload the revised files and commit them. GitHub Pages republishes the site after each commit.

## 5. Notes

- This is a static website; it does not require a server, database, or paid hosting.
- The language preference is stored in the visitor's browser using local storage.
- Use only links and contact details you are comfortable making public.
- This project borrows the broad information architecture and restrained academic aesthetic of the reference site; it does not copy its text, branding, or assets.
