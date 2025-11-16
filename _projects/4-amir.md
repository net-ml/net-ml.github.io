---
layout: page
title: AMIR
description: Active Multimodal Interaction Recognition from video and network traffic
img: assets/img/publication_preview/amir.png
importance: 4
category: Research
---

## Overview

AMIR (Active Multimodal Interaction Recognition) synthesizes video and network data for robust activity recognition in connected home environments.

## The Problem

Video-based activity recognition can be brittle to environmental changes (camera angle, lighting). Smart devices generate network activity that can complement video for more robust recognition.

## Approach

AMIR trains independent models for video and network activity recognition, then combines predictions using a meta-learning framework. This reduces the need for "paired" demonstrations where both data types are collected simultaneously.

## Results

- Requires up to 70.83% fewer samples to achieve 85% F1 score
- Improves accuracy by 17.76% given the same number of samples
- Robust to environmental changes affecting video

## Resources

- [Blog Post](/blog/2023/amir/)
- [Project Website](https://amir-vidnet.github.io)
- [Medium Article](https://medium.com/ubicomp-iswc-2023/marrying-video-and-network-traffic-for-activity-recognition-and-beyond-3e0bef89a27b)

## Citation

```bibtex
@article{liu2023amir,
  title={AMIR: Active Multimodal Interaction Recognition from Video and Network Traffic in Connected Environments},
  author={Liu, Shinan and Mangla, Tarun and Shaowang, Ted and Zhao, Jinjin and Paparrizos, John and Krishnan, Sanjay and Feamster, Nick},
  journal={Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies},
  volume={7},
  number={1},
  pages={1--26},
  year={2023}
}
```
