---
layout: page
title: Traffic Refinery
description: Cost-aware data representation for ML on network traffic
img: assets/img/system.png
importance: 5
category: MLOps - Model Serving
github: https://github.com/traffic-refinery
---

![Traffic Refinery](/assets/img/system.png){:class="img-fluid rounded z-depth-1" style="max-width: 500px;"}

## Overview

Traffic Refinery is a framework and system that enables joint evaluation of ML performance (accuracy) and systems-level costs of different network traffic representations.

## The Problem

Network management ML models require understanding not just accuracy but also the systems costs of deploying models in operational networks. Feature representation choices determine both where and whether models can be deployed.

## What Traffic Refinery Does

- **Flexible Representations**: Offers extensible network data representations
- **Cost Assessment**: Measures systems-related costs of representations
- **Performance Analysis**: Evaluates effects on model performance

## System Components

1. Traffic categorization module (DNS/IP-based)
2. Packet capture and processing with flow state tracking
3. Aggregation and storage for higher-level features

## Use Cases

- Video streaming quality inference
- Malware detection
- Any ML task requiring network traffic analysis

## Results

Traffic Refinery operates at 10 Gbps, transforming traffic in real-time to produce various feature representations. Enables exploration of accuracy vs. cost tradeoffs.

## Resources

- [Blog Post](/blog/2022/traffic-refinery/)
- [Project Website](https://traffic-refinery.github.io)
- [Paper](https://dl.acm.org/doi/10.1145/3491052)

## Citation

```bibtex
@article{bronzino2021traffic,
  title={Traffic Refinery: Cost-Aware Data Representation for Machine Learning on Network Traffic},
  author={Bronzino, Francesco and Schmitt, Paul and Ayoubi, Sara and Kim, Hyojoon and Teixeira, Renata and Feamster, Nick},
  journal={Proc. ACM Meas. Anal. Comput. Syst.},
  volume={5},
  number={3},
  year={2021}
}
```
