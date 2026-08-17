// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update text, links,
// skills, projects, and contact details — no need to touch components.
// Only verified information from the resume/LinkedIn/GitHub should go here.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Mohd Aziz Aslam',
  headline: 'Front-end Web Developer',
  subHeadline: 'AI & Automation Enthusiast',
  location: 'New Delhi, India',
  email: 'mohdazizaslam9@gmail.com',
  phone: '+91 9540443789',
  whatsappUrl: 'https://wa.me/919540443789',
  github: 'https://github.com/azizaslam36',
  githubUsername: 'azizaslam36',
  linkedin: 'https://www.linkedin.com/in/azizaslam36',
  resumePath: '/resume/Mohd-Aziz-Aslam-Resume.pdf',
  intro:
    'I build responsive, cross-browser web interfaces and experiment with AI-assisted and automation tooling — from voice interfaces to internal task automation.',
} as const;

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export const experience: Experience[] = [
  {
    id: 'cut-edge',
    role: 'Front-end Web Developer',
    company: 'Cut Edge Technology Pvt Ltd',
    location: 'Gurugram, India',
    period: 'Oct 2025 — Nov 2025',
    description: [
      'Built responsive web applications using HTML, CSS, and JavaScript.',
      'Collaborated on UI/UX and implemented client requirements directly.',
      'Tested and optimized pages for responsiveness and cross-browser support.',
    ],
  },
  {
    id: 'cetpa',
    role: 'Python Training Intern',
    company: 'CETPA Infotech Pvt Ltd',
    location: 'Noida, India',
    period: 'Jun 2024 — Jul 2024',
    description: [
      'Worked on Python fundamentals and applied problem-solving.',
      'Practiced data handling, API integration, and system development.',
      'Explored automation concepts and small scripted tools.',
    ],
  },
];

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Dr A.P.J. Abdul Kalam Technical University',
    period: 'Aug 2025 — May 2028',
  },
  {
    id: 'diploma',
    degree: 'Diploma in Computer Engineering',
    institution: 'Delhi Skill and Entrepreneurship University',
    period: 'Aug 2023 — May 2025',
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages & Core',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'OOP'],
  },
  {
    label: 'Web & APIs',
    skills: ['Flask', 'REST APIs', 'JSON', 'Web Development'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'MySQL basics'],
  },
  {
    label: 'Focus areas',
    skills: ['AI & Automation', 'Voice Recognition', 'Data Handling', 'Problem Solving'],
  },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  overview: string;
  role: string;
  stack: string[];
  whatIBuilt: string[];
  challenges: string[];
  sourceUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'pico-voice-assistant',
    title: 'Pico — AI Voice Assistant',
    period: 'Jan 2025 — Mar 2025',
    summary:
      'AI voice assistant with speech recognition and synthesis, backed by a Python Flask server.',
    overview:
      'Pico is an AI voice assistant built with the JavaScript Web Speech API on the front end and a Python Flask backend for task handling. It listens for spoken commands, responds with synthesized speech, and executes a set of modular tasks.',
    role: 'Sole developer — designed the voice interaction flow and built both the front-end capture layer and the Flask backend.',
    stack: ['JavaScript', 'Web Speech API', 'Python', 'Flask'],
    whatIBuilt: [
      'Speech recognition and speech synthesis pipeline using the Web Speech API.',
      'Wikipedia search command and website-opening commands.',
      'File operations triggered by voice, wired to a Flask backend.',
      'A modular task execution system so new voice commands can be added independently.',
    ],
    challenges: [
      'Keeping speech recognition responsive and accurate across different phrasing of the same command.',
      'Structuring the task system so the front end and Flask backend stay cleanly separated.',
    ],
    featured: true,
  },
  {
    slug: 'karshipla-healthcare',
    title: 'Karshipla Healthcare LLP Website',
    period: 'Oct 2025 — Nov 2025',
    summary: 'Responsive multi-page healthcare website built from Figma designs.',
    overview:
      'A responsive, multi-page website for Karshipla Healthcare LLP, developed directly from Figma designs. The site covers Home, About, Contact, and Product sections with interactive UI elements and consistent responsive behavior across devices.',
    role: 'Front-end developer — translated Figma designs into responsive, cross-browser pages.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    whatIBuilt: [
      'Home, About, Contact, and Product sections matching the provided Figma designs.',
      'Interactive UI elements and responsive layouts for mobile, tablet, and desktop.',
      'Cross-browser tested markup and styling.',
    ],
    challenges: [
      'Matching pixel-level details from Figma while keeping the layout responsive.',
      'Structuring multi-page navigation cleanly across sections.',
    ],
    sourceUrl: 'https://github.com/azizaslam36/Karshipla-Healthcare',
    featured: true,
  },
  {
    slug: 'cut-edge-internship-tasks',
    title: 'Front-end Development Internship Tasks',
    period: 'Oct 2025 — Nov 2025',
    summary: 'Responsive HTML, CSS, and JavaScript tasks completed during the Cut Edge internship.',
    overview:
      'A collection of front-end development tasks completed during the internship at Cut Edge Technology, focused on responsive HTML, CSS, and JavaScript implementation.',
    role: 'Front-end developer intern.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    whatIBuilt: [
      'Multiple responsive page builds assigned during the internship.',
      'Cross-browser testing and optimization for each task.',
    ],
    challenges: [
      'Working within client-provided requirements and turnaround expectations.',
    ],
    sourceUrl: 'https://github.com/azizaslam36/Cut_Edge_technology_Internship',
    featured: true,
  },
  {
    slug: 'mt-collection',
    title: 'M&T Collection — Personalized Products Website',
    period: 'Jan 2024 — Feb 2024',
    summary: "Personalized products and men's fashion website.",
    overview:
      "A website for M&T Collection, showcasing personalized products and men's fashion, built with HTML, CSS, and JavaScript.",
    role: 'Front-end developer.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    whatIBuilt: [
      'Full page structure and styling for the product-facing site.',
      'JavaScript-driven interactive elements for browsing products.',
    ],
    challenges: [
      'Presenting a personalized-products catalog clearly with limited assets.',
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
