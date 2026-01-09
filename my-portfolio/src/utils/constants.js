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
    bio: "Third-year B.E. Computer Science and Engineering student with a strong foundation in programming and software development. Experienced in building efficient, scalable applications using modern technologies, with a keen interest in solving real-world problems through clean and structured code.",
    education: [
        {
            year: "2023-2027",
            degree: "B.E. in Computer Science and Engineering",
            institution: "Excel Engineering College , Komarapalayam, Namakkal"
        }
    ],
    stats: [
        { label: "Academic Year", value: "Third Year (2027)" },
        { label: "Projects Completed", value: "10+" },
        { label: "Certifications Earned", value: "4+" },
        { label: "Competitions Won", value: "3" }
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
    title: "E-Commerce Web Application",
    description: "Developed a full-stack e-commerce web application enabling seamless online shopping with product browsing, cart management, and secure checkout.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel"],
    impact: "Delivered a responsive, user-friendly platform for online shopping, enhancing user engagement and order management efficiency.",
    links: { 
        github: "https://github.com/indreshharshan/E-Commerce-Web-Site",
        demo: "https://shopever-frontend.vercel.app"
    },
    image: "/assets/images/ecommerce-app.jpg"
},

   {
    title: "Bulkmail Web Application",
    description: "Developed a web application to send bulk emails efficiently, manage subscribers, and track email delivery status with real-time analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel"],
    impact: "Enabled seamless bulk email campaigns with real-time tracking and management",
    links: { 
        github: "https://github.com/indreshharshan/Bulkmail-App",
        demo: "https://bulkmail-app-02.vercel.app"
    },
    image: "/assets/images/bulkmail-app.png" 
},
    {
    title: "Weather Detection Application",
    description: "Built a web app to fetch real-time weather data, display forecasts, and provide location-based weather insights using API integration.",
    tech: ["React", "OpenWeather API", "Axios", "Tailwind CSS", "Vercel"],
    impact: "Provided accurate and user-friendly weather forecasts for multiple locations",
    links: { 
        github: "https://github.com/indreshharshan/Weather-app",
        demo: "https://weather-app-delta-woad-28.vercel.app"
    },
    image: "/assets/images/weather-app.png" 
}
];

export const SKILLS_DATA = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "Flask", icon: SiFlask },
      { name: "REST APIs", icon: FaServer }
    ]
  },
  {
    category: "Databases & Backend Services",
    skills: [
      { name: "Firebase (Auth, Firestore)", icon: SiFirebase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Google Cloud", icon: SiGooglecloud }
    ]
  }
];


export const CERTIFICATIONS_DATA = [
    {
        title: "Fundamentals of object Oriented Programming",
        issuer: "NPTEL",
        date: "Jan-Apr 2025",
        link: "#",
        image: "/assets/images/data-analytics-cert.png"
    },
    {
        title: "Introduction to Industry 4.0 and IOT",
        issuer: "NPTEL",
        date: "Jul-Oct 2025",
        link: "#",
        image: "/assets/images/data-science-cert.png"
    },
    {
        title: "Generative AI Foundations",
        issuer: "AWS",
        date: "August 2025",
        link: "#",
        image: "/assets/images/generative-ai-cert.png"
    },
    {
        title: "Microsoft Excel",
        issuer: "Coursera",
        date: "October 2025",
        link: "#",
        image: "/assets/images/machine-learning-cert.png"
    }
];

export const ACHIEVEMENTS_DATA = [
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
