// Convertit les images de public/ en WebP redimensionné.
// Les originaux sont déplacés dans images-originales/ (hors du site).
// Usage : node scripts/optimize-images.cjs
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const ORIGINALS_DIR = path.join(__dirname, "..", "images-originales");
const EXT = /\.(png|jpe?g|gif)$/i;

// Sous Windows, le cache de sharp garde les fichiers ouverts et bloque leur déplacement
sharp.cache(false);

// Largeur max selon l'usage de l'image
function maxWidth(rel) {
  if (/page_presidente_section\/(unicef|ums|jfl|frontline)\./.test(rel)) return 600; // logos partenaires
  if (/conseil_img\//.test(rel)) return 800; // portraits
  if (/\.gif$/i.test(rel)) return 800; // animation enveloppe
  return 1920; // fonds et photos
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : EXT.test(e.name) ? [p] : [];
  });
}

(async () => {
  const files = walk(PUBLIC_DIR);
  const taken = new Set();
  let before = 0;
  let after = 0;

  for (const file of files) {
    const rel = path.relative(PUBLIC_DIR, file).split(path.sep).join("/");
    let out = file.replace(EXT, ".webp");
    // Deux sources avec le même nom (ex. photo.png et photo.jpg) : suffixe l'extension
    if (taken.has(out)) out = file.replace(EXT, (m) => `-${m.slice(1).toLowerCase()}.webp`);
    taken.add(out);

    const animated = /\.gif$/i.test(file);
    await sharp(file, { animated })
      .rotate()
      .resize({ width: maxWidth(rel), withoutEnlargement: true })
      .webp({ quality: animated ? 70 : 80, effort: 5 })
      .toFile(out);

    const a = fs.statSync(file).size;
    const b = fs.statSync(out).size;
    before += a;
    after += b;

    const dest = path.join(ORIGINALS_DIR, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(file, dest);
    fs.unlinkSync(file);

    console.log(`${(a / 1024).toFixed(0).padStart(6)} Ko -> ${(b / 1024).toFixed(0).padStart(5)} Ko  ${rel}`);
  }

  console.log(`\nTOTAL ${(before / 1048576).toFixed(1)} Mo -> ${(after / 1048576).toFixed(1)} Mo (${files.length} images)`);
})();
