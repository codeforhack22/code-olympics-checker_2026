# 🔗 Code Olympics 2026 GitHub Scanner

## 📋 Overview

A **browser-based constraint validation tool** that scans entire GitHub repositories and validates them against Code Olympics 2026's 4D constraint system. Built as a meta-compliant submission that follows the same constraints it validates.

**Live Demo:** https://code-olympics-checker-2026-oao5.vercel.app/

---

## 🎯 What It Does

This tool automatically:
1. **Fetches entire GitHub repositories** via GitHub API
2. **Scans all source files** (.js, .ts, .py, .go, .rs, .rb, .c, .java, .sh, .php)
3. **Validates against 4D constraints** in real-time
4. **Shows detailed results** with pass/fail status and exact violations

---

## 🌟 Key Features

### 1. **GitHub Repository Scanner**
- Enter any GitHub repo URL (e.g., `github.com/owner/repo`)
- Automatically fetches all source files from the repository
- Progress bar shows scanning status
- Handles multiple file types across different languages

### 2. **Complete 4D Constraint Validation**

**D1: Core Constraints** (8 options)
- ✓ No-Import Rookie - Detects import/require statements
- ✓ Few-Variable Hero - Counts unique variables (max 8)
- ✓ Single-Function Master - Counts function definitions (max 1)
- ✓ Error-Proof Coder - Detects error handling
- ✓ One-Loop Warrior - Counts loops (max 1)
- ✓ Short-Name Ninja - Checks variable name length (max 3 chars)
- ✓ Fast-Response Builder - Validates response time
- ✓ Simple-State Creator - Checks state management

**D2: Line Budget** (7 options)
- 50, 100, 150, 200, 300, 400, 500 lines
- Counts non-empty lines only
- Shows exact line count and budget usage

**D3: Project Domain** (10 options)
- Games, Tools, Text, Numbers, Files, Quiz, Visual, Database, Data, System
- Informational validation

**D4: Language** (20 options)
- Python, JavaScript, TypeScript, Go, Rust, Ruby, C, C++, C#, Java
- Kotlin, Swift, Objective-C, Bash, PHP, Perl, Lua, Scala, Haskell, Elixir
- Language-specific pattern detection

### 3. **Real-Time Results**
- ✅ **READY** - All constraints passed
- ❌ **FIX REQUIRED** - One or more constraints failed
- ⚠️ **MOSTLY READY** - Some constraints unverified

### 4. **Detailed Violation Reports**
- Shows exact number of violations
- Highlights which constraint failed
- Provides actionable feedback

---

## 🏆 The Meta-Angle

**This tool is itself constraint-compliant!**

It validates Code Olympics constraints while demonstrating them:

| Constraint | Requirement | This Tool | Status |
|-----------|-------------|-----------|--------|
| **D1** | One-Loop Warrior | 0 loops | ✅ PASS |
| **D2** | Line Budget | 291/300 lines | ✅ PASS |
| **D3** | Data Processing | Full pipeline | ✅ PASS |
| **D4** | JavaScript | Async-first | ✅ PASS |

### How It Achieves Zero Loops:
- Uses `Promise.all()` for parallel file fetching
- Uses `.map()`, `.filter()`, `.every()`, `.some()` for array operations
- Uses async/await for sequential operations
- Pure functional programming approach

### Data Processing Pipeline:
```
Input (GitHub URL)
  ↓
Fetch repository tree (GitHub API)
  ↓
Filter source files (.js, .py, etc)
  ↓
Fetch file contents in parallel (Promise.all)
  ↓
Parse & combine code
  ↓
Transform data (regex patterns, line counting)
  ↓
Validate constraints (runChecks)
  ↓
Render results (pass/fail/unverified)
```

---

## 💡 Why This Tool Stands Out

### 1. **Genuinely Useful**
Every Code Olympics participant needs constraint validation. This tool automates what would otherwise be manual checking.

### 2. **Unique Feature: GitHub Scanning**
Unlike paste-code validators, this tool:
- Scans entire repositories
- Handles multiple files automatically
- Works with any public GitHub repo
- No copy-paste needed

### 3. **Meta-Compliant**
The tool proves its own constraints by example:
- Zero loops → Uses functional programming
- 291 lines → Highly optimized code
- Data processing → Full validation pipeline
- JavaScript → Pure, async-first implementation

### 4. **Zero Dependencies**
- Single HTML file
- No npm packages
- No build tools
- Runs directly in any browser
- Works offline (after initial load)

### 5. **Professional UX**
- Clean, modern interface
- Responsive design (mobile-friendly)
- Smooth animations
- Progress indicators
- Clear visual feedback

