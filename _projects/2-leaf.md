---
layout: page
title: LEAF
description: Navigating concept drift in cellular networks
img: assets/img/leaf.png
importance: 2
category: Research
---

## Overview

LEAF (Local Error Approximation of Features) is a methodology for detecting, explaining, and mitigating concept drift in machine learning models deployed in cellular networks.

## The Problem

Machine learning models in operational networks face concept drift, where accuracy degrades as network conditions and usage patterns change. Traditional periodic retraining is often inefficient and can even degrade performance.

## How LEAF Works

1. **Detection**: Statistical methods identify when drift occurs
2. **Explanation**: Identifies which features contribute to drift and visualizes error patterns
3. **Mitigation**: Strategically updates models through selective forgetting and over-sampling

## Results

Tested on over four years of cellular network data from a major US metropolitan area:
- Up to 76.9% fewer model retrains while maintaining accuracy
- Consistent performance across different KPIs
- Effective in both urban and suburban environments

## Resources

- [Blog Post](/blog/2023/leaf/)
- [Dataset](https://docs.google.com/forms/d/e/1FAIpQLSe5wpn70MLkw5TsZYb7ONxDU4chj0Isksbr5GFpp-y77OJ50A/viewform)

## Citation

```bibtex
@article{liu2023leaf,
  title={LEAF: Navigating Concept Drift in Cellular Networks},
  author={Liu, Shinan and Bronzino, Francesco and Schmitt, Paul and Nitin Bhagoji, Arjun and Feamster, Nick and Crespo, Hector Garcia and Coyle, Timothy and Ward, Brian},
  journal={Proceedings of the ACM on Networking},
  year={2023}
}
```
