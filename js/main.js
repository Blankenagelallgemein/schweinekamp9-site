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

// ===== ROOM DATA (loaded from JSON) =====
let roomData = {};
let roomsJsonData = null;

// Load rooms data and initialize everything
async function loadRoomsData() {
  try {
    const response = await fetch('data/rooms.json');
    roomsJsonData = await response.json();
    roomData = roomsJsonData.rooms;
    initializeRooms();
  } catch (e) {
    console.error('Could not load rooms data:', e);
  }
}

function createRoomCardHTML(id, room) {
  const isAvailable = room.status === 'available';
  const priceHTML = room.price
    ? `${room.price}€ <span>${t('room.perMonth')}</span>`
    : `${t('room.priceOnRequest')} <span>${t('room.priceOnRequest2')}</span>`;
  const badgeClass = isAvailable ? 'available' : 'occupied';
  const badgeText = isAvailable ? t('room.available') : t('room.occupied');
  const buttonHTML = isAvailable
    ? `<a href="buchen.html?zimmer=${id}" class="btn btn-primary btn-sm">${t('room.inquire')}</a>`
    : `<span class="btn btn-secondary btn-sm" style="opacity: 0.5; pointer-events: none;">${t('room.occupied')}</span>`;
  const featuresHTML = (tRoomArray(room, 'cardFeatures') || [])
    .map(f => `<span class="room-card-amenity">${f}</span>`)
    .join('');

  return `
    <div class="room-card" data-wg="${room.wgFilter}" data-status="${room.status}" data-room="${id}">
      <div class="room-card-image">
        <img src="${room.image}" alt="${tRoom(room, 'title')}">
        <span class="room-badge ${badgeClass}">${badgeText}</span>
      </div>
      <div class="room-card-body">
        <div class="room-card-title">${tRoom(room, 'title')}</div>
        <div class="room-card-details">${tRoom(room, 'subtitle')}</div>
        <div class="room-card-amenities">${featuresHTML}</div>
        <div class="room-card-footer">
          <div class="room-card-price">${priceHTML}</div>
          ${buttonHTML}
        </div>
      </div>
    </div>
  `;
}

function createPreviewCardHTML(id, room) {
  const priceHTML = room.price
    ? `${room.price}€ <span>${t('room.perMonth')}</span>`
    : `${t('room.priceOnRequest')} <span>${t('room.priceOnRequest2')}</span>`;
  const featuresHTML = (tRoomArray(room, 'cardFeatures') || []).slice(0, 2)
    .map(f => `<span class="room-card-amenity">${f}</span>`)
    .join('');

  return `
    <a href="buchen.html?zimmer=${id}" class="room-card">
      <div class="room-card-image">
        <img src="${room.image}" alt="${tRoom(room, 'title')}">
        <span class="room-badge available">${t('room.available')}</span>
      </div>
      <div class="room-card-body">
        <div class="room-card-title">${tRoom(room, 'title')}</div>
        <div class="room-card-details">${tRoom(room, 'subtitle')}</div>
        <div class="room-card-amenities">${featuresHTML}</div>
        <div class="room-card-footer">
          <div class="room-card-price">${priceHTML}</div>
          <span class="btn btn-primary btn-sm">${t('room.inquire')}</span>
        </div>
      </div>
    </a>
  `;
}

function initializeRooms() {
  if (!roomsJsonData) return;

  // ===== ZIMMER PAGE: Render room grids =====
  const roomsGrid = document.getElementById('roomsGrid');
  const roomsGrid2 = document.getElementById('roomsGrid2');
  const wohnungHeader = document.getElementById('wohnungHeader');
  const hausHeader = document.getElementById('hausHeader');

  if (roomsGrid && roomsGrid2) {
    const wohnung = roomsJsonData.wohnungen[0];
    const haus = roomsJsonData.wohnungen[1];

    if (wohnungHeader) {
      wohnungHeader.textContent = `${wohnung.icon} ${tField(wohnung, 'label')} (${tField(wohnung, 'subtitle')})`;
    }
    if (hausHeader) {
      hausHeader.textContent = `${haus.icon} ${tField(haus, 'label')} (${tField(haus, 'subtitle')})`;
    }

    roomsGrid.innerHTML = wohnung.roomIds
      .map(id => createRoomCardHTML(id, roomData[id]))
      .join('');

    roomsGrid2.innerHTML = haus.roomIds
      .map(id => createRoomCardHTML(id, roomData[id]))
      .join('');

    // Bind click events for modal
    document.querySelectorAll('.room-card[data-room]').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn')) return;
        const roomId = card.dataset.room;
        if (roomId) openRoomModal(roomId);
      });
    });

    // Initialize filters
    initFilters();
  }

  // ===== ZIMMER PAGE: Render Gemeinschaft per WG =====
  const gemeinschaft = roomsJsonData.gemeinschaft;
  if (gemeinschaft) {
    function renderGemeinschaftGrid(gridId, headerId, items, wgKey) {
      const grid = document.getElementById(gridId);
      const header = document.getElementById(headerId);
      if (!grid || !items) return;
      if (header) header.textContent = `✨ ${t('gemeinschaft.' + wgKey)}`;
      grid.innerHTML = items.map(item => `
        <div class="room-card" style="cursor: default;">
          <div class="room-card-image">
            <img src="${item.image}" alt="${tField(item, 'title')}">
          </div>
          <div class="room-card-body">
            <div class="room-card-title">${tField(item, 'title')}</div>
            <div class="room-card-details">${tField(item, 'details')}</div>
          </div>
        </div>
      `).join('');
    }

    if (gemeinschaft.wohnung) {
      renderGemeinschaftGrid('gemeinschaftWohnungGrid', 'gemeinschaftWohnungHeader', gemeinschaft.wohnung, 'wohnung');
    }
    if (gemeinschaft.haus) {
      renderGemeinschaftGrid('gemeinschaftHausGrid', 'gemeinschaftHausHeader', gemeinschaft.haus, 'haus');
    }
  }

  // ===== HOME PAGE: Render available rooms preview =====
  const homePreview = document.getElementById('homeRoomsPreview');
  if (homePreview) {
    const availableRooms = Object.entries(roomData)
      .filter(([, r]) => r.status === 'available')
      .slice(0, 3);

    homePreview.innerHTML = availableRooms
      .map(([id, room]) => createPreviewCardHTML(id, room))
      .join('');
  }

  // ===== BOOKING PAGE: Initialize sidebar =====
  initBookingSidebar();
}

