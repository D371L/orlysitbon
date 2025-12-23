import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source directory - check if it exists, otherwise skip (for CI/CD)
const sourceDir = process.env.ASSETS_SOURCE_DIR || '/home/d371l/Desktop/assets';
const targetDir = path.join(__dirname, 'public', 'assets');

// Mapping from Hebrew folder names to English folder names
const folderMapping = {
  'מוצרים מתוק': 'sweet-products',
  'מוצרים מלוח': 'salty-products',
  'מגשי ארוח': 'meal-trays',
  'מארזים מושלמים': 'perfect-packages',
};

// Copy directories recursively with renaming
function copyDir(src, dest, mapping = null) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    
    // Use mapped name if available, otherwise use original name
    const targetName = mapping && mapping[entry.name] ? mapping[entry.name] : entry.name;
    const destPath = path.join(dest, targetName);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  if (!fs.existsSync(sourceDir)) {
    console.warn(`Source directory does not exist: ${sourceDir}`);
    console.warn('Skipping asset copy (assets should already be in public/assets/)');
    // Check if target directory already has assets
    if (fs.existsSync(targetDir)) {
      const existingFiles = fs.readdirSync(targetDir);
      if (existingFiles.length > 0) {
        console.log('Assets already exist in public/assets/, skipping copy.');
        process.exit(0);
      }
    }
    // Create empty target directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    process.exit(0);
  }
  
  // Clean target directory first
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
  }
  fs.mkdirSync(targetDir, { recursive: true });
  
  // Copy all folders with renaming from Hebrew to English
  copyDir(sourceDir, targetDir, folderMapping);
  
  const folders = fs.readdirSync(targetDir).filter(item => 
    fs.statSync(path.join(targetDir, item)).isDirectory()
  );
  
  const files = fs.readdirSync(targetDir).filter(item => 
    fs.statSync(path.join(targetDir, item)).isFile()
  );
  
  console.log('Assets copied successfully!');
  console.log(`Copied to: ${targetDir}`);
  console.log('Folders:', folders.join(', '));
  if (files.length > 0) {
    console.log('Files:', files.join(', '));
  }
} catch (error) {
  console.error('Error copying assets:', error);
  process.exit(1);
}

