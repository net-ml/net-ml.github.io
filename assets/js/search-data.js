// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Team members and collaborators involved in network machine learning research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research projects and tools",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-datasets-amp-code",
          title: "Datasets &amp; Code",
          description: "Repository of research datasets and code releases",
          section: "Navigation",
          handler: () => {
            window.location.href = "/datasets-code/";
          },
        },{id: "nav-course-materials",
          title: "Course Materials",
          description: "Educational resources for teaching and learning network machine learning",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-optimizing-ml-based-traffic-analysis-with-cato",
      
        title: "Optimizing ML-Based Traffic Analysis with CATO",
      
      description: "CATO: End-to-End Optimization of ML-Based Traffic Analysis Pipelines",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/cato/";
        
      },
    },{id: "post-introducing-netdiffusion-a-new-direction-in-network-data-augmentation",
      
        title: "Introducing NetDiffusion: A New Direction in Network Data Augmentation",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/netdiffusion/";
        
      },
    },{id: "post-dealing-with-model-concept-drift-in-networks-with-leaf",
      
        title: "Dealing with Model Concept Drift in Networks with LEAF",
      
      description: "LEAF: Navigating Concept Drift in Cellular Networks",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/leaf/";
        
      },
    },{id: "post-multimodal-activity-recognition-with-amir",
      
        title: 'Multimodal Activity Recognition with AMIR <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "AMIR: Active Multimodal Interaction Recognition from Video and Network Traffic in Connected Environments",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/ubicomp-iswc-2023/marrying-video-and-network-traffic-for-activity-recognition-and-beyond-3e0bef89a27b", "_blank");
        
      },
    },{id: "post-understanding-the-cost-of-machine-learning-on-network-traffic-with-traffic-refinery",
      
        title: "Understanding the Cost of Machine Learning on Network Traffic with Traffic Refinery",
      
      description: "A cost-aware data representation analysis system for machine learning on network traffic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/traffic-refinery/";
        
      },
    },{id: "code-amir",
          title: 'AMIR',
          description: "Active Multimodal Interaction Recognition framework",
          section: "Code",handler: () => {
              window.location.href = "/code/amir/";
            },},{id: "code-cato",
          title: 'CATO',
          description: "End-to-end ML traffic analysis pipeline optimizer",
          section: "Code",handler: () => {
              window.location.href = "/code/cato/";
            },},{id: "code-netdiffusion",
          title: 'NetDiffusion',
          description: "Generative models for network traffic synthesis",
          section: "Code",handler: () => {
              window.location.href = "/code/netdiffusion/";
            },},{id: "code-netml",
          title: 'NetML',
          description: "Python package for network traffic analysis with machine learning",
          section: "Code",handler: () => {
              window.location.href = "/code/netml/";
            },},{id: "code-nprint",
          title: 'nPrint',
          description: "Generalized representation for network traffic analysis with machine learning",
          section: "Code",handler: () => {
              window.location.href = "/code/nprint/";
            },},{id: "code-traffic-refinery",
          title: 'Traffic Refinery',
          description: "Cost-aware data representation analysis system",
          section: "Code",handler: () => {
              window.location.href = "/code/traffic-refinery/";
            },},{id: "courses-machine-learning-for-computer-systems",
          title: 'Machine Learning for Computer Systems',
          description: "Applications of machine learning to computer systems with focus on networking",
          section: "Courses",handler: () => {
              window.location.href = "/courses/ml-systems/";
            },},{id: "datasets-leaf-cellular-network-dataset",
          title: 'LEAF Cellular Network Dataset',
          description: "Concept drift dataset from cellular networks with 4+ years of data",
          section: "Datasets",handler: () => {
              window.location.href = "/datasets/leaf-dataset/";
            },},{id: "datasets-nprint-project-datasets",
          title: 'nPrint Project Datasets',
          description: "Traffic analysis datasets encoded using pcapML",
          section: "Datasets",handler: () => {
              window.location.href = "/datasets/nprint-datasets/";
            },},{id: "people-andrew-chu",
          title: 'Andrew Chu',
          description: "Ph.D. Student",
          section: "People",handler: () => {
              window.location.href = "/people/andrew/";
            },},{id: "people-chase-jiang",
          title: 'Chase Jiang',
          description: "Ph.D. Student",
          section: "People",handler: () => {
              window.location.href = "/people/chase/";
            },},{id: "people-francesco-bronzino",
          title: 'Francesco Bronzino',
          description: "Assistant Professor",
          section: "People",handler: () => {
              window.location.href = "/people/francesco-bronzino/";
            },},{id: "people-kyle-macmillan",
          title: 'Kyle MacMillan',
          description: "Ph.D./J.D. Student",
          section: "People",handler: () => {
              window.location.href = "/people/kyle/";
            },},{id: "people-nick-feamster",
          title: 'Nick Feamster',
          description: "Professor",
          section: "People",handler: () => {
              window.location.href = "/people/nick-feamster/";
            },},{id: "people-paul-schmitt",
          title: 'Paul Schmitt',
          description: "Assistant Professor",
          section: "People",handler: () => {
              window.location.href = "/people/paul/";
            },},{id: "people-shinan-liu",
          title: 'Shinan Liu',
          description: "Assistant Professor",
          section: "People",handler: () => {
              window.location.href = "/people/shinan/";
            },},{id: "people-taveesh-sharma",
          title: 'Taveesh Sharma',
          description: "Ph.D. Student",
          section: "People",handler: () => {
              window.location.href = "/people/taveesh/";
            },},{id: "people-van-tran",
          title: 'Van Tran',
          description: "Ph.D. Student",
          section: "People",handler: () => {
              window.location.href = "/people/van/";
            },},{id: "projects-nprint",
          title: 'nPrint',
          description: "Standardized network traffic representation for machine learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1-nprint/";
            },},{id: "projects-caip",
          title: 'CAIP',
          description: "Context-aware iterative prompting for detecting router misconfigurations with LLMs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10-caip/";
            },},{id: "projects-serveflow",
          title: 'ServeFlow',
          description: "Fast-slow model architecture for network traffic analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11-serveflow/";
            },},{id: "projects-leaf",
          title: 'LEAF',
          description: "Navigating concept drift in cellular networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2-leaf/";
            },},{id: "projects-netdiffusion",
          title: 'NetDiffusion',
          description: "Protocol-constrained network traffic generation using diffusion models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3-netdiffusion/";
            },},{id: "projects-amir",
          title: 'AMIR',
          description: "Active Multimodal Interaction Recognition from video and network traffic",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4-amir/";
            },},{id: "projects-traffic-refinery",
          title: 'Traffic Refinery',
          description: "Cost-aware data representation for ML on network traffic",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5-traffic-refinery/";
            },},{id: "projects-cato",
          title: 'CATO',
          description: "End-to-end optimization of ML traffic analysis pipelines",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6-cato/";
            },},{id: "projects-netml",
          title: 'NetML',
          description: "Feature extraction for novelty detection in network traffic",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7-netml/";
            },},{id: "projects-jiti",
          title: 'JITI',
          description: "Adaptive ensemble classification for network traffic identification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8-jiti/";
            },},{id: "projects-netssm",
          title: 'NetSSM',
          description: "Multi-flow and state-aware network trace generation using state-space models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9-netssm/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
