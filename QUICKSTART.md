# Quick Start Guide

## Instant Demo (No Installation)

1. **Open `index.html` in any browser**
   - Double-click the file, or
   - Right-click → Open with → Chrome/Firefox/Edge

2. **Paste your code** in the left panel

3. **Select your 4D combo** from the dropdowns:
   - D1: Your core constraint
   - D2: Your line budget
   - D3: Your project domain
   - D4: Your language

4. **Click "Check Constraints"**

5. **Review results:**
   - ✅ Green = PASS
   - ❌ Red = FAIL with exact violations

That's it. Zero dependencies, zero setup.

---

## Example Test Cases

### Test 1: Valid Submission

**Code:**
```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

**Combo:**
- D1: Single-Function Master
- D2: Tiny Scripter (50 lines)
- D3: Basic Tools
- D4: Python

**Expected:** ✅ SUBMISSION READY

---

### Test 2: Line Budget Violation

**Code:** (Paste any 200-line file)

**Combo:**
- D1: No-Import Rookie
- D2: Mini Builder (100 lines)
- D3: Text Processing
- D4: JavaScript

**Expected:** ❌ Line count exceeds budget

---

### Test 3: Multiple Violations

**Code:**
```javascript
import fs from 'fs';

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(i, j);
  }
}
```

**Combo:**
- D1: One-Loop Warrior
- D2: Tiny Scripter (50 lines)
- D3: System Utilities
- D4: JavaScript

**Expected:** 
- ❌ Found 2 loops (max: 1)
- ❌ Found import statement

---

## Validate This Tool Itself

Want to see the meta-validation?

1. Open `index.html` in a text editor
2. Copy the entire file contents
3. Paste into the tool
4. Select:
   - D1: One-Loop Warrior
   - D2: Detailed Creator (300 lines)
   - D3: Data Processing
   - D4: JavaScript
5. Click "Check Constraints"

**Result:** ✅ SUBMISSION READY

The tool validates itself! 🎯

---

## Deploy to GitHub Pages (Optional)

Want a live link instead of a local file?

```bash
# 1. Create a new repo on GitHub

# 2. In this directory:
git init
git add index.html README.md SELF_ASSESSMENT.md
git commit -m "Code Olympics 2026 Constraint Checker"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# 3. Enable GitHub Pages:
#    - Go to repo Settings
#    - Click "Pages" in sidebar
#    - Source: Deploy from main branch
#    - Click Save

# 4. Your live link (available in ~1 minute):
#    https://YOUR_USERNAME.github.io/YOUR_REPO/
```

Share the link with anyone — they can validate their Code Olympics submissions instantly.

---

## Troubleshooting

### "Nothing happens when I click Check Constraints"

- **Check browser console** (F12 → Console tab)
- Make sure JavaScript is enabled
- Try a different browser

### "Results show false positives"

- The tool uses regex-based detection (lexical, not semantic)
- It may flag keywords in comments or strings
- See `SELF_ASSESSMENT.md` for known limitations

### "My language isn't detecting correctly"

- Make sure you selected the right language in D4 dropdown
- Some languages have similar syntax (JS vs TS, C vs Java)
- The tool uses heuristics, not full parsers

### "Line count seems wrong"

- The tool counts **non-empty lines after trimming**
- Comments count as lines
- Blank lines don't count
- See README for line counting methodology

---

## What's Included

- `index.html` — The complete tool (HTML + CSS + JS inline)
- `README.md` — Full documentation and approach
- `SELF_ASSESSMENT.md` — Honest limitations and learnings
- `SUBMISSION_CHECKLIST.md` — Pre-submission verification
- `DEMO_SCRIPT.md` — Video walkthrough guide
- `verify_smart.js` — Automated constraint verification
- `QUICKSTART.md` — This file

---

## Support

This is a Code Olympics 2026 submission. For questions or issues:

1. Check `README.md` for detailed documentation
2. Check `SELF_ASSESSMENT.md` for known limitations
3. Open an issue on GitHub (if repo is public)

---

## License

MIT — Use it, modify it, share it.

Built for Code Olympics 2026. 🏆

---

**72 hours. Four constraints. One loop. Start checking.** ✅
