// ===== i18n TRANSLATION SYSTEM =====
const translations = {
  de: {
    // Nav
    "nav.home": "Home",
    "nav.zimmer": "Zimmer",
    "nav.buchen": "Anfrage",
    "nav.bewohner": "Bewohner",
    // Hero
    "hero.badge": "Jetzt freie Zimmer verfügbar",
    "hero.title": "Dein Zuhause am <span>Schweinekamp</span>",
    "hero.subtitle": "Möblierte WG-Zimmer auf einem Resthof in Stuhr — direkt an der Bremer Stadtgrenze. Natur pur und trotzdem nur 1,5 km zur Straßenbahn-Station \u201ERoland Center\u201C. Von dort mit der Tram 1 oder 8 in nur 9 Minuten zur Hochschule Bremen (City University of Applied Sciences). Die Universität Bremen erreicht man vom \u201ERoland Center\u201C in 42 Minuten mit der Tram 1 und Umsteigen an der \u201EDomsheide\u201C in die Tram 6.",
    "hero.btn.rooms": "Zimmer ansehen",
    "hero.btn.more": "Mehr erfahren",
    "hero.stat.rooms": "Zimmer",
    "hero.stat.wgs": "WGs",
    "hero.stat.uni": "zur Hochschule",
    // Highlights
    "highlights.title": "Warum Schweinekamp 9",
    "highlights.subtitle": "Alles was du für dein Studium brauchst — auf einem Resthof mit Charme.",
    "feature.location.title": "Top Anbindung",
    "feature.location.text": "1,5 km mit dem Rad zum Roland Center, dann Tram 1 oder 8 in nur 9 Minuten zur Hochschule Bremen (City University of Applied Sciences).",
    "feature.furnished.title": "Voll möbliert",
    "feature.furnished.text": "Bett, Schreibtisch, Schrank, Regal — du brauchst nur noch deinen Koffer.",
    "feature.charme.title": "Resthof-Charme",
    "feature.charme.text": "Wohnen auf einem Resthof mit viel Grün und Natur — direkt an der Bremer Stadtgrenze in 28816 Stuhr.",
    "feature.wgs.title": "2 WGs, 14 Zimmer",
    "feature.wgs.text": "Haus mit 8 Zimmern und 3 Bädern, Wohnung mit 6 Zimmern und 2 Bädern.",
    // Rooms preview
    "rooms.title": "Unsere Zimmer",
    "rooms.subtitle": "Finde dein perfektes Zimmer — von gemütlich bis geräumig.",
    "rooms.all": "Alle Zimmer ansehen →",
    // Location
    "location.title": "Die perfekte Lage",
    "location.subtitle": "Resthof in Stuhr — Natur pur, trotzdem bestens angebunden.",
    "location.heading": "Anbindung & Umgebung",
    "location.roland": "Roland Center",
    "location.roland.detail": "1,5 km (mit dem Fahrrad 5 Minuten)",
    "location.bus": "Roland-Center",
    "location.bus.detail": "7 Minuten mit dem Bus 55 ab der Haltestelle \"Zur Windhorst\" (7 Minuten Fußweg)",
    "location.uni": "Hochschule Bremen (City University of Applied Sciences)",
    "location.uni.detail": "Tram 1 oder 8 — nur 9 Minuten",
    "location.unibremen": "Universität Bremen (University of Bremen)",
    "location.unibremen.detail": "Tram 1 und 6 — 42 Minuten",
    "location.shopping": "Supermarkt",
    "location.shopping.detail": "800 Meter",
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
    "buchen.moveOut": "Gewünschtes Ende der Mietzeit",
    "buchen.minRental": "Die Mindestmietzeit beträgt <strong style=\"color: var(--dark);\">5 Monate</strong>.",
    "buchen.gender": "Geschlecht",
    "buchen.genderPlaceholder": "Bitte wählen...",
    "buchen.gender.male": "Männlich",
    "buchen.gender.female": "Weiblich",
    "buchen.gender.diverse": "Divers",
    "buchen.country": "Herkunftsland",
    "buchen.countryPlaceholder": "Land wählen...",
    "buchen.university": "Universität / Hochschule",
    "buchen.universityPlaceholder": "Bitte wählen...",
    "buchen.uni.hsbremen": "Hochschule Bremen (City University of Applied Sciences)",
    "buchen.uni.unibremen": "Universität Bremen",
    "buchen.uni.constructor": "Constructor University (ehem. Jacobs University)",
    "buchen.uni.kuenste": "Hochschule für Künste Bremen",
    "buchen.uni.apollon": "Apollon Hochschule der Gesundheitswirtschaft",
    "buchen.uni.fom": "FOM Hochschule (Standort Bremen)",
    "buchen.uni.iu": "IU Internationale Hochschule (Standort Bremen)",
    "buchen.uni.bremerhaven": "Hochschule Bremerhaven",
    "buchen.uni.other": "Andere",
    "buchen.subject": "Studienfach",
    "buchen.message": "Über dich / Nachricht",
    "buchen.messagePlaceholder": "Erzähl uns kurz etwas über dich — was studierst du, warum suchst du ein WG-Zimmer, was ist dir wichtig?",
    "buchen.privacy": "Ich habe die <a href=\"datenschutz.html\" style=\"color: var(--coral); text-decoration: underline;\">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *",
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
    "buchen.steps.3": "Mietvertrag unterschreiben & einziehen",
    "buchen.alert.fill": "Bitte fülle alle Pflichtfelder aus und akzeptiere die Datenschutzerklärung.",
    "buchen.alert.email": "Bitte gib eine gültige E-Mail-Adresse ein.",
    "buchen.sending": "Wird gesendet...",
    "buchen.alert.error": "Die Anfrage konnte leider nicht gesendet werden. Bitte versuche es erneut oder schreibe uns direkt an allgemeinblankenagel@gmail.com",
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
    "bewohner.contact.title": "Kontakt Vermieterin",
    "bewohner.contact.general": "Allgemeine Anfragen",
    "bewohner.contact.emergency": "Notfälle (24h)",
    "bewohner.contact.repairs": "Reparaturen",
    "bewohner.contact.management": "Hausverwaltung",
    // Impressum
    "impressum.title": "Impressum",
    "impressum.subtitle": "Angaben gemäß § 5 TMG",
    "impressum.provider.title": "Anbieter",
    "impressum.contact.title": "Kontakt",
    "impressum.contact.phone": "Telefon:",
    "impressum.contact.email": "E-Mail:",
    "impressum.responsible.title": "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
    "impressum.liability.title": "Haftung für Inhalte",
    "impressum.liability.text": "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
    "impressum.links.title": "Haftung für Links",
    "impressum.links.text": "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.",
    "impressum.copyright.title": "Urheberrecht",
    "impressum.copyright.text": "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    // Datenschutz
    "datenschutz.title": "Datenschutzerklärung",
    "datenschutz.subtitle": "Informationen zum Schutz Ihrer Daten",
    "datenschutz.responsible.title": "1. Verantwortlicher",
    "datenschutz.responsible.text": "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
    "datenschutz.hosting.title": "2. Hosting",
    "datenschutz.hosting.text": "Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Beim Besuch der Website werden automatisch Informationen (z. B. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs) in Server-Logfiles gespeichert. Diese Daten sind technisch notwendig und werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel.",
    "datenschutz.localstorage.title": "3. Lokale Speicherung (localStorage)",
    "datenschutz.localstorage.text": "Diese Website verwendet localStorage, um Ihre Spracheinstellung (Deutsch/Englisch) zu speichern. Es handelt sich dabei nicht um Cookies. Die gespeicherten Daten verbleiben ausschließlich in Ihrem Browser und werden nicht an uns oder Dritte übertragen. Sie können diese Daten jederzeit über die Browsereinstellungen löschen.",
    "datenschutz.contact.title": "4. Kontaktformular",
    "datenschutz.contact.text": "Wenn Sie das Kontakt- bzw. Anfrage-Formular auf unserer Website nutzen, werden die von Ihnen eingegebenen Daten (Vorname, Nachname, E-Mail, Telefon, gewünschtes Zimmer, Einzugsdatum, Nachricht) zum Zwecke der Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Ihre Daten werden nicht an Dritte weitergegeben und nach Abschluss der Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
    "datenschutz.notracking.title": "5. Keine Tracking-Tools",
    "datenschutz.notracking.text": "Diese Website verwendet keine Analyse- oder Tracking-Tools (kein Google Analytics, kein Facebook Pixel o. ä.). Es werden keine Cookies gesetzt. Wir erfassen keine personenbezogenen Daten über Ihr Nutzungsverhalten.",
    "datenschutz.rights.title": "6. Ihre Rechte",
    "datenschutz.rights.text": "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) und Widerspruch (Art. 21 DSGVO). Wenden Sie sich dazu an allgemeinblankenagel@gmail.com.",
    "datenschutz.complaint.title": "7. Beschwerderecht",
    "datenschutz.complaint.text": "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.",
    "datenschutz.changes.title": "8. Änderungen",
    "datenschutz.changes.text": "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht. Stand: März 2026.",
    // AGB
    "agb.title": "Allgemeine Geschäftsbedingungen",
    "agb.subtitle": "Bedingungen für die Zimmervermietung",
    "agb.scope.title": "§ 1 Geltungsbereich",
    "agb.scope.text": "Diese Allgemeinen Geschäftsbedingungen gelten für die Vermietung von möblierten Zimmern in der Wohngemeinschaft Schweinekamp 9, 28816 Stuhr, durch Tobias Blankenagel (nachfolgend \"Vermieter\"). Mit der Anfrage über das Kontaktformular erkennt der Interessent diese AGB an.",
    "agb.inquiry.title": "§ 2 Zimmeranfrage & Mietvertrag",
    "agb.inquiry.text": "Die Zimmeranfrage über diese Website stellt kein verbindliches Mietangebot dar. Ein Mietverhältnis kommt erst durch Abschluss eines schriftlichen Mietvertrages zustande. Der Vermieter behält sich vor, Anfragen ohne Angabe von Gründen abzulehnen.",
    "agb.rent.title": "§ 3 Miete & Nebenkosten",
    "agb.rent.text": "Die auf der Website angegebenen Preise sind Warmmieten inklusive aller Nebenkosten (Strom, Wasser, Heizung, Internet). Die genauen Konditionen werden im Mietvertrag festgelegt. Der Vermieter behält sich vor, Preise für nicht vermietete Zimmer anzupassen.",
    "agb.deposit.title": "§ 4 Kaution",
    "agb.deposit.text": "Bei Abschluss des Mietvertrages wird eine Kaution in Höhe von zwei Monatsmieten fällig. Die Kaution wird nach Beendigung des Mietverhältnisses und ordnungsgemäßer Rückgabe des Zimmers zurückerstattet, abzüglich eventueller Schadensansprüche.",
    "agb.rules.title": "§ 5 Hausordnung",
    "agb.rules.text": "Der Mieter verpflichtet sich, die Hausordnung der WG einzuhalten. Dazu gehören insbesondere die Einhaltung der Ruhezeiten, die Teilnahme am Putzplan sowie die pflegliche Behandlung der Gemeinschaftsräume und -einrichtung. Verstöße gegen die Hausordnung können zur Abmahnung und im Wiederholungsfall zur fristlosen Kündigung führen.",
    "agb.furnishing.title": "§ 6 Möblierung & Inventar",
    "agb.furnishing.text": "Die Zimmer werden möbliert vermietet. Das Inventar wird bei Einzug in einem Übergabeprotokoll festgehalten. Der Mieter haftet für Beschädigungen am Inventar. Das Entfernen oder Austauschen von Möbeln bedarf der Zustimmung des Vermieters.",
    "agb.liability.title": "§ 7 Haftung",
    "agb.liability.text": "Der Vermieter haftet nicht für Schäden an persönlichem Eigentum der Mieter, es sei denn, der Schaden wurde durch grobe Fahrlässigkeit oder Vorsatz des Vermieters verursacht. Der Mieter ist verpflichtet, eine private Haftpflichtversicherung abzuschließen.",
    "agb.final.title": "§ 8 Schlussbestimmungen",
    "agb.final.text": "Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt deutsches Recht. Gerichtsstand ist Bremen. Stand: März 2026."
  },
  en: {
    "nav.home": "Home",
    "nav.zimmer": "Rooms",
    "nav.buchen": "Inquiry",
    "nav.bewohner": "Residents",
    "hero.badge": "Rooms available now",
    "hero.title": "Your home at <span>Schweinekamp</span>",
    "hero.subtitle": "Furnished shared rooms on a farmstead in Stuhr — right at the Bremen city border. Pure nature and only 1.5 km to the tram station \"Roland Center\". From there, tram 1 or 8 takes just 9 minutes to Hochschule Bremen (City University of Applied Sciences). The University of Bremen can be reached from \"Roland Center\" in 42 minutes via tram 1 and changing at \"Domsheide\" to tram 6.",
    "hero.btn.rooms": "View rooms",
    "hero.btn.more": "Learn more",
    "hero.stat.rooms": "Rooms",
    "hero.stat.wgs": "Shared Flats",
    "hero.stat.uni": "to University",
    "highlights.title": "Why Schweinekamp 9",
    "highlights.subtitle": "Everything you need for your studies — on a charming farmstead.",
    "feature.location.title": "Great Location",
    "feature.location.text": "1.5 km by bike to Roland Center, then tram 1 or 8 in just 9 minutes to Hochschule Bremen (City University of Applied Sciences).",
    "feature.furnished.title": "Fully Furnished",
    "feature.furnished.text": "Bed, desk, wardrobe, shelf — just bring your suitcase.",
    "feature.charme.title": "Farmstead Charm",
    "feature.charme.text": "Living on a farmstead with plenty of greenery and nature — right at the Bremen city border in 28816 Stuhr.",
    "feature.wgs.title": "2 Shared Flats, 14 Rooms",
    "feature.wgs.text": "House with 8 rooms and 3 bathrooms, apartment with 6 rooms and 2 bathrooms.",
    "rooms.title": "Our Rooms",
    "rooms.subtitle": "Find your perfect room — from cozy to spacious.",
    "rooms.all": "View all rooms →",
    "location.title": "The Perfect Location",
    "location.subtitle": "Farmstead in Stuhr — pure nature, yet perfectly connected.",
    "location.heading": "Connectivity & Surroundings",
    "location.roland": "Roland Center",
    "location.roland.detail": "1.5 km (5 minutes by bike)",
    "location.bus": "Roland-Center",
    "location.bus.detail": "7 minutes by bus 55 from the stop \"Zur Windhorst\" (7 minutes walk)",
    "location.uni": "Hochschule Bremen (City University of Applied Sciences)",
    "location.uni.detail": "Tram 1 or 8 — only 9 minutes",
    "location.unibremen": "University of Bremen",
    "location.unibremen.detail": "Tram 1 and 6 — 42 minutes",
    "location.shopping": "Supermarket",
    "location.shopping.detail": "800 meters",
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
    "buchen.moveOut": "Desired End of Rental Period",
    "buchen.minRental": "The minimum rental period is <strong style=\"color: var(--dark);\">5 months</strong>.",
    "buchen.gender": "Gender",
    "buchen.genderPlaceholder": "Please select...",
    "buchen.gender.male": "Male",
    "buchen.gender.female": "Female",
    "buchen.gender.diverse": "Diverse",
    "buchen.country": "Country of Origin",
    "buchen.countryPlaceholder": "Select country...",
    "buchen.university": "University",
    "buchen.universityPlaceholder": "Please select...",
    "buchen.uni.hsbremen": "Hochschule Bremen (City University of Applied Sciences)",
    "buchen.uni.unibremen": "University of Bremen",
    "buchen.uni.constructor": "Constructor University (formerly Jacobs University)",
    "buchen.uni.kuenste": "University of the Arts Bremen",
    "buchen.uni.apollon": "Apollon University of Applied Health Sciences",
    "buchen.uni.fom": "FOM University (Bremen Campus)",
    "buchen.uni.iu": "IU International University (Bremen Campus)",
    "buchen.uni.bremerhaven": "Bremerhaven University of Applied Sciences",
    "buchen.uni.other": "Other",
    "buchen.subject": "Field of Study",
    "buchen.message": "About you / Message",
    "buchen.messagePlaceholder": "Tell us briefly about yourself — what do you study, why are you looking for a shared room, what is important to you?",
    "buchen.privacy": "I have read the <a href=\"datenschutz.html\" style=\"color: var(--coral); text-decoration: underline;\">privacy policy</a> and agree to the processing of my data. *",
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
    "buchen.steps.3": "Sign lease & move in",
    "buchen.alert.fill": "Please fill out all required fields and accept the privacy policy.",
    "buchen.alert.email": "Please enter a valid email address.",
    "buchen.sending": "Sending...",
    "buchen.alert.error": "The inquiry could not be sent. Please try again or write to us directly at allgemeinblankenagel@gmail.com",
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
    "bewohner.contact.title": "Contact Landlady",
    "bewohner.contact.general": "General Inquiries",
    "bewohner.contact.emergency": "Emergencies (24h)",
    "bewohner.contact.repairs": "Repairs",
    "bewohner.contact.management": "Property Management",
    // Impressum
    "impressum.title": "Legal Notice",
    "impressum.subtitle": "Information according to § 5 TMG",
    "impressum.provider.title": "Provider",
    "impressum.contact.title": "Contact",
    "impressum.contact.phone": "Phone:",
    "impressum.contact.email": "Email:",
    "impressum.responsible.title": "Responsible for content according to § 55 Abs. 2 RStV",
    "impressum.liability.title": "Liability for Content",
    "impressum.liability.text": "As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 (1) TMG. However, pursuant to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected.",
    "impressum.links.title": "Liability for Links",
    "impressum.links.text": "Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content. A permanent content control of the linked pages is not reasonable without concrete evidence of a legal violation.",
    "impressum.copyright.title": "Copyright",
    "impressum.copyright.text": "The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.",
    // Datenschutz
    "datenschutz.title": "Privacy Policy",
    "datenschutz.subtitle": "Information about the protection of your data",
    "datenschutz.responsible.title": "1. Data Controller",
    "datenschutz.responsible.text": "The data controller responsible for data processing on this website is:",
    "datenschutz.hosting.title": "2. Hosting",
    "datenschutz.hosting.text": "This website is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA). When visiting the website, information (e.g., IP address, browser type, time of access) is automatically stored in server log files. This data is technically necessary and is processed on the basis of Art. 6 (1) lit. f GDPR. For more information, please refer to Vercel's privacy policy.",
    "datenschutz.localstorage.title": "3. Local Storage (localStorage)",
    "datenschutz.localstorage.text": "This website uses localStorage to save your language preference (German/English). These are not cookies. The stored data remains exclusively in your browser and is not transmitted to us or third parties. You can delete this data at any time via your browser settings.",
    "datenschutz.contact.title": "4. Contact Form",
    "datenschutz.contact.text": "When you use the contact or inquiry form on our website, the data you enter (first name, last name, email, phone, desired room, move-in date, message) will be processed for the purpose of handling your inquiry. The legal basis is Art. 6 (1) lit. b GDPR (pre-contractual measures). Your data will not be shared with third parties and will be deleted after processing is complete, unless statutory retention obligations apply.",
    "datenschutz.notracking.title": "5. No Tracking Tools",
    "datenschutz.notracking.text": "This website does not use any analytics or tracking tools (no Google Analytics, no Facebook Pixel, etc.). No cookies are set. We do not collect any personal data about your usage behavior.",
    "datenschutz.rights.title": "6. Your Rights",
    "datenschutz.rights.text": "You have the right to access (Art. 15 GDPR), rectification (Art. 16 GDPR), erasure (Art. 17 GDPR), restriction of processing (Art. 18 GDPR), data portability (Art. 20 GDPR), and objection (Art. 21 GDPR). Contact allgemeinblankenagel@gmail.com for these matters.",
    "datenschutz.complaint.title": "7. Right to Complain",
    "datenschutz.complaint.text": "You have the right to lodge a complaint with a data protection supervisory authority about the processing of your personal data.",
    "datenschutz.changes.title": "8. Changes",
    "datenschutz.changes.text": "We reserve the right to adapt this privacy policy to ensure it always complies with current legal requirements. As of: March 2026.",
    // AGB
    "agb.title": "Terms and Conditions",
    "agb.subtitle": "Conditions for room rental",
    "agb.scope.title": "§ 1 Scope",
    "agb.scope.text": "These General Terms and Conditions apply to the rental of furnished rooms in the shared flat at Schweinekamp 9, 28816 Stuhr, by Tobias Blankenagel (hereinafter \"Landlord\"). By submitting an inquiry via the contact form, the interested party accepts these terms.",
    "agb.inquiry.title": "§ 2 Room Inquiry & Lease Agreement",
    "agb.inquiry.text": "A room inquiry through this website does not constitute a binding rental offer. A tenancy relationship is only established by concluding a written lease agreement. The landlord reserves the right to reject inquiries without stating reasons.",
    "agb.rent.title": "§ 3 Rent & Utilities",
    "agb.rent.text": "The prices listed on the website are all-inclusive rents covering all utilities (electricity, water, heating, internet). The exact conditions are specified in the lease agreement. The landlord reserves the right to adjust prices for unrented rooms.",
    "agb.deposit.title": "§ 4 Deposit",
    "agb.deposit.text": "Upon conclusion of the lease agreement, a deposit of two months' rent is due. The deposit will be refunded after the end of the tenancy and proper return of the room, minus any damage claims.",
    "agb.rules.title": "§ 5 House Rules",
    "agb.rules.text": "The tenant agrees to comply with the house rules. This includes in particular observing quiet hours, participating in the cleaning schedule, and treating common rooms and furnishings with care. Violations of the house rules may result in a warning and, in case of repeated offenses, immediate termination.",
    "agb.furnishing.title": "§ 6 Furnishing & Inventory",
    "agb.furnishing.text": "The rooms are rented furnished. The inventory is recorded in a handover protocol upon move-in. The tenant is liable for damage to the inventory. Removing or replacing furniture requires the landlord's consent.",
    "agb.liability.title": "§ 7 Liability",
    "agb.liability.text": "The landlord is not liable for damage to tenants' personal property unless the damage was caused by gross negligence or intent on the part of the landlord. The tenant is required to take out private liability insurance.",
    "agb.final.title": "§ 8 Final Provisions",
    "agb.final.text": "Should individual provisions of these terms be invalid, the validity of the remaining provisions shall not be affected. German law applies. The place of jurisdiction is Bremen. As of: March 2026."
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
  if (typeof populateCountries === 'function') {
    populateCountries();
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
