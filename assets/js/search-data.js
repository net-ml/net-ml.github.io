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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-introducing-netdiffusion-a-new-direction-in-network-data-augmentation",
      
        title: "Introducing NetDiffusion: A New Direction in Network Data Augmentation",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/netdiffusion/";
        
      },
    },{id: "post-leaf-will-appear-at-acm-conext-2023",
      
        title: "LEAF will appear at ACM CoNEXT 2023",
      
      description: "LEAF: Navigating Concept Drift in Cellular Networks",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/leaf/";
        
      },
    },{id: "post-amir-will-appear-at-acm-ubicomp-2023",
      
        title: "AMIR will appear at ACM Ubicomp 2023",
      
      description: "AMIR: Active Multimodal Interaction Recognition from Video and Network Traffic in Connected Environments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/amir/";
        
      },
    },{id: "post-traffic-refinery-will-appear-at-acm-sigmetrics-2022",
      
        title: "Traffic Refinery will appear at ACM SIGMETRICS 2022",
      
      description: "A cost-aware data representation analysis system for machine learning on network traffic",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/traffic-refinery/";
        
      },
    },{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-andrew-chu",
          title: 'Andrew Chu',
          description: "University of Chicago",
          section: "Projects",handler: () => {
              window.location.href = "/projects/andrew/";
            },},{id: "projects-arjun-bhagoji",
          title: 'Arjun Bhagoji',
          description: "IIT Bombay",
          section: "Projects",handler: () => {
              window.location.href = "/projects/arjun/";
            },},{id: "projects-xi-chase-jiang",
          title: 'Xi (Chase) Jiang',
          description: "University of Chicago",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chase/";
            },},{id: "projects-francesco-bronzino",
          title: 'Francesco Bronzino',
          description: "ENS de Lyon",
          section: "Projects",handler: () => {
              window.location.href = "/projects/francesco/";
            },},{id: "projects-johann-hugon",
          title: 'Johann Hugon',
          description: "ENS de Lyon",
          section: "Projects",handler: () => {
              window.location.href = "/projects/johann/";
            },},{id: "projects-nick-feamster",
          title: 'Nick Feamster',
          description: "University of Chicago",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nick/";
            },},{id: "projects-paul-schmitt",
          title: 'Paul Schmitt',
          description: "Cal Poly",
          section: "Projects",handler: () => {
              window.location.href = "/projects/paul/";
            },},{id: "projects-shinan-liu",
          title: 'Shinan Liu',
          description: "University of Chicago",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shinan/";
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
