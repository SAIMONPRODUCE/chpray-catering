---
name: Catering C.H. Pray S.A.S.
description: Alimentación institucional, dietas hospitalarias, casinos corporativos y proteínas al vacío en Bogotá — «El portacomidas»
colors:
  ground: "#EEF2EC"
  enamel: "#F7FAF5"
  sage: "#265947"
  sage-deep: "#1B4234"
  sage-ink: "#1E4B3B"
  maiz: "#F7CE63"
  maiz-deep: "#E5B842"
  euca: "#C3D8CC"
  euca-deep: "#A8C4B4"
  navy: "#1A2F3B"
  ink-2: "#3E525D"
  steel: "#9AA9B0"
  tomato: "#D95338"
typography:
  display:
    fontFamily: "Bricolage, Bricolage Grotesque, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 5.6vw, 4.9rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "Bricolage, Bricolage Grotesque, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.6vw, 3.8rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage, Bricolage Grotesque, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.3vw, 1.9rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Atkinson, Atkinson Hyperlegible, system-ui, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Bricolage, Bricolage Grotesque, Avenir Next, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
rounded:
  sm: "12px"
  md: "16px"
  lg: "22px"
  xl: "28px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "40px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.sage}"
    textColor: "#FFFFFF"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "{colors.navy}"
    textColor: "#FFFFFF"
  card-tier-sage:
    backgroundColor: "{colors.sage}"
    textColor: "#FFFFFF"
    rounded: "{rounded.xl}"
    padding: "34px 42px"
  card-tier-maiz:
    backgroundColor: "{colors.maiz}"
    textColor: "{colors.navy}"
    rounded: "{rounded.xl}"
    padding: "34px 42px"
  card-tier-euca:
    backgroundColor: "{colors.euca}"
    textColor: "{colors.navy}"
    rounded: "{rounded.xl}"
    padding: "34px 42px"
---

# Design System: Catering C.H. Pray S.A.S.

## Overview

**Creative North Star: "El portacomidas esmaltado"**

Catering C.H. Pray S.A.S. sits at the intersection of Colombian home-cooked warmth and hospital-grade institutional rigor ("Cocinamos como en casa. Cumplimos como una institución."). Rather than borrowing the sterile blue-and-white visual language of clinical software or the dark rustic clichés of steakhouse catering, the design system adopts a tangible Colombian material object as its structural spine: the three-tier enamelled *peltre* lunch carrier (*portacomidas*).

Every major container on the page behaves like a pressed-steel enamel vessel with a 360-degree rolled rim in deep clinical navy, stacked vertically under a brushed-steel latch handle. Color separates the three operational lines by thermal and culinary nature—clinical sage for hot hospital diets (`>65 °C`), warm *maíz* for corporate dining rooms, and cool eucalyptus for vacuum-packed raw proteins (`<4 °C`)—while tabular operational ledgers and an interactive thermal safety band give hospital procurement and nutrition committees the verifiable data they require.

We explicitly reject generic SaaS card grids, small icon-tile stacks, uppercase kicker eyebrows above headings, side-tab border stripes, glassmorphic dark-mode glow effects, and fabricated social proof.

**Key Characteristics:**
- Tactile enamelled *peltre* vessels with 360-degree rolled navy rims (`inset 0 0 0 2px #1A2F3B`) instead of flat wireframe cards or single-sided accent borders.
- Thermal and operational color coding across the three tiers: clinical sage (`#265947`), warm *maíz* (`#F7CE63`), and cold-chain eucalyptus (`#C3D8CC`).
- Expressive culinary display typography (`Bricolage Grotesque`) paired with clinical-grade hyper-legible body copy and tabular figures (`Atkinson Hyperlegible`).
- Mechanical latch-and-tier motion grammar where tiers unstack on hover or scroll and primary buttons physically unclip and latch closed on press.
- Scannable clinical ledger rows (`Res. 2674/2013`, `>65 °C / <4 °C`, `NIT 901.815.422-7`) replacing marketing fluff.

## Colors

