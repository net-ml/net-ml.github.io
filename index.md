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

## Recent Talks

<ul class="talk-list">
  {% for file in site.static_files %}
    {% if file.path contains '_talks' %}
      <li>
        <a href="{{ file.path }}" download="{{ file.path }}" class="talk-link">{{ file.path | split: '/' | last }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

