const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const rootDir = path.join(__dirname, '..');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Source directory does not exist: ${src}`);
    return;
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Skip node_modules and .git directories
      if (entry.name === 'node_modules' || entry.name === '.git') {
        continue;
      }
      copyDir(srcPath, destPath);
    } else {
      // Skip .gitignore and other config files that shouldn't be in root
      if (entry.name === '.gitignore' || entry.name === '.git') {
        continue;
      }
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Files/directories to exclude from root
const excludeFromRoot = [
  'node_modules',
  '.git',
  '.next',
  'app',
  'components',
  'content',
  'lib',
  'public',
  'scripts',
  'dist',
  'docs',
  '.gitignore',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'next.config.ts',
  'tailwind.config.ts',
  'postcss.config.mjs',
  'README.md',
  'next-env.d.ts',
  'FAVICON_SETUP.md',
];

// Clean root directory (remove old build files, but keep source files)
console.log('Cleaning root directory...');
const rootEntries = fs.readdirSync(rootDir, { withFileTypes: true });

for (const entry of rootEntries) {
  const entryPath = path.join(rootDir, entry.name);
  
  // Skip source directories and files
  if (excludeFromRoot.includes(entry.name)) {
    continue;
  }

  // Remove old build artifacts
  if (entry.isDirectory()) {
    if (entry.name === '_next' || entry.name === '404' || entry.name === 'partners' || entry.name === 'speakers') {
      fs.rmSync(entryPath, { recursive: true, force: true });
      console.log(`Removed: ${entry.name}/`);
    }
  } else {
    if (entry.name.endsWith('.html') || entry.name.endsWith('.txt') || 
        entry.name === 'index.html' || entry.name === '404.html' ||
        entry.name === 'sitemap.xml' || entry.name === 'robots.txt' ||
        entry.name === 'site.webmanifest' || entry.name === 'opengraph-image' ||
        entry.name === 'icon.svg' || entry.name === 'CNAME') {
      fs.unlinkSync(entryPath);
      console.log(`Removed: ${entry.name}`);
    }
  }
}

// Copy out directory to root
console.log('Copying build files from out/ to root...');
if (fs.existsSync(outDir)) {
  copyDir(outDir, rootDir);
  console.log('✓ Build files copied successfully!');
} else {
  console.error('✗ Build directory (out/) does not exist. Run "npm run build" first.');
  process.exit(1);
}

console.log('✓ Deployment files ready in root directory!');
