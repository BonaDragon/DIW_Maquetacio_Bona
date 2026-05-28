# DIW_Maquetacio_Bona

Projecte de **Disseny d'Interfícies Web** — RA4. Elements multimèdia.  
Inclou transicions, animacions CSS i control de vídeo amb JavaScript.

---

## Exercici 1 — Transicions

### 1.1 Transició de les imatges de la galeria
Hover sobre cada imatge de la galeria: aplica `scale`, `rotate` i `grayscale`.  
L'element pare té `overflow: hidden` per evitar que la imatge surti del seu marc.  
📄 `style.css` → selector `.galeria__img` i `.galeria__img:hover`

<img width="608" height="150" alt="Transició galeria" src="https://github.com/user-attachments/assets/ff3515c8-3678-47a0-baee-aa5fc4a1e3c9" />

### 1.2 Transició lliure del navbar (3 propietats)
En fer scroll, el navbar es redueix mitjançant la classe `.navbar--petit`.  
Propietats animades: `padding`, `font-size` i `box-shadow`.  
📄 `style.css` → selector `.navbar` i `.navbar--petit`

---

## Exercici 2 — Animacions

### 2.1 Animació del text de la capçalera (hero)
En carregar la pàgina, el text apareix des de baix, passa per un color taronja i acaba blanc.  
Usa `@keyframes entradaText` amb `animation-fill-mode: forwards`.  
📄 `style.css` → `@keyframes entradaText`, selectors `.hero__title` i `.hero__subtitle`

<img width="916" height="415" alt="Animació hero" src="https://github.com/user-attachments/assets/5fa3cb7a-0cd0-44bc-8aec-e990a2b311af" />

### 2.2 Animació de les imatges "Sobre nosaltres" (4 frames, 3 propietats)
En carregar la pàgina, les imatges rodones apareixen amb un efecte d'escala i desaturació progressiva.  
Usa `@keyframes entradaImatge` amb 4 frames (0%, 33%, 66%, 100%) i les propietats `opacity`, `transform` i `filter`.  
📄 `style.css` → `@keyframes entradaImatge`, selector `.sobre__img`

<img width="732" height="181" alt="Animació sobre nosaltres" src="https://github.com/user-attachments/assets/b98fa317-51e2-402e-9a70-b36124c63df3" />

---

## Exercici 3 — Vídeo/Àudio HTML

### 3.1 Vídeo amb controls per defecte
El vídeo és responsive, centrat, i per defecte està **parat**, **silenciat** i amb els **controls visibles**.  
📄 `index.html` → secció `#video`, element `<video>`

<img width="730" height="137" alt="Vídeo amb controls" src="https://github.com/user-attachments/assets/d5b99ec3-f40c-4212-b0dc-1ad81434efd9" />

---

## Exercici 4 — Vídeo/Àudio amb icones pròpies

### 4.1 Vídeo amb autoplay i silenciat, sense controls natius
Controls natius desactivats. El vídeo s'inicia automàticament i silenciat mitjançant els atributs `autoplay` i `muted` de l'HTML.  
📄 `index.html` → element `<video id="video-restaurant" muted autoplay>`

<img width="685" height="133" alt="Vídeo sense controls natius" src="https://github.com/user-attachments/assets/47e53a06-f125-467d-9a6e-876940740996" />

### 4.2 Icones de Google Material Icons i control via JavaScript
Icones importades des de Google Fonts. Capa semitransparent sobre el vídeo amb els botons de play, pause, volum i silenci. Efecte `shadow` en hover (CSS). Funcions de control implementades en JavaScript.  
📄 `index.html` → `.video-controls`  
📄 `style.css` → `.video-controls`, `.video-btn`, `.video-btn:hover`  
📄 `video.js` → EX4

<img width="852" height="56" alt="Icones de control" src="https://github.com/user-attachments/assets/de084e19-ca84-4e8d-865f-065c9dc6b944" />

<img width="1070" height="386" alt="Controls sobre el vídeo" src="https://github.com/user-attachments/assets/42e368d8-ffe6-4c2a-8109-f7df376e3442" />

<img width="827" height="267" alt="Vista general vídeo amb controls propis" src="https://github.com/user-attachments/assets/2c149082-d7f1-41a2-a260-b7c9e2c9dc58" />

---

## Exercici 5 — JavaScript amb Scroll

### 5.1 Shrink del navbar en fer scroll
En superar els 80px de scroll, s'afegeix la classe `.navbar--petit` que redueix el padding i la mida del text mitjançant una transició CSS.  
📄 `video.js` → `window.onscroll`, EX5  
📄 `style.css` → `.navbar--petit`

<img width="557" height="211" alt="Navbar shrink en scroll" src="https://github.com/user-attachments/assets/f4ae378b-af4c-423d-a366-c5221653c7f1" />
