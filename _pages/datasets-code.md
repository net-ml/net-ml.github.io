---
layout: page
title: Datasets & Code
permalink: /datasets-code/
description: Repository of research datasets and code releases
nav: true
nav_order: 5
---

## Datasets

{% for dataset in site.datasets %}
### {{ dataset.title }}

{{ dataset.description }}

[View Details]({{ dataset.url | relative_url }})

---
{% endfor %}

## Code & Tools

{% for code in site.code %}
### {{ code.title }}

{{ code.description }}

{% if code.github %}**GitHub:** [{{ code.github }}]({{ code.github }}){% endif %}

[View Details]({{ code.url | relative_url }})

---
{% endfor %}
