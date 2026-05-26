---
layout: page
title: SCRIBE
description: Spatially-Constrained Regionalization for Inference of Broadband Equity
img: assets/img/scribe-thumb.png
importance: 14
category: Internet Measurement
github: https://github.com/noise-lab/latency-regionalization
---

![SCRIBE Architecture](/assets/img/scribe.png){:class="img-fluid rounded z-depth-1"}

## Overview

SCRIBE is a novel combination of spatial interpolation and clustering techniques designed to infer geographic boundaries for sampling Internet performance data. Using a large dataset of crowdsourced latency measurements, SCRIBE identifies homogenous and contiguous regions of performance variation, which can be used to place measurement probes more effectively for continuous monitoring.

## The Problem

Internet performance can vary significantly across geographic regions, but existing broadband performance analysis methods often rely on pre-defined administrative boundaries (e.g., counties, neighborhoods, census tracts) that do not necessarily align with actual performance patterns or Internet infrastructure. Since crowdsourced measurements are often sparse and unevenly distributed, it is challenging to infer accurate performance patterns across space. This can lead to inefficient probe placement and inaccurate assessments of broadband equity.

## What SCRIBE Does

SCRIBE uses a multi-step process to infer spatially-constrained regions of similar performance:

1. **Data Collection**: Filters latency measurements with precise geographic coordinates from a large crowdsourced dataset (e.g., M-Lab).
2. **Spatial Interpolation**: Applies spatial interpolation techniques (e.g., inverse distance weighting) to estimate latency values across a continuous geographic space, creating a performance surface.
3. **Hexagonal Binning**: Divides the geographic area into hexagonal bins and aggregates interpolated latency values within each bin to create a grid of performance metrics.
4. **Local Aggregation**: Aggregates latency values within each hexagonal bin to create a grid of performance metrics.
5. **Clustering**: Applies spatially-constrained clustering algorithms (e.g. Spatial 'K'luster Analysis by Tree Edge Removal) to group adjacent bins with similar performance into contiguous regions.

## Broader Impacts

1. **Improved Broadband Equity Analysis**: By inferring regions of similar performance, SCRIBE can help identify underserved areas and inform policy decisions to improve broadband access and equity.
2. **Efficient Probe Placement**: SCRIBE's inferred regions can guide the placement of active probes for continuous monitoring, leading to more accurate and representative performance assessments.
3. **Generalizable Methodology**: The spatial interpolation and clustering techniques used in SCRIBE can be applied to other domains where interpreting spatial patterns from sparse data is important, such as environmental monitoring or public health.

## Results

1. Our approach achieves a month-to-month median pairwise adjusted rand index (ARI)—a measure of temporal consistency—of 0.59, compared to just 0.20 when computing raw averages over census tracts — a 0.39 gain that confirms prior interpolation is essential for stable, comparable boundaries over time.
2. Aggregation With small homogenous clusters, higher percentiles (95th, 97.5th) yield the most stable boundaries. This is useful for targeted interventions in consistently poor-latency zones. With larger contiguous clusters, the 10th percentile is more stable, since baseline latency persists across larger areas while upper-tail variability does not.
3. Pairwise ARI scores between the top five Chicago ISPs range from 0.00 to 0.19 over the 17-month window — meaning collective-sample boundaries smooth away ISP-specific structure. This supports the recommendation that the FCC release ISP-specific performance maps rather than aggregate ones, both for consumer transparency and SLA accountability.

## Resources

- [Paper](https://dl.acm.org/doi/pdf/10.1145/3700416)
- [GitHub Repository](https://github.com/noise-lab/latency-regionalization)

## Citation

```bibtex
@article{sharma2024beyond,
  title={Beyond data points: Regionalizing crowdsourced latency measurements},
  author={Sharma, Taveesh and Schmitt, Paul and Bronzino, Francesco and Feamster, Nick and Marwell, Nicole P},
  journal={Proceedings of the ACM on Measurement and Analysis of Computing Systems},
  volume={8},
  number={3},
  pages={1--24},
  year={2024},
  publisher={ACM New York, NY, USA}
}
```
