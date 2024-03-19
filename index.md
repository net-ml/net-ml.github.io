---
layout: default
---

# Welcome to the NetML Blog

Recent posts:

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) - Posted on {{ post.date | date: "%B %d, %Y" }} by {{ post.author }}
{% endfor %}
