# CHANGELOG — evolución editorial (v04)

## PRESERVED
- Stack ligero: HTML + CSS + JS nativo, sin frameworks ni dependencias nuevas. Compatible con GitHub Pages, rutas relativas y `.nojekyll`.
- Todas las URLs existentes (`/about/`, `/contact/`, `/product/`, `/product/inside-out/`, `/jewellery/`, `/jewellery/falla/`, `/jewellery/interval/`, `/marketing/`).
- Sidebar fijo en desktop (identidad), header compacto con menú en móvil, skip link, foco visible, `prefers-reduced-motion`.
- Jost autohospedada como tipografía funcional; alt texts, `width`/`height` y `loading="lazy"`; metadatos SEO.
- Espacio negativo, base blanco/negro, fotografía protagonista, ausencia de tarjetas y botones decorativos.
- Textos conceptuales de FALLA, INTERVAL e INSIDE OUT sin reescribir, y la nota *physical piece vs. visual proposal* de INTERVAL.
- Páginas de proyecto y su arquitectura (hero → texto → galería → Back to Top).

## CHANGED
- **Home**: de índice de miniaturas a portada editorial + Selected Work.
- **Sidebar**: ancho `clamp(220px, 20vw, 340px)` (retícula de 5 columnas: sidebar 1 / contenido 4) en lugar de 24vw; tipografía más pequeña y silenciosa.
- **Navegación**: prioridad WORK / ABOUT ME / CONTACT; PRODUCT y JEWELLERY pasan a grupos secundarios con sus proyectos debajo.
- **Contact**: composición "Let’s talk." con tabla de datos reales (email, teléfono, LinkedIn, CV). El texto anterior queda en un comentario del HTML.
- **About**: mismo layout foto + texto; se añade enlace al CV.
- **INSIDE OUT**: marcadores de sección `01 — IDEA … 05 — TECHNICAL` (solo etiquetas; el contenido no cambia).
- Frases conceptuales (`TIME BEGINS IN THE BREAK.`, cierres, citas) pasan a la serif.

## ADDED
- **Instrument Serif** (SIL OFL, autohospedada, ~21 KB por estilo) para: nombre del hero, títulos de Selected Work, "Let’s talk." y frases conceptuales. Jost sigue siendo la base.
- **Hero de home**: `NATALIA / ANTELO CUBRÍA` a gran escala, asimétrico, con la línea `PRODUCT DESIGN · MATERIAL · OBJECT · JEWELLERY`.
- **Única interacción memorable**: la fotografía de la piedra física de INTERVAL sube y cruza el nombre, que permanece fijo un instante. Solo CSS (`position: sticky`); sin scroll-jacking.
- **Selected Work** asimétrico: 01 INSIDE OUT a sangre, 02 INTERVAL pequeña y desplazada, 03 FALLA panorámica. Numeración/categoría tipo cota (`01 / PRODUCT`) y etiquetas tomadas de tus propios textos.
- **Componente "cota"** (`.dim`): línea técnica con remates, usada como separador (Material as Interface, mínimo).
- Aparición suave de las imágenes de Selected Work (IntersectionObserver, ~0,7 s).
- CV enlazado desde About y Contact (`assets/documents/…REVISADO_v2.pdf`, se abre en pestaña nueva).
- Zona futura en About (DESIGN / MAKING / TOOLS / LANGUAGES) preparada como comentario `TODO`.

## REMOVED FROM PUBLIC UI
- **MARKETING** sale de la navegación (sin contenido real). El archivo `marketing/index.html` se conserva, con `noindex`.
- El nombre en el sidebar en la home (desktop), porque ya es el `h1` del hero.
- Las rejillas de portadas cuadradas ya no son la home (siguen existiendo en `/product/` y `/jewellery/`).

