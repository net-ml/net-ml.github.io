---
layout: post
title: "Introducing NetDiffusion: A New Direction in Network Data Augmentation"
date: 2024-03-18
categories: research
tags: machine-learning network-data synthetic-data
author: "Xi (Chase) Jiang"
---
See our open-sourced repo for implementation details: https://github.com/noise-lab/NetDiffusion_Generator

In the world of machine learning (ML) for network management and security, the scarcity of high-quality,
labeled network datasets has always been a major bottleneck.
Traditional methods for generating synthetic network data,
while useful, have struggled to produce the level of detail and realism required for effective ML model training. This is
where our latest research comes into play. Our paper, "NetDiffusion: Network Data Augmentation Through Protocol-Constrained Traffic Generation,"
presents a groundbreaking tool designed to bridge this gap by using diffusion models to generate synthetic network traffic that
is not only high in fidelity but also adheres to protocol specifications. For more details regarding the tool, please refer to our full paper (https://dl.acm.org/doi/pdf/10.1145/3639037).
<figure align="center">
  <figcaption>NetDiffusion Pipeline:</figcaption>
  <img src="https://github.com/noise-lab/NetDiffusion_Generator/assets/47127634/804756f9-156e-4796-bea6-00d5d7bb1706" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="1241">
</figure>


# Why NetDiffusion?

Our motivation stems from the limitations of current synthetic data generation methods, which primarily
focus on aggregated statistics or selected packet attributes. These methods often fall short, particularly
when training ML models that rely on detailed features only available in packet traces. NetDiffusion addresses these
challenges head-on. It leverages a finely-tuned, controlled variant of a Stable Diffusion model to create synthetic network
traffic that closely mimics real-world data in both statistical behavior and compliance with network protocols.

# How NetDiffusion Works

NetDiffusion operates in three key stages:

**Network Traffic to Image Conversion**: We convert raw network traffic into image-based representations.
This innovative approach allows us to leverage the advanced capabilities of diffusion models, which excel in generating high-quality images from textual descriptions.
<div align="center">
  <img src="https://github.com/net-ml/net-ml.github.io/assets/47127634/f6103b57-5c93-4847-8c72-9c9a41b58b70" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="600">
</div>

**Fine-Tuning Diffusion Model for Network Traffic Generation**: By fine-tuning a diffusion model on network traffic images,
NetDiffusion can generate synthetic data that preserves the intricate patterns found in real network traffic.
<div align="center">
  <img src="https://github.com/net-ml/net-ml.github.io/assets/47127634/90af5e42-e229-4ffb-a013-2800264fa8e2" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="800">
</div>

**Ensuring Protocol Compliance**: A significant contribution of NetDiffusion is its ability to generate synthetic
data that adheres to inter and intra-packet network protocol rules through post-generation heuristic.
This ensures that the generated traffic can be readily used for a wide range of network analysis and testing tasks beyond ML applications.
<div align="center">
  <img src="https://github.com/net-ml/net-ml.github.io/assets/47127634/438e4c0f-1b89-4d36-a775-9611fbb41781" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="700">
</div>

# Evaluation and Impact
We evaluate the quality of NetDiffusion-synthetic traces by using it to generate network flows for ten different applications and services.
Our evaluation demonstrates that NetDiffusion-generated data achieves higher statistical similarity to
real data compared to existing state-of-the-art methods.
<div align="center">
  <img src="https://github.com/net-ml/net-ml.github.io/assets/47127634/6999e559-bec7-4e82-b593-fa4806864eb9" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="500">
</div>


We also look at the scenarios where the training of ML models is done using a mixture of both real and synthetic data,
and across all scenarios, ML models that use our synthetic data is able to outperform those that use other synthetic data.
<div align="center">
  <img src="https://github.com/net-ml/net-ml.github.io/assets/47127634/cc610302-af90-40ee-8ee0-6c4d87a89922" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="800">
</div>

Lastly, we try to use synthetic data to solve the problem of class imbalance where we populate underrepresented classes using the synthetic data points.
we observe notable ML accuracy improvement when we carry out class balancing using NetDiffusion data, particularly for classes that are underrepresented such as Facebook, Meet, and Zoom in this case.
<div align="center">
  <img src="https://github.com/net-ml/net-ml.github.io/assets/47127634/2afd2e9e-878e-48fd-a7e4-fee725dbf28d" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="500">
</div>

Furthermore, the generated
synthetic network traffic supports traditional network analysis and testing tasks, showcasing NetDiffusion's versatility
and potential to serve a broad spectrum of network research and development needs.
<div align="center">
  <img src="https://github.com/net-ml/net-ml.github.io/assets/47127634/f76240c2-a54f-421f-b057-c15f3e87dea3" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="500">
</div>

# Open Source and Future Directions

We are committed to contributing to the research community and have made our pipeline available on GitHub (https://github.com/noise-lab/NetDiffusion_Generator/tree/main).
Looking ahead, we see numerous opportunities to enhance NetDiffusion, including exploring more sophisticated conditioning techniques
for diffusion models and extending its applicability to even more diverse network scenarios.

# Concluding Thoughts

NetDiffusion represents a significant step forward in network data augmentation. By addressing the critical need for
detailed and protocol-compliant synthetic network data, it opens new avenues for research and development in network management,
security, and beyond. We are excited about the potential of NetDiffusion and look forward to its adoption and evolution within the research community.
