---
layout: page
title: Datasets & Code
permalink: /datasets-code/
description: Repository of research datasets and code releases
nav: true
nav_order: 4
---

## Datasets

<div class="projects">
<div class="row row-cols-1 row-cols-md-2">
  {% for dataset in site.datasets %}
    {% include projects.liquid project=dataset %}
  {% endfor %}
</div>
</div>

## Code & Tools

<div class="projects">
<div class="row row-cols-1 row-cols-md-3">
  {% for code in site.code %}
    {% include projects.liquid project=code %}
  {% endfor %}
</div>
</div>
