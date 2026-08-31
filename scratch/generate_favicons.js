import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgPath = path.join(__dirname, '../public/favicon.svg');
const publicDir = path.join(__dirname, '../public');

async function generate() {
  const svgBuffer = fs.readFileSync(svgPath);

  // 1. Standard 512x512 favicon.png & logo.png
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  // 2. Google Favicon 48x48
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon-48x48.png'));

  // 3. 32x32 and 16x16
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  // 4. Apple Touch Icon 180x180
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 5. OpenGraph Card 1200x630
  const logoSquare = await sharp(svgBuffer).resize(400, 400).toBuffer();
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 248, g: 249, b: 252, alpha: 1 } // #F8F9FC
    }
  })
    .composite([{ input: logoSquare, top: 115, left: 400 }])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));

  console.log('All favicons and logos generated successfully!');
}

generate().catch(console.error);
