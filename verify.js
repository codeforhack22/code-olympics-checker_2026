const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n').filter(l => l.trim());
const loops = html.match(/\b(for|while|do)\b/g) || [];

console.log('=== Code Olympics Constraint Verification ===\n');
console.log('File: index.html');
console.log('Total lines:', lines.length);
console.log('Line budget: 300');
console.log('Status:', lines.length <= 300 ? '✅ PASS' : '❌ FAIL');
console.log('\nLoops found:', loops.length);
console.log('Loop budget: 1');
console.log('Status:', loops.length <= 1 ? '✅ PASS' : '❌ FAIL');

if (loops.length > 0) {
  console.log('\nLoop details:');
  loops.forEach((l, i) => console.log(`  ${i + 1}. "${l}"`));
}

console.log('\n=== Summary ===');
if (lines.length <= 300 && loops.length <= 1) {
  console.log('✅ SUBMISSION READY - All constraints satisfied!');
} else {
  console.log('❌ FIX REQUIRED - Constraints violated');
}
