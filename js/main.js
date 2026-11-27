// Shared contact destination used by artwork enquiries and the contact form.
const artistEmail = 'd.akuamoah2018@gmail.com';

// Artwork records power the featured cards, filtered gallery, and detail pages.
// Each record keeps presentation data together so page templates stay data-driven.
const artworkData = [
  {
    id: 'artwork-01',
    title: 'Drift of Echoes',
    image: 'img/drift-of-echoes.jpeg',
    description: 'An abstract mixed-media investigation of movement, memory, and traces left by human activity.',
    medium: 'Acrylic on Canvas',
    dimensions: '122 x 122 cm',
    year: '2026',
    category: 'Abstract Figures',
    availability: 'Available for enquiry',
    alt: 'Blue and turquoise abstract painting with energetic gestural marks'
  },
  {
    id: 'artwork-02',
    title: 'Endless Transit',
    image: 'img/endless-transit.jpeg',
    description: 'Layered gestures and marks transform the canvas into a record of passing bodies, motion, and time.',
    medium: 'Mixed Media on Canvas',
    dimensions: '122 x 122 cm',
    year: '2026',
    category: 'Colour Studies',
    availability: 'Available for enquiry',
    alt: 'Green, blue, and ochre abstract painting with layered human-like marks'
  },
  {
    id: 'artwork-03',
    title: 'Rising Chorus',
    image: 'img/rising-chorus.jpeg',
    description: 'Accumulated colour and expressive linework suggest collective voices, shared memory, and presence.',
    medium: 'Acrylic on Canvas',
    dimensions: '122 x 122 cm',
    year: '2026',
    category: 'Abstract Figures',
    availability: 'Available for enquiry',
    alt: 'Mixed media abstract painting with bold textures and warm and cool tones'
  },
  {
    id: 'artwork-16',
    title: 'Black Mass',
    image: 'img/black mass.jpeg',
    description: 'Acrylic painting exploring a monumental black form amid expressive figures and energetic marks.',
    medium: 'Acrylic on Canvas',
    dimensions: '122 x 122 cm',
    year: '2026',
    category: 'Abstract Figures',
    availability: 'Available for enquiry',
    alt: 'A large black painted form rises above small expressive figures on a yellow and green ground'
  },
  {
    id: 'artwork-17',
    title: 'Field of Signals',
    image: 'img/Field Of signals.jpeg',
    description: 'A densely layered field of black, white, and yellow marks built through mixed-media gestures.',
    medium: 'Mixed Media on Canvas',
    dimensions: '122 x 122 cm',
    year: '2026',
    category: 'Mixed Media',
    availability: 'Available for enquiry',
    alt: 'Dense black, white, and yellow abstract marks layered across a square canvas'
  },
  {
    id: 'artwork-05',
    title: 'Untitled Study 05',
    image: 'img/6.jpeg',
    description: 'Placeholder description for this sample abstract work. Update this text with the artist’s written notes when available.',
    medium: 'Mixed media on canvas',
    dimensions: '120 x 90 cm',
    year: '2023',
    category: 'Colour Studies',
    availability: 'Available for enquiry',
    alt: 'Abstract painting in yellow, turquoise, and deep blue with gestural linework'
  },
  {
    id: 'artwork-06',
    title: 'Untitled Study 06',
    image: 'img/7.jpeg',
    description: 'Placeholder description for this sample abstract work. Update this text with the artist’s written notes when available.',
    medium: 'Acrylic and charcoal on canvas',
    dimensions: '110 x 100 cm',
    year: '2023',
    category: 'Abstract Figures',
    availability: 'Available for enquiry',
    alt: 'Dark, energetic abstract painting with a field of gestural marks and layered colour'
  },
  {
    id: 'artwork-07',
    title: 'Texture Study 07',
    image: 'img/14.jpeg',
    description: 'A close-up study of weathered metal, rust, and layered blue paint.',
    medium: 'Photographic study',
    dimensions: 'Details on enquiry',
    year: 'Not specified',
    category: 'Texture Studies',
    availability: 'Available for enquiry',
    alt: 'Weathered blue metal covered with layered rust marks and textures'
  },
  {
    id: 'artwork-08',
    title: 'Texture Study 08',
    image: 'img/344.jpeg',
    description: 'A close-up study of rust and peeling paint on a weathered metal surface.',
    medium: 'Photographic study',
    dimensions: 'Details on enquiry',
    year: 'Not specified',
    category: 'Texture Studies',
    availability: 'Available for enquiry',
    alt: 'Close-up of a rusted metal post against a warm, neutral wall'
  },
  {
    id: 'artwork-09',
    title: 'Texture Study 09',
    image: 'img/whatsapp-texture-study.jpeg',
    description: 'A close-up study of rust and peeling paint on a weathered metal surface.',
    medium: 'Photographic study',
    dimensions: 'Details on enquiry',
    year: 'Not specified',
    category: 'Texture Studies',
    availability: 'Available for enquiry',
    alt: 'Close-up of a weathered metal post with rust against a warm, neutral wall'
  },
  {
    id: 'artwork-10',
    title: 'Texture Study 10',
    image: 'img/texture img1.jpeg',
    description: 'A close-up study of scratched paint and exposed rust on a weathered vehicle panel.',
    medium: 'Photographic study',
    dimensions: 'Details on enquiry',
    year: 'Not specified',
    category: 'Texture Studies',
    availability: 'Available for enquiry',
    alt: 'Weathered vehicle door and window covered in rust, scratched paint, and layered marks'
  },
  {
    id: 'artwork-11',
    title: 'Texture Study 11',
    image: 'img/texture img2.jpeg',
    description: 'A close-up study of peeling paint, rust, and torn metal in an urban environment.',
    medium: 'Photographic study',
    dimensions: 'Details on enquiry',
    year: 'Not specified',
    category: 'Texture Studies',
    availability: 'Available for enquiry',
    alt: 'Rusted yellow and orange metal surface with peeling paint and exposed panels'
  },
  {
    id: 'artwork-12',
    title: 'Texture Study 12',
    image: 'img/texture img3.jpeg',
    description: 'An overhead study of intersecting tyre tracks and footprints across sandy ground.',
    medium: 'Photographic study',
    dimensions: 'Details on enquiry',
    year: 'Not specified',
    category: 'Texture Studies',
    availability: 'Available for enquiry',
    alt: 'Sand marked with overlapping tyre tracks and footprints'
  },
  {
    id: 'artwork-13',
    title: 'Texture Study 13',
    image: 'img/texture img4.jpeg',
    description: 'A study of corroded blue metal, running rust, and a strip of weathered yellow paint.',
    medium: 'Photographic study',
    dimensions: 'Details on enquiry',
    year: 'Not specified',
    category: 'Texture Studies',
    availability: 'Available for enquiry',
    alt: 'Blue weathered metal with rust streaks and a yellow painted lower edge'
  },
  {
    id: 'artwork-14',
    title: 'Texture Study 14',
    image: 'img/texture img5.jpeg',
    description: 'An abstract close-up study of tangled dark marks and rust stains on a pale surface.',
    medium: 'Photographic study',
    dimensions: 'Details on enquiry',
    year: 'Not specified',
    category: 'Texture Studies',
    availability: 'Available for enquiry',
    alt: 'Pale textured surface crossed by dense dark, rust-coloured marks'
  },
  {
    id: 'artwork-15',
    title: 'Texture Study 15',
    image: 'img/texture img6.jpeg',
    description: 'A close-up study of scratched white paint, rust, and industrial metal seams.',
    medium: 'Photographic study',
    dimensions: 'Details on enquiry',
    year: 'Not specified',
    category: 'Texture Studies',
    availability: 'Available for enquiry',
    alt: 'Scratched white painted metal panel with rust and industrial seams'
  }
];

