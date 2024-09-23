const projects = [
  {
    image: "/src/assets/project-fair-housing.png",
    imgAlt: "Screenshot of a dashboard application with rows of housing data",
    title: "Fair Housing Audit Dashboard",
    year: 2024,
    description:
      "Designed and implemented a dashboard for a Chicago nonprofit to uphold fair housing law compliance. Developed with React.JS and Node.JS (Express) and read/written to a PostgreSQL database. Deployed with Google App Engine and set up authentication with GCP Identity-Aware Proxy (IAP).",
    links: [
      {
        icon: "/src/assets/github-mark.svg",
        link: "https://github.com/wangbertha/hcv_auditor",
        alt: "GitHub logo",
      },
    ],
    skillsHigh: ["HTML/CSS", "JavaScript", "React.JS"],
    skillsMed: [
      "Node.JS",
      "Google App Engine",
      "GCP Identity-Aware Proxy",
      "PostgreSQL",
    ],
  },
  {
    image: "/src/assets/project-ghost-buses.png",
    imgAlt:
      "Screenshot of Chicago Ghost Buses homepage explaining 'What is a Ghost Bus?'",
    title: "Chicago Ghost Buses",
    year: 2024,
    description:
      "Open-source project under Chi Hack Night analyzing bus reliability in Chicago. Resolved frontend bugs and provided pull-request feedback for HTML/CSS and React.JS",
    links: [
      {
        icon: "/src/assets/github-mark.svg",
        link: "https://github.com/chihacknight/ghost-buses-frontend",
        alt: "GitHub logo",
      },
      {
        icon: "/src/assets/ghost-bus-icon.png",
        link: "https://ghostbuses.com/",
        alt: "Thumbnail of Ghost Buses website",
      },
    ],
    skillsHigh: ["HTML/CSS", "JavaScript", "React.JS"],
    skillsMed: [],
  },
  {
    image: "/src/assets/project-portfolio-website.png",
    imgAlt:
      "Screenshot of a portfolio website that displays the person's role and career summary",
    title: "Portfolio Website",
    year: 2024,
    description:
      "Developed this portfolio website with React.JS. Designed with Figma.",
    links: [
      {
        icon: "/src/assets/github-mark.svg",
        link: "https://github.com/wangbertha/portfolio-website",
        alt: "GitHub logo",
      },
      {
        icon: "/src/assets/figma-logo.svg",
        link: "https://www.figma.com/design/McXMjYuY17sXh4MO1dls7T/Portfolio-Website?node-id=0-1&t=CxbCRHQ8ysLcrZZB-1",
        alt: "Figma logo",
      },
    ],
    skillsHigh: ["HTML/CSS", "TypeScript", "React.JS"],
    skillsMed: ["Figma"],
  },
];

export default projects;