## TODO
- Años de INSIDE OUT y FALLA (no confirmados); confirmar el de INTERVAL (2026 procede de tu captura de Adobe).
- Texto de INTERVAL: es una traducción al inglés del PDF en español; sustituir por tu texto original si existe.
- Revisar alt texts (describen solo lo visible).
- Gestos por proyecto no implementados por falta de assets adecuados: INTERVAL (fractura que divide la composición), FALLA (macro de piedra rompiendo el borde de la retícula), INSIDE OUT (reflexión/revelación con dos imágenes reales del mismo encuadre, luz apagada/encendida). Se pueden preparar cuando existan esas imágenes.
- Hover imagen final → boceto: requiere pares de imágenes reales del mismo proyecto.
- Segunda zona de About; contenido de Marketing.
- Canonical, `og:image` y favicon definitivos (requieren la URL final).
- Confirmar que la pieza colgada al fondo de `exhibition-plinth.jpg` puede mostrarse.
- El plano de INTERVAL dice "RUPTURA DEL TIEMPO" y "Jaspe", frente a INTERVAL / rubí en zoisita.
- Hay un CV más reciente (`CV_ESP_2026.pdf`) que no se ha usado: el CV enlazado es el que ya estaba en `assets/documents/`.
- Fase de proyecto (FALLA/INTERVAL): sus galerías mezclan etapas; hace falta que indiques a qué etapa pertenece cada imagen para añadir los marcadores 01–05.

## TECHNICAL
- `styles.css`: nuevas variables (`--serif`, `--pad`), `--side` recalculado; navegación reescrita; bloques nuevos (`.dim`, `.home-hero`, `.work`, `.wk`, `.contact`, `.about-cv`). Sin estilos inline nuevos salvo `--a` (proporción de cada figura en filas justificadas) y `--sw` (color de leyenda).
- `main.js`: menú móvil (sin cambios de comportamiento) + observador de aparición. Sin él la web funciona igual.
- `<script>` mínimo en `<head>` que añade la clase `js` para evitar parpadeo del reveal.
- Precarga de fuentes: Jost en todas las páginas, Instrument Serif solo en la home.
- Áreas táctiles del menú móvil ≥ 44 px.
- No se ha sobrescrito ni borrado ningún asset original; no hay dependencias nuevas.

## QA
Comprobado automáticamente (Chromium, servidor local bajo subruta `/repo-name/`), 9 páginas × 9 anchos (1920, 1440, 1280, 1024, 834, 768, 430, 390, 375):
- sin overflow horizontal ni texto fuera de pantalla; sin imágenes rotas ni deformadas; un solo `h1` por página y sin saltos de nivel; todas las imágenes con `alt`;
- sin errores de consola ni respuestas 404/4xx;
- CLS 0 en home y Contact, y 0 en INSIDE OUT e INTERVAL (medido en 1440 px);
- sidebar sin scroll interno en 1280×720, 1366×768 y 1024×768;
- `prefers-reduced-motion`: el nombre deja de ser fijo y las imágenes se ven sin animación;
- teclado: el foco se ve (contorno 2 px); menú móvil con toque abre y cierra; CV responde 200 (`application/pdf`); Back to Top vuelve al inicio;
- MARKETING ausente de la navegación.

No comprobado: navegadores distintos de Chromium, dispositivos físicos, lectores de pantalla, y el hover con ratón real (solo se revisó en captura).

## 2026-09-30 — STACK added to Product
- Added STACK as a second Product project.
- Added dedicated STACK case-study page with context, form exploration, ergonomics, jug, storage, technical definition and result.
- Added supplied STACK renders, sketches, ergonomic studies and technical drawings.
- Added STACK to Product index and Product navigation across the site.
- Project is described as academic/rendered; no physical fabrication is claimed.

## 2026-09-30 — GEMHYPE added to Marketing
- Added Marketing project: GEMHYPE — Instagram Analysis & Strategic Opportunities.
- Added supplied social-media visual as project hero and case-study image.
- Added the supplied 13-page strategy PDF as a downloadable/viewable project document.
- Restored MARKETING to global navigation with GEMHYPE as its first project.


## 2026-09-30 — JEWELS
- Added JEWELS under Jewellery using the seven supplied project images.
- Added project page, Jewellery tile, homepage work card, and global navigation entry.
- Project text is limited to details visible in the supplied development and technical material; no unconfirmed fabrication claims were added.

