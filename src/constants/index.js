export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Healthcare Patient Management System',
    desc: 'Streamlines patient registration, appointment booking, and management with powerful administrative tools and SMS notifications for seamless healthcare operations.',
    subdesc:
      'Built using Next.js, Appwrite, Twilio, and Sentry, this platform ensures efficient workflows and responsiveness across devices.',
    href: 'https://pms-sable.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Video Conferencing App',
    desc: 'Replicates Zoom functionalities like secure logins, meeting creation, participant management, screen sharing, recording, and real-time collaboration.',
    subdesc:
      'Developed with Next.js, TypeScript, Clerk, and Tailwind CSS for a robust and scalable video conferencing platform.',
    href: 'https://video-conferencing-black.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/yoom-logo.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Xora - Modern SaaS UI/UX Website',
    desc: 'Showcases modern UI/UX principles with sleek design, animations, gradients, intuitive navigation, seamless transitions, engaging visuals, and optimized performance for an exceptional web experience.',
    subdesc:
      'Built using React.js and Tailwind CSS, Xora sets a new benchmark for pixel-perfect, responsive designs, delivering an unparalleled experience in modern web applications.',
    href: 'https://saas-landing-page-tau-seven.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/saas-logo.ico',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Tailwind CSS', path: '/assets/tailwindcss.png' },
    ],
  },
  {
    title: 'Zentry-Inspired Awwwards Website',
    desc: 'Delivers a luxurious, modern feel with scroll-triggered animations, geometric transitions, video storytelling, responsive design, engaging interactivity, smooth performance, and immersive user experiences for impactful websites.',
    subdesc:
      'Developed using GSAP, React.js, and Tailwind CSS to capture the essence of an Awwwards-winning site, featuring advanced animations and innovative design principles.',
    href: 'https://gaming-awards.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/game-logo.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Tailwind CSS', path: '/assets/tailwindcss.png' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Accenture',
    pos: 'Associate Software Engineer',
    duration: 'Sep 2024 - Present',
    title:
      'Currently working as an Associate Software Engineer, focusing on full-stack development and contributing to various software engineering projects. Gaining hands-on experience in a dynamic, collaborative team environment.',
    icon: '/assets/acc.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'The Patterns Company',
    pos: 'Software Developer',
    duration: 'Oct 2023 - Dec 2023',
    title:
      'Led projects involving web scraping with Python, developing a React-based digital visiting card maker, and automating tasks using Puppeteer. Designed and launched dynamic websites for clients.',
    icon: '/assets/tpc.png',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'CodeClause',
    pos: 'Android Developer Intern',
    duration: 'Sep 2023 - Oct 2023',
    title:
      'Developed a todo list and calculator app using React Native, implementing CRUD functionalities. Collaborated with a team to deliver scalable, user-friendly applications in Android Development.',
    icon: '/assets/codeclause.png',
    animation: 'clapping',
  },

  {
    id: 4,
    name: 'CodeClause',
    pos: 'Web Developer Intern',
    duration: 'Jun 2023 - Jul 2023',
    title:
      'Developed a web-based todo list application using PostgreSQL and implemented a contact form with captcha verification to enhance security.',
    icon: '/assets/codeclause.png',
    animation: 'salute',
  },
];
