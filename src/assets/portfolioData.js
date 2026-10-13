export const portfolioData = {
  personal: {
    name: "Yogesh Gahlawat",
    title: "Java Spring Boot | React.js | Full Stack Developer",
    experienceYears: "3+ Years",
    location: "India",
    email: "yogeshgahlawat2425@gmail.com",
    phone: "+91 8813024892",
    links: {
      linkedin: "https://linkedin.com/in/yogesh-gahlawat-2690a8439",
      github: "https://github.com/YogeshG24",
      leetcode: "https://leetcode.com/u/YogeshG24/",
    },
    summary:
      "Full Stack Developer with 3+ years of experience developing enterprise financial trading applications at Tata Consultancy Services. Experienced in Java, Spring Boot, REST APIs, React.js, Next.js, TypeScript, and Redux Toolkit. Hands-on experience with layered backend architecture, Oracle Database, Spring Data JPA, Redis caching, Redis Streams, asynchronous processing, and frontend performance optimization.",
  },
  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C++"],
    springEcosystem: [
      "Spring Framework",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Spring Security",
      "Spring Boot Actuator",
      "IoC Containers",
      "DI",
    ],
    reactEcosystem: [
      "React.js",
      "Next.js (Page/App Routing)",
      "Redux Toolkit",
      "Redux Thunk",
      "React Hooks",
      "Custom Hooks",
      "Context API",
    ],
    frontend: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "SCSS"],
    databases: ["Oracle Database", "MySQL", "SQLite", "Oracle PL/SQL"],
    cachingAndStreaming: ["Redis", "Redis Streams", "Apache Kafka", "IBM MQ"],
    devToolsAndDeployment: [
      "Git",
      "GitHub",
      "GitLab",
      "VS Code",
      "Postman",
      "Swagger",
      "NGINX",
      "CI/CD",
    ],
  },
  experience: [
    {
      company: "Tata Consultancy Services (TCS)",
      role: "System Engineer - Full Stack Development",
      duration: "Sep 2023 - Present",
      projects: [
        {
          name: "CCIL Bond Forward Trading Platform",
          description:
            "Enterprise financial trading application supporting Bond Forward and Forward Rate Agreement (FRA) workflows involving government securities (G-Sec, SDL), enabling trade processing and access to transaction data across interbank and client market segments.",
          responsibilities: [
            "Developed responsive trading interfaces and workflow-driven screens using React.js, Next.js, and TypeScript.",
            "Implemented frontend state management using Redux Toolkit and Redux Thunk, and created custom hooks for shared application logic, API communication, and form handling.",
            "Developed Spring Boot REST APIs using Controller-Service-Repository architecture, implementing business logic, request validation, and trading-data retrieval.",
            "Integrated Spring Data JPA with Oracle Database for data persistence and transactional operations, working with SQL queries and database performance optimization.",
            "Implemented Redis caching with TTL, cache-aside patterns, and cache-invalidation strategies to improve access to frequently requested reference data.",
            "Built producer-consumer workflows using Redis Streams to enable asynchronous event processing and separate background tasks from synchronous API requests.",
            "Improved frontend rendering and loading performance using React.memo, useMemo, useCallback, lazy loading, dynamic imports, and code splitting.",
          ],
        },
        {
          name: "CCIL ASTROID Trading Platform",
          description:
            "Enterprise financial trading and processing application. Electronic, anonymous order-matching platform for Rupee Interest Rate Swaps (IRS), supporting MIBOR OIS, Modified MIFOR, and interest-rate swap spread trading.",
          responsibilities: [
            "Contributed to the development and maintenance of the ASTROID electronic trading platform supporting trading workflows and order processing.",
            "Worked with C++ for backend application functionality and processing within the trading platform.",
            "Developed and maintained Oracle PL/SQL components to support database operations, trading-data processing, and retrieval.",
            "Worked with IBM MQ for message-based data transmission between application components and integrated systems.",
            "Investigated defects, troubleshot application issues, and collaborated with team members on code changes, testing, and production support.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Amity University, Noida",
      duration: "Aug 2019 - Aug 2022",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Hindu Institute of Management, Sonipat",
      duration: "Aug 2016 - Aug 2019",
    },
  ],
  certifications: [
    {
      title: "Information Security Awareness Protecting the Information",
      issuer: "Tata Consultancy Services / Corporate",
    },
  ],
};
