const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

console.log('Lines containing loop keywords:\n');
lines.forEach((line, i) => {
  if (/\b(for|while|do)\b/.test(line)) {
    console.log(`Line ${i + 1}: ${line.trim().substring(0, 100)}`);
  }
});
