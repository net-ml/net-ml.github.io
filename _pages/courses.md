---
layout: page
title: Course Materials
permalink: /courses/
description: Educational resources for teaching and learning network machine learning
nav: true
nav_order: 5
---

## Available Courses

<div class="projects">
<div class="row row-cols-1 row-cols-md-2">
  {% for course in site.courses %}
    {% include projects.liquid project=course %}
  {% endfor %}
</div>
</div>

## Resource Categories

### Assignments
Problem sets and programming assignments from our courses, designed to provide hands-on experience with ML for networking applications.

### Books & Reading Materials
Recommended textbooks, research papers, and supplementary reading materials for learning about machine learning applications in computer systems.

### Videos & Series
- Lecture recordings
- Tutorial series
- Conference talks
- Demo videos

All materials are organized by course/topic and difficulty level, with supplementary materials including slides, code, and data.
