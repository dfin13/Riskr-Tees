# Riskr Design Plan
> Reference-driven design system for Riskr Shopify storefront (Horizon theme)
> Created: 2026-04-18

---

## Section 1: Reference Sites

### 1. Apple.com — MOST USEFUL
**Why:** Best-in-class whitespace discipline, display typography at scale, premium feel without decoration. The standard for "serious brand that doesn't need to explain itself."
**Borrow:**
- Generous section padding (80–120px vertical)
- Display headline scale: massive type is the hero
- Dual-CTA hierarchy (primary solid + secondary ghost)
- White space as an active design element
- Centered or left-bottom aligned content blocks
**Do NOT copy:** Product hero imagery approach, blue accent system, horizontal scroll carousels

---

### 2. shop.a24films.com — MOST USEFUL (tied)
**Why:** The closest analog to Riskr — a culturally intelligent brand selling merch that feels like art objects, not merchandise. Monochromatic, editorial, no noise.
**Borrow:**
- Image-first product card: image fills the card, title + price minimal below
- No card borders, no rounded corners, no hover animations
- Black/white palette, no accent color
- Grid: tight columns gap (4–8px), generous row gap (24–32px)
- Typography: small eyebrow labels, confident product titles
- Overall "less is a decision" philosophy
**Do NOT copy:** A24 branding, film-specific layout choices, their specific badge system

---

### 3. Stripe.com — STRUCTURAL REFERENCE
**Why:** Corporate aesthetic done right — serious, structured, spacious. Informs section rhythm and container discipline.
**Borrow:**
- Max-width container ~1200px, generous margin
- Section-to-section rhythm (each section breathes independently)
- Typography hierarchy: one dominant statement per section
- Corporate tone without being sterile
**Do NOT copy:** Blue/purple color system, their bento grid (too complex for merch), animated diagrams

---

### 4. Notion.so — LAYOUT RHYTHM
**Why:** Best example of "clean UI with personality." Section transitions feel intentional. Copy is confident and minimal.
**Borrow:**
- Arrow CTAs (→) — functional, not decorative
- Centered hero headline + left-aligned supporting content
- Section label pattern: small uppercase eyebrow above headline
**Do NOT copy:** Illustrated product UI screenshots, dark gradients, AI feature layouts

---

### 5. Balenciaga.com (knowledge reference — blocked) — TONE REFERENCE
**Why:** The gold standard of deadpan luxury. Products presented without apology. Type IS the brand. Zero decoration.
**Borrow:**
- Product names in sentence case or uppercase as the primary visual
- Extreme confidence: no explanatory copy
- Product card: image, name, price — nothing else
- Hero: type-forward, no taglines needed
- Navigation: minimal, no mega-menus
**Do NOT copy:** Luxury pricing conventions, their exact logo/wordmark treatment, specific layout proportions

---

## Section 2: Extracted Design Language

### Apple
| Property | Value |
|---|---|
| Section padding | 80–120px vertical |
| Container width | 980–1200px |
| Display headline | 56–96px, weight 700, tracking -0.015em |
| Body | 17px, weight 400, line-height 1.6 |
| Eyebrow | 12px, uppercase, tracking 0.08em |
| Button radius | 980px (pill) — skip for Riskr |
| Color | White bg, black text, blue accent — adapt to pure B&W |
| Grid gap | 24–40px |

### A24 Shop
| Property | Value |
|---|---|
| Product grid | 4-col desktop, 2-col mobile |
| Card border | none |
| Card radius | 0 |
| Grid gap | 4–8px columns, 24px rows |
| Card image | Square or adapt, fills full width |
| Product title | 13–14px, weight 400, sentence case |
| Price | Same size as title, muted weight |
| Section padding | 40–60px |
| Color | Pure black/white, monochromatic |

### Stripe
| Property | Value |
|---|---|
| Container max | 1200px |
| Section padding | 80–100px vertical |
| Headline | 48–64px, weight 700 |
| Body | 18–20px, weight 400, line-height 1.5 |
| Button | Solid fill, 8px radius |
| Grid | 2–3 col for features, spacious |

### Notion
| Property | Value |
|---|---|
| Hero | Centered or left, large display |
| CTA | Arrow suffix: "Get started →" |
| Section labels | Uppercase, 11–12px, tracking wide |
| Body | 16–18px, generous leading |
| Grid gap | 24–32px |

### Balenciaga (knowledge)
| Property | Value |
|---|---|
| Hero | Full screen, type-forward, bottom-left aligned |
| Product card | Zero decoration, high contrast |
| Typography | All-caps or sentence case, no mixed |
| Spacing | Extreme: 120–160px section padding |
| Color | Black, white, occasional accent |

---

## Section 3: Final Riskr Design System

### Color Palette
```
--riskr-black:       #000000   (hero bg, primary text)
--riskr-white:       #ffffff   (content bg, inverse text)
--riskr-grey-light:  #f5f5f5   (section alt bg, off-white)
--riskr-grey-mid:    #e8e8e8   (borders, dividers)
--riskr-grey-muted:  #00000060 (captions, eyebrows, muted text)
--riskr-grey-dark:   #1a1a1a   (hover states)
```
No accent colors. Palette is monochromatic. Color comes from product photography.

### Typography System
Using Inter (already loaded in Horizon theme).

