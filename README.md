# CONNECT Lab Website

**CONtext and NEurophysiological Correlates of Teen Development Lab**
Dr. Tianying Cai · Auburn University

---

## How to update the website

Everything on the site is driven by plain text files. You do **not** need to know how to code. Just edit the right file, save it, and GitHub rebuilds the site automatically within ~2 minutes.

---

## Folder structure

```
connect-lab/
│
├── _members/          ← One file per lab member
├── _publications/     ← One file per publication
├── _projects/         ← One file per research project
├── _updates/          ← One file per news/update post
├── _resources/        ← Additional resource pages (optional)
│
├── assets/
│   ├── images/
│   │   ├── team/      ← Member photos (name them to match the photo: field)
│   │   └── projects/  ← Project images (optional)
│   ├── css/main.css   ← All styling (colors, fonts, layout)
│   └── js/main.js     ← Navigation script
│
├── _config.yml        ← Lab name, email, links — edit this first
├── index.html         ← Home page
├── team/index.html    ← Team page (auto-populates from _members/)
├── projects/          ← Projects page (auto-populates from _projects/)
├── publications/      ← Publications page (auto-populates from _publications/)
├── resources/         ← fNIRS explainer page
├── updates/           ← News page (auto-populates from _updates/)
└── contact/           ← Contact / Join Us page
```

---

## Common tasks

### Add a new lab member

1. Go to `_members/`
2. Copy `TEMPLATE-graduate-student.md`
3. Rename it: `lastname-firstname.md`
4. Fill in the fields (name, role, bio, etc.)
5. Add their photo to `assets/images/team/` with the matching filename
6. Save → site updates automatically

### Add a publication

1. Go to `_publications/`
2. Copy `TEMPLATE-publication.md`
3. Rename it: `YEAR-short-title.md` (e.g., `2025-neighborhood-stress.md`)
4. Fill in title, authors, journal, year, DOI
5. Save → appears on Publications page, grouped by year

### Post a lab update / news item

1. Go to `_updates/`
2. Copy `TEMPLATE-update.md`
3. Rename it: `YYYY-MM-DD-short-description.md`
4. Fill in title, date, category, and write the post in plain text (Markdown)
5. Set `featured: true` to show it on the home page
6. Save → appears on Updates page

### Add or edit a research project

1. Go to `_projects/`
2. Copy `TEMPLATE-project.md` or edit an existing project file
3. Update title, status, tags, and description
4. Save → appears on Projects page

### Update lab info (email, links, etc.)

Edit `_config.yml` — the `lab:` section at the top contains all the contact info, links, and institutional details used throughout the site.

---

## Publishing to GitHub Pages (first-time setup)

1. Create a free account at [github.com](https://github.com)
2. Create a new repository named `connect-lab` (or any name)
3. Upload all files in this folder to that repository
4. Go to **Settings → Pages**
5. Under "Source", select **GitHub Actions**
6. The site will build automatically and be live at:
   `https://YOUR-USERNAME.github.io/connect-lab/`

**For a custom Auburn domain** (e.g., `connectlab.auburn.edu`):
Contact Auburn IT and ask them to add a CNAME record pointing to `YOUR-USERNAME.github.io`.
Then add a file called `CNAME` to this folder containing just the domain name.

---

## Markdown cheatsheet (for writing updates and project descriptions)

```
**bold text**
*italic text*
[link text](https://example.com)
- bullet item
1. numbered item

## Heading 2
### Heading 3
```

---

## Questions?

Contact the site maintainer or open an Issue on GitHub.
