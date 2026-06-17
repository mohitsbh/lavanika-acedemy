---
name: Aetheric Clinical
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#434656'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ee7'
  primary: '#0043c8'
  on-primary: '#ffffff'
  primary-container: '#0057ff'
  on-primary-container: '#e5e8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#006688'
  on-secondary: '#ffffff'
  secondary-container: '#00c1fd'
  on-secondary-container: '#004b65'
  tertiary: '#42535d'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a6b75'
  on-tertiary-container: '#daebf7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#001550'
  on-primary-fixed-variant: '#003ab2'
  secondary-fixed: '#c2e8ff'
  secondary-fixed-dim: '#75d1ff'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#004d67'
  tertiary-fixed: '#d3e5f1'
  tertiary-fixed-dim: '#b7c9d5'
  on-tertiary-fixed: '#0c1e26'
  on-tertiary-fixed-variant: '#384953'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 20px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system embodies a "Premium Academic Medical" aesthetic, balancing the clinical precision of a high-end infirmary with the welcoming, sophisticated atmosphere of a prestigious academy. The UI is designed to evoke feelings of calm, cleanliness, and advanced care through a refined Glassmorphic execution.

The style leverages multi-layered translucency to create a sense of physical depth without visual clutter. It prioritizes high readability and accessibility, ensuring that critical medical information is easily digestible while maintaining a cutting-edge, futuristic interface that feels lightweight and responsive.

## Colors
The palette is rooted in medical blues to reinforce trust and hygiene. 
- **Primary Blue:** A deep, vibrant blue used for critical actions and primary branding.
- **Secondary Blue:** A brighter, energetic cyan used for accents and success states.
- **Surface Neutrals:** Whites and very soft grays serve as the base for glass layers.
- **Background:** A soft, diagonal linear gradient from `primary_color_hex` (at 5% opacity) to pure white, providing a canvas for the frosted glass elements to pop.
- **Accessibility:** All text-on-background combinations must meet WCAG AA standards, utilizing deep slate for body text to ensure maximum legibility against translucent backgrounds.

## Typography
This design system uses **Inter** exclusively to provide a systematic, utilitarian, and clean reading experience. The hierarchy is strictly enforced to manage the density of medical data. 

Headlines use slightly tighter letter spacing and heavier weights to command attention, while body text maintains generous line heights for long-form patient records or medical instructions. Labels are often used in medium or semi-bold weights to remain legible when placed over semi-transparent glass surfaces.

## Layout & Spacing
The layout follows a 12-column fluid grid for tablet/desktop and a single-column fluid layout for iOS mobile devices. 

- **Margins:** A standard 20px horizontal margin is maintained on mobile to provide breathing room.
- **Rhythm:** An 8px grid system governs all spatial relationships. 
- **Reflow:** On mobile, complex medical tables should reflow into card-based lists to maintain touch-target sizes and readability. Floating elements (like navigation bars) should respect the iOS "Safe Area" to prevent overlap with system-level UI.

## Elevation & Depth
Depth is created through the interplay of backdrop filters and soft shadows rather than solid fills.
- **Glass Surfaces:** Cards use a `backdrop-filter: blur(20px)` and a background fill of white at 15-20% opacity. 
- **Borders:** Every glass element features a 1px solid white border at 30% opacity, acting as a "specular highlight" to define the edge against the background.
- **Shadows:** Use large-radius, low-opacity shadows (e.g., `0px 12px 32px rgba(0, 0, 0, 0.05)`) to make cards feel like they are floating comfortably above the background gradient.
- **Layering:** When stacking glass on glass, increase the blur value or add a very subtle inner shadow to maintain separation.

## Shapes
The shape language is "Rounded" to evoke a friendly, approachable medical environment. 
- **Cards/Modules:** Use a standard 16px to 24px radius (`rounded-lg` or `rounded-xl`).
- **Interactive Elements:** Buttons and input fields follow a pill-shaped convention (full radius) to contrast against the more structured container shapes.
- **Consistency:** Maintain uniform corner radii within nested elements to preserve the premium, balanced feel.

## Components
- **Buttons:** 
  - *Primary:* Solid gradient (Primary Blue to Secondary Blue), pill-shaped, white text, subtle glow shadow.
  - *Secondary:* Glassmorphic pill (20% white fill, 1px border), primary blue text.
- **Cards:** The primary container for patient data and schedules. Use the 20px blur glass effect. Titles should be `headline-md` with slate color.
- **Input Fields:** Semi-transparent white backgrounds (10% opacity) with a 1px border that becomes Primary Blue on focus. Labels are placed above the field in `label-sm`.
- **Chips/Badges:** Small glass pills used for status (e.g., "Stable", "Urgent"). Use color-coded text (green, amber, red) with 40% opacity background of the same color.
- **Lists:** Clean rows with 1px glass separators. Active states should use a subtle increase in background opacity (up to 30%) rather than a color change.
- **Bottom Navigation:** A persistent glass bar at the bottom of the screen with a high blur (30px) and frosted appearance, using icons with Primary Blue for the active state.