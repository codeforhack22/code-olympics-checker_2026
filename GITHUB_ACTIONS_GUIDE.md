# GitHub Actions Auto-Constraint Checker

## What It Does

Every time you push code to GitHub, a **GitHub Action automatically runs** and:

1. ✅ Checks if your code violates any constraints
2. ✅ Verifies line count (≤ 300)
3. ✅ Verifies loop count (≤ 1)
4. ✅ Comments on PRs with results
5. ✅ Fails the build if constraints are violated

## How It Works

### Workflow File
Located at: `.github/workflows/constraint-check.yml`

**Triggers on:**
- Every push to `main` branch
- Every pull request to `main` branch

**What it checks:**
```
D1: One-Loop Warrior (max 1 loop)
D2: 300 Lines (max 300 lines)
D3: Data Processing (informational)
D4: JavaScript (informational)
```

### Automatic PR Comments

When you create a pull request, the action automatically comments:

```
## 🏆 Code Olympics Constraint Check

| Constraint | Status | Details |
|-----------|--------|---------|
| **D1: One-Loop Warrior** | ✅ PASS | 0 loop(s) (max: 1) |
| **D2: 300 Lines** | ✅ PASS | 278 lines (max: 300) |
| **D3: Data Processing** | ✅ PASS | Validation pipeline |
| **D4: JavaScript** | ✅ PASS | Pure JS |

✅ **SUBMISSION READY** - All constraints satisfied!
```

## Usage

### 1. Make Changes Locally
```bash
# Edit your code
nano index.html

# Commit
git add index.html
git commit -m "Update constraint checker"

# Push
git push origin main
```

### 2. GitHub Action Runs Automatically
- Check your repo's **Actions** tab
- See the workflow running
- Wait for completion (usually 30 seconds)

### 3. View Results

**On Push:**
- Go to **Actions** tab
- Click the latest workflow run
- See pass/fail status

**On Pull Request:**
- Create a PR
- Action auto-comments with results
- See constraint status immediately

## Local Testing

Before pushing, test locally:

```bash
node verify_smart.js
```

Output:
```
=== Code Olympics 2026 Constraint Verification ===

File: index.html
Total lines: 278
Line budget: 300
Status: ✅ PASS

Actual loops in code: 0
Loop budget: 1
Status: ✅ PASS

=== Summary ===
✅ SUBMISSION READY - All constraints satisfied!
```

## What Happens If Constraints Are Violated

### Scenario 1: Too Many Lines
```
❌ FAIL
Total lines: 350
Line budget: 300
Status: ❌ FAIL
```

**Fix:** Minify your code or remove unnecessary lines

### Scenario 2: Too Many Loops
```
❌ FAIL
Actual loops in code: 3
Loop budget: 1
Status: ❌ FAIL
```

**Fix:** Refactor to use functional programming (`.map()`, `.filter()`, etc.)

## GitHub Actions Badge

Add this to your README to show constraint status:

```markdown
[![Code Olympics Constraints](https://github.com/codeforhack22/code-olympics-checker_2026/actions/workflows/constraint-check.yml/badge.svg)](https://github.com/codeforhack22/code-olympics-checker_2026/actions)
```

## Workflow Details

### File: `.github/workflows/constraint-check.yml`

```yaml
name: Code Olympics Constraint Check

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  verify-constraints:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: node verify_smart.js
    - uses: actions/github-script@v6
      # Auto-comments on PRs with results
```

## Verification Script

### File: `verify_smart.js`

```javascript
// Reads index.html
// Counts lines (must be ≤ 300)
// Counts loops (must be ≤ 1)
// Exits with code 0 (pass) or 1 (fail)
```

## Benefits

✅ **Automatic Verification** — No manual checking needed  
✅ **Instant Feedback** — Know immediately if constraints are violated  
✅ **PR Integration** — See results before merging  
✅ **Build Failure** — Prevents merging broken code  
✅ **Audit Trail** — All checks logged in Actions tab  

## Troubleshooting

### "Action failed"
- Check the Actions tab for error details
- Run `node verify_smart.js` locally
- Fix the constraint violation

### "Comment not appearing on PR"
- Make sure you have GitHub Actions enabled
- Check repo Settings → Actions → General
- Ensure workflow file is in `.github/workflows/`

### "False positive on loop count"
- The script removes strings/regex before counting
- If still failing, check for loops in comments
- Verify with `node verify_smart.js`

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Watch GitHub Actions run
3. ✅ See automatic constraint check
4. ✅ Get PR comments with results
5. ✅ Submit with confidence!

---

**Your code is now automatically verified on every push.** 🚀

No more manual constraint checking. GitHub does it for you!
