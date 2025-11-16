---
layout: page
title: Projects
permalink: /projects/
description: Research projects and tools developed by the group
nav: true
nav_order: 3
display_categories: []
horizontal: false
---

<!-- pages/research-projects.md -->
<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}

<div class="row row-cols-1 row-cols-md-3">
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
</div>
