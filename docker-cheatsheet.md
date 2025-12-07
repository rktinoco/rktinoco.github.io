# Docker Cheatsheet

Commands for images, containers, volumes, ports, and Compose workflows.

## Core Commands
- **Run:** `docker run -d --name app -p 8080:80 nginx`
- **Images / Pull:** `docker images` / `docker pull alpine`
- **Containers:** `docker ps -a`
- **Start / Stop / Remove:** `docker start c` / `docker stop c` / `docker rm -f c`
- **Logs:** `docker logs -f c`
- **Exec:** `docker exec -it c sh`

## Build & Publish
- **Build:** `docker build -t myapp:dev .`
- **Tag / Push:** `docker tag myapp repo/myapp:1.0` / `docker push repo/myapp:1.0`
- **Save / Load (opt):** `docker save img > img.tar` / `docker load < img.tar`

## Compose & Cleanup
- **Compose up/down:** `docker compose up -d` / `docker compose down`
- **Compose logs:** `docker compose logs -f`
- **Prune (opt):** `docker system prune -af`
- **Inspect:** `docker inspect c`

---
Website: rktinoco.github.com
