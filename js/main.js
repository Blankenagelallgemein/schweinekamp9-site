// ===== NAV SCROLL EFFECT =====
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = navToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
}

// ===== ROOM DATA =====
const roomData = {
  '1': {
    title: 'Zimmer 1 — Sonnenseite',
    wg: '7er WG',
    details: 'Möbliert · Dachschräge',
    status: 'occupied',
    price: null,
    image: 'img/zimmer1-1.jpg',
    images: ['img/zimmer1-1.jpg', 'img/zimmer1-2.jpg', 'img/zimmer1-3.jpg'],
    description: 'Helles Zimmer mit Dachschräge und viel Tageslicht. Möbliert mit Bett, Schreibtisch, Schrank und Regal. Derzeit belegt.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '👔 Kleiderschrank', '📖 Regal', '💡 Deckenleuchte']
  },
  '2': {
    title: 'Zimmer 2 — Gemütlich',
    wg: '7er WG',
    details: 'Möbliert · Hell',
    status: 'available',
    price: 440,
    image: 'img/zimmer2-1.jpg',
    images: ['img/zimmer2-1.jpg', 'img/zimmer2-2.jpg'],
    description: 'Gemütliches und helles Zimmer in der 7er WG. Möbliert mit Bett, Schreibtisch, Schrank und Regal. Teil der Wohnung mit 3 Bädern und Gemeinschaftsküche.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '👔 Kleiderschrank', '📖 Regal', '💡 Deckenleuchte', '🔇 Ruhige Seite']
  },
  '3': {
    title: 'Zimmer 3 — Erdgeschoss',
    wg: '7er WG',
    details: 'Möbliert · EG · Geräumig',
    status: 'available',
    price: 390,
    image: 'img/zimmer3-1.jpg',
    images: ['img/zimmer3-1.jpg', 'img/zimmer3-2.jpg', 'img/zimmer3-3.jpg', 'img/zimmer3-4.jpg'],
    description: 'Geräumiges Zimmer im Erdgeschoss der 7er WG. Möbliert mit Bett, Schreibtisch und Schrank. Ebenerdiger Zugang, kein Treppensteigen. Teil der Wohnung mit 3 Bädern.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '👔 Kleiderschrank', '🚪 Erdgeschoss', '📐 Geräumig', '💡 Deckenleuchte']
  },
  '4': {
    title: 'Zimmer 4 — Ruheoase',
    wg: '7er WG',
    details: 'Möbliert · Ruhige Lage',
    status: 'occupied',
    price: null,
    image: 'img/zimmer4-1.jpg',
    images: ['img/zimmer4-1.jpg', 'img/zimmer4-2.jpg', 'img/zimmer4-3.jpg'],
    description: 'Ruhig gelegenes Zimmer in der 7er WG mit gemütlicher Atmosphäre. Derzeit belegt.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '👔 Kleiderschrank', '🔇 Ruhige Lage']
  },
  '5': {
    title: 'Zimmer 5 — Dachstudio',
    wg: '7er WG',
    details: 'Dachschräge · Rundfenster',
    status: 'occupied',
    price: null,
    image: 'img/zimmer5-1.jpg',
    images: ['img/zimmer5-1.jpg', 'img/zimmer5-2.jpg', 'img/zimmer5-3.jpg', 'img/zimmer5-4.jpg', 'img/zimmer5-5.jpg'],
    description: 'Charmantes Dachstudio mit Dachschrägen, Holzbalken und einem runden Fenster. Gemütliche Atmosphäre. Derzeit belegt.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch', '🪑 Relaxsessel', '🌙 Dachfenster', '⭕ Rundfenster', '🌿 Pflanzen']
  },
  '6': {
    title: 'Zimmer 6 — Kompakt',
    wg: '7er WG',
    details: 'Möbliert · Viel Licht',
    status: 'occupied',
    price: null,
    image: 'img/zimmer6-1.jpg',
    images: ['img/zimmer6-1.jpg', 'img/zimmer6-2.jpg', 'img/zimmer6-3.jpg', 'img/zimmer6-4.jpg', 'img/zimmer6-5.jpg', 'img/zimmer6-6.jpg'],
    description: 'Kompaktes, aber helles Zimmer in der 7er WG mit viel natürlichem Licht. Derzeit belegt.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '👔 Kleiderschrank', '💡 Viel Licht']
  },
  'A': {
    title: 'Zimmer A — Terrassenzugang',
    wg: '5er WG',
    details: 'Möbliert · Terrasse',
    status: 'occupied',
    price: null,
    image: 'img/zimmerA-1.jpg',
    images: ['img/zimmerA-1.jpg', 'img/zimmerA-2.jpg', 'img/zimmerA-3.jpg', 'img/zimmerA-4.jpg'],
    description: 'Zimmer mit bodentiefer Terrassentür und direktem Zugang zum Außenbereich. Derzeit belegt.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '🪟 Terrassentür', '🌿 Gartenzugang', '🗄️ Vitrinenschrank', '💡 Wandlampe']
  },
  'B': {
    title: 'Zimmer B — Gemütlich',
    wg: '5er WG',
    details: 'Möbliert · Wandbeleuchtung',
    status: 'occupied',
    price: null,
    image: 'img/zimmerB-1.jpg',
    images: ['img/zimmerB-1.jpg', 'img/zimmerB-2.jpg', 'img/zimmerB-3.jpg', 'img/zimmerB-4.jpg', 'img/zimmerB-5.jpg'],
    description: 'Gemütliches Zimmer mit schöner Tapete und stimmungsvoller Wandbeleuchtung. Derzeit belegt.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '📖 Regal', '💡 Wandleuchten', '🎨 Tapete', '🔇 Ruhig']
  },
  'C': {
    title: 'Zimmer C — Ruhig',
    wg: '5er WG',
    details: 'Möbliert · Ruhige Lage',
    status: 'occupied',
    price: null,
    image: 'img/zimmerC-1.jpg',
    images: ['img/zimmerC-1.jpg', 'img/zimmerC-2.jpg', 'img/zimmerC-3.jpg', 'img/zimmerC-4.jpg'],
    description: 'Ruhiges Zimmer im Haus mit gemütlicher Atmosphäre. Derzeit belegt.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '👔 Kleiderschrank', '🔇 Ruhige Lage']
  },
  'D': {
    title: 'Zimmer D — Kompakt',
    wg: '5er WG',
    details: 'Möbliert',
    status: 'occupied',
    price: null,
    image: 'img/haus-eingang.jpg',
    images: ['img/haus-eingang.jpg'],
    description: 'Kompaktes Zimmer im Haus. Derzeit belegt.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '👔 Kleiderschrank']
  },
  'E': {
    title: 'Zimmer E — Erdgeschoss',
    wg: '5er WG',
    details: 'Möbliert · EG',
    status: 'occupied',
    price: null,
    image: 'img/haus-eingang.jpg',
    images: ['img/haus-eingang.jpg'],
    description: 'Zimmer im Erdgeschoss des Hauses. Derzeit belegt.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '👔 Kleiderschrank', '🚪 Erdgeschoss']
  },
  'F': {
    title: 'Zimmer F — Obergeschoss',
    wg: '5er WG',
    details: 'Möbliert · OG',
    status: 'occupied',
    price: null,
    image: 'img/haus-aussen.jpg',
    images: ['img/haus-aussen.jpg'],
    description: 'Zimmer im Obergeschoss des Hauses. Derzeit belegt.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '👔 Kleiderschrank']
  },
  'G': {
    title: 'Zimmer G — Dachgeschoss',
    wg: '5er WG',
    details: 'Möbliert · DG',
    status: 'occupied',
    price: null,
    image: 'img/haus-aussen.jpg',
    images: ['img/haus-aussen.jpg'],
    description: 'Zimmer im Dachgeschoss des Hauses. Derzeit belegt.',
    amenities: ['🛏️ Bett', '📚 Schreibtisch & Stuhl', '👔 Kleiderschrank', '🏔️ Dachgeschoss']
  },
  'H': {
    title: 'Zimmer H — Premium',
    wg: '5er WG',
    details: 'Geräumig · Dachschräge',
    status: 'available',
    price: 440,
    image: 'img/zimmerH-2.jpg',
    images: ['img/zimmerH-1.jpg', 'img/zimmerH-2.jpg'],
    description: 'Das Premium-Zimmer im Haus — geräumig mit Dachschräge, eigenem Sofabereich mit TV, Schreibtisch und viel Platz. Weiße IKEA-Möbel, moderner Glastisch, gemütliche Beleuchtung.',
    amenities: ['🛏️ Bett', '📚 Glas-Schreibtisch', '👔 Kleiderschrank', '🗄️ Kommode', '📺 TV & Sofa-Ecke', '💡 Design-Lampe']
  }
};

