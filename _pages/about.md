---
layout: about
title: About
permalink: /
subtitle:
description: The nexus of networking and AI/ML research - advancing the intersection of machine learning and computer networks

profile:

news: false # includes a list of news items
latest_posts: false # includes a list of the newest posts
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

# NetML

The NetML project has been pioneering the application of machine learning to networking problems since 2006. We were the first to apply ML-based analysis to network traffic for security applications including spam detection, botnet detection, and phishing. Since 2008, we have also been applying machine learning to network performance analysis problems.

The current group of researchers has been working together steadily since 2017, when we began developing ML models for inference from encrypted network traffic. Our work has been featured on the [front page of the Wall Street Journal](https://www.wsj.com/graphics/faster-internet-not-worth-it/) in 2019.

Our mission is to develop cutting-edge solutions that apply ML to optimize network performance, enhance security, and tackle complex challenges in modern computer networks.

## Current Research

Our current research focuses on several key areas:

- **Data Representation**: Developing efficient and effective representations of network traffic for ML tasks
  - [nPrint](/projects/#nprint): Packet-level feature extraction
  - [NetML](/projects/#netml): Feature extraction for novelty detection

- **Synthetic Data Generation**: Creating high-fidelity synthetic network data for training and testing
  - [NetDiffusion](/projects/#netdiffusion): Protocol-constrained traffic generation
  - [NetSSM](/projects/#netssm): State-space models for multi-flow trace generation

- **Multimodal Inference**: Combining network data with other signals for robust analysis
  - [AMIR](/projects/#amir): Video quality inference from encrypted traffic
  - [CAIP](/projects/#caip): LLM-based router misconfiguration detection
  - [SwiftQueue](/projects/#swiftqueue): Per-packet latency prediction for L4S queue selection

- **Model Serving and Maintenance**: Balancing model accuracy with systems-level deployment costs
  - [LEAF](/projects/#leaf): Navigating concept drift in cellular networks
  - [CATO](/projects/#cato): End-to-end optimization of ML pipelines
  - [Traffic Refinery](/projects/#traffic-refinery): Cost-aware data representation

- **Dynamic Model Execution**: Adaptive model selection and scheduling for real-time network analysis
  - [JITI](/projects/#jiti): Adaptive ensemble classification
  - [ServeFlow](/projects/#serveflow): Fast-slow model architecture
  - [Cruise Control](/projects/#cruise-control): Dynamic model selection

## Projects

Explore our research [projects](/projects/).

{% include latest_posts.liquid %}

## Datasets and Code

We release datasets, code, and tools to enable reproducible research. Visit our [Datasets & Code](/datasets-code/) page to access our resources.

## Get Involved

Whether you're an academic, industry professional, or enthusiast, we invite you to explore our [updates](/blog/), check out our [publications](/publications/), or learn from our [course materials](/courses/).

---

## Funding

This research is supported by:

- **DARPA** - [Provably Weird Network Deployment and Detection (PWND²)](https://www.darpa.mil/research/programs/provably-weird-network)
- **National Science Foundation** - Awards [2319603](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2319603), [2213821](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2213821), and [IIS-2229876](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2229876) (ACTION AI Institute)
- **University of Chicago** - [FACCTS (Foundations and Applications of Cyber-physical and Communication-Computation Tradeoffs in Societies) Program](https://fcc.uchicago.edu/faccts/)

Any opinions, findings, and conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the views of DARPA, the National Science Foundation, or the University of Chicago.
