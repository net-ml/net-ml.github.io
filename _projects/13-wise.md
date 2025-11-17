---
layout: page
title: WISE
description: What-If Scenario Evaluator for network deployment and configuration
img: assets/img/wise-thumb.png
importance: 13
category: Multimodal Inference
---

![WISE](/assets/img/wise-banner.png){:class="img-fluid rounded z-depth-1"}

## Overview

WISE (What-If Scenario Evaluator) is a tool that answers "what-if" deployment and configuration questions for networks by combining multiple sources of network data and measurements.

## The Problem

Network operators often need to evaluate potential configuration changes or deployment decisions before implementing them. Traditional approaches require expensive simulations or risky live experiments. WISE enables operators to reason about network behavior by inferring answers from existing data sources.

## Approach

WISE synthesizes multiple types of network data:
- Historical traffic measurements
- Routing information
- Network topology
- Configuration data

By combining these data sources, WISE can predict the likely outcomes of deployment and configuration changes without requiring live experimentation.

## Key Capabilities

- **Configuration Evaluation**: Predict the impact of BGP policy changes, routing updates, and protocol configuration changes
- **Deployment Planning**: Evaluate the effects of topology changes, link additions, and equipment upgrades
- **Multi-modal Inference**: Combine data from routers, switches, measurement platforms, and historical logs

## Results

- Successfully deployed and tested in production ISP networks
- Accurately predicted outcomes of routing changes and configuration updates
- Reduced the need for risky live network experiments
- Enabled safe exploration of network design alternatives

## Publications

- [Answering What-If Deployment and Configuration Questions with WISE](https://dl.acm.org/doi/10.1145/1402958.1402971) (SIGCOMM 2008)
- [WISE: Techniques and Deployment Experience](https://ieeexplore.ieee.org/abstract/document/6449271) (IEEE/ACM ToN 2013)

## Citation

```bibtex
@inproceedings{Tariq2008:wise,
  author = {Mohammed Mukarram bin Tariq and Amgad Zeitoun and Nick Feamster and Mostafa Ammar},
  title = {Answering What-If Deployment and Configuration Questions with WISE},
  booktitle = {ACM SIGCOMM},
  year = {2008},
  address = {Seattle, WA}
}
```
