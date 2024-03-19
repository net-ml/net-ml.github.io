---
layout: default
---

# Welcome to the NetML Blog

## Recent Posts

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}" class="post-link">{{ post.title }}</a>
    <div class="post-meta">Posted on {{ post.date | date: "%B %d, %Y" }} by {{ post.author }}</div>
  </li>
{% endfor %}
</ul>
