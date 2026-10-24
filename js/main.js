const artistEmail = 'michaeldenso@gmail.com';

const artworkData = [
  {
    id: 'artwork-01',
    title: 'Untitled Study 01',
    image: 'img/2.jpeg',
    description: 'Placeholder description for this sample abstract work. Update this text with the artist’s written notes when available.',
    medium: 'Acrylic on canvas',
    dimensions: '100 x 80 cm',
    year: '2024',
    category: 'Abstract Figures',
    availability: 'Available for enquiry',
    alt: 'Abstract painting in blue and teal tones with expressive gestural marks'
  },
  {
    id: 'artwork-02',
    title: 'Untitled Study 02',
    image: 'img/3.jpeg',
    description: 'Placeholder description for this sample abstract work. Update this text with the artist’s written notes when available.',
    medium: 'Acrylic on canvas',
    dimensions: '100 x 80 cm',
    year: '2024',
    category: 'Colour Studies',
    availability: 'Available for enquiry',
    alt: 'Abstract painting featuring layered green, blue, and violet colour fields'
  },
  {
    id: 'artwork-03',
    title: 'Untitled Study 03',
    image: 'img/4.jpeg',
    description: 'Placeholder description for this sample abstract work. Update this text with the artist’s written notes when available.',
    medium: 'Mixed media on canvas',
    dimensions: '120 x 100 cm',
    year: '2024',
    category: 'Mixed Media',
    availability: 'Available for enquiry',
    alt: 'Mixed media abstract painting with bold textures and warm and cool tones'
  },
  {
    id: 'artwork-04',
    title: 'Untitled Study 04',
    image: 'img/5.jpeg',
    description: 'Placeholder description for this sample abstract work. Update this text with the artist’s written notes when available.',
    medium: 'Acrylic on canvas',
    dimensions: '100 x 80 cm',
    year: '2023',
    category: 'Abstract Figures',
    availability: 'Available for enquiry',
    alt: 'Abstract composition using vivid strokes and scattered marks in vibrant blues and oranges'
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
  }
];

const getArtworkById = (id) => artworkData.find((artwork) => artwork.id === id);

const renderFeaturedWorks = () => {
  const featuredGrid = document.getElementById('featuredGrid');
  if (!featuredGrid) return;

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

const renderGallery = () => {
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryEmptyState = document.getElementById('galleryEmptyState');
  const galleryFilters = document.getElementById('galleryFilters');
  if (!galleryGrid) return;

  const filterOptions = ['All Works', 'Abstract Figures', 'Colour Studies', 'Mixed Media'];
  const categories = [...new Set(artworkData.filter((artwork) => artwork.category).map((artwork) => artwork.category))];
  const activeCategory = galleryFilters && galleryFilters.dataset.active ? galleryFilters.dataset.active : 'All Works';

  if (galleryFilters) {
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

const renderArtworkDetail = () => {
  const artworkContent = document.getElementById('artworkContent');
  if (!artworkContent) return;

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

  artworkContent.innerHTML = `
    <article class="artwork-layout">
      <div>
        <img src="${artwork.image}" alt="${artwork.alt}" class="artwork-main-image" />
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
};

const initializeNavigation = () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  const closeMenu = () => {
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

    if (summary) {
      summary.classList.remove('hidden');
      summary.textContent = 'Your email application is opening with a prepared message. Please send it to complete the enquiry.';
    }

    window.location.href = mailtoLink;
  });
};

const initializePage = () => {
  renderFeaturedWorks();
  renderGallery();
  renderArtworkDetail();
  initializeNavigation();
  initializeContactForm();
};

document.addEventListener('DOMContentLoaded', initializePage);
