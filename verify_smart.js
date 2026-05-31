git branch -M main
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n').filter(l => l.trim());

// Extract just the JavaScript code
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
const jsCode = scriptMatch ? scriptMatch[1] : '';

// Remove string literals and regex literals to avoid false positives
const cleanedCode = jsCode
  .replace(/'[^']*'/g, '""')  // Remove single-quoted strings
  .replace(/"[^"]*"/g, '""')  // Remove double-quoted strings
  .replace(/`[^`]*`/g, '""')  // Remove template literals
  .replace(/\/[^\/\n]+\/[gim]*/g, '//'); // Remove regex literals

// Now count actual loops
const loops = cleanedCode.match(/\b(for|while|do)\s*\(/g) || [];

console.log('=== Code Olympics Constraint Verification ===\n');
console.log('File: index.html');
console.log('Total lines:', lines.length);
console.log('Line budget: 300');
console.log('Status:', lines.length <= 300 ? '✅ PASS' : '❌ FAIL');
console.log('\nActual loops in code:', loops.length);
console.log('Loop budget: 1');
console.log('Status:', loops.length <= 1 ? '✅ PASS' : '❌ FAIL');

if (loops.length > 0) {
  console.log('\nLoop details:');
  loops.forEach((l, i) => console.log(`  ${i + 1}. "${l}"`));
}

console.log('\n=== Constraint Details ===');
console.log('D1: One-Loop Warrior (max 1 loop)');
console.log('D2: Detailed Creator (300 lines)');
console.log('D3: Data Processing');
console.log('D4: JavaScript');

console.log('\n=== Summary ===');
if (lines.length <= 300 && loops.length <= 1) {
  console.log('✅ SUBMISSION READY - All constraints satisfied!');
} else {
  console.log('❌ FIX REQUIRED - Constraints violated');
}