## 2026-09-30 — V05 requested revisions
- Home selected work order: INSIDE OUT → STACK → INTERVAL → LATENT.
- About portrait integrated as a blurred atmospheric background.
- GEMHYPE dated 2026 and expanded with content from the supplied strategy PDF.
- Product cover images replaced with stronger contextual images.
- Confirmed project years applied: INSIDE OUT 2026, STACK 2024, INTERVAL 2025, LATENT 2025, FALLA 2025, SHINE 2020, GEMHYPE 2026.
- JEWELS renamed SHINE throughout visible interface and project route.
- LATENT added as a full project using supplied images/PDF; hero framing centres the ring.
- Warmer editorial visual system introduced to reduce coldness while retaining elegance.
- Right-side breathing room increased on desktop.
- Custom small black arrow cursor added.
- Project-wide click-to-enlarge image gallery/lightbox added with keyboard navigation.
- Sidebar hierarchy strengthened with category scale, project scale and subtle year labels.
- Pending verification: exact spelling/identity of the workshop/exhibition collaborator currently recorded in project source as “Dr. Farida Itzer”. Web search did not yield a reliable corroborating source.


## V07 — 2026-10-01
- Implemented strategic TXT update after explicit user instruction to proceed.
- Added HOW I THINK page and navigation entry.
- Added CLAMP / PARITY (2026) to Jewellery.
- Standardised Selected Work frames.
- Restored Interval/Latent category cover behavior.
- Added real CLAMP imagery and current project record PDF.

## V08 — 2026-10-01
- Selected Work standardized to one full-width 3:2 image system.
- STACK category thumbnail changed to family view.
- SHINE category thumbnail changed to handbag context image.
- CLAMP expanded with all newly supplied imagery; project-record link removed.
- GEMHYPE PDF screenshot imagery removed; full strategy PDF link retained.


## 2026-10-02 — Strategic review: evidence over claims
- Applied the complete `Texto pegado(6).txt` after repository, published-page and decision-history audit.
- Preserved the visual identity, navigation, page architecture, typefaces, photos, equal home image sizing, symmetric margins, clock, sidebar indicator and large LATENT hero.
- Home selection returns explicitly to INSIDE OUT / STACK / INTERVAL / LATENT, overriding the preceding eight-entry selection without reverting its visual treatment.
- Rewrote About around the practical contributions of engineering studies, glass and jewellery to product design.
- HOW I THINK uses existing project drawings/sketches and confirmed decisions within DEFINE / TEST / DOCUMENT / CONNECT.
- INSIDE OUT: added constraint / decision / result blocks for engraving adaptation, manual operations, removable glass fixing and lighting access. Removed unverified collaborator attribution from public copy.
- INTERVAL: shortened conceptual copy, added confirmed mechanism/disassembly research and clarified physical stone versus visual watch proposal.
- FALLA: centred copy on varied agate shapes, brass support, connections and composition rather than generic imperfection rhetoric.
- CLAMP: reinforced visible assembly and perceived value; removed the public pending-confirmation paragraph without assigning unknown specifications.
- GEMHYPE: condensed eight repetitive sections into five; preserved the original mockup, strategy PDF and complementary positioning, without claiming measured results.
- STACK: clarified academic/rendered status, linked ergonomic and technical evidence to use and connection decisions, retained all existing images.
- LATENT and SHINE: project copy and photographs retained; metadata/alt annotations only where necessary.
- Corrected malformed STACK/INTERVAL project-meta paragraphs. Removed obsolete production/TODO comments from HTML and moved factual backlog to internal documentation.
- Completed page-specific descriptions, canonical URLs and Open Graph metadata for all 15 public pages, using the actual Pages URL and existing assets. Retained the existing favicon.
- No image, PDF, content asset or project route deleted. No generated imagery, framework, decorative effect, invented fact or new project added.
- Internal pending facts/assets and known historical source-sheet discrepancies are listed in PORTFOLIO_MASTER_BRIEF.md. Earlier history is preserved.
- Technical QA corrections: existing secondary-navigation grey reused for adequate text/year contrast; actual image dimensions recorded and below-first-image loading deferred without altering photo files; captions leave space for the existing gallery control; mobile contact columns adjusted to prevent excessive address wrapping.

Validation for this revision: all 15 public pages inspected visually at desktop and mobile widths; 60 browser checks at 1440, 1024, 390 and 320 px passed. Local assets, anchors, fonts, gallery, navigation, sidebar scroll indicator, local-time clock, equal home image frames, retained CLAMP imagery, LATENT hero, contrast, metadata, and the two permitted PDF links verified. Original images/documents/fonts are unchanged. Missing factual evidence remains in the internal brief backlog. GitHub Pages deployment is checked after the main commit.
