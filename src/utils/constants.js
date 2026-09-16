import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaServer
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiFlask,
  SiGithub,
  SiPostman,
  SiGooglecloud
} from "react-icons/si";


export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_CONTENT = {
  name: "Indresh Harshan J P",
  title: "Full Stack Developer • AI Developer ",
  tagline: "I build modern, scalable full-stack web applications using the MERN stack, delivering clean interfaces, efficient APIs, and reliable backend systems.",
};

export const ABOUT_CONTENT = {
  bio: "Final-year B.E. Computer Science and Engineering student with a strong foundation in programming and software development. Experienced in building efficient, scalable applications using modern technologies, with a keen interest in solving real-world problems through clean and structured code.",
  education: [
    {
      year: "2023-2027",
      degree: "B.E. in Computer Science and Engineering",
      institution: "Excel Engineering College , Komarapalayam, Namakkal"
    }
  ],
  stats: [
    { label: "Academic Year", value: "Final Year (2027)" },
    { label: "Projects Completed", value: "10+" },
    { label: "Certifications Earned", value: "8+" },

  ]
};

export const EXPERIENCE_DATA = [
  {
    role: "Full Stack Web Development Intern",
    company: "Brainery Spot Technology",
    duration: "December 2025 - January 2026",
    location: "Coimbatore, India",
    description: [
      "Developed an AI-powered preparation assistant to help users practice questions and improve learning efficiency",
      "Designed an interactive and minimal UI focused on clarity and ease of use",
      "Integrated AI-based response handling to deliver contextual and meaningful outputs",
      "Implemented state management and dynamic rendering for real-time user interactions",
      "Deployed the application and optimized performance for smooth usage"
    ],
    tech: [
      "React.js",
      "Prompt-based AI Integration",
      "State Management",
      "API Handling",
      "UI/UX Optimization",
      "Deployment & Hosting"
    ],
    image: "/assets/images/ecommerce-internship.jpg"
  }

];


export const PROJECTS_DATA = [
  {
    title: "AI-Powered E-Commerce Web Application",
    description: "Developed a full-stack AI-powered e-commerce platform with smart product recommendations, AR-based product visualization, cart management, and secure checkout.",

    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Three.js", "Gemini AI", "Vercel"],

    impact: "Delivered an interactive and responsive shopping experience by combining AI recommendations and AR visualization, improving product discovery and user engagement.",
    links: {
      github: "https://github.com/indreshharshan/AI-Powered-E-Commerce",
      demo: "https://shopper-user.vercel.app"
    },
    image: "/assets/images/ecommerce-app.jpg"
  },
{
  title: "Salon Booking & Management Platform",
description: "Developed a full-stack salon booking platform enabling users to explore services, choose preferred time slots, book appointments, and manage their bookings seamlessly.",

tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel"],

impact: "Delivered a responsive and user-friendly booking experience that streamlined appointment scheduling and improved salon service management.",

links: {
  github: "https://github.com/indreshharshan/Trimly",
  demo: "https://trimly-user.vercel.app"
},
image: "/assets/images/salon.jpg"
},
{
  title: "AI Doctor Assistant – Digital Healthcare Platform",
description: "Developed an AI-powered healthcare platform that assists patients with symptom guidance, health-related information, and intelligent interaction through a user-friendly digital interface.",

tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Tailwind CSS", "Vercel", "Render"],

impact: "Delivered an accessible and responsive healthcare experience that helps patients obtain preliminary health guidance and interact with an AI-powered medical assistant.",

links: {
  demo: "https://assistant-patientside.onrender.com/"
},
image: "/assets/images/doctor.jpg"
},
  {
    title: "Bulkmail Web Application",
    description: "Developed a web application to send bulk emails efficiently, manage subscribers, and track email delivery status with real-time analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel"],
    impact: "Enabled seamless bulk email campaigns with real-time tracking and management",
    links: {
      github: "https://github.com/indreshharshan/Bulkmail-App",
      demo: "https://bulkmail-user.vercel.app"
    },
    image: "/assets/images/bulkmail-app.png"
  },
{title: "Travel Discovery Platform",
description: "Developed a responsive travel web application that helps users discover destinations, explore travel information, and plan memorable journeys through an engaging and intuitive interface.",

tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],

impact: "Delivered an interactive and user-friendly travel experience that simplified destination discovery and encouraged users to explore new places.",

