import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgPath = path.join(__dirname, '../public/favicon.svg');
const icoPath = path.join(__dirname, '../public/favicon.ico');

async function createIco() {
  const svgBuffer = fs.readFileSync(svgPath);
  // Generate 48x48 PNG buffer (Google's standard favicon size)
  const png48 = await sharp(svgBuffer).resize(48, 48).toFormat('png').toBuffer();
  
  // Write favicon.ico
  fs.writeFileSync(icoPath, png48);
  console.log('favicon.ico created successfully!');
}

createIco().catch(console.error);
