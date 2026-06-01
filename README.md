# 🔗 Code Olympics 2026 GitHub Scanner

**Live Demo:** https://code-olympics-checker-2026-oao5.vercel.app/

A browser-based constraint validator that **scans entire GitHub repositories** and validates them against Code Olympics 2026's 4D constraint system. Built as a meta-compliant submission that follows the same constraints it validates.

## 🎯 What It Does

- **Scans GitHub repositories** - Enter any repo URL, get instant validation
- **Validates all 4D constraints** - D1 (8 options), D2 (7 line budgets), D3 (10 domains), D4 (20 languages)
- **Real-time results** - Pass/fail status with detailed violation reports
- **Zero setup** - Single HTML file, runs in any browser

## 🏆 The Meta-Angle

This tool **is itself constraint-compliant**:
- ✅ **One-Loop Warrior** — 0 loops (uses `Promise.all`, `.map()`, `.filter()`)
- ✅ **291 Lines** — Under 300-line budget
- ✅ **Data Processing** — Full validation pipeline (fetch → parse → validate → render)
- ✅ **JavaScript** — Pure JS, async-first, prototype-based

## ✨ Features

### GitHub Repository Scanner
- Enter any GitHub repo URL (e.g., `github.com/owner/repo`)
- Automatically fetches and scans all source files
- Supports 10+ file types (.js, .ts, .py, .go, .rs, .rb, .c, .java, .sh, .php)
- Progress bar shows real-time scanning status

### Complete 4D Validation
- **D1:** 8 constraint options (No-Import, Few-Variable, Single-Function, Error-Proof, One-Loop, Short-Name, Fast-Response, Simple-State)
- **D2:** 7 line budgets (50, 100, 150, 200, 300, 400, 500)
- **D3:** 10 project domains (Games, Tools, Text, Numbers, Files, Quiz, Visual, Database, Data, System)
- **D4:** 20 languages (Python, JavaScript, TypeScript, Go, Rust, Ruby, C, C++, C#, Java, Kotlin, Swift, Objective-C, Bash, PHP, Perl, Lua, Scala, Haskell, Elixir)

### Real-Time Results
- ✅ **READY** - All constraints passed
- ❌ **FIX REQUIRED** - Violations detected
- ⚠️ **MOSTLY READY** - Some constraints unverified
- Detailed violation messages with exact counts

## 🚀 How to Use

1. **Open** https://code-olympics-checker-2026-oao5.vercel.app/
2. **Enter** your GitHub repository URL
3. **Select** your 4D constraint combination
4. **Click** "🔍 Scan" button
5. **Review** results with detailed violation reports

## 💡 Why This Tool Wins

1. **Unique Feature** — Only tool that scans entire GitHub repos (no copy-paste needed)
2. **Meta-Compliant** — Validates constraints while demonstrating them
3. **Zero Setup** — Single HTML file, runs in any browser
4. **Complete Coverage** — All 4D constraints automated
5. **Professional UX** — Clean design, progress tracking, clear feedback

## 🔧 Technical Implementation

### Zero-Loop Architecture
Replaced traditional loops with functional programming:
```javascript
// Instead of: for (let i = 0; i < files.length; i++)
// We use: Promise.all(files.map((f, i) => fetchFile(f, i)))
```

### Data Processing Pipeline
```
GitHub URL → Fetch Tree → Filter Files → Fetch Contents (parallel)
→ Parse Code → Validate Constraints → Render Results
```

### Constraint Detection
- **Loops:** Regex `/\b(for|while|do)\b/g`
- **Imports:** Regex `/\b(import|require)\b/g`
- **Variables:** Regex `/\b(let|const|var)\s+([a-z_$][\w$]*)/gi`
- **Functions:** Regex `/\bfunction\b|\=\>/gm`
- **Lines:** `code.split('\n').filter(l => l.trim()).length`

## 📁 Repository Structure

```
├── index.html                      # Main tool (291 lines, 0 loops)
├── README.md                       # This file
├── CONSTRAINT_VERIFICATION.md      # Detailed constraint proof
├── TOOL_DESCRIPTION.md            # Complete tool documentation
├── FINAL_SUBMISSION_STATUS.md     # Submission checklist
├── LICENSE                        # MIT License
└── .github/workflows/
    └── constraint-check.yml       # GitHub Actions CI
```

## 📊 Constraint Verification

| Constraint | Requirement | This Tool | Status |
|-----------|-------------|-----------|--------|
| **D1: One-Loop Warrior** | Max 1 loop | 0 loops | ✅ PASS |
| **D2: Line Budget** | Max 300 lines | 291 lines | ✅ PASS |
| **D3: Data Processing** | Full pipeline | Complete | ✅ PASS |
| **D4: JavaScript** | Async-first | Pure JS | ✅ PASS |

**See CONSTRAINT_VERIFICATION.md for detailed proof.**

## 🎯 Use Cases

- **Participants:** Validate submissions before submitting
- **Organizers:** Automated constraint checking
- **Learners:** Study constraint-compliant code examples
- **Developers:** Learn functional programming patterns

## 🔗 Links

- **Live Demo:** https://code-olympics-checker-2026-oao5.vercel.app/
- **GitHub Repo:** https://github.com/codeforhack22/code-olympics-checker_2026
- **Full Documentation:** TOOL_DESCRIPTION.md
- **Constraint Proof:** CONSTRAINT_VERIFICATION.md

## 📄 License

MIT — Use it, modify it, share it.

---

**Built for Code Olympics 2026**  
*A constraint validator that validates constraints while following them.*

🏆 **Status:** Ready for Submission  
✅ **All Constraints Met:** 0 loops, 291 lines, full pipeline, pure JS  
🚀 **Live:** https://code-olympics-checker-2026-oao5.vercel.app/
