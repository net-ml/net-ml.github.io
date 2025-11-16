---
layout: page
title: NetML
description: Feature extraction for novelty detection in network traffic
img: assets/img/netml.png
importance: 2
category: Data Representation
github: https://github.com/noise-lab/netml
---

![NetML](/assets/img/netml.png){:class="img-fluid rounded z-depth-1" style="max-width: 500px;"}

## Overview

NetML is a Python library and framework for network anomaly detection that provides efficient feature extraction methods designed specifically for novelty detection in network traffic.

## The Problem

Existing network traffic representations for ML are often based on standard classifiers and not optimized for novelty detection. Many unnecessary features are extracted, leading to inefficiency and poor generalization when detecting new anomalies or attacks.

## What NetML Does

- **Efficient Feature Extraction**: Implements optimized feature extraction specifically designed for novelty detection
- **Multiple Representations**: Supports various traffic representation methods including IAT, STATS, SIZE, and SAMP
- **Novelty Detection**: Implements algorithms like One-Class SVM, KDE, Isolation Forest, and Autoencoders
- **Easy to Use**: Provides both a Python library and command-line interface

## Key Capabilities

1. **Packet Capture Parsing**: Uses Scapy to parse pcap files and extract flow features
2. **Flexible Modeling**: Supports multiple novelty detection algorithms
3. **DataFrame Integration**: Converts network traffic to pandas DataFrames for easy analysis
4. **Production Ready**: Command-line interface with tab-completion for deployment

## Feature Representations

NetML supports several feature extraction methods:
- **IAT**: Inter-arrival time features
- **STATS**: Statistical flow summaries
- **SIZE**: Packet size distributions
- **SAMP**: Sampled packet/byte counts over time windows

## Use Cases

- Network intrusion detection
- Anomaly detection in IoT networks
- Traffic classification
- Malware detection
- Any application requiring efficient novelty detection on network data

## Resources

- [PyPI Package](https://pypi.org/project/netml/)
- [GitHub Repository](https://github.com/noise-lab/netml)
- [Paper](https://arxiv.org/abs/2006.16993)

## Citation

```bibtex
@article{yang2020netml,
  title={Feature Extraction for Novelty Detection in Network Traffic},
  author={Yang, Kun and Kpotufe, Samory and Feamster, Nick},
  journal={arXiv preprint arXiv:2006.16993},
  year={2020}
}
```
