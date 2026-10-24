ABSTRACT ARTIST PORTFOLIO
=========================

Overview
--------
A static, responsive portfolio website for abstract artist Michael Denso, built with HTML, CSS, and vanilla JavaScript. Open index.html directly in a modern browser; no build tools or backend are required.

Project files
-------------
- index.html: homepage and featured paintings
- portfolio.html: searchable-by-category artwork grid
- artwork.html: artwork detail view selected with ?id=artwork-01
- about.html: biography and artist statement
- contact.html: validated enquiry form that opens a prepared email
- css/style.css: shared responsive design system and page styling
- js/main.js: artwork data, rendering, navigation, filters, and form validation
- img/: supplied artwork and artist photographs

Design and typography
---------------------
The shared layout follows the supplied gallery mockup with an artwork-led hero, featured works, artist introduction, contact callout, and consistent inner-page layouts. Montserrat is loaded from Google Fonts in weights 300, 400, 500, 600, and 700; local sans-serif fallbacks are used if the font service is unavailable. Motion is restrained and disabled for visitors who prefer reduced motion.

Work completed
--------------
- Added responsive styling across the homepage, portfolio, artwork, about, and contact pages.
- Added desktop and mobile navigation styling, gallery filters, contact fields, and artwork detail layouts.
- Added subtle entrance and artwork hover animations with reduced-motion support.
- Updated the typography to match the uploaded Outdoors reference: light Montserrat body copy with bold display headings.
- Added mobile layouts and checked for horizontal overflow.

Content notes
-------------
- Artwork records currently contain nine works, including three texture studies with placeholder titles and unspecified dimensions and dates. Update the artworkData collection in js/main.js with artist-approved titles, descriptions, materials, dimensions, and dates.
- Sample artwork descriptions are placeholders and should be replaced with artist-approved descriptions.
- The contact form does not send data to a server. It validates the fields and opens the visitor's email application with a prepared message.
- Confirm the contact email and all sample artwork details before publishing.