// Find one artwork record by the ID supplied in an artwork detail-page URL.
const getArtworkById = (id) => artworkData.find((artwork) => artwork.id === id);

// Populate the home page's featured grid when that page's target element exists.
const renderFeaturedWorks = () => {
  const featuredGrid = document.getElementById('featuredGrid');
  // Other pages do not contain this target, so they need no featured-card work.
  if (!featuredGrid) return;

  // Keep the landing page focused by using only the first three collection entries.
  featuredGrid.innerHTML = artworkData.slice(0, 3).map((artwork) => `
    <article class="art-card">
      <div class="art-image-wrap">
        <img src="${artwork.image}" alt="${artwork.alt}" class="art-image" loading="lazy" />
      </div>
      <div class="art-card-body">
        <h3 class="art-title">${artwork.title}</h3>
        <p class="art-meta">${artwork.medium}</p>
        <p class="art-meta">${artwork.dimensions}</p>
        <p class="art-meta">${artwork.year}</p>
        <a href="artwork.html?id=${artwork.id}" class="art-link">View Art</a>
      </div>
    </article>
  `).join('');
};

// Build category controls and matching artwork cards for the portfolio page.
const renderGallery = () => {
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryEmptyState = document.getElementById('galleryEmptyState');
  const galleryFilters = document.getElementById('galleryFilters');
  const textureStudiesIntro = document.getElementById('textureStudiesIntro');
  // Skip gallery setup on pages without the gallery container.
  if (!galleryGrid) return;

  const filterOptions = ['All Works', 'Abstract Figures', 'Colour Studies', 'Mixed Media'];
  // Derive categories from the data so new artwork categories appear automatically.
  const categories = [...new Set(artworkData.filter((artwork) => artwork.category).map((artwork) => artwork.category))];
  const activeCategory = galleryFilters && galleryFilters.dataset.active ? galleryFilters.dataset.active : 'All Works';

  if (textureStudiesIntro) {
    textureStudiesIntro.classList.toggle('hidden', activeCategory !== 'Texture Studies');
  }

  if (galleryFilters) {
    // Rebuild filter buttons from the available categories and mark the active choice.
    const availableOptions = ['All Works', ...categories];
    galleryFilters.innerHTML = availableOptions.map((option) => `
      <button
        type="button"
        class="filter-btn${option === activeCategory ? ' is-active' : ''}"
        data-filter="${option}"
        aria-pressed="${option === activeCategory}"
      >
        ${option}
      </button>
    `).join('');

    galleryFilters.querySelectorAll('.filter-btn').forEach((button) => {
      button.addEventListener('click', () => {
        galleryFilters.dataset.active = button.dataset.filter;
        renderGallery();
      });
    });
  }

  const filteredArtworks = artworkData.filter((artwork) => {
    if (activeCategory === 'All Works') return true;
    return artwork.category === activeCategory;
  });

  // Show an explicit empty message if future filters can produce no matching works.
  if (!filteredArtworks.length) {
    galleryGrid.innerHTML = '';
    galleryEmptyState?.classList.remove('hidden');
    return;
  }

  galleryGrid.innerHTML = filteredArtworks.map((artwork) => `
    <article class="gallery-item">
      <div class="gallery-image-wrap">
        <img src="${artwork.image}" alt="${artwork.alt}" class="gallery-image" loading="lazy" />
      </div>
      <div class="gallery-body">
        <h3>${artwork.title}</h3>
        <p class="gallery-meta">${artwork.medium}</p>
        <p class="gallery-meta">${artwork.dimensions}</p>
        <p class="gallery-meta">${artwork.year}</p>
        <a href="artwork.html?id=${artwork.id}" class="art-link">View Details</a>
      </div>
    </article>
  `).join('');

  galleryEmptyState?.classList.add('hidden');
};

