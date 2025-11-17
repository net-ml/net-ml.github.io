---
layout: page
title: NetSSM
description: Multi-flow and state-aware network trace generation using state-space models
img: assets/img/netssm-thumb.png
importance: 9
category: Synthetic Data Generation
github: https://github.com/noise-lab/netssm
---

![NetSSM](/assets/img/netssm-thumb.png){:class="img-fluid rounded z-depth-1" style="max-width: 500px;"}

## Overview

NetSSM is a state-space model-based approach for generating high-fidelity synthetic network traffic at the packet level. It addresses the critical challenge of limited access to raw network data by generating realistic traces that capture multi-flow interactions and stateful communication patterns.

## The Problem

Access to raw network traffic data is essential for many networking tasks including:
- Traffic modeling and analysis
- Performance evaluation
- Security research and testing
- Protocol development

However, this data is scarce due to:
- High collection costs
- Privacy and governance restrictions
- Difficulty sharing sensitive network data

Existing synthetic data generation methods have significant limitations:
- Fail to reliably handle multi-flow sessions
- Struggle with stateful communication in long-duration sessions
- Lack robust evaluations tied to real-world utility

## What NetSSM Does

- **Multi-Flow Generation**: Captures interactions between multiple, interleaved network flows
- **State-Aware Modeling**: Reasons about flow-state in sessions to capture traffic characteristics
- **Long-Duration Sessions**: Processes traces 8x-78x longer than transformer-based approaches
- **High Fidelity**: Generates traces with high semantic similarity to real network data

## Key Features

1. **State-Space Architecture**: Leverages state-space models instead of pure transformer architectures
2. **Protocol Compliance**: Ensures generated traffic adheres to standard protocol requirements
3. **Flow-Level Accuracy**: Maintains realistic flow and session-level traffic characteristics
4. **Scalability**: Handles significantly longer traces than existing methods

## Use Cases

- Generating training data for network ML models
- Testing network protocols and systems
- Performance evaluation when real data is unavailable
- Privacy-preserving network research
- Synthetic data for network security testing

## Results

- **8x-78x longer traces** than transformer-based approaches
- **Outperforms prior methods** on existing benchmarks
- **High semantic similarity** to real network data
- **Protocol compliance** with standard requirements
- **Realistic traffic patterns** at flow and session levels

## Resources

- [arXiv Paper](https://arxiv.org/abs/2503.22663)
- [GitHub Repository](https://github.com/noise-lab/netssm)

## Related Work

- [Feasibility of State Space Models for Network Traffic Generation](https://arxiv.org/abs/2406.02784) (SIGCOMM NetAI 2024)

## Citation

```bibtex
@article{chu2025netssm,
  title={NetSSM: Multi-Flow and State-Aware Network Trace Generation using State-Space Models},
  author={Chu, Andrew and Jiang, Xi and Liu, Shinan and Bhagoji, Arjun and Bronzino, Francesco and Schmitt, Paul and Feamster, Nick},
  journal={arXiv preprint arXiv:2503.22663},
  year={2025}
}
```
