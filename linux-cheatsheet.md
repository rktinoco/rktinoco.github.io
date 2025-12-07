# Linux Shell Cheatsheet

Quick commands for navigation, file ops, search, process control, and I/O redirection.

## Navigation & Files
- **List:** `ls -lah` — human-readable, show hidden
- **Change / Print dir:** `cd /path` / `pwd`
- **Copy / Move / Remove:** `cp src dst` / `mv a b` / `rm -rf dir`
- **Make dir:** `mkdir -p dir`

## Inspect & Search
- **View:** `less file` / `head -n 20 file` / `tail -f file`
- **Search:** `grep -R "foo" .`
- **Find:** `find . -name '*.log'`
- **xargs:** `find . -print0 | xargs -0 rm`

## Processes & System
- **Processes:** `ps aux` / `top`
- **Kill:** `kill <pid>` / `killall node` (opt)
- **Disk:** `du -sh .` / `df -h`
- **Compress:** `tar -czf a.tar.gz dir`

## Shell & Env
- **Redirects & Pipes:** `cmd > out 2>&1 | tee out.log`
- **Env var:** `export KEY=val`
- **Alias:** `alias ll='ls -lah'`
- **SSH / SCP:** `ssh user@host` / `scp file user@host:/tmp`

---
Website: rktinoco.github.com
