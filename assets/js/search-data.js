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
