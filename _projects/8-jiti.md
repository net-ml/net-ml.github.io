---
layout: page
title: JITI
description: Adaptive ensemble classification for network traffic identification
img: assets/img/jiti-thumb.png
importance: 8
category: MLOps - Dynamic Model Execution
github: https://github.com/noise-lab/JITI
---

![JITI](/assets/img/jiti-thumb.png){:class="img-fluid rounded z-depth-1" style="max-width: 500px;"}

## Overview

JITI (also known as AC-DC: Adaptive Constraint-Driven Classification) is a framework for adaptive ensemble classification that intelligently balances accuracy and efficiency in network traffic identification by dynamically selecting between multiple classifiers based on system conditions.

## The Problem

Network traffic classifiers face a fundamental trade-off:
- **Flow-based classifiers** using pre-computed statistics are fast but less accurate
- **Packet-capture classifiers** are more accurate but slower and memory-intensive

Existing approaches commit to a single classification method, forcing operators to choose between accuracy and efficiency.

## What JITI Does

- **Adaptive Scheduling**: Dynamically tracks system memory availability and incoming traffic rates
- **Intelligent Classifier Selection**: Determines the optimal classifier and batch size based on current constraints
- **Ensemble Approach**: Maintains a pool of classifiers with different performance characteristics
- **Real-time Adaptation**: Switches between classifiers as system conditions change

## Key Features

1. **Dynamic Resource Management**: Monitors memory and CPU availability in real-time
2. **Performance Optimization**: Selects the best classifier for current system state
3. **Traffic-Aware Processing**: Adapts to varying network traffic loads
4. **Batch Size Optimization**: Adjusts processing batch sizes to maximize throughput

## Use Cases

- Network traffic prioritization
- Anomaly detection
- Service identification
- Real-time traffic classification under resource constraints

## Results

- **100%+ improvement** in classification performance vs. flow-statistics-only approaches
- **Comparable accuracy** to state-of-the-art packet-capture classifiers (less than 12.3% lower F1-Score)
- **150x faster** processing than complex packet-capture methods

## Resources

- [arXiv Paper](https://arxiv.org/abs/2302.11718)
- [GitHub Repository](https://github.com/noise-lab/JITI)

## Citation

```bibtex
@article{jiang2023acdc,
  title={AC-DC: Adaptive Ensemble Classification for Network Traffic Identification},
  author={Jiang, Xi and Liu, Shinan and Naama, Saloua and Bronzino, Francesco and Schmitt, Paul and Feamster, Nick},
  journal={arXiv preprint arXiv:2302.11718},
  year={2023}
}
```
