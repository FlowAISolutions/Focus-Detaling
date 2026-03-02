/**
 * Focus Detailing — i18n (EN / HU)
 * Usage: add data-i18n="key", data-i18n-html="key", or data-i18n-ph="key"
 * to any element. Include this script; it auto-applies the saved language.
 */
(function () {

  /* ══════════════════════════════════════════════════════════════
     TRANSLATIONS
  ══════════════════════════════════════════════════════════════ */
  const T = {
    en: {
      /* ── Navigation ─────────────────────────────── */
      'nav-home':     'Home',
      'nav-packages': 'Packages',
      'nav-services': 'Services',
      'nav-about':    'About',
      'nav-gallery':  'Gallery',
      'nav-contact':  'Contact',
      'nav-book':     'Book Now',

      /* ── index.html — Hero ──────────────────────── */
      'hero-eyebrow': 'Premium Car Detailing',
      'hero-title':   'Your Car<br>Deserves<br>The Best',
      'hero-sub':     'Professional detailing services built for perfection. From deep interior cleans to full ceramic protection — every vehicle treated with the care it deserves.',
      'hero-cta':     'Book an Appointment',

      /* ── index.html — Packages ──────────────────── */
      'pkg-eyebrow':  'What we offer',
      'pkg-heading':  'Interior &amp; Exterior<br>Package Deals',

      'pkg1-number':  'Classic',
      'pkg1-name':    'Interior Detail',
      'pkg1-f1':      'Full vacuum & debris removal',
      'pkg1-f2':      'Steam clean & sanitise all surfaces',
      'pkg1-f3':      'Leather condition & protect',
      'pkg1-f4':      'Dashboard & trim dressing',
      'pkg1-f5':      'Interior glass clean',
      'pkg1-cta':     'Learn more...',

      'pkg2-number':  'Detail',
      'pkg2-name':    'Exterior Detail',
      'pkg2-f1':      'Two-bucket hand wash & rinse',
      'pkg2-f2':      'Clay bar decontamination',
      'pkg2-f3':      'Iron fallout & tar removal',
      'pkg2-f4':      'Wheel & tyre deep clean',
      'pkg2-f5':      'Sealant protection coat',
      'pkg2-cta':     'Learn more...',

      'pkg3-number':  'Full Detail',
      'pkg3-name':    'Full Detail',
      'pkg3-f1':      'Complete interior deep clean',
      'pkg3-f2':      'Full exterior decontamination',
      'pkg3-f3':      'Single-stage machine polish',
      'pkg3-f4':      'Sealant or wax protection',
      'pkg3-f5':      'Engine bay clean',
      'pkg3-f6':      'Ceramic coating add-on option',
      'pkg3-cta':     'Learn more...',

      /* ── about.html ─────────────────────────────── */
      'about-eyebrow': 'The Man Behind the Detail',
      'about-title':   'About Goran',
      'about-bio':     'I\'m <em>Goran</em>, the founder and master detailer of <em>Focus Detailing</em>, a premier luxury car detailing sanctuary dedicated to automotive perfection. At 40, my lifelong passion for cars has become an all-consuming obsession with flawless execution: I treat every vehicle—whether a breathtaking supercar, a sophisticated executive sedan, or a treasured collector\'s masterpiece—as if it were my own, pouring heart and soul into every inch. Through ultra-meticulous, hand-crafted techniques, I deliver deep, mirror-like gloss, impeccable finishes, and enduring protection that transform your prized machine into something truly extraordinary. Welcome to <em>Focus Detailing</em>, where uncompromising care meets pure automotive passion, and every detail tells a story of excellence.',
      'about-cta':     'Book an Appointment',
      'cta-label':     'Ready to experience it?',
      'cta-heading':   'Your car deserves the best.',

      /* ── booking.html — Sidebar ─────────────────── */
      'booking-select-date': 'Select a Date',
      'booking-duration':    'Session Duration',
      'dur-classic':         'Classic',
      'dur-detail':          'Detail',
      'dur-full':            'Full Detail',
      'dur-sub-2h':          '2 hrs',
      'dur-sub-4h':          '4 hrs',
      'dur-sub-day':         'Full day',
      'key-available':       'Available',
      'key-booked':          'Booked',
      'key-selected':        'Selected',
      'sum-label':           'Your Selection',
      'sum-date':            'Date',
      'sum-time':            'Time',
      'sum-duration':        'Duration',
      'sum-confirm':         'Confirm & Book',

      /* ── booking.html — Week nav ─────────────────── */
      'today-btn': 'Today',

      /* ── booking.html — Mini calendar day names ──── */
      'cal-d0': 'M', 'cal-d1': 'T', 'cal-d2': 'W',
      'cal-d3': 'T', 'cal-d4': 'F', 'cal-d5': 'S', 'cal-d6': 'S',

      /* ── booking.html — Modal ────────────────────── */
      'modal-eyebrow': 'Book an Appointment',
      'modal-title':   'Reserve Your Slot',
      'lbl-first':     'First Name',
      'lbl-last':      'Last Name',
      'lbl-email':     'Email',
      'lbl-phone':     'Phone',
      'lbl-vehicle':   'Vehicle (Make & Model)',
      'lbl-notes':     'Notes (optional)',
      'btn-submit':    'Confirm Booking',
      'btn-cancel':    'Cancel',
      'success-title': 'Booking Received!',
      'success-sub':   "We'll confirm your appointment within 24 hours via email. Thank you for choosing Focus Detailing.",

      /* ── booking.html — Placeholders ─────────────── */
      'ph-first':   'John',
      'ph-last':    'Doe',
      'ph-email':   'john@example.com',
      'ph-phone':   '+1 555 000 0000',
      'ph-vehicle': 'e.g. BMW M3 Competition 2024',
      'ph-notes':   'Special requests, paint correction needs, etc.',

      /* ── booking.html — JS dynamic strings ───────── */
      dayNames:    ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      monthNames:  ['January','February','March','April','May','June',
                    'July','August','September','October','November','December'],
      durLabels:   { '2h':'Classic — 2 hrs', '4h':'Detail — 4 hrs', 'day':'Full Detail — Full day' },
      slotUnavail: 'Unavailable',
      slotSel:     'Selected',
      slotFull:    'Full slot',
      slotBook:    '+ Book this slot',
      slotBooked:  'Booked',
      slotReserved:'✓ Reserved',
    },

    hu: {
      /* ── Navigation ─────────────────────────────── */
      'nav-home':     'Főoldal',
      'nav-packages': 'Csomagok',
      'nav-services': 'Szolgáltatások',
      'nav-about':    'Rólunk',
      'nav-gallery':  'Galéria',
      'nav-contact':  'Kapcsolat',
      'nav-book':     'Foglalás',

      /* ── index.html — Hero ──────────────────────── */
      'hero-eyebrow': 'Prémium Autókozmetika',
      'hero-title':   'Az autód<br>a legjobbat<br>érdemli',
      'hero-sub':     'Professzionális kozmetikai szolgáltatások tökéletességre törekedve. A mély belső tisztítástól a teljes kerámia védelemig — minden jármű az őt megillető gondossággal kezelve.',
      'hero-cta':     'Időpontot foglalok',

      /* ── index.html — Packages ──────────────────── */
      'pkg-eyebrow':  'Amit kínálunk',
      'pkg-heading':  'Belső &amp; Külső<br>Csomag Ajánlatok',

      'pkg1-number':  'Klasszikus',
      'pkg1-name':    'Belső Tisztítás',
      'pkg1-f1':      'Teljes porszívózás & törmelékeltávolítás',
      'pkg1-f2':      'Gőztisztítás & fertőtlenítés minden felületen',
      'pkg1-f3':      'Bőr kondicionálás & védelem',
      'pkg1-f4':      'Műszerfal & belső borítás kezelés',
      'pkg1-f5':      'Belső üvegtisztítás',
      'pkg1-cta':     'Megrendelem',

      'pkg2-number':  'Detail',
      'pkg2-name':    'Külső Tisztítás',
      'pkg2-f1':      'Két vödörs kézi mosás & öblítés',
      'pkg2-f2':      'Agyagos szennyeződésmentesítés',
      'pkg2-f3':      'Vas kicsapódás & kátrányfolt eltávolítás',
      'pkg2-f4':      'Keréktárcsa & gumiabroncs mélytisztítás',
      'pkg2-f5':      'Tömítőanyag védőréteg felvitele',
      'pkg2-cta':     'Megrendelem',

      'pkg3-number':  'Teljes Detail',
      'pkg3-name':    'Teljes Tisztítás',
      'pkg3-f1':      'Teljes belső mélytisztítás',
      'pkg3-f2':      'Teljes külső szennyeződésmentesítés',
      'pkg3-f3':      'Egylépéses gépi fényezés',
      'pkg3-f4':      'Tömítőanyag vagy viasz védelem',
      'pkg3-f5':      'Motorháztér tisztítás',
      'pkg3-f6':      'Kerámia bevonat kiegészítő lehetőség',
      'pkg3-cta':     'Megrendelem',

      /* ── about.html ─────────────────────────────── */
      'about-eyebrow': 'A szakember a részletek mögött',
      'about-title':   'Goranról',
      'about-bio':     '<em>Goran</em> vagyok, a <em>Focus Detailing</em> alapítója és mesterkozmetikusa — egy prémium luxus autókozmetikai szalon, amely az autós tökéletességnek van szentelve. 40 évesen az autók iránti egész életen át tartó szenvedélyem hibátlan végrehajtás iránti megszállottsággá vált: minden járművet — legyen az lenyűgöző szuperautó, elegáns üzleti limuzin vagy féltve őrzött gyűjtői remekmű — úgy kezelem, mint a sajátomat, szívből-lélekből odaadva magamat minden centiméterre. Ultra-precíz, kézzel végzett technikákon keresztül mély, tükörszerű csillogást, kifogástalan felületeket és tartós védelmet nyújtok, amelyek valami igazán rendkívülivé változtatják az Ön becses autóját. Üdvözöljük a <em>Focus Detailingban</em>, ahol a kompromisszumok nélküli gondosság találkozik a tiszta autós szenvedéllyel, és minden részlet a kiválóság történetét meséli el.',
      'about-cta':     'Időpontot foglalok',
      'cta-label':     'Készen áll megtapasztalni?',
      'cta-heading':   'Az autód a legjobbat érdemli.',

      /* ── booking.html — Sidebar ─────────────────── */
      'booking-select-date': 'Válasszon dátumot',
      'booking-duration':    'Munkamenet időtartama',
      'dur-classic':         'Klasszikus',
      'dur-detail':          'Detail',
      'dur-full':            'Teljes Detail',
      'dur-sub-2h':          '2 óra',
      'dur-sub-4h':          '4 óra',
      'dur-sub-day':         'Egész nap',
      'key-available':       'Elérhető',
      'key-booked':          'Foglalt',
      'key-selected':        'Kiválasztva',
      'sum-label':           'Az Ön választása',
      'sum-date':            'Dátum',
      'sum-time':            'Időpont',
      'sum-duration':        'Időtartam',
      'sum-confirm':         'Megerősítés & Foglalás',

      /* ── booking.html — Week nav ─────────────────── */
      'today-btn': 'Ma',

      /* ── booking.html — Mini calendar day names ──── */
      'cal-d0': 'H', 'cal-d1': 'K', 'cal-d2': 'Sze',
      'cal-d3': 'Cs', 'cal-d4': 'P', 'cal-d5': 'Szo', 'cal-d6': 'V',

      /* ── booking.html — Modal ────────────────────── */
      'modal-eyebrow': 'Időpontfoglalás',
      'modal-title':   'Foglalja le időpontját',
      'lbl-first':     'Keresztnév',
      'lbl-last':      'Vezetéknév',
      'lbl-email':     'Email',
      'lbl-phone':     'Telefon',
      'lbl-vehicle':   'Jármű (Márka & Modell)',
      'lbl-notes':     'Megjegyzések (opcionális)',
      'btn-submit':    'Foglalás megerősítése',
      'btn-cancel':    'Mégse',
      'success-title': 'Foglalás megérkezett!',
      'success-sub':   'Az időpontját 24 órán belül email-ben visszaigazoljuk. Köszönjük, hogy a Focus Detailinget választotta.',

      /* ── booking.html — Placeholders ─────────────── */
      'ph-first':   'János',
      'ph-last':    'Kovács',
      'ph-email':   'janos@example.com',
      'ph-phone':   '+36 30 000 0000',
      'ph-vehicle': 'pl. BMW M3 Competition 2024',
      'ph-notes':   'Különleges kérések, festékjavítási igények stb.',

      /* ── booking.html — JS dynamic strings ───────── */
      dayNames:    ['H','K','Sze','Cs','P','Szo','V'],
      monthNames:  ['Január','Február','Március','Április','Május','Június',
                    'Július','Augusztus','Szeptember','Október','November','December'],
      durLabels:   { '2h':'Klasszikus — 2 óra', '4h':'Detail — 4 óra', 'day':'Teljes Detail — Egész nap' },
      slotUnavail: 'Nem elérhető',
      slotSel:     'Kiválasztva',
      slotFull:    'Teljes nap',
      slotBook:    '+ Foglalja le',
      slotBooked:  'Foglalt',
      slotReserved:'✓ Fenntartva',
    }
  };

  /* ══════════════════════════════════════════════════════════════
     CORE
  ══════════════════════════════════════════════════════════════ */
  function currentLang() {
    return localStorage.getItem('fd-lang') || 'en';
  }

  function applyLang(lang) {
    const t = T[lang];
    if (!t) return;

    // Plain text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });

    // HTML (for <br>, <em>, &amp; etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = t[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });

    // Placeholder attributes
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const v = t[el.dataset.i18nPh];
      if (v !== undefined) el.placeholder = v;
    });

    // HTML lang attr
    document.documentElement.lang = lang;

    // Sync toggle UI
    const tog = document.getElementById('langToggle');
    const sw  = document.getElementById('langSwitch');
    if (tog) tog.dataset.lang = lang;
    if (sw)  sw.setAttribute('aria-checked', String(lang === 'hu'));

    // Persist
    localStorage.setItem('fd-lang', lang);

    // Notify booking page dynamic calendar
    document.dispatchEvent(new CustomEvent('fd:langchange', { detail: { lang, t } }));
  }

  function toggleLang() {
    applyLang(currentLang() === 'en' ? 'hu' : 'en');
  }

  function initToggle() {
    const sw  = document.getElementById('langSwitch');
    const enL = document.querySelector('.lang-label.lang-en');
    const huL = document.querySelector('.lang-label.lang-hu');
    if (sw)  sw.addEventListener('click', toggleLang);
    if (enL) enL.addEventListener('click', () => applyLang('en'));
    if (huL) huL.addEventListener('click', () => applyLang('hu'));
  }

  /* ══════════════════════════════════════════════════════════════
     INIT
  ══════════════════════════════════════════════════════════════ */
  function init() {
    initToggle();
    applyLang(currentLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.FD_applyLang   = applyLang;
  window.FD_currentLang = currentLang;
  window.FD_TRANSLATIONS = T;
})();
