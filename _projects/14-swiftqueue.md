---
layout: page
title: SwiftQueue
description: Per-packet latency prediction for optimizing L4S queue selection
img: assets/img/swiftqueue-thumb.png
importance: 14
category: Multimodal Inference
github: https://github.com/noise-lab/SwiftQueue
---

![SwiftQueue Architecture](/assets/img/swiftqueue.png){:class="img-fluid rounded z-depth-1"}

## Overview

SwiftQueue is a novel L4S (Low Latency, Low Loss, and Scalable Throughput) queue-selection strategy that uses a custom Transformer-based latency predictor to dynamically assign packets to queues on a per-packet basis, rather than the traditional per-flow approach.

## The Problem

L4S is an emerging router queue management technique that assigns packets to queues based on header markings. Current L4S implementations use per-flow queue selection, meaning all packets in a flow use the same queue. This approach can harm tail latency when transient congestion affects individual packets differently.

Key challenges with existing approaches:
- **Per-flow limitation**: All packets marked the same way, even when individual packets experience varying conditions
- **Tail latency issues**: Transient congestion affects some packets more than others
- **Static decisions**: No adaptation to real-time network conditions

## What SwiftQueue Does

SwiftQueue introduces per-packet queue selection using machine learning:

- **Per-packet Latency Prediction**: Uses a custom Transformer architecture to predict the latency of each outgoing packet
- **ACK Pattern Analysis**: Analyzes latencies from recently received ACKs to forecast future packet behavior
- **Dynamic L4S Marking**: Sender dynamically marks packet headers to route packets to appropriate queues
- **Within-flow Differentiation**: Packets within the same flow can be assigned to different queues based on predicted latency

## Key Features

1. **Transformer-based Prediction**: Leverages the expressiveness of Transformers for sequential pattern recognition
2. **Real-time Decision Making**: Predicts latency for each packet as it is sent
3. **L4S Integration**: Works with existing L4S-enabled routers
4. **Latency Spike Detection**: Identifies packets likely to experience latency spikes or drops

## Results

- **45-65% more accurate** latency prediction compared to state-of-the-art methods
- **36-45% reduction** in tail latency for L4S-enabled flows
- Validated using real network traces

## Resources

- [arXiv Paper](https://arxiv.org/abs/2410.06112)
- [GitHub Repository](https://github.com/noise-lab/SwiftQueue)

## Citation

```bibtex
@inproceedings{ray2026swiftqueue,
    title = "{SwiftQueue: Optimizing Low-Latency Applications with Swift Packet Queuing}",
    author = {Siddhant Ray and Xi Jiang and Jack Luo and Nick Feamster and Junchen Jiang},
    booktitle = {New Ideas in Networked Systems (NiNeS)},
    year = {2026},
    month = feb,
    address = {Online}
}
```