The palette balances cooked botanical greens and warm corn-cream against high-contrast clinical navy ink on a cool enamel-bone ground.

### Primary
- **Salvia de Cocina** (`#265947`) & **Salvia Profunda** (`#1B4234`): Primary brand and clinical hospital tier surface; paired exclusively with crisp white (`#FFFFFF`) or pale mint (`#DAEAE2`) text to maintain WCAG AA contrast (`>= 4.5:1`).
- **Peltre Marino** (`#1A2F3B`): Primary typographic ink, rolled enamel rim stroke, primary button fill, and top operational ledger bar.

### Secondary
- **Crema de Maíz** (`#F7CE63`) & **Maíz Tostado** (`#E5B842`): Warm surface for the corporate catering tier and high-visibility numeric callouts inside dark navy/sage sections; always paired with `#1A2F3B` ink.
- **Eucalipto Frío** (`#C3D8CC`) & **Eucalipto Hielo** (`#A8C4B4`): Cold-chain surface for vacuum-sealed proteins (`<4 °C`) and the safe cold zone on the thermal scale; always paired with `#1A2F3B` ink.

### Tertiary
- **Punto de Tomate** (`#D95338`): Reserved strictly for live status indicators, active navigation underlines, open-tier indicator dots, and the wizard progress filament.

### Neutral
- **Hueso Esmaltado** (`#EEF2EC`): Primary page ground, evoking clean kitchen tile and warm daylight without drifting into yellow parchment or sterile #FFFFFF.
- **Blanco Peltre** (`#F7FAF5`): Elevated form and wizard interior surface.
- **Tinta Pizarra** (`#3E525D`): Secondary body copy and metadata labels.
- **Acero Cepillado** (`#9AA9B0`): Structural carrier handle arch and mechanical hardware accents.

### Named Rules
**The Thermal Polarity Rule.** Dark enamel surfaces (`#265947`, `#1B4234`, `#1A2F3B`) take only white or `#F7CE63` text; light enamel surfaces (`#F7CE63`, `#C3D8CC`, `#EEF2EC`, `#F7FAF5`) take only `#1A2F3B` or `#3E525D` text. Never place white text on `#F7CE63` or `#C3D8CC`.

**The Tomato Punto Rule.** `#D95338` is an instrument indicator, never a surface fill or button background. Use it only on active dots (10px), progress filaments (6px height), and focus/validation marks.

## Typography

**Display Font:** `Bricolage Grotesque` (variable 600–800, with `system-ui, -apple-system, sans-serif` fallback)
**Body Font:** `Atkinson Hyperlegible` (400, 700, with `system-ui, -apple-system, sans-serif` fallback)

**Character:** `Bricolage Grotesque` brings warm, human, slightly idiosyncratic curves to headlines so the company reads as a passionate kitchen, while `Atkinson Hyperlegible`—originally engineered for low-vision clinical clarity—renders diet tables, temperatures, and legal identifiers with unmistakable precision.

### Hierarchy
- **Display** (`800`, `clamp(2.7rem, 5.6vw, 4.9rem)`, line-height `0.98`, tracking `-0.038em`): Hero manifesto headline, with the secondary institutional clause set lighter (`400`, `clamp(1.6rem, 3vw, 2.55rem)`).
- **Headline** (`800`, `clamp(2.2rem, 4.6vw, 3.8rem)`, line-height `1.04`, tracking `-0.035em`): Major section headers (`h2`).
- **Title** (`700`, `clamp(1.25rem, 2.3vw, 1.9rem)`, line-height `1.1`, tracking `-0.025em`): Enamel tier headers (`h3`) and wizard header.
- **Body** (`400`, `1.0625rem` / `17px`, line-height `1.55`, max-width `60ch`): Explanations, clinical protocol notes, and facility descriptions.
- **Label & Numeric Figure** (`700–800`, `0.95rem–1.6rem`, `font-variant-numeric: tabular-nums`): Diet counts, temperature thresholds (`>65 °C`, `<4 °C`), gram weights (`180–250 g`), and NIT / Invima references.

