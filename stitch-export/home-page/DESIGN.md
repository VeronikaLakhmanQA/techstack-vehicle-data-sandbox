---
name: Vehicle Data Sandbox
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#0059bb'
  on-secondary: '#ffffff'
  secondary-container: '#0070ea'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271900'
  on-tertiary-container: '#ac7b00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc7ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#ffdea8'
  tertiary-fixed-dim: '#ffba20'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4200'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  code:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style

The design system is engineered for a high-performance QA environment that bridges the gap between a sleek automotive consumer interface and a robust B2B technical utility. The brand personality is precise, reliable, and "engineer-friendly," emphasizing clarity of data over decorative elements. 

The aesthetic follows a **Corporate / Modern** movement with a heavy emphasis on **Minimalism**. It prioritizes high white space and a structured hierarchy to ensure that complex vehicle datasets remain legible and actionable. The visual language conveys a sense of speed and technical sophistication, suitable for developers and data analysts who require a frictionless sandbox experience.

## Colors

The palette is anchored by a **Deep Navy** primary color, establishing a foundation of professional trust and technical depth. **Electric Blue** serves as the secondary accent, reserved for primary actions, links, and "active" states to guide the user's eye toward interactive elements. 

The **Tertiary Amber (#FFB800)** is utilized sparingly for status indicators, warnings, or highlighting specific data anomalies within the sandbox environment. The background architecture relies on a soft **Light Gray (#F8F9FA)** to reduce eye strain, while text is set in a crisp **Dark Neutral (#1A1A1A)** to ensure maximum accessibility and readability.

## Typography

This design system utilizes **Inter** across all levels to maintain a systematic and utilitarian feel. Headings are rendered with bold weights and tighter letter-spacing to create a distinctive, modern look reminiscent of premium automotive marketplaces. 

Body text prioritizes legibility with generous line heights. A specialized "Label" style is used for data tags and metadata, utilizing a semi-bold weight and slight tracking to differentiate instructional text from raw data. For vehicle VINs or JSON snippets, use the standard body font but within a dedicated monospace-styled container for technical clarity.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** system for desktop views, centering content within a 1440px maximum container to maintain focus. A 12-column grid is used for dashboard layouts, while a single-column centered layout is preferred for detailed data entries.

The spacing rhythm follows an **8px base unit**, ensuring mathematical harmony between elements. Gutters are consistently set to 24px to provide ample "breathable" room, reinforcing the fast-loading and clean visual feel. Padding within cards and containers should scale between 16px and 32px depending on the content density.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Subtle Shadows**. The primary background is #F8F9FA, while the main content containers (cards) are pure #FFFFFF. This slight contrast creates natural depth without requiring heavy borders.

Shadows must be "soft"—using a large blur radius (16px to 24px) and very low opacity (between 4% and 6%) with a slight navy tint (#0A192F) to keep the depth feeling natural to the palette. 1px solid borders in #E0E0E0 are used to define boundaries on interactive elements like input fields and button groups, ensuring the UI feels structured and intentional.

## Shapes

The design system employs a **Rounded** shape language to soften the technical nature of the data. 

- **Buttons:** Use 8px corners or a full "Pill" shape for primary CTAs to distinguish them from data containers.
- **Cards:** Standardized at 12px for internal dashboards and 16px for secondary "info" cards.
- **Inputs:** 8px radius to match the button language.

This level of roundedness creates a modern, friendly interface that balances the "marketplace" look with the utilitarian requirements of a sandbox.

## Components

### Buttons
Primary buttons use the Electric Blue background with white text, featuring an 8px radius or pill-shape. Secondary buttons should use a 1px border (#E0E0E0) with Navy text.

### Cards
Cards are the primary data vehicle. They feature a white background, a 1px border (#E0E0E0), and the "Subtle Soft" shadow. Use 24px internal padding for consistency.

### Input Fields
Fields should be clean with an 8px radius and a 1px border. On focus, the border shifts to Electric Blue with a subtle outer glow (2px). Labels should sit clearly above the input using the `label-md` typographic style.

### Chips & Status Tags
Used for vehicle status (e.g., "Available", "In-Test", "Error"). These are small, pill-shaped elements with low-opacity background fills derived from the primary or tertiary colors (e.g., a 10% opacity Amber background for a "Warning" tag).

### Data Tables
Tables should be borderless on the sides, using 1px horizontal dividers. Header rows should use a light gray background (#F7F7F7) and bolded `body-sm` text for maximum column clarity.

### Additional Components
- **Vehicle Preview Card:** A specialized card variant including a thumbnail placeholder and high-level specs (Year, Make, Model) in bold `h3` styling.
- **JSON Inspector:** A code-block component with a dark navy background and high-contrast light text for reviewing raw vehicle data payloads.