// ===== ZIMMER FILTER =====
const filterWG = document.getElementById('filterWG');
const filterStatus = document.getElementById('filterStatus');
const noResults = document.getElementById('noResults');

function filterRooms() {
  const grids = [document.getElementById('roomsGrid'), document.getElementById('roomsGrid2')];
  let visibleCount = 0;

  grids.forEach(grid => {
    if (!grid) return;
    const cards = grid.querySelectorAll('.room-card[data-room]');
    cards.forEach(card => {
      const wg = card.dataset.wg;
      const status = card.dataset.status;
      let show = true;

      if (filterWG && filterWG.value !== 'all' && wg !== filterWG.value) show = false;
      if (filterStatus && filterStatus.value !== 'all' && status !== filterStatus.value) show = false;

      card.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });
  });

  if (noResults) {
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}

if (filterWG) filterWG.addEventListener('change', filterRooms);
if (filterStatus) filterStatus.addEventListener('change', filterRooms);

// ===== ROOM MODAL =====
const modalOverlay = document.getElementById('roomModal');
const modalClose = document.getElementById('modalClose');

function openRoomModal(roomId) {
  const room = roomData[roomId];
  if (!room || !modalOverlay) return;

  document.getElementById('modalTitle').textContent = room.title;
  document.getElementById('modalMeta').innerHTML = `
    <span>🏠 ${room.wg}</span>
    <span>📋 ${room.details}</span>
  `;
  document.getElementById('modalDescription').textContent = room.description;

  const amenitiesEl = document.getElementById('modalAmenities');
  amenitiesEl.innerHTML = room.amenities.map(a => `<div class="modal-amenity">${a}</div>`).join('');

  const priceEl = document.getElementById('modalPrice');
  if (room.price) {
    priceEl.innerHTML = `${room.price}€ <span>/ Monat</span>`;
  } else {
    priceEl.innerHTML = `Preis <span>auf Anfrage</span>`;
  }

  const modalImage = document.getElementById('modalImage');
  modalImage.className = 'modal-image';
  modalImage.innerHTML = `<img src="${room.image}" alt="${room.title}">`;

  const cta = document.getElementById('modalCTA');
  if (room.status === 'occupied') {
    cta.textContent = 'Derzeit belegt';
    cta.style.opacity = '0.5';
    cta.style.pointerEvents = 'none';
    cta.href = '#';
  } else {
    cta.textContent = 'Jetzt anfragen';
    cta.style.opacity = '';
    cta.style.pointerEvents = '';
    cta.href = `buchen.html?zimmer=${roomId}`;
  }

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

// Room card click -> open modal (for both grids)
document.querySelectorAll('.room-card[data-room]').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.btn')) return;
    if (e.target.closest('.room-card-heart')) return;
    const roomId = card.dataset.room;
    if (roomId) openRoomModal(roomId);
  });
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== HEART TOGGLE =====
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('room-card-heart')) {
    e.preventDefault();
    e.stopPropagation();
    e.target.textContent = e.target.textContent === '♡' ? '♥' : '♡';
    e.target.style.color = e.target.textContent === '♥' ? '#FF5A5F' : '';
  }
});

