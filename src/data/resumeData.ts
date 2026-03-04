/**
 * Static content model for the portfolio.
 * Keeping all resume content in one module makes updates easy and reviewable.
 */

/**
 * Common label/url pair used across profile and timeline cards.
 */
export type Link = { label: string; href: string };

/**
 * Unified schema for timeline entries.
 * Date strings stay sortable when stored as `YYYY-MM`.
 */
export type TimelineItem = {
  type: "Experience" | "Project" | "Education" | "Certification";
  title: string;
  org?: string;
  location?: string;
  start?: string; // YYYY-MM or YYYY
  end?: string;   // YYYY-MM or YYYY or "Present"
  date?: string;  // single-date events like "2026-02"
  bullets: string[];
  tags?: string[];
  links?: Link[];
};

/**
 * Primary profile metadata shown in the nav, about, and contact sections.
 */
export const person = {
  name: "Andrew Craeton",
  location: "Bend, OR",
  phone: "971-408-8373",
  email: "craetona@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/craetona" },
    { label: "GitHub", href: "https://github.com/craetona" },
  ] as Link[],
};

/**
 * Professional positioning statement displayed in the About section.
 */
export const summary =
  "Computer Science graduate with experience building full-stack web features and embedded firmware integrations on a team project (ESP32 + web UI). Comfortable shipping code with Git, automated tests, and CI/CD (GitHub Actions). Strong troubleshooting background from aircraft maintenance and semiconductor/robotics training. Seeking an entry-level Software Engineer role focused on building reliable, user-friendly systems.";

/**
 * Skill groups rendered as badges in the Skills section.
 */
export const skills = {
  languages: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "C/C++",
    "React",
    "Preact",
  ],
  tools: [
    "Git",
    "GitHub",
    "GitHub Actions (CI/CD)",
    "Automated testing",
    "CLI workflows",
  ],
  web: [
    "UI/UX Implementation and Optimization",
    "RESTful APIs",
    "Front-end web development",
    "Back-end web development",
  ],
  it: [
    "Command Prompt",
    "Basic PowerShell",
    "Basic Linux terminal",
    "User profiles and permissions",
    "HTTP/HTTPS",
    "TCP/IP",
    "DNS",
    "Basic network troubleshooting",
  ],
  soft: [
    "Problem-solving (individual + collaborative)",
    "Troubleshooting",
    "Clear communication",
    "Attention to detail",
    "Discipline and adaptability in high-pressure situations",
    "Leadership",
    "Time management",
  ],
};

/**
 * Reverse-chronological career, education, and project history.
 */
export const timeline: TimelineItem[] = [
  {
    type: "Experience",
    title: "Propulsion Technician",
    org: "Oregon Air National Guard",
    start: "2019-11",
    end: "2025-11",
    tags: ["Aircraft Systems", "Problem-solving", "Troubleshooting", "Cross-functional Collaboration", "Leadership", "Time Management", "Adaptability"],
    bullets: [
      "Troubleshot and repaired complex aircraft systems under strict time constraints.",
      "Managed parts inventory with accurate tracking and operational efficiency.",
      "Collaborated cross-functionally to meet deadlines and uphold safety standards.",
    ],
  },
  {
    type: "Education",
    title: "Bachelor of Science (B.S.), Computer Science",
    org: "Oregon State University",
    location: "Corvallis, OR",
    start: "2021-09",
    end: "2025-06",
    tags: ["HTML", "CSS", "JavaScript", "Python", "C/C++", "Data Structures", "Web Development", "Algorithms", "Databases", "Operating Systems", "Computer Networks", "AI & Machine Learning"],
    bullets: [
      "Coursework: Data Structures; Web Development; Analysis of Algorithms; Introduction to Databases; Operating Systems I & II; Introduction to Computer Networks; Social & Ethical Issues in CS; Computation & Algorithmic Thinking; Open Source Software; Intro to AI; Machine Learning & Data Mining; Intro to Parallel Programming; Intro to Info Visualization.",
    ],
  },
  {
    type: "Project",
    title: "AudioLux Audio Visualizer",
    start: "2024-09",
    end: "2025-06",
    tags: ["HTML", "CSS", "JavaScript", "Preact", "C++", "Full-stack development", "ESP32", "UI/UX", "CI/CD", "GitHub Actions"],
    bullets: [
      "Developed front-end, back-end, and embedded software to integrate firmware reliably and overhaul web UI/UX for accessibility and usability in an interactive audio-visual system.",
      "Designed and implemented automated tests (CLI + GitHub Actions) to ensure code quality and reliable production builds.",
      "Managed and maintained the GitHub repository to streamline collaboration and community contributions.",
    ],
    links: [
      { label: "Repo", href: "https://github.com/OPEnSLab-OSU/Nanolux" },
    ],
  },
  {
    type: "Experience",
    title: "Trainee",
    org: "Analog Devices Semiconductor/Robotics Bootcamp",
    start: "2025-07",
    end: "2025-08",
    tags: ["Problem-solving", "Troubleshooting", "Clear communication", "OMRON Sysmac/TMFlow"],
    bullets: [
      "Troubleshot and repaired semiconductor fabrication tools (lithography, etching, diffusion, ion implantation, thin-film deposition).",
      "Programmed Sysmac and TMFlow for autonomous robots and PLCs (OMRON), applying systematic troubleshooting methods.",
    ],
  },
  {
    type: "Certification",
    title: "Google Technical Support Fundamentals Certificate",
    date: "2026-02",
    bullets: ["Issued Feb 2026."],
  },
  {
    type: "Certification",
    title: "Meta Front End Developer Professional Certificate",
    date: "2026-02",
    bullets: ["Issued Feb 2026."],
  },
  {
    type: "Project",
    title: "Personal Portfolio Website",
    start: "2025-10",
    end: "Present",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Full-Stack Development", "UI/UX Design", "GitHub Pages"],
    bullets: [
      "Built a responsive, accessible portfolio website using React and TypeScript.",
      "Implemented a clean, modern UI/UX design with attention to accessibility and usability.",
      "Deployed the website using GitHub Pages for easy access and maintenance.",
    ],
    links: [
      {label: "Repo", href: "https://github.com/craetona/drew-portfolio"},
    ],
  },
];
