import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = '/home/d371l/Desktop/assets';

// Mapping from Hebrew folder names to English folder names
const folderMapping = {
  'מוצרים מתוק': 'sweet-products',
  'מוצרים מלוח': 'salty-products',
  'מגשי ארוח': 'meal-trays',
  'מארזים מושלמים': 'perfect-packages',
};

try {
  if (!fs.existsSync(assetsDir)) {
    console.error(`Assets directory does not exist: ${assetsDir}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(assetsDir, { withFileTypes: true });
  let renamed = 0;

  for (const entry of entries) {
    if (entry.isDirectory() && folderMapping[entry.name]) {
      const oldPath = path.join(assetsDir, entry.name);
      const newPath = path.join(assetsDir, folderMapping[entry.name]);
      
      if (fs.existsSync(newPath)) {
        console.log(`Folder already exists: ${folderMapping[entry.name]}`);
      } else {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${entry.name} -> ${folderMapping[entry.name]}`);
        renamed++;
      }
    }
  }

  console.log(`\nRenamed ${renamed} folders.`);
  console.log('\nCurrent folders:');
  const folders = fs.readdirSync(assetsDir).filter(item => 
    fs.statSync(path.join(assetsDir, item)).isDirectory()
  );
  folders.forEach(folder => console.log(`  - ${folder}`));
} catch (error) {
  console.error('Error renaming folders:', error);
  process.exit(1);
}