// ===== BOOKING FORM =====
const roomSelect = document.getElementById('roomSelect');
const sidebarTitle = document.getElementById('sidebarTitle');
const sidebarDetails = document.getElementById('sidebarDetails');
const sidebarPrice = document.getElementById('sidebarPrice');
const sidebarImage = document.getElementById('sidebarImage');

// Pre-select room from URL params
if (roomSelect) {
  const params = new URLSearchParams(window.location.search);
  const zimmer = params.get('zimmer');
  if (zimmer) {
    roomSelect.value = zimmer;
    updateSidebar(zimmer);
  }

  roomSelect.addEventListener('change', () => {
    updateSidebar(roomSelect.value);
  });
}

function updateSidebar(roomId) {
  const room = roomData[roomId];
  if (!room || !sidebarTitle) return;

  sidebarTitle.textContent = room.title;
  sidebarDetails.textContent = `${room.wg} · ${room.details}`;
  sidebarPrice.style.display = 'block';
  if (room.price) {
    sidebarPrice.innerHTML = `${room.price}€ <span>/ Monat</span>`;
  } else {
    sidebarPrice.innerHTML = `Preis <span>auf Anfrage</span>`;
  }
  sidebarImage.className = 'form-sidebar-image';
  sidebarImage.style = '';
  sidebarImage.innerHTML = `<img src="${room.image}" alt="${room.title}">`;
}

