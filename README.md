# Peter Rom Mikael M. Santiago — Portfolio Website

A clean, simple, and interactive portfolio website for a Computer Science student at CIIT College of Innovation and Integrated Technology. Built with HTML5, CSS3, and vanilla JavaScript.

## Features

- **Responsive design** — works on mobile, tablet, and desktop
- **Dark mode** — toggleable theme with `localStorage` persistence and system preference detection
- **Mobile-friendly navigation** — collapsible hamburger menu
- **Smooth scrolling** — anchor links scroll smoothly
- **Active nav highlighting** — current section is highlighted as you scroll
- **Contact form** — frontend form handler (ready to wire up to Formspree, Netlify Forms, etc.)
- **Resume download** — PDF available in navigation and contact section
- **Interactive buttons** — hover outline in `#a8262c`
- **Accessible** — skip-to-content link, ARIA labels, semantic HTML

## File Structure

```
peter-portfolio/
├── index.html          # Main HTML page
├── assets/
│   └── Resume.pdf      # Your resume PDF
├── css/
│   └── style.css       # All styles (dark grey & white theme)
├── js/
│   └── script.js       # Theme toggle, nav, scroll spy, form handler
└── README.md           # This file
```

## Sections

1. **Home** — Your name and a "View My Projects" button
2. **About** — Your professional summary combined with technical skills chips
3. **Projects** — Three featured projects with GitHub links
4. **Contact** — Email, phone, location, social links (GitHub, LinkedIn), contact form, resume download

## Colors

- **Light mode**: White background, dark grey text
- **Dark mode**: Dark grey background, white text
- **Button hover outline**: `#a8262c`

## Customization

1. **Personal details** — Edit `index.html`:
   - Name, phone, email, location
   - Project descriptions and repository links
   - About section text

2. **Resume** — Replace `assets/Resume.pdf` with your own PDF.

3. **Colors** — Edit CSS variables in `css/style.css`:
   - `--color-bg`, `--color-surface`, `--color-text` — theme colors
   - `--hover-outline` — button hover outline color (default: `#a8262c`)

4. **Form backend** — Update the `#contact-form` submit handler in `js/script.js` to send data to your preferred endpoint (Formspree, EmailJS, Netlify Forms, etc.).

## Local Development

Just open `index.html` in your browser. No install or build step needed:

```bash
# Option 1: double-click index.html
# Option 2: use a local server (e.g., Python)
python -m http.server 8000
# then visit http://localhost:8000
```