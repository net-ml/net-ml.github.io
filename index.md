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
  {% assign talks = site.static_files | where: 'path', '_talks' %}
  {% for talk in talks %}
    <li>
      <a href="{{ talk.path }}" download="{{ talk.path }}" class="talk-link">{{ talk.path | split: '/' | last }}</a>
    </li>
  {% endfor %}
</ul>