| Role | Size | Weight | Tracking | Line Height |
|---|---|---|---|---|
| Hero wordmark (RISKR) | clamp(80px, 13vw, 180px) | 700 | -0.03em | 0.88 |
| Display headline | clamp(48px, 7vw, 96px) | 700 | -0.025em | 0.92 |
| H2 section headline | clamp(28px, 4vw, 52px) | 700 | -0.02em | 1.0 |
| H3 label/title | 20–24px | 600 | -0.01em | 1.2 |
| Body large | 17px | 400 | 0 | 1.65 |
| Body default | 15px | 400 | 0 | 1.6 |
| Eyebrow/label | 11px | 500 | 0.12em | 1.4 |
| Product title | 14px | 400 | 0 | 1.4 |
| Price | 14px | 500 | 0 | 1.4 |
| Caption/meta | 12px | 400 | 0.04em | 1.4 |

### Spacing Scale
```
--space-xs:   8px    (tight gaps, internal card spacing)
--space-sm:   16px   (small component gaps)
--space-md:   24px   (card gaps, row spacing)
--space-lg:   40px   (section internal padding)
--space-xl:   64px   (section padding mobile)
--space-2xl:  96px   (section padding desktop)
--space-3xl:  128px  (hero padding, generous sections)
```

### Container Widths
```
max-width:        1200px  (main content)
page-margin:      40px desktop / 20px mobile
narrow-content:   720px   (mission text, about)
```

### Button System
```
Primary button:
  background: #000
  color: #fff
  border: none
  border-radius: 0        ← CRITICAL: sharp = corporate discipline
  padding: 14px 28px
  font-size: 14px
  font-weight: 600
  letter-spacing: 0.04em
  text-transform: none

Secondary / ghost button:
  background: transparent
  color: #000
  border: 1px solid #000
  border-radius: 0
  padding: 13px 27px
  (same font rules)

CTA text link:
  "Shop Collection →"
  no underline, color: inherit
  arrow suffix
```
No rounded corners anywhere. Zero border-radius throughout. This is the single strongest corporate signal.

### Product Card Rules
```
- Image: full width, square aspect ratio (1:1)
- No card border
- No border radius on image
- Title: 14px / weight 400 / sentence case
- Price: 14px / weight 500 / below title
- Spacing: 10px between image and title
- No badges unless necessary
- No quick-add on homepage (add on collection page)
- Grid gap: 8px columns / 20px rows
```

### Layout Rules
```
- Hero: full screen (100svh), content bottom-left aligned, padding 48px
- Product grid: 4-col desktop, 2-col mobile, no column borders
- Mission section: two-column (label + body), 96px vertical padding
- All sections: max-width 1200px, 40px horizontal padding
- No section dividers/borders between sections
- White space IS the separator
```

---

## Section 4: Shopify Implementation Plan

### Files to Read First
- `sections/riskr-hero.liquid` — exists from v1, full rebuild needed
- `sections/riskr-mission.liquid` — exists from v1, needs polish
- `sections/product-information.liquid` — PDP layout
- `sections/main-collection.liquid` — collection page
- `sections/main-cart.liquid` — cart
- `sections/footer.liquid` — footer
- `config/settings_data.json` — color schemes, border radius settings
- `snippets/product-card.liquid` — product card structure

### Files to Modify
| File | Change | Why |
|---|---|---|
| `sections/riskr-hero.liquid` | Full rebuild — better proportions, tighter copy | v1 was underscaled |
| `sections/riskr-mission.liquid` | Layout polish, tighter spacing | v1 was acceptable, refine |
| `config/settings_data.json` | button_border_radius_primary/secondary → 0, card_corner_radius → 0, product_corner_radius → 0 | Sharp edges throughout |
| `assets/riskr-brand.css` | Global brand overrides: page-width, spacing, product card | Centralized brand CSS |
| `layout/theme.liquid` | Link riskr-brand.css | Load brand stylesheet |
| `templates/index.json` | Ensure correct section order | Homepage composition |

### Files to Create
| File | Purpose |
|---|---|
| `assets/riskr-brand.css` | Global brand CSS — product card overrides, spacing tweaks, typography polish |
| `sections/riskr-hero.liquid` | Rebuilt hero (already exists, replacing) |

### What Each Change Accomplishes
1. **riskr-hero rebuild**: Takes hero from "good placeholder" to "premium brand statement." Full viewport, bottom-left content, RISKR at 13vw, confident tagline.
2. **settings_data.json border radius → 0**: Affects ALL buttons, inputs, cards globally. Single change, maximum visual impact. Sharp = corporate.
3. **riskr-brand.css**: Centralizes overrides so they don't leak into Horizon's own `{% stylesheet %}` blocks. Safer than modifying base.css.
4. **theme.liquid link**: Loads brand CSS globally on every page.
5. **product card overrides**: Forces 1:1 image ratio, removes padding from cards, tightens grid.

### Risks to Avoid
- Do NOT modify `base.css` — it's the theme foundation
- Do NOT modify `theme-styles-variables.liquid` — computed from settings, will break
- Do NOT use `{%- style -%}` blocks for conditional logic — Shopify caches these
- Do NOT hardcode product content in templates/*.json — use .liquid sections
- Test button border-radius: 0 doesn't break cart/checkout buttons visually
- Keep Horizon schema intact — theme editor must still work

### Implementation Order
1. Update `config/settings_data.json` (border radius 0, card radius 0)
2. Create `assets/riskr-brand.css` (global overrides)
3. Link `riskr-brand.css` in `layout/theme.liquid`
4. Rebuild `sections/riskr-hero.liquid`
5. Polish `sections/riskr-mission.liquid`
6. Audit + enhance product card via snippet
7. Review collection page
8. Review PDP
9. Commit + push
