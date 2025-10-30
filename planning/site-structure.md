# Net-ML Site Structure Plan

This document outlines the planned sections for the upgraded net-ml.github.io site.

## 1. Blog/Posts

Content area for articles, updates, and announcements related to network machine learning research.

**Key Features:**
- Individual blog post pages
- Archive/listing page
- Tags/categories for organization (optional)
- Date-based organization 

**Content Types:**
- Research updates
- Project announcements
- Tutorial articles
- Conference/publication highlights
- Commentary on other research, current events, etc.

---

## 2. Projects

Showcase of research projects and tools developed by the group.

**Featured Projects:**
- Data Representation
  - NetML
  - nprint
- Generative AI
  - NetDiffusion
  - NetSSM
  - CAIP
- MLOps
  - Model Maintenance / Training
    - LEAF
  - Optimizing Model Serving
    - CATO
    - Traffic Refinery
  - Dynamic Model Execution
    - JITI
    - ServeFlow
    - Cruise Control
    - LoFi
- Privacy (Future)

**For Each Project:**
- Project description / overview
  - Use cases and examples
- GitHub repository link
- Documentation links
  - Installation/getting started guides
- Key publications

---

## 3. People

Team members and collaborators involved in the research.

**Categories:**
- Project Leaders
- Postdocs
- PhD Students
- Master's Students
- Undergraduate Researchers
- Alumni
- Collaborators

**Per Person:**
- Name and photo
- Role/position
- Research interests
- Personal website/social links

---

## 4. Datasets and Code

Pointers to repositories of research datasets and code releases.

**Datasets:**
- Dataset descriptions
- Download links
- Documentation
- Citation information
- License information

**Code:**
- Research implementations (Github Repositories)
- Documentation and tutorials
  - With full instructions on how to run the implementations

---

## 5. Resources

Resources for teaching and learning. Course materials, etc.

**Components:**

### Assignments (Pointers)
- Problem sets
- In-class hands-on activities
- Programming assignments
- Project ideas / Pointers

### Reading
- Recommended background reading (pointers to background material, including our own)
- Textbooks
- Research papers

### Videos and Series
- Lecture recordings
- Tutorial series
- Conference talks
- Demo videos

**Organization:**
- By course/topic
- Pointers to any supplementary materials (slides, code, etc.)

---

## Implementation Notes

We believe that the current template should support all of the functionality below. Please indicate if it doesn't.

- Ensure responsive design for all sections (obviously)
- Implement search functionality across content (depending on template; if too complicated, eliminate this)
- More important than search functionality is isolation of content (publications, blog, etc.) by tags
- Consider static site generator (Jekyll, Hugo, Next.js, etc.). We want to write everything in markdown.
- Plan for easy content updates
- Include analytics for tracking usage (probably just Google Analytics, though really we don't care)
