const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔨 Building production version...');

// Read the source HTML
const html = fs.readFileSync('index.html', 'utf8');

// Extract the script content (between <script type="text/babel"> tags)
const scriptMatch = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error('❌ Could not find script tag');
  process.exit(1);
}

const scriptContent = scriptMatch[1];

// Compile JSX with Babel
console.log('📦 Compiling JSX...');
try {
  const babel = require('@babel/core');
  const compiled = babel.transformSync(scriptContent, {
    presets: ['@babel/preset-react'],
    minified: true,
    comments: false,
  });
  
  if (!compiled || !compiled.code) {
    throw new Error('Babel compilation failed');
  }

  // Build Tailwind CSS
  console.log('🎨 Building Tailwind CSS...');
  execSync('npx tailwindcss -i ./input.css -o ./output.css --minify', { stdio: 'inherit' });
  
  // Read the compiled CSS
  const css = fs.readFileSync('output.css', 'utf8');
  
  // Create production HTML
  const productionHtml = html
    .replace(/<script src="https:\/\/unpkg.com\/react@18\/umd\/react\.development\.js"><\/script>/g, 
             '<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>')
    .replace(/<script src="https:\/\/unpkg.com\/react-dom@18\/umd\/react-dom\.development\.js"><\/script>/g, 
             '<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>')
    .replace(/<script src="https:\/\/unpkg.com\/@babel\/standalone\/babel\.min\.js"><\/script>/g, '')
    .replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/g, '')
    .replace(/<script type="text\/babel">[\s\S]*?<\/script>/, 
             `<script>${compiled.code}</script>`)
    .replace(/<\/head>/, `  <style>${css}</style>\n</head>`);
  
  // Write production HTML
  fs.writeFileSync('index.production.html', productionHtml);
  
  // Clean up
  fs.unlinkSync('output.css');
  
  console.log('✅ Build complete! Output: index.production.html');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
