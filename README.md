# Natalia Antelo Cubría — Portfolio

Static website (HTML + CSS + a few lines of JavaScript). No build step, no backend.

## 1. Preview locally

**Easiest:** double-click `index.html`. All links use relative paths and work from a folder.

**As a real server (recommended, mirrors GitHub Pages):** open a terminal in this folder and run

    python3 -m http.server 8000

then open http://localhost:8000 (on Windows: `py -m http.server 8000`).

## 2. Edit content

| What | File |
|---|---|
| About text | `about/index.html` |
| Contact details | `contact/index.html` |
| FALLA page | `jewellery/falla/index.html` |
| INSIDE OUT page | `product/inside-out/index.html` |
| Portrait on About | `assets/images/general/natalia-portrait.jpg` (replace the file, same name) |
| INTERVAL page | `jewellery/interval/index.html` |
| Marketing / Product | `marketing/index.html`, `product/index.html` |
| Colours, sizes, spacing | `assets/css/styles.css` (variables at the top) |

Search for `TODO` in any file to find everything still pending
(INTERVAL text check, alt texts, favicon, canonical URL, og:image, Marketing content, project years).

The sidebar menu is repeated in every HTML file. If you add a page, add its link in each one.

MARKETING is hidden from the menu until it has real content (the folder stays, with `noindex`). To show it again, add its link in each file's menu and remove `noindex` from `marketing/index.html`.

See `CHANGELOG.md` for the editorial direction and what is still pending.

## 3. Replace or add images

INSIDE OUT uses rows of images that keep their own proportions and share the same height. Each row is a `row(...)` line in `build.py`-style HTML: `<div class="row">` with one `<figure style="--a:1.5">` per image, where `--a` is width ÷ height of the image (1.5 for 1536×1024, 0.8 for a portrait 4:5).


1. Put the file in `assets/images/falla/` or `assets/images/interval/`.
2. In the page, replace the grey `Image pending` block with:

       <figure class="half"><img src="../../assets/images/interval/NAME.jpg" alt="Describe what the image shows" width="1536" height="1024" loading="lazy"></figure>

   - No class on `<figure>` → full width. `half` → 2 per row. `third` → 3 per row. `two-thirds` → 8/12.
   - Set `width` and `height` to the real pixel size of the file so the browser keeps the proportion.
3. Keep paths relative (`../../assets/...`), never starting with `/`.

## 4. Upload to GitHub

1. Create a repository (public) on github.com.
2. Upload the **contents** of this folder to the repository root (so `index.html` is at the top level).
3. Commit to the `main` branch.

## 5. Turn on GitHub Pages

Repository → **Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)` → Save.**
After a minute the site is live at `https://USERNAME.github.io/REPOSITORY/`.

Afterwards, enable the canonical and `og:image` lines marked `TODO` in each page's `<head>`.

## Notes

- `assets/documents/` holds the CV PDF. It is not linked from any page yet.
- Font: Jost (SIL Open Font License), self-hosted in `assets/fonts/` — a free stand-in for the Futura-style typeface of the Adobe reference. No external requests.
- `assets/images/falla/falla-stone.jpg` is not used on the page (it does not appear in the Adobe screenshots). To add it, copy any `<figure class="third">` line in `jewellery/falla/index.html` and change the file name.
- Project tiles (Work and Jewellery): the white overlay with year and title appears on hover, as in Adobe. On touch screens the title is shown under the image instead.
- Images are JPG (quality 92) converted from the supplied PNGs at the original 1536×1024 size.
