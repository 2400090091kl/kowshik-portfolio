export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string }[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  coursework: string[];
}

export interface ExperienceItem {
  title: string;
  category: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  year?: string;
  status?: string;
  description: string[];
  techStack: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string | null;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  duration: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kumara Veera Kowshik Parsha",
    shortName: "KOWSHIK",
    role: "Computer Science and Information Technology Student",
    subRole: "Aspiring Software Engineer",
    university: "Koneru Lakshmaiah Education Foundation, India",
    heroBio:
      "Computer Science and Information Technology (CSIT) student passionate about software development, full-stack applications, cloud technologies, and building practical solutions through technology.",
    aboutBio:
      "I am a Computer Science and Information Technology (CSIT) student at Koneru Lakshmaiah Education Foundation, currently pursuing my B.Tech from 2024 to 2028. I enjoy developing software applications, working with databases, exploring cloud technologies, and building practical projects.",
    focusAreas: [
      "Computer Science and Information Technology (CSIT)",
      "Full-stack development",
      "Backend development",
      "Cloud technologies",
      "Databases",
      "Problem solving",
      "Technical clubs and leadership",
    ],
    contact: {
      email: "2400090091csit@gmail.com",
      phone: "8074456221",
      linkedin: "https://www.linkedin.com/in/kowshik-royal-999ab8360/",
      github: "https://github.com/2400090091kl",
    },
  },
  education: {
    institution: "Koneru Lakshmaiah Education Foundation, India",
    degree: "B.Tech, Computer Science and Information Technology (CSIT)",
    duration: "2024 – 2028 (Expected)",
    cgpa: "7.60 / 10.0",
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Object-Oriented Programming",
      "Artificial Intelligence and Machine Learning",
      "Web Development",
    ],
  } as Education,
  skills: [
    {
      category: "Programming",
      skills: [{ name: "C" }, { name: "Java" }, { name: "JavaScript" }],
    },
    {
      category: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "React.js" }],
    },
    {
      category: "Backend",
      skills: [
        { name: "Spring Boot" },
        { name: "Hibernate" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
      ],
    },
    {
      category: "Databases",
      skills: [{ name: "MySQL" }, { name: "PostgreSQL" }, { name: "MongoDB" }],
    },
    {
      category: "Cloud",
      skills: [{ name: "AWS" }],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Eclipse" },
        { name: "Vercel" },
      ],
    },
    {
      category: "UI/UX",
      skills: [{ name: "Figma" }, { name: "Bootstrap" }, { name: "Material UI" }],
    },
  ] as SkillCategory[],
  experience: [
    {
      title: "Hackathon Project",
      category: "Full-Stack Development & Collaboration",
      highlights: [
        "Developed a full-stack web platform for managing student group projects with task tracking and collaboration features.",
        "Implemented task assignment, progress tracking, and communication tools to improve team workflow.",
        "Collaborated with team members to design, build, and present a functional project management platform.",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "Azure Operations Dashboard",
      description: [
        "A cloud monitoring and operations dashboard built for tracking infrastructure metrics and system performance.",
        "Provides real-time telemetry, automated resource tracking, and interactive operational controls.",
      ],
      techStack: ["Azure", "Cloud Operations", "Node.js", "React.js", "REST APIs"],
      githubUrl: "https://github.com/2400090091kl/Azure-Operations-Dashboard",
      liveUrl: null,
    },
    {
      title: "Car Crash Detecting Sensor",
      description: [
        "A real-time collision detection system designed to improve road safety by identifying crashes using ultrasonic sensing and microcontroller-based logic.",
        "Enables timely alerts and automated response mechanisms to reduce emergency reaction delays.",
        "Integrates sensor-driven telemetry and control logic for enhanced vehicular safety and automated monitoring.",
      ],
      techStack: [
        "Embedded Systems",
        "Ultrasonic Sensors",
        "Microcontroller",
        "Servo Motors",
        "Automation & Robotics",
      ],
      githubUrl: null,
      liveUrl: null,
    },
    {
      title: "Digital Banking System",
      status: "Ongoing",
      description: [
        "Developing a secure web application for account management and online transactions.",
        "Implementing authentication and transaction processing using Node.js and Express.js.",
        "Managing user and transaction data using MongoDB.",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      githubUrl: null,
      liveUrl: null,
    },
  ] as ProjectItem[],
  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
      issuer: "Oracle",
      year: "2025",
      credentialUrl:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D71ED86C2A8B505FB58525D05992CA1FADA881A4FC3DECA20891A3DB27463E21",
    },
    {
      title: "AWS Academy Graduate – Cloud Foundations",
      issuer: "AWS Academy",
      year: "2026",
      credentialUrl: "https://www.credly.com/go/ycvIH5Vn",
    },
    {
      title: "AWS Cloud Computing – DevOps",
      issuer: "APSSDC",
      year: "2026",
      credentialUrl: null,
    },
    {
      title: "Google AI Essentials",
      issuer: "Google / Coursera",
      year: "2026",
      credentialUrl: "https://coursera.org/verify/specialization/1WGHMVA2TA3B",
    },
    {
      title: "Java Microservices with Spring Boot",
      issuer: "Edureka / Coursera",
      year: "2026",
      credentialUrl: "https://coursera.org/verify/JI6M13RG4476",
    },
  ] as CertificationItem[],
  leadership: [
    {
      role: "President",
      organization: "ForensiXplore Club – KL University",
      duration: "Apr 2024 – Present",
      description:
        "Organized technical events, coordinated team activities, and promoted cybersecurity awareness.",
    },
    {
      role: "Technical Member",
      organization: "Broadband Networks Club – KL University",
      duration: "Aug 2025 – Present",
      description:
        "Delivered sessions on networking and broadband technologies and organized technical workshops.",
    },
  ] as LeadershipItem[],
};
