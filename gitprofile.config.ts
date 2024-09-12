// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'DarthKenar', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'DarthKenar/WordlearnSpanish',
          'DarthKenar/ElCanarioMatematico',
          'DarthKenar/ElCanarioRegionales',
          'DarthKenar/PomodoroNeumorphism',
          'DarthKenar/StarWarsAPI',
          'DarthKenar/leetcode-exercises',
          'DarthKenar/Turtle',
          'DarthKenar/Excel-Simple-Display',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Federico Vega',
    description: 'Federico Vega Portfolio',
    imageURL: 'https://avatars.githubusercontent.com/u/81496971?v=4',
  },
  social: {
    linkedin: 'federico-juan-vega',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: 'federicovega3517', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.f-vega.com',
    phone: '',
    email: 'federico.vega2222@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1ScXcTUNTFaOnwBD-mWJHHZWkBqxDtVAC/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Django',
    'FastApi',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'SQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Software Developer',
      from: 'June 2024',
      to: 'Present',
      companyLink: 'https://kairoxlab.com/es/',
    },
    {
      company: 'Zerpens',
      position: 'Web Developer',
      from: 'July 2022',
      to: 'June 2023',
      companyLink: 'https://zerpens.com/',
    },
  ],
  certifications: [
    {
      name: 'Django Practical Course',
      body: 'Credential ID UC-f6bd5a91-b1fc-4e14-a77c-45de8fe93246',
      year: 'November 2023',
      link: 'https://www.udemy.com/certificate/UC-f6bd5a91-b1fc-4e14-a77c-45de8fe93246/',
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      body: 'freeCodeCamp.org',
      year: 'November 2023',
      link: 'https://www.freecodecamp.org/certification/DarthKenar/javascript-algorithms-and-data-structures',
    },
    {
      name: 'Python Master Course',
      body: 'Credential ID UC-cf91b7b8-b395-4272-8e91-06b0e3f1b1f3',
      year: 'July 2023',
      link: 'https://www.udemy.com/certificate/UC-cf91b7b8-b395-4272-8e91-06b0e3f1b1f3/',
    },
  ],
  educations: [
    {
      institution: 'Técnico Superior en Telecomunicaciones',
      degree: 'Technical Degree',
      from: '2018',
      to: '2021',
    },
    {
      institution: 'Técnico Superior en Computación y Redes',
      degree: 'Technical Degree',
      from: '2015',
      to: '2018',
    },
    {
      institution: 'Técnico Superior en Análisis y Programación de Sistemas',
      degree: 'Technical Degree',
      from: '2014',
      to: '2017',
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
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

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

  // Optional Footer. Supports plain text or HTML.
  footer: `Contact Me <a 
      class="text-primary" href="https://www.linkedin.com/in/federico-juan-vega"
      target="_blank"
      rel="noreferrer"
    >☎</a> `,

  enablePWA: true,
};

export default CONFIG;