// Render the requested artwork, or a helpful return link when its ID is invalid.
const renderArtworkDetail = () => {
  const artworkContent = document.getElementById('artworkContent');
  // The detail template is only present on artwork.html.
  if (!artworkContent) return;

  // Read the selected record from the query string, e.g. artwork.html?id=artwork-01.
  const params = new URLSearchParams(window.location.search);
  const artworkId = params.get('id');
  const artwork = getArtworkById(artworkId);

  if (!artwork) {
    artworkContent.innerHTML = `
      <div class="not-found">
        <h1>Artwork not found</h1>
        <p>The selected work could not be found. Please return to the portfolio to explore the collection.</p>
        <a href="portfolio.html" class="btn btn-primary">Back to Portfolio</a>
      </div>
    `;
    return;
  }

  const relatedArtworks = artworkData.filter((item) => item.id !== artwork.id).slice(0, 3);

  // Insert the selected work's details and a small set of alternative works.
  artworkContent.innerHTML = `
    <article class="artwork-layout">
      <div class="artwork-visual">
        <div class="artwork-image-viewport">
          <img src="${artwork.image}" alt="${artwork.alt}" class="artwork-main-image" />
        </div>
        <div class="artwork-zoom-controls" role="group" aria-label="Artwork image zoom controls">
          <button type="button" class="zoom-button" data-zoom="out" aria-label="Zoom out" disabled>−</button>
          <span class="zoom-level" aria-live="polite">100%</span>
          <button type="button" class="zoom-button" data-zoom="in" aria-label="Zoom in">+</button>
          <button type="button" class="zoom-reset" data-zoom="reset">Reset</button>
        </div>
        <p class="zoom-hint">Use the controls to zoom in and inspect the artwork.</p>
      </div>
      <aside class="artwork-details">
        <a href="portfolio.html" class="breadcrumb">Back to Portfolio</a>
        <h1 class="artwork-title">${artwork.title}</h1>
        <div class="detail-meta">
          <span><strong>Medium:</strong> ${artwork.medium}</span>
          <span><strong>Dimensions:</strong> ${artwork.dimensions}</span>
          <span><strong>Year:</strong> ${artwork.year}</span>
          ${artwork.category ? `<span><strong>Category:</strong> ${artwork.category}</span>` : ''}
        </div>
        <p class="artwork-description">${artwork.description}</p>
        <p class="price-note">Price available on enquiry</p>
        <div class="artwork-actions">
          <a href="mailto:${artistEmail}?subject=${encodeURIComponent('Artwork Enquiry - ' + artwork.title)}&body=${encodeURIComponent('Hello,\n\nI am interested in the painting \"' + artwork.title + '\". Please let me know its availability, price, and purchasing arrangements.\n\nKind regards,') }" class="btn btn-primary">Enquire by Email</a>
        </div>
      </aside>
    </article>

    <div class="related-grid">
      ${relatedArtworks.map((item) => `
        <a href="artwork.html?id=${item.id}" class="related-card" aria-label="View ${item.title}">
          <img src="${item.image}" alt="${item.alt}" loading="lazy" />
        </a>
      `).join('')}
    </div>
  `;

  initializeArtworkZoom(artworkContent);
};

