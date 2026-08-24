# Invitación de boda

Página estática sencilla (HTML/CSS/JS, sin frameworks) con los datos de la boda, mapa de ubicación y música de fondo. Incluye un script para generar el código QR que apunta a la página publicada.

## 1. Editar los datos

Abre `index.html` y reemplaza los textos entre corchetes:

- `[Nombre 1]`, `[Nombre 2]` — nombres de los novios (aparecen varias veces).
- `[Día de la semana], [DD de Mes de AAAA]` y `[HH:MM h]` — fecha y hora.
- `[Nombre del lugar]`, `[Dirección completa del lugar]` — se usa tanto en el texto como en las dos URLs del mapa (`src` del iframe y `href` del botón "Cómo llegar"). Sustitúyela en las tres ubicaciones.
- Horarios de la sección "Detalles del día" y el código de vestimenta.

## 2. Añadir música de fondo

Coloca un archivo `music.mp3` (una pista libre de derechos que tú elijas) en la carpeta `assets/`. El botón circular arriba a la derecha la reproduce/pausa; no suena automáticamente porque los navegadores bloquean el autoplay con sonido.

## 3. Ver la página en local

Abre `index.html` directamente en el navegador con doble clic, o sirve la carpeta con cualquier servidor estático, por ejemplo:

```
npx serve .
```

## 4. Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `invitacion-boda`), vacío, sin README.
2. En esta carpeta:
   ```
   git init
   git add .
   git commit -m "Invitación de boda"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/invitacion-boda.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages**, en "Source" elige la rama `main` y carpeta `/root`, guarda.
4. Tu página quedará publicada en `https://<tu-usuario>.github.io/invitacion-boda/` (tarda uno o dos minutos en activarse).

## 5. Generar el código QR

Con la URL de Pages ya activa:

```
npm install
npm run qr -- https://<tu-usuario>.github.io/invitacion-boda/
```

Esto genera `assets/qr.png`, listo para imprimir o compartir. Si cambias la URL en el futuro, vuelve a ejecutar el comando para regenerarlo.
