---
layout: page
title: Cruise Control
description: Dynamic model selection for ML-based network traffic analysis
importance: 12
category: MLOps - Dynamic Model Execution
---

## Overview

Cruise Control is a dynamic model selection system that adaptively chooses the best ML model for network traffic analysis tasks based on real-time system conditions. Rather than selecting a single model offline, it maintains multiple pre-trained models with different accuracy-cost tradeoffs and dynamically switches between them to optimize performance under varying network conditions.

## The Problem

Deploying machine learning models in real-world networks faces critical challenges:
- **Static Selection**: Traditional approaches select a single "optimal" model offline based on accuracy
- **Changing Conditions**: Network traffic load and system resources fluctuate constantly
- **Performance Constraints**: Real-world deployments have strict latency and throughput requirements
- **Packet Loss**: High traffic loads can overwhelm static model selections, leading to dropped packets
- **Resource Limitations**: Single models can't adapt to varying computational availability

## What Cruise Control Does

Cruise Control takes an online, system-driven approach to model selection:

1. **Model Portfolio**: Pre-trains multiple candidate models for the same task with different accuracy-cost tradeoffs
2. **Lightweight Monitoring**: Uses lightweight signals representing current system traffic processing ability
3. **Dynamic Selection**: Adaptively selects the most appropriate model based on real-time system state
4. **Continuous Adaptation**: Switches models as network conditions change

## Key Features

- **Multi-Model Architecture**: Maintains portfolio of models with varying accuracy-efficiency tradeoffs
- **Real-Time Selection**: Chooses models based on current system state, not offline metrics
- **Adaptive Response**: Responds to fluctuating network loads and resource availability
- **Minimal Overhead**: Uses lightweight signals for decision-making
- **Loss Prevention**: Reduces packet drops during high traffic periods

## Use Cases

- Traffic classification under varying loads
- Quality of Experience (QoE) inference in dynamic networks
- Intrusion detection with resource constraints
- Any network ML task with fluctuating traffic patterns
- Real-time network analysis with performance SLAs

## Results

- **2.78% median accuracy improvement** over offline-selected models
- **4x reduction in packet loss** compared to static model selection
- Successfully tested on real-world traffic analysis tasks
- Handles traffic classification, QoE inference, and intrusion detection

## How It Works

Cruise Control monitors system-level indicators of traffic processing capacity and uses these signals to select from a pre-trained set of models. When traffic load is low, it can use higher-accuracy, computationally expensive models. Under high load, it switches to faster, more efficient models to prevent packet loss while maintaining acceptable accuracy.

## Resources

- [arXiv Paper](https://arxiv.org/abs/2412.15146)
- [Johann Hugon's Page](https://johannhugon.com/)

## Citation

```bibtex
@article{hugon2024cruise,
  title={Cruise Control: Dynamic Model Selection for ML-Based Network Traffic Analysis},
  author={Hugon, Johann and Schmitt, Paul and Busson, Anthony and Bronzino, Francesco},
  journal={arXiv preprint arXiv:2412.15146},
  year={2024}
}
```
