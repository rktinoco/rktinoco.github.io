---
layout: default
title: Home
---

# Welcome

This is a minimal GitHub Pages site to host blog posts and your cheatsheets.

- Blog posts go into `_posts/` with standard Jekyll front matter.
- Cheatsheets are accessible from the **Cheatsheets** menu. You can keep the markdown files at the repo root or in a folder.

Recent posts:

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url }}) · {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
