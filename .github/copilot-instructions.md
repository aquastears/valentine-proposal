# Copilot Instructions - Valentine's Day Proposal

## Project Overview
A single-page web application for a romantic Valentine's Day proposal. Currently a minimal scaffold with three core files and an images directory for media assets.

**Current State**: Early-stage development with placeholder content.

## Architecture & File Structure

```
ValentinesDayProposal/
├── index.html       # Entry point, semantic HTML structure
├── script.js        # JavaScript behavior (currently empty)
├── styles.css       # Styling (currently empty)
├── images/          # Image/media assets for proposal content
└── .github/         # Project configuration
```

**Key Principle**: Classic vanilla web stack (no frameworks) - keep it simple and lightweight for fast loading on devices/presentations.

## Core Patterns & Conventions

### HTML Structure
- Use semantic HTML5 (`<section>`, `<article>`, `<header>`, `<footer>`)
- Placeholder content currently in `<p>` tags - replace with structured sections
- Always include viewport meta tag for mobile responsiveness
- Page title reflects romantic theme: "Happy Valentine's Day"

### Styling Approach
- `styles.css` is empty - establish a single CSS file approach (no preprocessors unless needed)
- Plan for: romantic color palette (reds, pinks, whites), smooth animations, responsive design
- Consider CSS custom properties for theme colors (e.g., `--primary-color: #e74c3c`)

### JavaScript Usage
- `script.js` is currently empty but reserved for interactivity
- Expect features like: image gallery, confetti animations, interactive buttons (accept/decline), form handling
- Keep dependencies minimal - use vanilla JS or lightweight libraries only
- Event delegation for dynamic content

## Development Workflow

### No Build System Currently
- Open `index.html` directly in browser (`file://` protocol)
- For local development with images, use simple HTTP server if needed:
  ```powershell
  python -m http.server 8000  # Python 3
  # or
  npx http-server             # Node.js
  ```

### Testing & Preview
- Manual browser testing is the primary workflow
- Test on mobile devices/orientations (Valentine's proposals often viewed on phones)
- Validate responsive design with DevTools

## Important Integrations & Dependencies

- **No external dependencies** currently
- Images folder is empty - add proposal images here (e.g., `images/hero.jpg`, `images/gallery/`)
- Expect to add: lightweight icon library (Font Awesome) or emoji for romance/decoration
- Consider: no backend - all client-side application

## Conventions & Best Practices for This Project

1. **Content-First Design**: Content structure before styling
2. **Minimal & Fast**: No build process, no framework bloat
3. **Mobile-First**: Assume viewing on phones/tablets
4. **Romantic Theme**: Colors, fonts, and animations should evoke romance
5. **Progressive Enhancement**: Base HTML works without JS; JS adds interactivity

## When Adding Features

- Add images to `images/` directory with descriptive names
- Update HTML for new sections/content
- Add corresponding styles to `styles.css` (maintain single file organization)
- Add interactivity to `script.js` only if needed
- Keep file count minimal - no config files unless essential

## Notes for AI Agents

- This is likely a gift/personal project - prioritize sentiment and user experience over technical perfection
- Be ready to suggest romantic/creative UX patterns (animations, transitions, interactive elements)
- Assume single-user workflow (not production infrastructure)
- If JavaScript interactivity is needed (e.g., "Yes/No" buttons for proposal response), keep logic simple and state local-only