// Form submission
const inquiryForm = document.getElementById('inquiryForm');
const bookingFormEl = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

if (inquiryForm) {
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const room = document.getElementById('roomSelect').value;
    const moveIn = document.getElementById('moveIn').value;
    const privacy = document.getElementById('privacy').checked;

    if (!firstName || !lastName || !email || !room || !moveIn || !privacy) {
      alert('Bitte fülle alle Pflichtfelder aus und akzeptiere die Datenschutzerklärung.');
      return;
    }

    if (!email.includes('@')) {
      alert('Bitte gib eine gültige E-Mail-Adresse ein.');
      return;
    }

    bookingFormEl.style.display = 'none';
    formSuccess.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== BEWOHNER LOGIN =====
const loginBtn = document.getElementById('loginBtn');
const loginPassword = document.getElementById('loginPassword');
const loginError = document.getElementById('loginError');
const loginSection = document.getElementById('loginSection');
const bewohnerContent = document.getElementById('bewohnerContent');
const logoutBtn = document.getElementById('logoutBtn');

const BEWOHNER_PASSWORD = 'schweinekamp9';

if (sessionStorage.getItem('bewohner_logged_in') === 'true') {
  showBewohnerContent();
}

if (loginBtn) {
  loginBtn.addEventListener('click', attemptLogin);
}

if (loginPassword) {
  loginPassword.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') attemptLogin();
  });
}

function attemptLogin() {
  const pw = loginPassword.value.trim();
  if (pw === BEWOHNER_PASSWORD) {
    sessionStorage.setItem('bewohner_logged_in', 'true');
    showBewohnerContent();
  } else {
    loginError.classList.add('active');
    loginPassword.style.borderColor = '#dc2626';
    loginPassword.value = '';
    loginPassword.focus();
  }
}

function showBewohnerContent() {
  if (loginSection) loginSection.style.display = 'none';
  if (bewohnerContent) bewohnerContent.classList.add('active');
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('bewohner_logged_in');
    if (bewohnerContent) bewohnerContent.classList.remove('active');
    if (loginSection) loginSection.style.display = '';
    if (loginPassword) {
      loginPassword.value = '';
      loginPassword.style.borderColor = '';
    }
    if (loginError) loginError.classList.remove('active');
  });
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
  });
});

// ===== BEWOHNER SIDEBAR NAV =====
document.querySelectorAll('.bewohner-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    document.querySelectorAll('.bewohner-nav a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
