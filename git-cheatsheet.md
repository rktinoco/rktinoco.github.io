# Git Cheatsheet

Concise reference for everyday Git workflows: init, stage, commit, branch, sync, and undo safely.

## Quick Commands
- **Init:** create repo — `git init`
- **Clone:** copy remote — `git clone <url>`
- **Status:** short status — `git status -s`
- **Add:** stage changes — `git add .`
- **Commit:** record snapshot — `git commit -m "msg"`
- **Amend (opt):** change last commit — `git commit --amend`

## Branching & History
- **Create & switch:** `git checkout -b feat` / `git switch feat`
- **Log compact:** `git log --oneline --graph`
- **Diff:** see changes — `git diff` / `git diff --staged`
- **Stash:** save WIP — `git stash push -m "WIP"`
- **Stash pop (opt):** restore — `git stash pop`

## Sync & Rewriting
- **Fetch:** get remote refs — `git fetch --all`
- **Pull (rebase preferred):** `git pull --rebase`
- **Push:** send branch — `git push origin HEAD`
- **Merge:** integrate branch — `git merge feature`
- **Rebase:** tidy commits — `git rebase main`
- **Interactive rebase (opt):** `git rebase -i HEAD~3`
- **Reset (danger):** discard — `git reset --hard HEAD`
- **Tag:** annotate release — `git tag -a v1.0 -m "v1.0"`

---
Website: rktinoco.github.com
