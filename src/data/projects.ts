const projects = [
  {
    image: new URL("../assets/project-convene-app.png", import.meta.url).href,
    imgAlt: "Screenshot of a dashboard application with rows of housing data",
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
        alt: "GitHub logo",
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
      "Prisma",
      "JWT Authentication",
    ],
    skillsMed: [
      "Netlify",
      "Render",
    ],
  },
  {
    image: new URL("../assets/project-fair-housing.png", import.meta.url).href,
    imgAlt: "Screenshot of a dashboard application with rows of housing data",
    title: "Fair Housing Audit Dashboard",
    year: 2024,
    description:
      "Designed and implemented a dashboard for a Chicago nonprofit to uphold fair housing law compliance. Developed with React.js and Node.js (Express) and read/written to a PostgreSQL database. Deployed with Google App Engine and set up authentication with GCP Identity-Aware Proxy (IAP).",
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
      "Google App Engine",
      "GCP Identity-Aware Proxy",
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
