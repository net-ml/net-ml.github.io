# Net-ML Site Structure Plan

This document outlines the planned sections for the upgraded net-ml.github.io site.

## 1. Blog/Posts

Content area for articles, updates, and announcements related to network machine learning research.

**Key Features:**
- Individual blog post pages
- Archive/listing page
- RSS feed support
- Tags/categories for organization
- Date-based organization

**Content Types:**
- Research updates
- Project announcements
- Tutorial articles
- Conference/publication highlights

---

## 2. Projects

Showcase of research projects and tools developed by the group.

**Featured Projects:**
- NetML
- nprint
- Additional research projects

**For Each Project:**
- Project description and overview
- GitHub repository link
- Documentation links
- Key publications
- Use cases and examples
- Installation/getting started guides

---

## 3. People

Team members and collaborators involved in the research.

**Categories:**
- Principal Investigators
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
- Publications

---

## 4. Datasets and Code

Repository of research datasets and code releases.

**Datasets:**
- Dataset descriptions
- Download links
- Documentation
- Citation information
- License information

**Code:**
- Research implementations
- Tools and utilities
- GitHub repositories
- Documentation and tutorials

---

## 5. Course Materials

Educational resources for teaching and learning network machine learning.

**Components:**

### Assignments
- Problem sets
- Programming assignments
- Projects

### Books
- Recommended reading
- Textbooks
- Research papers

### Videos and Series
- Lecture recordings
- Tutorial series
- Conference talks
- Demo videos

**Organization:**
- By course/topic
- By difficulty level
- With supplementary materials (slides, code, etc.)

---

## Implementation Notes

- Ensure responsive design for all sections
- Implement search functionality across content
- Consider static site generator (Jekyll, Hugo, Next.js, etc.)
- Plan for easy content updates
- Include analytics for tracking usage

## Implementation Status

### Completed (2025-11-16)

1. **Blog/Posts** - Already existing, kept as-is with nav_order: 1
   - Individual blog post pages ✓
   - Archive/listing page ✓
   - RSS feed support ✓
   - Tags/categories ✓

2. **People** - Created new `_people` collection
   - Added: Chase Jiang, Van Tran, Shinan Liu, Andrew Chu, Kyle MacMillan, Paul Schmitt
   - Categories: Faculty, Students, Alumni
   - Page: `/people/` (nav_order: 2)
   - Collection configured in `_config.yml`

3. **Projects** - Existing `_projects` collection repurposed
   - Page: `/projects/` (nav_order: 3)
   - Can showcase NetML, nprint, and other research projects

4. **Datasets and Code** - Created new collections
   - Created `_datasets` collection with nPrint datasets entry
   - Created `_code` collection with: nprint, netml, netdiffusion
   - Combined page: `/datasets-code/` (nav_order: 4)
   - Collections configured in `_config.yml`

5. **Course Materials** - Created new `_courses` collection
   - Added: ML for Computer Systems course
   - Page: `/courses/` (nav_order: 5)
   - Includes links to GitHub repo, Jupyter notebooks, readings
   - Collection configured in `_config.yml`

6. **Publications** - Already existing
   - Updated nav_order to 6 to fit new structure

### Navigation Structure
1. Blog
2. People
3. Projects
4. Datasets & Code
5. Courses
6. Publications

### TODO
- Review framework choice (Jekyll vs. Hugo, Next.js, etc.)
- Review theme options
- Add more datasets as needed
- Add more code repositories from planning doc
- Populate Faculty category in People section
- Test Jekyll build (requires `bundle install`)
- Add Google Analytics if desired
- Enable search functionality across site
