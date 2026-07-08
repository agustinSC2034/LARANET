const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'assets', 'img');
const files = fs.readdirSync(imgDir);

const convertToWebp = async (file) => {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const inputPath = path.join(imgDir, file);
  const outputPath = path.join(imgDir, path.basename(file, ext) + '.webp');

  console.log(`Convirtiendo: ${file} -> ${path.basename(outputPath)}`);
  await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);

  const origSize = fs.statSync(inputPath).size;
  const newSize = fs.statSync(outputPath).size;
  const savings = ((1 - newSize / origSize) * 100).toFixed(1);
  console.log(`  ${(origSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (${savings}% menos)`);
};

(async () => {
  for (const file of files) {
    await convertToWebp(file);
  }
  console.log('\nConversion completada.');
})();
