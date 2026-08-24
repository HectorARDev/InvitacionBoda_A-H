const QRCode = require('qrcode');
const path = require('path');

const url = process.argv[2];

if (!url) {
  console.error('Uso: node tools/generate-qr.js <url-de-la-pagina>');
  process.exit(1);
}

const outPng = path.join(__dirname, '..', 'assets', 'qr.png');

QRCode.toFile(outPng, url, { width: 512, margin: 2 }, (err) => {
  if (err) {
    console.error('Error generando el QR:', err);
    process.exit(1);
  }
  console.log(`QR generado en ${outPng} apuntando a: ${url}`);
});
