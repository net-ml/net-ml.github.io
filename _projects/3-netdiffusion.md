---
layout: page
title: NetDiffusion
description: Protocol-constrained network traffic generation using diffusion models
img: assets/img/netdiffusion-diagram.png
importance: 3
category: Research
github: https://github.com/noise-lab/netdiffusion
---

![NetDiffusion](/assets/img/netdiffusion-diagram.png){:class="img-fluid rounded z-depth-1" style="max-width: 600px;"}

## Overview

NetDiffusion uses diffusion models to generate synthetic network traffic that is both statistically similar to real traffic and compliant with network protocol specifications.

## Why NetDiffusion?

Traditional synthetic data generation methods fall short in producing detailed, realistic network data needed for ML model training. NetDiffusion addresses this by leveraging fine-tuned Stable Diffusion models.

## How It Works

1. **Traffic to Image Conversion**: Converts raw network traffic into image representations
2. **Fine-Tuned Diffusion**: Generates synthetic data preserving intricate traffic patterns
3. **Protocol Compliance**: Ensures generated traffic adheres to network protocol rules

## Results

- Higher statistical similarity to real data vs. state-of-the-art methods
- ML models trained with NetDiffusion data outperform those using other synthetic data
- Effective for addressing class imbalance in training datasets
- Supports traditional network analysis and testing tasks

## Resources

- [Blog Post](/blog/2024/netdiffusion/)
- [GitHub](https://github.com/noise-lab/NetDiffusion_Generator)
- [Paper](https://dl.acm.org/doi/pdf/10.1145/3639037)

## Citation

```bibtex
@article{jiang2024netdiffusion,
  title={NetDiffusion: Network Data Augmentation Through Protocol-Constrained Traffic Generation},
  author={Jiang, Xi and Bronzino, Francesco and Schmitt, Paul and Feamster, Nick},
  journal={Proceedings of the ACM on Measurement and Analysis of Computing Systems},
  year={2024}
}
```
