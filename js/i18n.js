// ===== i18n TRANSLATION SYSTEM =====
const translations = {
  de: {
    // Nav
    "nav.home": "Home",
    "nav.zimmer": "Zimmer",
    "nav.buchen": "Buchen",
    "nav.bewohner": "Bewohner",
    // Hero
    "hero.badge": "Jetzt freie Zimmer verfügbar",
    "hero.title": "Dein Zuhause am <span>Schweinekamp</span>",
    "hero.subtitle": "Möblierte WG-Zimmer auf einem Resthof in Stuhr — direkt an der Bremer Stadtgrenze. Natur pur und trotzdem in 9 Minuten an der Hochschule Bremen.",
    "hero.btn.rooms": "Zimmer ansehen",
    "hero.btn.more": "Mehr erfahren",
    "hero.stat.rooms": "Zimmer",
    "hero.stat.wgs": "WGs",
    "hero.stat.uni": "zur Hochschule",
    // Highlights
    "highlights.title": "Warum Schweinekamp 9",
    "highlights.subtitle": "Alles was du für dein Studium brauchst — auf einem Resthof mit Charme.",
    "feature.location.title": "Top Anbindung",
    "feature.location.text": "1,5 km mit dem Rad zum Roland Center, dann Tram 1 oder 8 in nur 9 Minuten zur Hochschule Bremen.",
    "feature.furnished.title": "Voll möbliert",
    "feature.furnished.text": "Bett, Schreibtisch, Schrank, Regal — du brauchst nur noch deinen Koffer.",
    "feature.charme.title": "Resthof-Charme",
    "feature.charme.text": "Wohnen auf einem Resthof mit viel Grün und Natur — direkt an der Bremer Stadtgrenze in 28816 Stuhr.",
    "feature.wgs.title": "2 WGs, 14 Zimmer",
    "feature.wgs.text": "Haus mit 8 Zimmern und 2 Bädern, Wohnung mit 6 Zimmern und 3 Bädern — gemeinsame Küchen und Wohnbereiche.",
    // Rooms preview
    "rooms.title": "Unsere Zimmer",
    "rooms.subtitle": "Finde dein perfektes Zimmer — von gemütlich bis geräumig.",
    "rooms.all": "Alle Zimmer ansehen →",
    // Location
    "location.title": "Die perfekte Lage",
    "location.subtitle": "Resthof in Stuhr — Natur pur, trotzdem bestens angebunden.",
    "location.heading": "Anbindung & Umgebung",
    "location.roland": "Roland Center",
    "location.roland.detail": "1,5 km mit dem Fahrrad",
    "location.bus": "Bus \"Zur Windhorst\"",
    "location.bus.detail": "7 Minuten zu Fuß",
    "location.uni": "Hochschule Bremen",
    "location.uni.detail": "Tram 1 oder 8 — nur 9 Minuten",
    "location.shopping": "Roland Center (Einkaufen)",
    "location.shopping.detail": "Alle Geschäfte & Supermärkte",
    "location.nature": "Natur & Ruhe",
    "location.nature.detail": "Resthof mit viel Grün direkt vor der Tür",
    // Footer
    "footer.description": "Studentisches Wohnen auf dem Resthof — möbliert, naturnah, gut angebunden. 14 Zimmer in 2 WGs, 28816 Stuhr bei Bremen.",
    "footer.pages": "Seiten",
    "footer.contact": "Kontakt",
    "footer.legal": "Rechtliches",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.terms": "AGB",
    "footer.copy": "© 2026 Schweinekamp 9. Alle Rechte vorbehalten.",
    "footer.made": "Made with ♥ für Studenten",
    // Zimmer page
    "zimmer.title": "Unsere Zimmer",
    "zimmer.subtitle": "14 möblierte Zimmer in 2 WGs auf dem Resthof — finde das perfekte für dich.",
    "filter.wg": "WG",
    "filter.wg.all": "Alle WGs",
    "filter.wg.wohnung": "Wohnung — 6 Zimmer",
    "filter.wg.haus": "Haus — 8 Zimmer",
    "filter.status": "Verfügbarkeit",
    "filter.status.all": "Alle",
    "filter.status.available": "Verfügbar",
    "filter.status.occupied": "Belegt",
    "no.results.title": "Keine Zimmer gefunden",
    "no.results.text": "Versuche andere Filtereinstellungen.",
    // Room cards
    "room.perMonth": "/ Monat",
    "room.priceOnRequest": "Preis",
    "room.priceOnRequest2": "auf Anfrage",
    "room.inquire": "Anfragen",
    "room.occupied": "Belegt",
    "room.available": "Verfügbar",
    "room.equipment": "Ausstattung",
    "room.inquireNow": "Jetzt anfragen",
    "room.currentlyOccupied": "Derzeit belegt",
    // Gemeinschaft
    "gemeinschaft.wohnung": "Gemeinschaftsbereiche — Wohnung",
    "gemeinschaft.haus": "Gemeinschaftsbereiche — Haus",
    // Buchen page
    "buchen.title": "Zimmer anfragen",
    "buchen.subtitle": "Füll das Formular aus — wir melden uns innerhalb von 24 Stunden.",
    "buchen.yourInquiry": "Deine Anfrage",
    "buchen.required": "Alle Felder mit * sind Pflichtfelder.",
    "buchen.firstName": "Vorname",
    "buchen.lastName": "Nachname",
    "buchen.email": "E-Mail",
    "buchen.phone": "Telefon",
    "buchen.room": "Gewünschtes Zimmer",
    "buchen.roomPlaceholder": "Zimmer wählen...",
    "buchen.moveIn": "Gewünschter Einzug",
    "buchen.university": "Universität / Hochschule",
    "buchen.subject": "Studienfach",
    "buchen.message": "Über dich / Nachricht",
    "buchen.messagePlaceholder": "Erzähl uns kurz etwas über dich — was studierst du, warum suchst du ein WG-Zimmer, was ist dir wichtig?",
    "buchen.privacy": "Ich habe die <a href=\"#\" style=\"color: var(--coral); text-decoration: underline;\">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *",
    "buchen.submit": "Anfrage absenden",
    "buchen.success.title": "Anfrage gesendet!",
    "buchen.success.text": "Danke für dein Interesse! Wir melden uns innerhalb von 24 Stunden bei dir per E-Mail.",
    "buchen.success.back": "Zurück zur Startseite",
    "buchen.sidebar.select": "Wähle ein Zimmer",
    "buchen.sidebar.noRoom": "Kein Zimmer gewählt",
    "buchen.sidebar.details": "Wähle links ein Zimmer aus, um Details zu sehen.",
    "buchen.steps.title": "So geht's weiter",
    "buchen.steps.1": "Du schickst deine Anfrage ab",
    "buchen.steps.2": "Wir melden uns innerhalb von 24h",
    "buchen.steps.3": "Besichtigungstermin vereinbaren",
    "buchen.steps.4": "Mietvertrag unterschreiben & einziehen",
    "buchen.alert.fill": "Bitte fülle alle Pflichtfelder aus und akzeptiere die Datenschutzerklärung.",
    "buchen.alert.email": "Bitte gib eine gültige E-Mail-Adresse ein.",
    // Bewohner page
    "bewohner.title": "Bewohner-Bereich",
    "bewohner.subtitle": "Alles Wichtige für aktuelle Bewohner — Hausregeln, FAQ, Dokumente.",
    "bewohner.login": "Anmelden",
    "bewohner.login.text": "Gib das Bewohner-Passwort ein, um auf den internen Bereich zuzugreifen.",
    "bewohner.login.error": "Falsches Passwort. Bitte versuche es erneut.",
    "bewohner.login.placeholder": "Passwort eingeben...",
    "bewohner.login.btn": "Einloggen",
    "bewohner.login.forgot": "Passwort vergessen? Frag deine Mitbewohner oder schreib an allgemeinblankenagel@gmail.com",
    "bewohner.nav": "Navigation",
    "bewohner.nav.rules": "📋 Hausregeln",
    "bewohner.nav.faq": "❓ FAQ",
    "bewohner.nav.docs": "📄 Dokumente",
    "bewohner.nav.board": "📌 Pinnwand",
    "bewohner.nav.contact": "📞 Kontakt",
    "bewohner.logout": "Ausloggen",
    "bewohner.rules.title": "Hausregeln",
    "bewohner.rules.clean.title": "Putzplan",
    "bewohner.rules.clean.text": "Jede Woche ist ein anderer dran. Der aktuelle Putzplan hängt in der Küche. Küche, Bad und Flur werden wöchentlich gereinigt.",
    "bewohner.rules.quiet.title": "Ruhezeiten",
    "bewohner.rules.quiet.text": "22:00 – 07:00 Uhr Nachtruhe. Sonntags und feiertags ganztägig Zimmerlautstärke. Musik bitte nur mit Kopfhörern nach 22 Uhr.",
    "bewohner.rules.trash.title": "Müll & Recycling",
    "bewohner.rules.trash.text": "Mülltrennung ist Pflicht: Restmüll, Papier, Gelber Sack, Bio. Mülltonnen stehen im Hof. Abfuhrtermine hängen am Kühlschrank.",
    "bewohner.rules.bath.title": "Badezimmer",
    "bewohner.rules.bath.text": "Nach dem Duschen kurz lüften und Haare aus dem Abfluss nehmen. Persönliche Sachen bitte im eigenen Zimmer lagern.",
    "bewohner.rules.guests.title": "Gäste & Übernachtungen",
    "bewohner.rules.guests.text": "Gäste sind willkommen! Bei Übernachtungen (>3 Nächte) bitte kurz in der WG-Gruppe Bescheid geben.",
    "bewohner.rules.smoking.title": "Rauchen",
    "bewohner.rules.smoking.text": "Rauchen nur auf dem Balkon oder im Garten. In den Zimmern und Gemeinschaftsräumen ist Rauchen nicht gestattet.",
    "bewohner.faq.title": "Häufige Fragen",
    "bewohner.faq.wifi.q": "Wie lautet das WLAN-Passwort?",
    "bewohner.faq.wifi.a": "<strong>Netzwerk:</strong> Schweinekamp9-5G<br><strong>Passwort:</strong> WG-S9-Student-2026!<br>Das WLAN wird regelmäßig aktualisiert. Bei Problemen den Router im Flur kurz aus- und wieder einschalten (10 Sekunden warten).",
    "bewohner.faq.emergency.q": "Was mache ich bei einem Rohrbruch oder Notfall?",
    "bewohner.faq.emergency.a": "<strong>Notfall-Nummer Hausverwaltung:</strong> +49 123 456 000 (24h erreichbar)<br><strong>Hauptwasserhahn:</strong> Im Keller, links neben der Waschmaschine<br><strong>Sicherungskasten:</strong> Im Flur, hinter der Tür zum Keller",
    "bewohner.faq.key.q": "Ich habe meinen Schlüssel verloren — was tun?",
    "bewohner.faq.key.a": "Sofort bei der Hausverwaltung melden. Ein Ersatzschlüssel kostet 25€. Bis dahin können dich Mitbewohner reinlassen. <strong>Bitte NICHT den Schlüssel nachmachen lassen</strong> — das ist aus Sicherheitsgründen nicht erlaubt.",
    "bewohner.faq.repair.q": "Wie melde ich eine Reparatur?",
    "bewohner.faq.repair.a": "Schreib eine kurze Mail an <strong>allgemeinblankenagel@gmail.com</strong> mit einer Beschreibung und Foto des Problems. Wir kümmern uns in der Regel innerhalb von 48 Stunden.",
    "bewohner.faq.furniture.q": "Darf ich Möbel umstellen oder Bilder aufhängen?",
    "bewohner.faq.furniture.a": "Möbel im eigenen Zimmer dürfen umgestellt werden. Bilder bitte nur mit <strong>Klebenägeln</strong> (keine Bohrlöcher). In den Gemeinschaftsräumen bitte vorher in der WG-Gruppe absprechen.",
    "bewohner.faq.laundry.q": "Wie funktioniert die Waschmaschine?",
    "bewohner.faq.laundry.a": "Waschmaschine und Trockner stehen im Keller. Bitte nur zwischen 08:00 und 21:00 Uhr benutzen. Waschmittel bitte selbst mitbringen. Nach dem Waschen Maschine bitte ausladen und Tür offen lassen.",
    "bewohner.docs.title": "Wichtige Dokumente",
    "bewohner.board.title": "Schwarzes Brett",
    "bewohner.contact.title": "Kontakt Vermieter",
    "bewohner.contact.general": "Allgemeine Anfragen",
    "bewohner.contact.emergency": "Notfälle (24h)",
    "bewohner.contact.repairs": "Reparaturen",
    "bewohner.contact.management": "Hausverwaltung"
  },
  en: {
    "nav.home": "Home",
    "nav.zimmer": "Rooms",
    "nav.buchen": "Book",
    "nav.bewohner": "Residents",
    "hero.badge": "Rooms available now",
    "hero.title": "Your home at <span>Schweinekamp</span>",
    "hero.subtitle": "Furnished shared rooms on a farmstead in Stuhr — right at the Bremen city border. Pure nature and still only 9 minutes to Bremen University.",
    "hero.btn.rooms": "View rooms",
    "hero.btn.more": "Learn more",
    "hero.stat.rooms": "Rooms",
    "hero.stat.wgs": "Shared Flats",
    "hero.stat.uni": "to University",
    "highlights.title": "Why Schweinekamp 9",
    "highlights.subtitle": "Everything you need for your studies — on a charming farmstead.",
    "feature.location.title": "Great Location",
    "feature.location.text": "1.5 km by bike to Roland Center, then tram 1 or 8 in just 9 minutes to Bremen University.",
    "feature.furnished.title": "Fully Furnished",
    "feature.furnished.text": "Bed, desk, wardrobe, shelf — just bring your suitcase.",
    "feature.charme.title": "Farmstead Charm",
    "feature.charme.text": "Living on a farmstead with plenty of greenery and nature — right at the Bremen city border in 28816 Stuhr.",
    "feature.wgs.title": "2 Shared Flats, 14 Rooms",
    "feature.wgs.text": "House with 8 rooms and 2 bathrooms, apartment with 6 rooms and 3 bathrooms — shared kitchens and living areas.",
    "rooms.title": "Our Rooms",
    "rooms.subtitle": "Find your perfect room — from cozy to spacious.",
    "rooms.all": "View all rooms →",
    "location.title": "The Perfect Location",
    "location.subtitle": "Farmstead in Stuhr — pure nature, yet perfectly connected.",
    "location.heading": "Connectivity & Surroundings",
    "location.roland": "Roland Center",
    "location.roland.detail": "1.5 km by bike",
    "location.bus": "Bus \"Zur Windhorst\"",
    "location.bus.detail": "7 minutes on foot",
    "location.uni": "Bremen University",
    "location.uni.detail": "Tram 1 or 8 — only 9 minutes",
    "location.shopping": "Roland Center (Shopping)",
    "location.shopping.detail": "All shops & supermarkets",
    "location.nature": "Nature & Tranquility",
    "location.nature.detail": "Farmstead with greenery right at your doorstep",
    "footer.description": "Student housing on a farmstead — furnished, close to nature, well connected. 14 rooms in 2 shared flats, 28816 Stuhr near Bremen.",
    "footer.pages": "Pages",
    "footer.contact": "Contact",
    "footer.legal": "Legal",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms",
    "footer.copy": "© 2026 Schweinekamp 9. All rights reserved.",
    "footer.made": "Made with ♥ for students",
    "zimmer.title": "Our Rooms",
    "zimmer.subtitle": "14 furnished rooms in 2 shared flats on the farmstead — find the perfect one for you.",
    "filter.wg": "Flat",
    "filter.wg.all": "All Flats",
    "filter.wg.wohnung": "Apartment — 6 Rooms",
    "filter.wg.haus": "House — 8 Rooms",
    "filter.status": "Availability",
    "filter.status.all": "All",
    "filter.status.available": "Available",
    "filter.status.occupied": "Occupied",
    "no.results.title": "No rooms found",
    "no.results.text": "Try different filter settings.",
    "room.perMonth": "/ month",
    "room.priceOnRequest": "Price",
    "room.priceOnRequest2": "on request",
    "room.inquire": "Inquire",
    "room.occupied": "Occupied",
    "room.available": "Available",
    "room.equipment": "Amenities",
    "room.inquireNow": "Inquire now",
    "room.currentlyOccupied": "Currently occupied",
    "gemeinschaft.wohnung": "Shared Areas — Apartment",
    "gemeinschaft.haus": "Shared Areas — House",
    "buchen.title": "Inquire about a Room",
    "buchen.subtitle": "Fill out the form — we'll get back to you within 24 hours.",
    "buchen.yourInquiry": "Your Inquiry",
    "buchen.required": "All fields marked with * are required.",
    "buchen.firstName": "First Name",
    "buchen.lastName": "Last Name",
    "buchen.email": "Email",
    "buchen.phone": "Phone",
    "buchen.room": "Desired Room",
    "buchen.roomPlaceholder": "Choose a room...",
    "buchen.moveIn": "Desired Move-in Date",
    "buchen.university": "University",
    "buchen.subject": "Field of Study",
    "buchen.message": "About you / Message",
    "buchen.messagePlaceholder": "Tell us briefly about yourself — what do you study, why are you looking for a shared room, what is important to you?",
    "buchen.privacy": "I have read the <a href=\"#\" style=\"color: var(--coral); text-decoration: underline;\">privacy policy</a> and agree to the processing of my data. *",
    "buchen.submit": "Send Inquiry",
    "buchen.success.title": "Inquiry sent!",
    "buchen.success.text": "Thanks for your interest! We'll get back to you within 24 hours via email.",
    "buchen.success.back": "Back to home",
    "buchen.sidebar.select": "Select a room",
    "buchen.sidebar.noRoom": "No room selected",
    "buchen.sidebar.details": "Select a room on the left to see details.",
    "buchen.steps.title": "What happens next",
    "buchen.steps.1": "You send your inquiry",
    "buchen.steps.2": "We get back to you within 24h",
    "buchen.steps.3": "Schedule a viewing",
    "buchen.steps.4": "Sign lease & move in",
    "buchen.alert.fill": "Please fill out all required fields and accept the privacy policy.",
    "buchen.alert.email": "Please enter a valid email address.",
    "bewohner.title": "Residents Area",
    "bewohner.subtitle": "Everything important for current residents — house rules, FAQ, documents.",
    "bewohner.login": "Login",
    "bewohner.login.text": "Enter the resident password to access the internal area.",
    "bewohner.login.error": "Wrong password. Please try again.",
    "bewohner.login.placeholder": "Enter password...",
    "bewohner.login.btn": "Log in",
    "bewohner.login.forgot": "Forgot the password? Ask your flatmates or write to allgemeinblankenagel@gmail.com",
    "bewohner.nav": "Navigation",
    "bewohner.nav.rules": "📋 House Rules",
    "bewohner.nav.faq": "❓ FAQ",
    "bewohner.nav.docs": "📄 Documents",
    "bewohner.nav.board": "📌 Notice Board",
    "bewohner.nav.contact": "📞 Contact",
    "bewohner.logout": "Log out",
    "bewohner.rules.title": "House Rules",
    "bewohner.rules.clean.title": "Cleaning Schedule",
    "bewohner.rules.clean.text": "Each week a different person is responsible. The current schedule is posted in the kitchen. Kitchen, bathroom and hallway are cleaned weekly.",
    "bewohner.rules.quiet.title": "Quiet Hours",
    "bewohner.rules.quiet.text": "22:00 – 07:00 night rest. Sundays and holidays: room volume all day. Music only with headphones after 22:00.",
    "bewohner.rules.trash.title": "Waste & Recycling",
    "bewohner.rules.trash.text": "Waste separation is mandatory: residual waste, paper, yellow bag, organic. Bins are in the yard. Collection dates are on the fridge.",
    "bewohner.rules.bath.title": "Bathroom",
    "bewohner.rules.bath.text": "Ventilate briefly after showering and remove hair from the drain. Please store personal items in your own room.",
    "bewohner.rules.guests.title": "Guests & Overnight Stays",
    "bewohner.rules.guests.text": "Guests are welcome! For overnight stays (>3 nights) please briefly inform the flat group chat.",
    "bewohner.rules.smoking.title": "Smoking",
    "bewohner.rules.smoking.text": "Smoking only on the balcony or in the garden. Smoking is not permitted in rooms and common areas.",
    "bewohner.faq.title": "Frequently Asked Questions",
    "bewohner.faq.wifi.q": "What is the WiFi password?",
    "bewohner.faq.wifi.a": "<strong>Network:</strong> Schweinekamp9-5G<br><strong>Password:</strong> WG-S9-Student-2026!<br>The WiFi is updated regularly. If you have problems, briefly turn off the router in the hallway and turn it back on (wait 10 seconds).",
    "bewohner.faq.emergency.q": "What do I do in case of a pipe burst or emergency?",
    "bewohner.faq.emergency.a": "<strong>Emergency number property management:</strong> +49 123 456 000 (available 24h)<br><strong>Main water valve:</strong> In the basement, left of the washing machine<br><strong>Fuse box:</strong> In the hallway, behind the basement door",
    "bewohner.faq.key.q": "I lost my key — what do I do?",
    "bewohner.faq.key.a": "Report to the property management immediately. A replacement key costs 25€. Until then, flatmates can let you in. <strong>Please do NOT have the key copied</strong> — this is not allowed for security reasons.",
    "bewohner.faq.repair.q": "How do I report a repair?",
    "bewohner.faq.repair.a": "Send a short email to <strong>allgemeinblankenagel@gmail.com</strong> with a description and photo of the problem. We usually take care of it within 48 hours.",
    "bewohner.faq.furniture.q": "Can I rearrange furniture or hang pictures?",
    "bewohner.faq.furniture.a": "Furniture in your own room may be rearranged. Pictures only with <strong>adhesive nails</strong> (no drill holes). In common areas, please discuss in the flat group chat first.",
    "bewohner.faq.laundry.q": "How does the washing machine work?",
    "bewohner.faq.laundry.a": "Washing machine and dryer are in the basement. Please use only between 08:00 and 21:00. Bring your own detergent. After washing, please unload the machine and leave the door open.",
    "bewohner.docs.title": "Important Documents",
    "bewohner.board.title": "Notice Board",
    "bewohner.contact.title": "Contact Landlord",
    "bewohner.contact.general": "General Inquiries",
    "bewohner.contact.emergency": "Emergencies (24h)",
    "bewohner.contact.repairs": "Repairs",
    "bewohner.contact.management": "Property Management"
  }
};

