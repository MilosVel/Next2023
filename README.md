sve u app folderu predstavlja server components

svaka komponenta u layout.jsx je vidljiva u celokupnoj aplikcaiji (pogodno je za navbar i redux-toolkit wrapper)

page.jsx se prikazuje na localhost:3000

kada hocemo neku komponentu da koristimo na klijen strani koristimo 'use client'
kada u nekoj komponenti imamo neku react hook (useState, useEffect itd) onda u toj komponeti obavezno koristimo 'use client', ostale komponente u app folderu po defaultu su server komponente


Za autentifikaciju su veznani sledeci fajlovi: layout.jsx, Provider.jsx, route.js (u auth/[next]/route.js), user.js, Nav.jsx, database.js