const projects = [
  {
    image: new URL("../assets/project-2dgame.png", import.meta.url).href,
    imgAlt:
      "Screenshot of 2D game, where a player is pushing a box towards a hole",
    title: "2D Game *In-Progress*",
    year: 2024,
    description:
      'Puzzle game where the player must push a box into a target. Developed with Java',
    links: [
      {
        icon: new URL("../assets/github-mark.svg", import.meta.url).href,
        link: "https://github.com/wangbertha/2DGame",
        alt: "GitHub logo",
      },
    ],
    skillsHigh: ["Java"],
    skillsMed: ["javax.swing", "java.awt", "java.io"],
  },
  {
    image: new URL("../assets/project-electrify-chicago.png", import.meta.url).href,
    imgAlt:
      "Screenshot of Electrify Chicago building page",
    title: "Electrify Chicago",
    year: 2024,
    description:
      'Open-source project under Chi Hack Night making Chicago building emissions and energy usage accessible to the public. Contributed a "call-to-action" feature with copy-to-clipboard functionality using HTML, SCSS, TypeScript, and Vue.js',
    links: [
      {
        icon: new URL("../assets/github-mark.svg", import.meta.url).href,
        link: "https://github.com/vkoves/electrify-chicago",
        alt: "GitHub logo",
      },
      {
        icon: new URL("../assets/electrify-chicago-logo.png", import.meta.url).href,
        link: "https://electrifychicago.net/",
        alt: "Electrify Chicago logo",
      },
    ],
    skillsHigh: ["HTML", "SCSS", "TypeScript", "Vue.js"],
    skillsMed: ["Netlify"],
  },
  {
    image: new URL("../assets/project-convene-app.png", import.meta.url).href,
    imgAlt: "Screenshot of Convene app homepage",
    title: "Convene App",
    year: 2024,
    description:
      "Collaborated in a team of 5 developers to design, develop, debug, and deploy a web application where users can find friends/dates and plan for their in-person meetings.",
    links: [
      {
        icon: new URL("../assets/github-mark.svg", import.meta.url).href,
        link: "https://github.com/wangbertha/convene-app-frontend",
        alt: "GitHub logo",
      },
      {
        icon: new URL("../assets/github-mark.svg", import.meta.url).href,
        link: "https://github.com/wangbertha/convene-app-backend",
        alt: "GitHub logo",
      },
      {
        icon: new URL("../assets/convene-app-icon.png", import.meta.url).href,
        link: "https://convene-app.netlify.app/",
        alt: "Convene app logo",
      },
    ],
    skillsHigh: [
      "JavaScript",
      "HTML",
      "CSS",
      "React.js",
      "Vite",
      "Redux.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma ORM",
      "JWT Authentication",
    ],
    skillsMed: [
      "Netlify",
      "Render (Cloud Application Platform)",
    ],
  },
  {
    image: new URL("../assets/project-fair-housing.png", import.meta.url).href,
    imgAlt: "Screenshot of a dashboard application with rows of housing data",
    title: "Fair Housing Audit Dashboard",
    year: 2024,
    description:
      "Designed and implemented a dashboard for a Chicago nonprofit to uphold fair housing law compliance. Developed with React.js and Node.js (Express) and read/written to a PostgreSQL database. Deployed with Google App Engine and set up authentication with Google Cloud Platform Identity-Aware Proxy (IAP).",
    links: [
      {
        icon: new URL("../assets/github-mark.svg", import.meta.url).href,
        link: "https://github.com/wangbertha/hcv_auditor",
        alt: "GitHub logo",
      },
    ],
    skillsHigh: ["JavaScript", "HTML", "CSS", "React.js", "Node.js", "Express.js", "REST APIs"],
    skillsMed: [
      "DBeaver",
      "PostgreSQL",
      "Google Cloud Platform",
      "Google App Engine",
    ],
  },
  {
    image: new URL("../assets/project-ghost-buses.png", import.meta.url).href,
    imgAlt:
      "Screenshot of Chicago Ghost Buses homepage explaining 'What is a Ghost Bus?'",
    title: "Chicago Ghost Buses",
    year: 2024,
    description:
      "Open-source project under Chi Hack Night analyzing bus reliability in Chicago. Resolved frontend bugs and provided pull-request feedback for HTML/CSS and React.js",
    links: [
      {
        icon: new URL("../assets/github-mark.svg", import.meta.url).href,
        link: "https://github.com/chihacknight/ghost-buses-frontend",
        alt: "GitHub logo",
      },
      {
        icon: new URL("../assets/ghost-bus-icon.png", import.meta.url).href,
        link: "https://ghostbuses.com/",
        alt: "Thumbnail of Ghost Buses website",
      },
    ],
    skillsHigh: ["HTML", "SCSS", "React.js"],
    skillsMed: ["Netlify"],
  },
  {
    image: new URL("../assets/project-portfolio-website.png", import.meta.url)
      .href,
    imgAlt:
      "Screenshot of a portfolio website that displays the person's role and career summary",
    title: "Portfolio Website",
    year: 2024,
    description:
      "Developed this portfolio website with React.js. Designed with Figma.",
    links: [
      {
        icon: new URL("../assets/github-mark.svg", import.meta.url).href,
        link: "https://github.com/wangbertha/portfolio-website",
        alt: "GitHub logo",
      },
      {
        icon: new URL("../assets/figma-logo.svg", import.meta.url).href,
        link: "https://www.figma.com/design/McXMjYuY17sXh4MO1dls7T/Portfolio-Website?node-id=0-1&t=CxbCRHQ8ysLcrZZB-1",
        alt: "Figma logo",
      },
    ],
    skillsHigh: ["TypeScript", "HTML", "CSS", "React.js", "Vite"],
    skillsMed: ["Figma"],
  },
];

export default projects;
