---
layout: page
title: PRISM
description: Probe Reduction via Impact-based Shared Measurements
img: assets/img/prism-thumb.png
importance: 14
category: Internet Measurement
github: https://github.com/noise-lab/prism
---

![SCRIBE Architecture](/assets/img/prism.png){:class="img-fluid rounded z-depth-1"}

## Overview

PRISM is a novel method for reducing the number of active probes needed to monitor Internet performance while maintaining high observability. By leveraging shared measurements and an impact-based selection strategy, PRISM identifies a subset of probes that can effectively detect performance anomalies as much as the full set of probes, enabling more efficient monitoring and resource allocation.

## The Problem

Active monitoring of Internet performance typically relies on a number of active probes distributed across the network. However, deploying and maintaining a large probe infrastructure can be costly and resource-intensive. Moreover, many probes may provide redundant information, leading to inefficiencies in monitoring. The challenge is to identify a smaller subset of probes that can still capture the critical performance variations and anomalies across the network without relying on topology-specific assumptions.

## What PRISM Does

PRISM is a follow-up to our previous work on SCRIBE, which regionalizes crowdsourced latency measurements. PRISM builds on the regions identified by SCRIBE to select probes that are most impactful for monitoring performance across those regions. The key steps in PRISM include:

1. **Region Identification**: Uses the regions inferred by SCRIBE to group probes based on their geographic and performance characteristics. Then, we deploy active probes within each region to collect performance data.
2. **Anomaly Detection**: Applies anomaly detection techniques to identify performance anomalies in the collected data, such as latency spikes or throughput drops.
3. **Impact-Based Greedy Selection**: We define the impact of a probe as the product of the amplitude and duration of the detected anomalies. PRISM uses a greedy algorithm to iteratively select probes with the highest impact until a desired level of observability is achieved.
4. **Marginal Utility Analysis**: Evaluates the marginal utility of adding each probe to the selected set, ensuring that the chosen probes provide complementary information and maximize anomaly detection coverage.

## Broader Impacts

1. **Cost-Effective Monitoring**: By reducing the number of probes needed, PRISM can lower the costs associated with deploying and maintaining a probe infrastructure while still providing effective monitoring.
2. **Broadband Equity Auditability**: PRISM allows for continuous monitoring of performance across the regions identified by SCRIBE, enabling more accurate assessments of broadband equity and informing policy decisions.
3 **Monitoring in Resource-Constrained Environments**: PRISM's approach can be particularly beneficial in environments with limited resources, such as developing regions or small organizations, where deploying a large number of probes may not be feasible.

## Results

1. Probes experiencing temporally overlapping anomalies tend to see similar amplitudes—median amplitude similarity reached 0.88 for the 80–100% intersection-over-union range, and slightly higher (0.89 vs. 0.85) for same-ISP pairs.
2. Our greedy set-cover algorithm covers 95% of total anomaly impact using just 44–47 of 97 probes (under half the deployment). Against baselines at comparable coverage, it captured ~2.2× more unique anomalies than uniform random selection.
3. Just 1–2 weeks of historical round-trip-time (RTT) data is enough to select probes that maintain steady future anomaly coverage.

## Resources

- [Paper](https://arxiv.org/pdf/2602.03965)
- [GitHub Repository](https://github.com/noise-lab/prism)

## Citation

```bibtex
@misc{sharma2026moreoptimizingprobeselection,
      title={Less is More: Optimizing Probe Selection Using Shared Latency Anomalies}, 
      author={Taveesh Sharma and Andrew Chu and Paul Schmitt and Francesco Bronzino and Nick Feamster and Nicole Marwell},
      year={2026},
      eprint={2602.03965},
      archivePrefix={arXiv},
      primaryClass={cs.NI},
      url={https://arxiv.org/abs/2602.03965}, 
}
```
