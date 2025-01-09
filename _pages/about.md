---
layout: about
title: About
permalink: /
subtitle: 

profile:

news: false # includes a list of news items
latest_posts: true # includes a list of the newest posts
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>Welcome to the NetML website!</h2>
  </div>
  {% endif %}

The NetML project is dedicated to advancing research and innovation at the intersection of machine learning (ML) and networking. Our mission is to develop cutting-edge solutions that apply ML to optimize network performance, enhance reliability, and tackle complex challenges in modern computer networks. At the same time, we explore how networking technologies can support and empower the application of ML at scale.

This blog serves as a hub for sharing insights, updates, and breakthroughs from our research. Whether you’re an academic, industry professional, or enthusiast, you’ll find articles on our latest findings, technical deep dives, project milestones, and thought leadership in the rapidly evolving field of ML-driven networking.

We invite you to join us on this exciting journey of discovery and innovation. Stay connected, and feel free to explore, learn, and engage with the NetML project community!