links: {
  github: "https://github.com/indreshharshan/Gypsy-Compass",
  demo: "https://gypsycompass.vercel.app"
},
image: "/assets/images/travel.jpg"
},
  {
    title: "AI-Powered Stock Monitoring Platform",
description: "Developed a full-stack stock monitoring platform that enables users to track stocks, manage watchlists, receive real-time market alerts, and generate AI-powered insights for informed investment decisions.",

tech: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini AI", "MongoDB", "Vercel"],

impact: "Delivered an interactive stock monitoring experience with real-time tracking and AI-driven insights, helping users analyze market trends and make more informed decisions.",

links: {
  github: "https://github.com/indreshharshan/Stock-Market-App",
  demo: "https://stock-signalist.vercel.app"
},
image: "/assets/images/stock.jpg"
  },
];

export const SKILLS_DATA = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", icon: FaHtml5, level: "Expert" },
      { name: "CSS3", icon: FaCss3Alt, level: "Advanced" },
      { name: "JavaScript", icon: SiJavascript, level: "Advanced" },
      { name: "React", icon: FaReact, level: "Expert" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
      { name: "Redux", icon: SiRedux, level: "Intermediate" }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: "Advanced" },
      { name: "Express.js", icon: SiExpress, level: "Advanced" },
      { name: "Python", icon: FaPython, level: "Intermediate" },
      { name: "Flask", icon: SiFlask, level: "Intermediate" },
      { name: "REST APIs", icon: FaServer, level: "Expert" }
    ]
  },
  {
    category: "Databases & Backend Services",
    skills: [
      { name: "Firebase (Auth, Firestore)", icon: SiFirebase, level: "Advanced" },
      { name: "MongoDB", icon: SiMongodb, level: "Expert" },
      { name: "MySQL", icon: SiMysql, level: "Intermediate" }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", icon: SiGithub, level: "Expert" },
      { name: "Postman", icon: SiPostman, level: "Advanced" },
      { name: "Google Cloud", icon: SiGooglecloud, level: "Intermediate" }
    ]
  }
];


export const CERTIFICATIONS_DATA = [
  {
    title: "Fundamentals of object Oriented Programming",
    issuer: "NPTEL",
    date: "Jan-Apr 2025",
    link: "/assets/images/oops.png",
    image: "/assets/images/oops.png"
  },
  {
    title: "Full Stack MERN Developement",
    issuer: "Error Makes Clever",
    date: "Sep 2025-Feb 2026",
    link: "/assets/images/Fullstack.png",
    image: "/assets/images/Fullstack.png"
  },
  {
    title: "Prompt Engineering",
    issuer: "Error Makes Clever",
    date: "Jan-Fed 2026",
    link: "/assets/images/prompt.png", 
    image: "/assets/images/prompt.png"
  },
  {
    title: "Fundamental of Python",
    issuer: "Coursera",
    date: "Jun 2025",
    link: "/assets/images/python.jpg",
    image: "/assets/images/python.jpg"
  }
];

export const ACHIEVEMENTS_DATA = [
   {
    title: "Error Makes Clever-(24 Hours) Product Building Hackathon",
    date: "Mar 2026",
    description: "Attended 24 Hours Product Building Hackathon to enhance Problem Sloving and Business MOdel Product Building skills.",
    context: "JavaScript, ML, AI",
    image: "/assets/images/hackathon.jpg"
  },
   {
    title: "Error Makes Clever-(24 Hours) Product Building Hackathon",
    date: "Mar 2026",
    description: "Getting Certification form Error Makes Clever Founder",
    image: "/assets/images/h5.jpg"
  },
  {
    title: "MERN-STACK Intern",
    date: "December 2025",
    description: "• Successfully completed a Mern-stack development internship with hands-on project experience",
    prize: "₹10,000",
    context: "MERN Stack Development",
    image: "/assets/images/intern.jpg"
  },
  {
    title: "Advanced AI & Machine Learning Workshop 2025",
    date: "June 2025",
    description: "Attended AI training workshop to enhance Python and Machine Learning skills.",
    context: "Python, ML, AI Basics",
    image: "/assets/images/Workshop.png"
  },
  

];

export const CONTACT_INFO = {
  email: "indreshharshan26@gmail.com",
  github: "https://github.com/indreshharshan",
  linkedin: "https://www.linkedin.com/in/indreshharshan/",
  location: "Erode, Tamil Nadu, India"
};