### Named Rules
**The Zero-Eyebrow Rule.** Section headings (`h2`) never carry a small uppercase kicker or pill badge above them. Let the headline and the physical container establish hierarchy directly.

**The Tabular Metric Rule.** Every temperature, gram weight, statutory resolution, and NIT number uses `font-variant-numeric: tabular-nums` and `Bricolage Grotesque` bold/extrabold so operational figures anchor the right edge of every row.

## Layout

The layout is organized around a `1240px` maximum container (`width: min(100% - 40px, 1240px)`) with a 12-column asymmetric split (`5fr 7fr`) in both the hero and the facility/request section, separated by a full-bleed dark-navy operational ledger strip and a full-bleed deep-sage thermal audit band.

- **Hero Split (`5fr 7fr`)**: Left column holds the typographic manifesto and primary CTAs; right column houses the interactive 3-tier *portacomidas* stack (`width: min(100%, 540px)`).
- **Full-Width Stacked Accordion (`.stack`)**: Three vertically stacked enamel containers with `16px` vertical gap. Only one tier expands at a time, using an internal `5fr 7fr` grid (reference plate on the left, clinical/operational spec table on the right).
- **Responsive Reflow**: At `<= 960px`, `5fr 7fr` grids collapse to a single column (`1fr`), the top ledger reflows into a 2-column grid, and photos switch to a clean `16 / 10` aspect ratio with `width: 100%`. At `<= 600px`, choice grids and two-column form rows collapse to `1fr`, and the floating WhatsApp pill compacts into a `58px` circular button.

## Elevation & Depth

Depth comes from physical stacking and rolled enamel rims rather than diffuse SaaS drop shadows or glassmorphic glow. Every tier and vessel combines a crisp 360-degree inner navy rim with a tight contact shadow and a warm ambient lift.

### Shadow Vocabulary
- **Rolled Enamel Rim** (`box-shadow: inset 0 0 0 2px #1A2F3B`): Applied to every `.tier`, `.stack-tier`, and `.wizard` container to simulate the dark rolled lip of traditional Colombian *peltre* ware.
- **Vessel Lift** (`box-shadow: 0 2px 0 rgba(26,47,59,0.18), 0 18px 34px -16px rgba(26,47,59,0.32)`): Combined with the rolled rim on stacked tiers to give physical weight.
- **Button Press Shadow** (`box-shadow: 0 1px 0 rgba(255,255,255,0.18) inset, 0 8px 18px -10px rgba(26,47,59,0.55)`): Elevates primary pill buttons and deepens on hover (`0 16px 26px -12px rgba(26,47,59,0.65)`).

### Named Rules
**The Rolled-Rim Rule.** Borders on enamel vessels are always 360-degree uniform (`inset 0 0 0 2px #1A2F3B`). Never use single-sided top, left, or bottom accent stripes (`border-left: 4px`, etc.), which read as generic notification banners.

## Shapes

- **Enamel Vessels (`22px` to `30px` radius)**: Hero carrier tiers use `22px` radius; full portfolio tiers use `28px`; the request wizard vessel uses `30px`.
- **Carrier Lid & Handle Arch**: The top lid uses an asymmetric dome profile (`border-radius: 36px 36px 12px 12px`), framed by a continuous `5px solid #9AA9B0` steel handle arch (`border-radius: 38px 38px 0 0`) with side latch clips.
- **Buttons & Thermal Gauge (`999px` pill)**: All buttons, status pills, and the thermal safety scale use full pill geometry (`999px`).
- **Form Inputs & Choice Tiles (`14px` to `18px` radius)**: Choice cards use `18px` radius; text inputs and selects use `14px`.

## Components

