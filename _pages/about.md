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

The NetML project is dedicated to advancing research and innovation at the intersection of machine learning (ML) and networking. Our mission is to develop cutting-edge solutions that apply ML to optimize network performance, enhance security, and tackle complex challenges in modern computer networks.

## Our Research

We focus on several key areas:

- **Network Traffic Analysis**: Developing ML techniques for traffic classification, anomaly detection, and performance inference
- **Concept Drift**: Understanding and mitigating model degradation in dynamic network environments
- **Generative Models**: Creating synthetic network data for training and testing
- **Cost-Aware ML**: Balancing model accuracy with systems-level deployment costs
- **Multimodal Learning**: Combining network data with other signals for robust analysis

## Featured Projects

Explore our research through projects like [nPrint](/projects/nprint/), [LEAF](/projects/leaf/), [NetDiffusion](/projects/netdiffusion/), [CATO](/projects/cato/), [Traffic Refinery](/projects/traffic-refinery/), and [AMIR](/projects/amir/).

## Open Science

We release datasets, code, and tools to enable reproducible research. Visit our [Datasets & Code](/datasets-code/) page to access our resources.

## Get Involved

Whether you're an academic, industry professional, or enthusiast, we invite you to explore our [blog](/blog/), check out our [publications](/publications/), or learn from our [course materials](/courses/).