---

## 🔧 Technical Implementation

### Architecture
- **Frontend:** Pure HTML5 + CSS3 + Vanilla JavaScript
- **API:** GitHub REST API v3
- **Parsing:** Regex-based pattern matching
- **Async:** Promise.all for parallel operations
- **Deployment:** Vercel (auto-deploy on push)

### Key Technologies
- **Fetch API** - HTTP requests
- **Promise.all** - Parallel file fetching
- **Regex** - Code pattern detection
- **Base64 decoding** - GitHub content parsing
- **CSS Grid** - Responsive layout

### Constraint Detection Methods

| Constraint | Detection Method |
|-----------|------------------|
| Loops | Regex: `/\b(for\|while\|do)\b/g` |
| Imports | Regex: `/\b(import\|require)\b/g` |
| Variables | Regex: `/\b(let\|const\|var)\s+([a-z_$][\w$]*)/gi` |
| Functions | Regex: `/\bfunction\b\|\=\>/gm` |
| Line Count | `code.split('\n').filter(l => l.trim()).length` |

---

## 🎨 User Experience

### Simple 3-Step Process:
1. **Enter GitHub URL** - Paste any public repo URL
2. **Select 4D Combo** - Choose your constraint combination
3. **Click Scan** - Get instant validation results

### Visual Feedback:
- 🟢 Green = Pass
- 🔴 Red = Fail
- 🟡 Yellow = Unverified/Informational

### Progress Tracking:
- Shows "Fetching repository..."
- Displays "Scanning X/Y files..."
- Updates progress bar in real-time

---

## 🚀 Use Cases

### For Participants:
- Validate your submission before submitting
- Check if you're meeting all constraints
- Debug constraint violations
- Test different constraint combinations

### For Organizers:
- Quick validation of submissions
- Automated constraint checking
- Reduce manual review time
- Consistent validation across all submissions

### For Learners:
- Understand Code Olympics constraints
- See examples of constraint-compliant code
- Learn functional programming patterns
- Study zero-loop implementations

---

## 📊 Performance

- **Scan Speed:** ~2-5 seconds for typical repos
- **File Limit:** Handles repos with 100+ files
- **Parallel Fetching:** Multiple files fetched simultaneously
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)

---

## 🎯 Target Audience

1. **Code Olympics 2026 Participants** - Primary users
2. **Competition Organizers** - Validation tool
3. **Developers Learning Constraints** - Educational resource
4. **Functional Programming Enthusiasts** - Example implementation

---

## 🔮 Future Enhancements (Post-Competition)

- Support for private repositories (OAuth)
- Batch validation (multiple repos)
- Export validation reports (PDF/JSON)
- Historical tracking (save past validations)
- Custom constraint definitions
- Integration with CI/CD pipelines

---

## 📈 Impact

### Problem Solved:
Manual constraint checking is:
- Time-consuming
- Error-prone
- Inconsistent
- Tedious

### Solution Provided:
Automated validation that is:
- Instant (2-5 seconds)
- Accurate (regex-based detection)
- Consistent (same rules for everyone)
- Easy (3-step process)

---

## 🏅 Competition Advantages

### Bonus Challenges Met:
- ✅ **+5 Cross-Constraint Combo** - One-Loop + Data Processing forces functional design
- ✅ **+3 Language Love Letter** - Demonstrates JavaScript's async-first capabilities

### Unique Selling Points:
1. **Only tool that scans GitHub repos** - Others require copy-paste
2. **Meta-compliant** - Validates constraints while following them
3. **Zero dependencies** - Single file, runs anywhere
4. **Professional quality** - Production-ready UX

---

## 📝 Summary

**Code Olympics 2026 GitHub Scanner** is a constraint validation tool that:
- Scans entire GitHub repositories automatically
- Validates all 4D constraints in real-time
- Provides detailed violation reports
- Is itself constraint-compliant (meta-validation)
- Requires zero setup (single HTML file)
- Works in any modern browser

**Built for Code Olympics 2026 by developers, for developers.**

---

## 🔗 Links

- **Live Demo:** https://code-olympics-checker-2026-oao5.vercel.app/
- **GitHub Repo:** https://github.com/codeforhack22/code-olympics-checker_2026
- **Documentation:** README.md
- **Verification:** CONSTRAINT_VERIFICATION.md

---

**Status:** ✅ Ready for Submission  
**Constraints:** ✅ All Met (0 loops, 291 lines, full pipeline, pure JS)  
**Deployment:** ✅ Live on Vercel  
**License:** MIT