// Current language
let currentLang = localStorage.getItem('s9_lang') || 'de';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.de[key] || key;
}

// Get room field with language suffix
function tRoom(room, field) {
  if (currentLang === 'en' && room[field + '_en']) {
    return room[field + '_en'];
  }
  return room[field];
}

// Get array field with language suffix
function tRoomArray(room, field) {
  if (currentLang === 'en' && room[field + '_en']) {
    return room[field + '_en'];
  }
  return room[field];
}

// Get wohnung/gemeinschaft field with language suffix
function tField(obj, field) {
  if (currentLang === 'en' && obj[field + '_en']) {
    return obj[field + '_en'];
  }
  return obj[field];
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('s9_lang', lang);
  applyTranslations();
  // Update toggle button
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Re-render dynamic content if available
  if (typeof initializeRooms === 'function' && typeof roomsJsonData !== 'undefined' && roomsJsonData) {
    initializeRooms();
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    el.innerHTML = t(key);
  });
}

// Create language toggle and insert into nav
function initLangToggle() {
  const navLinks = document.getElementById('navLinks');
  if (!navLinks) return;

  const toggle = document.createElement('div');
  toggle.className = 'lang-toggle';
  toggle.innerHTML = `
    <button class="lang-toggle-btn ${currentLang === 'de' ? 'active' : ''}" data-lang="de">DE</button>
    <button class="lang-toggle-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
  `;
  navLinks.appendChild(toggle);

  toggle.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(btn.dataset.lang);
    });
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initLangToggle();
  if (currentLang !== 'de') {
    applyTranslations();
  }
});
