# Introducing NetDiffusion: A New Direction in Network Data Augmentation

In the world of machine learning (ML) for network management and security, the scarcity of high-quality,
labeled network datasets has always been a major bottleneck.
Traditional methods for generating synthetic network data,
while useful, have struggled to produce the level of detail and realism required for effective ML model training. This is
where our latest research comes into play. Our paper, "NetDiffusion: Network Data Augmentation Through Protocol-Constrained Traffic Generation,"
presents a groundbreaking tool designed to bridge this gap by using diffusion models to generate synthetic network traffic that
is not only high in fidelity but also adheres to protocol specifications.
<figure align="center">
  <figcaption>NetDiffusion Pipeline:</figcaption>
  <img src="https://github.com/noise-lab/NetDiffusion_Generator/assets/47127634/804756f9-156e-4796-bea6-00d5d7bb1706" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="1241">
</figure>


## Why NetDiffusion?

Our motivation stems from the limitations of current synthetic data generation methods, which primarily
focus on aggregated statistics or selected packet attributes. These methods often fall short, particularly
when training ML models that rely on detailed features only available in packet traces. NetDiffusion addresses these
challenges head-on. It leverages a finely-tuned, controlled variant of a Stable Diffusion model to create synthetic network
traffic that closely mimics real-world data in both statistical behavior and compliance with network protocols.

## How NetDiffusion Works

NetDiffusion operates in three key stages:

1. **Network Traffic to Image Conversion**: We convert raw network traffic into image-based representations.
This innovative approach allows us to leverage the advanced capabilities of diffusion models, which excel in generating high-quality images from textual descriptions.
<div align="center">
  <img src="https://github.com/net-ml/net-ml.github.io/assets/47127634/f6103b57-5c93-4847-8c72-9c9a41b58b70" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="600">
</div>

2. **Fine-Tuning Diffusion Model for Network Traffic Generation**: By fine-tuning a diffusion model on network traffic images,
NetDiffusion can generate synthetic data that preserves the intricate patterns found in real network traffic.
<div align="center">
  <img src="https://github.com/net-ml/net-ml.github.io/assets/47127634/90af5e42-e229-4ffb-a013-2800264fa8e2" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="800">
</div>

3. **Ensuring Protocol Compliance**: A significant contribution of NetDiffusion is its ability to generate synthetic
data that adheres to inter and intra-packet network protocol rules through post-generation heuristic.
This ensures that the generated traffic can be readily used for a wide range of network analysis and testing tasks beyond ML applications.
<div align="center">
  <img src="https://github.com/net-ml/net-ml.github.io/assets/47127634/438e4c0f-1b89-4d36-a775-9611fbb41781" alt="Screenshot 2024-02-29 at 3 41 29 PM" width="700">
</div>

## Evaluation and Impact

Our evaluation demonstrates that NetDiffusion-generated data achieves higher statistical similarity to
real data and improved ML model performance compared to existing state-of-the-art methods. Furthermore, the generated
synthetic network traffic supports traditional network analysis and testing tasks, showcasing NetDiffusion's versatility
and potential to serve a broad spectrum of network research and development needs.
<img width="628" alt="Screenshot 2024-03-18 at 7 03 58 PM" src="https://github.com/net-ml/net-ml.github.io/assets/47127634/031c4005-4a86-4f0b-8685-222948c71d86">

## Open Source and Future Directions

We are committed to contributing to the research community and have made our datasets, pipeline, and results available on GitHub.
Looking ahead, we see numerous opportunities to enhance NetDiffusion, including exploring more sophisticated conditioning techniques
for diffusion models and extending its applicability to even more diverse network scenarios.

## Concluding Thoughts

NetDiffusion represents a significant step forward in network data augmentation. By addressing the critical need for
detailed and protocol-compliant synthetic network data, it opens new avenues for research and development in network management,
security, and beyond. We are excited about the potential of NetDiffusion and look forward to its adoption and evolution within the research community.