// ===== ZIMMER FILTER =====
function initFilters() {
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

    // Show/hide WG headers based on filter
    const wohnungHeader = document.getElementById('wohnungHeader');
    const hausHeader = document.getElementById('hausHeader');
    if (filterWG) {
      if (wohnungHeader) wohnungHeader.style.display = (filterWG.value === '5er') ? 'none' : '';
      if (hausHeader) hausHeader.style.display = (filterWG.value === '7er') ? 'none' : '';
    }

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (filterWG) filterWG.addEventListener('change', filterRooms);
  if (filterStatus) filterStatus.addEventListener('change', filterRooms);
}

// ===== ROOM MODAL =====
const modalOverlay = document.getElementById('roomModal');
const modalClose = document.getElementById('modalClose');

function openRoomModal(roomId) {
  const room = roomData[roomId];
  if (!room || !modalOverlay) return;

  const wgLabel = currentLang === 'en'
    ? (room.wg === 'wohnung' ? 'Apartment' : 'House')
    : (room.wg === 'wohnung' ? 'Wohnung' : 'Haus');

  document.getElementById('modalTitle').textContent = tRoom(room, 'title');
  document.getElementById('modalMeta').innerHTML = `
    <span>🏠 ${wgLabel}</span>
    <span>📋 ${tRoom(room, 'subtitle')}</span>
  `;
  document.getElementById('modalDescription').textContent = tRoom(room, 'description');

  const amenitiesEl = document.getElementById('modalAmenities');
  const amenities = tRoomArray(room, 'amenities') || [];
  amenitiesEl.innerHTML = amenities.map(a => `<div class="modal-amenity">${a}</div>`).join('');

  const priceEl = document.getElementById('modalPrice');
  if (room.price) {
    priceEl.innerHTML = `${room.price}€ <span>${t('room.perMonth')}</span>`;
  } else {
    priceEl.innerHTML = `${t('room.priceOnRequest')} <span>${t('room.priceOnRequest2')}</span>`;
  }

  const modalImage = document.getElementById('modalImage');
  modalImage.className = 'modal-image';
  modalImage.innerHTML = `<img src="${room.image}" alt="${tRoom(room, 'title')}">`;

  const cta = document.getElementById('modalCTA');
  if (room.status === 'occupied') {
    cta.textContent = t('room.currentlyOccupied');
    cta.style.opacity = '0.5';
    cta.style.pointerEvents = 'none';
    cta.href = '#';
  } else {
    cta.textContent = t('room.inquireNow');
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

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== BOOKING SIDEBAR =====
function initBookingSidebar() {
  const roomSelect = document.getElementById('roomSelect');
  const sidebarTitle = document.getElementById('sidebarTitle');
  const sidebarDetails = document.getElementById('sidebarDetails');
  const sidebarPrice = document.getElementById('sidebarPrice');
  const sidebarImage = document.getElementById('sidebarImage');

  if (!roomSelect) return;

  const params = new URLSearchParams(window.location.search);
  const zimmer = params.get('zimmer');
  if (zimmer) {
    roomSelect.value = zimmer;
    updateSidebar(zimmer);
  }

  roomSelect.addEventListener('change', () => {
    updateSidebar(roomSelect.value);
  });

  function updateSidebar(roomId) {
    const room = roomData[roomId];
    if (!room || !sidebarTitle) return;

    sidebarTitle.textContent = tRoom(room, 'title');
    sidebarTitle.removeAttribute('data-i18n');
    sidebarDetails.textContent = tRoom(room, 'subtitle');
    sidebarDetails.removeAttribute('data-i18n');
    sidebarPrice.style.display = 'block';
    if (room.price) {
      sidebarPrice.innerHTML = `${room.price}€ <span>${t('room.perMonth')}</span>`;
    } else {
      sidebarPrice.innerHTML = `${t('room.priceOnRequest')} <span>${t('room.priceOnRequest2')}</span>`;
    }
    sidebarImage.className = 'form-sidebar-image';
    sidebarImage.style = '';
    sidebarImage.removeAttribute('data-i18n');
    sidebarImage.innerHTML = `<img src="${room.image}" alt="${tRoom(room, 'title')}">`;
  }
}

// ===== BOOKING FORM =====
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
      alert(t('buchen.alert.fill'));
      return;
    }

    if (!email.includes('@')) {
      alert(t('buchen.alert.email'));
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

// ===== LOAD DATA ON PAGE LOAD =====
loadRoomsData();