### Buttons (`.btn`, `.btn--latch`, `.btn--ghost`)
- **Shape:** Full pill (`border-radius: 999px`), `min-height: 52px`, `padding: 0 1.35em`.
- **Primary Latch (`.btn--latch`):** `#1A2F3B` background, `#FFFFFF` label, with an inline SVG latch icon whose top shackle (`path`) rotates open on hover (`translateY(-2.5px) rotate(18deg)`) as the button background shifts to `#265947` and a diagonal enamel sheen sweeps across (`::after`). On `:active`, the shackle snaps shut (`scale(0.96)`).
- **Ghost (`.btn--ghost`):** Transparent background with `inset 0 0 0 2px #1A2F3B` rim; fills with `#1A2F3B` and `#FFFFFF` text on hover.

### Portacomidas Hero Stack (`.carrier`, `.tier`)
- **Structure:** Three stacked enamel buttons (`Hospitales y clínicas`, `Empresas y casinos`, `Cortes al vacío`) crowned by a navy lid (`.carrier__lid`) and framed on the outside by a steel handle arch (`.carrier__handle`, `left: 4px; right: 4px`).
- **Behavior:** The top clinical tier rests partially open (`--base-open: 78px`) so the hospital meal tray is immediately visible in the first viewport. Hovering or focusing any tier expands its `.tier__peek` preview (`116px`) and lifts sibling tiers; clicking opens the corresponding portfolio tier below and pre-selects that service line in the quote wizard.

### Portfolio Enamel Accordion (`.stack-tier`)
- **Corner Style:** `28px` radius with `inset 0 0 0 2px #1A2F3B` rim.
- **Background:** Vertical subtle gradient per tier (`#265947 -> #1B4234` for sage, `#F7CE63 -> #E5B842` for maíz, `#C3D8CC -> #A8C4B4` for eucalipto).
- **Behavior:** Smooth height expansion via `grid-template-rows: 0fr -> 1fr` (`0.65s cubic-bezier(0.22, 1, 0.36, 1)`), revealing a reference food plate (`.photo`) on the left and a checklist + dashed tabular spec sheet (`.spec`) on the right.

### Thermal Safety Scale (`.thermo`)
- **Structure:** Pill-shaped 3-zone bar (`grid-template-columns: 22fr 44fr 34fr`) inside the `#1B4234` safety section: Cold Chain (`#C3D8CC`, `<4 °C`), Risk Zone (dashed border, `"Zona de riesgo: aquí no se queda nada"`), and Hot Service (`#F7CE63 -> #F09B46`, `>65 °C`), with an animated temperature probe dot.

### 3-Step Request Wizard (`.wizard`)
- **Structure:** Crowned by a navy lid handle (`.request__lid`), housing a 3-step progress bar with a sliding `#D95338` indicator light (`.steps__light`).
- **States:** Step 1 uses tactile radio cards (`.choice`); Step 2 uses a live-updating range slider (`20–500` raciones/día) that calculates estimated monthly volume (`raciones × 26 días`) in real time; Step 3 validates fields with a horizontal shake (`@keyframes shake`) and completes with an animated SVG *portacomidas* assembly confirmation (`.done`).

## Do's and Don'ts

### Do:
- **Do** wrap every major content tier and form container in the 360-degree rolled navy rim (`inset 0 0 0 2px #1A2F3B`) so every surface belongs to the same physical *peltre* family.
- **Do** use smooth exponential ease-out curves (`cubic-bezier(0.22, 1, 0.36, 1)`) for tier expansions, latch rotations, and step transitions, and honor `prefers-reduced-motion: reduce`.
- **Do** label all placeholder food photography transparently with `<figcaption>Imagen de referencia</figcaption>` until the plant's own documentary photography is substituted.
- **Do** pair every service claim with its concrete operational metric (`>65 °C`, `<4 °C`, `Res. 2674/2013`, `NIT 901.815.422-7`, `180–250 g`).

### Don't:
- **Don't** add uppercase kicker labels, pill badges, or eyebrows above `h1` or `h2` headings.
- **Don't** use single-sided colored border stripes (`border-top` or `border-left` accent bars) on cards or callouts.
- **Don't** nest bordered cards inside `.stack-tier` panels; use horizontal hairlines and dashed rows (`.spec`) directly on the enamel surface.
- **Don't** fabricate client logos, hospital names, testimonials, or unverified daily ration counts.
