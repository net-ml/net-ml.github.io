---
layout: post
title: "Beyond Data Points: Regionalizing Crowdsourced Latency Measurements"
date: 2025-06-15
description: "Understanding internet performance at regional scales through crowdsourced measurements"
tags: measurement
categories: research
author: "Taveesh Sharma"
---

# Beyond Data Points: Regionalizing Crowdsourced Latency Measurements

*Abstract.* Crowdsourced latency measurements have become an essential tool for understanding internet performance across diverse geographic regions. However, most existing approaches treat these measurements as isolated data points, failing to capture the regional patterns and spatial correlations that are crucial for understanding internet quality at scale. In this work, we introduce a framework for regionalizing crowdsourced latency measurements, enabling more accurate and representative characterizations of internet performance. Our approach aggregates individual measurements into meaningful regional summaries while accounting for measurement biases, spatial heterogeneity, and temporal variations. We demonstrate that regional-level analysis provides more stable and actionable insights compared to point-based approaches, particularly for applications in policy analysis, infrastructure planning, and network performance monitoring.

## The Challenge of Crowdsourced Measurements

Crowdsourced latency measurements, collected from thousands of devices across different networks and locations, offer unprecedented visibility into internet performance. Platforms like M-Lab, Speedtest, and FCC's Measuring Broadband America have generated millions of measurements that help us understand connectivity quality worldwide.

However, analyzing these measurements presents significant challenges:

- **Spatial bias**: Measurements cluster in certain areas while leaving others underrepresented
- **Temporal variability**: Performance fluctuates throughout the day and across seasons
- **Sampling heterogeneity**: Different devices, networks, and measurement methodologies introduce variability
- **Individual noise**: Single measurements may not represent typical performance for a location

Traditional approaches that treat each measurement independently struggle to provide reliable insights for decision-making, especially when comparing regions or tracking performance over time.

## Our Approach: Regional Aggregation with Spatial Awareness

Rather than analyzing measurements point-by-point, we develop methods to aggregate them into regional summaries that capture true performance characteristics while filtering out noise and bias.

### Key Innovations

**Spatial Clustering**: We group measurements based on geographic proximity and network topology, ensuring that regional boundaries align with actual infrastructure and administrative divisions.

**Bias-Aware Aggregation**: Our framework accounts for sampling biases by weighting measurements according to population distribution, network coverage, and temporal representativeness.

**Uncertainty Quantification**: We provide confidence intervals for regional estimates, allowing users to assess the reliability of performance metrics in different areas.

**Multi-Scale Analysis**: The framework supports analysis at multiple geographic scales - from neighborhoods to states - enabling insights appropriate for different use cases.

## Results and Impact

We applied our regionalization framework to analyze latency measurements across the United States, examining performance at county, state, and regional levels.

### Improved Stability

Regional aggregates show significantly lower variance compared to individual measurements:
- 5-7× reduction in day-to-day variability
- More consistent performance characterization across time periods
- Better identification of true performance trends

### Revealing Regional Patterns

Our analysis uncovered important spatial patterns that individual measurements obscure:
- Persistent performance disparities between urban and rural areas
- Regional infrastructure bottlenecks affecting multiple localities
- Temporal patterns that vary by region (e.g., congestion during specific hours in specific areas)

### Policy Applications

The regional perspective enables more actionable insights for policymakers and network operators:
- Identifying underserved regions with consistently poor performance
- Tracking the impact of infrastructure investments at regional scales
- Comparing performance across similar demographic and geographic regions

For example, we found that while individual measurements in rural counties show high variance, regional aggregation reveals systematic performance gaps that justify targeted infrastructure investments.

## Why This Matters

As internet connectivity becomes increasingly essential for education, work, and civic participation, understanding performance at regional scales is crucial for:

- **Broadband policy**: Identifying areas that need infrastructure investment
- **Digital equity**: Understanding performance disparities across communities
- **Network planning**: Making informed decisions about where to expand or upgrade infrastructure
- **Performance monitoring**: Tracking improvements and identifying emerging problems

Our regionalization framework transforms noisy, biased crowdsourced measurements into reliable regional indicators that can inform these critical decisions.

## Looking Forward

This work opens several exciting directions for future research:

- **Real-time regional monitoring**: Adapting our methods for continuous performance tracking
- **Multi-metric regionalization**: Extending beyond latency to bandwidth, reliability, and other performance indicators
- **Causal analysis**: Understanding what factors drive regional performance differences
- **Global application**: Applying these methods to measurements from diverse countries and regulatory contexts

By moving beyond individual data points to regional perspectives, we can develop a more comprehensive and actionable understanding of internet performance worldwide.

### Resources

To appear in ACM SIGMETRICS 2025.

#### Bibtex citation
```
@inproceedings{sharma2025regionalizing,
  title={Beyond Data Points: Regionalizing Crowdsourced Latency Measurements},
  author={Sharma, Taveesh and Schmitt, Paul and Bronzino, Francesco and Marwell, Nicole P. and Feamster, Nick},
  booktitle={ACM SIGMETRICS},
  year={2025}
}
```
