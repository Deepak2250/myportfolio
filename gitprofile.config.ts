// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Deepak2250', // Your GitHub org/user name. (This is the only required config)
     enablePWA: true,
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/DeepakPort/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Deepak2250/Movie-Finder-Web' , 'Deepak2250/advance-lib-system' , 'Deepak2250/Resqsync', 'Deepak2250/scriptenhancerapp'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Resqsync',
          description:
            'ResQSync is a real-time crisis management platform that intelligently allocates resources, tracks live emergencies, and provides automated alerts to ensure quick and efficient disaster response. Our system bridges the gap between victims, volunteers, hospitals, and emergency responders.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Deepak2250/Resqsync',
        },
        {
          title: 'Script Enhancer',
          description:
            'This is a full-stack web application that enables users to enhance and improve their scripts or textual content with the power of advanced Natural Language Processing (NLP) technologies via the Hugging Face API.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Deepak2250/scriptenhancerapp',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Deepak',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/deepak-singh-jeena-063b2429/', // Your LinkedIn account link
    github: 'https://github.com/Deepak2250', // Your GitHub account link
    website: 'https://www.arifszn.com',
    email: 'jeenad36@gmail.com',
  },
  resume: {
    fileUrl:
      '' // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'java',
    'Spring Boot',
    'Spring',
    'Spring Security',
    'Hibernate',  
    'JPA',
    'Java EE',
    'JavaFX',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'MongoDB',
    'Git',
    'Docker',
    'CSS',
    'HTML',
    'Tailwind',
  ],
  experiences: [
  {
    company: 'HackHound Hackathon',
    position: 'Participant (Student)',
    from: 'March 2024',
    to: 'March 2024',
    companyLink: '', // optional
  },
  {
    company: 'Infronix Hackathon',
    position: 'Participant (Student)',
    from: 'April 2024',
    to: 'April 2024',
    companyLink: '', // optional
  },
],

  certifications: [
    {
      name: 'Java Full Stack Developer',
      body: 'A Comprehensive Java Full Stack Developer course that covers both front-end and back-end development using Java technologies.',
      provider: 'Ducat',
      year: 'March 2023',
      link: '',
    },
    {
      name: 'HackHound Hackathon',
      body: 'HackHound Hackathon is a 24-hour hackathon event where participants collaborate to create innovative solutions to real-world problems.',
      provider: 'Srm college of Engineering',
      year: 'March 2024',
      link: '',
    },
    {
      name: 'Infronix Hackathon',
      body: 'Infronix Hackathon is a 8- hours hackathon event where participants have to make mvp design of this problem statements.',  
      provider: 'IIIT Delhi',
      year: 'March 2024',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Inderprastha Engineering College',
      degree: 'Bachelor of Computer Applications',
      from: '2024',
      to: '2027',
    },
    {
      institution: 'Ducat',
      degree: 'Java Full Stack Developer',
      from: '2023',
      to: '2024',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

//   // Optional Footer. Supports plain text or HTML.
//   footer: `Made with <a 
//       class="text-primary" href="https://github.com/arifszn/gitprofile"
//       target="_blank"
//       rel="noreferrer"
//     >GitProfile</a> and ❤️`,

//   enablePWA:
//  true,
// };


};
export default CONFIG;