// Provide touch-friendly zoom controls for the selected artwork image.
const initializeArtworkZoom = (artworkContent) => {
  const image = artworkContent.querySelector('.artwork-main-image');
  const zoomOutButton = artworkContent.querySelector('[data-zoom="out"]');
  const zoomInButton = artworkContent.querySelector('[data-zoom="in"]');
  const resetButton = artworkContent.querySelector('[data-zoom="reset"]');
  const zoomLevel = artworkContent.querySelector('.zoom-level');
  if (!image || !zoomOutButton || !zoomInButton || !resetButton || !zoomLevel) return;

  const minimumZoom = 1;
  const maximumZoom = 3;
  const zoomStep = 0.25;
  let currentZoom = minimumZoom;

  const updateZoom = (nextZoom) => {
    currentZoom = Math.min(maximumZoom, Math.max(minimumZoom, nextZoom));
    image.style.transform = `scale(${currentZoom})`;
    image.classList.toggle('is-zoomed', currentZoom > minimumZoom);
    zoomLevel.textContent = `${Math.round(currentZoom * 100)}%`;
    zoomOutButton.disabled = currentZoom === minimumZoom;
    zoomInButton.disabled = currentZoom === maximumZoom;
  };

  zoomOutButton.addEventListener('click', () => updateZoom(currentZoom - zoomStep));
  zoomInButton.addEventListener('click', () => updateZoom(currentZoom + zoomStep));
  resetButton.addEventListener('click', () => updateZoom(minimumZoom));
};

// Keep the compact navigation button, menu visibility, and accessibility state in sync.
const initializeNavigation = () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  const closeMenu = () => {
    // Keep the visual menu state and screen-reader state synchronized.
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
    }
  });
};

// Validate the enquiry form in the browser, then prepare an email for the visitor.
const initializeContactForm = () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const summary = document.getElementById('formSummary');
  const setError = (fieldId, message) => {
    const errorElement = document.getElementById(`${fieldId}Error`);
    if (errorElement) {
      errorElement.textContent = message;
    }
  };

  const clearErrors = () => {
    // Remove stale field messages and any summary before validating a new submission.
    ['name', 'email', 'subject', 'message'].forEach((fieldId) => setError(fieldId, ''));
    if (summary) {
      summary.classList.add('hidden');
      summary.textContent = '';
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();

    // Collect all invalid fields so visitors can correct them in one pass.
    const errors = [];

    if (!name) {
      setError('name', 'Name is required.');
      errors.push('name');
    }

    if (!email) {
      setError('email', 'Email address is required.');
      errors.push('email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('email', 'Please enter a valid email address.');
      errors.push('email');
    }

    if (!subject) {
      setError('subject', 'Subject is required.');
      errors.push('subject');
    }

    if (!message) {
      setError('message', 'Message is required.');
      errors.push('message');
    }

    if (errors.length) {
      if (summary) {
        summary.textContent = 'Please correct the highlighted fields and try again.';
        summary.classList.remove('hidden');
      }
      return;
    }

    const mailtoLink = `mailto:${artistEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    // The static site has no server endpoint; hand the prepared enquiry to the visitor's email app.
    if (summary) {
      summary.classList.remove('hidden');
      summary.textContent = 'Your email application is opening with a prepared message. Please send it to complete the enquiry.';
    }

    window.location.href = mailtoLink;
  });
};

// Initialize only the features whose page-specific elements are present.
const initializePage = () => {
  renderFeaturedWorks();
  renderGallery();
  renderArtworkDetail();
  initializeNavigation();
  initializeContactForm();
};

// Wait until page markup exists before querying elements and attaching behaviors.
document.addEventListener('DOMContentLoaded', initializePage);