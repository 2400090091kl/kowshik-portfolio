export interface SkillCategory {
  category: string;
  description?: string;
  skills: { name: string; icon?: string }[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  currentYear: string;
  cgpa: string;
  coursework: string[];
}

export interface ExperienceItem {
  title: string;
  category: string;
  duration?: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  year?: string;
  status?: string;
  category?: string;
  tagline?: string;
  description: string[];
  features?: string[];
  techStack: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  contribution?: string;
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

export interface WhatIDoItem {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "P. Kumara Veera Kowshik",
    shortName: "KOWSHIK",
    role: "Computer Science and Information Technology Student",
    subRole: "Aspiring Software Engineer",
    university: "Koneru Lakshmaiah University (KL University)",
    academicYear: "3rd Year",
    careerObjective: "Seeking Software Engineering Internship opportunities.",
    heroBio:
      "3rd-year Computer Science & IT student at KL University specializing in cloud computing, full-stack architectures, and building high-performance, data-driven systems.",
    aboutBio:
      "I am a Computer Science and Information Technology (CSIT) student at Koneru Lakshmaiah University (KL University), currently in my 3rd year pursuing B.Tech from 2024 to 2028. I focus on developing clean software applications, designing cloud-monitored architectures on Microsoft Azure, and transforming complex data into intuitive, real-time user experiences.",
    focusAreas: [
      "Full-Stack Web Development",
      "Cloud Infrastructure & Azure Monitoring",
      "FastAPI & Python Microservices",
      "Database Modeling & REST APIs",
      "Algorithm Design & System Architecture",
      "Club Leadership & Technical Mentorship",
    ],
    contact: {
      email: "2400090091csit@gmail.com",
      phone: "+91 80744 56221",
      phoneRaw: "8074456221",
      linkedin: "https://www.linkedin.com/in/parsha-kumara-veera-kowshik-999ab8360/",
      github: "https://github.com/2400090091kl",
      resumeUrl: "mailto:2400090091csit@gmail.com?subject=Request%20for%20Resume%20-%20P.%20Kumara%20Veera%20Kowshik&body=Hi%20Kowshik,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20request%20your%20latest%20resume%20for%20an%20internship%20/%20software%20engineering%20opportunity.%0D%0A%0D%0ABest%20regards,",
    },
  },
  education: {
    institution: "Koneru Lakshmaiah University (KL University)",
    degree: "B.Tech, Computer Science and Information Technology (CSIT)",
    duration: "2024 – 2028 (Expected)",
    currentYear: "3rd Year",
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
  whatIDo: [
    {
      title: "Web & Full-Stack Development",
      category: "Frontend & Architecture",
      description:
        "Building responsive, high-performance web applications with clean state management, modular component architecture, and modern UX standards.",
      tags: ["React.js", "Next.js", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Cloud & Infrastructure Monitoring",
      category: "Microsoft Azure & Telemetry",
      description:
        "Designing centralized cloud monitoring dashboards, metric-based alerting rules, KQL telemetry queries, and containerized deployment pipelines.",
      tags: ["Microsoft Azure", "Azure Monitor", "Log Analytics", "KQL", "Docker", "Linux"],
    },
    {
      title: "Backend Services & Databases",
      category: "APIs & Data Engineering",
      description:
        "Engineering robust REST APIs and microservices with relational and document databases, data ingestion pipelines, and schema optimization.",
      tags: ["Python", "FastAPI", "Java", "Spring Boot", "PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      title: "Core Computer Science",
      category: "Foundations & Systems",
      description:
        "Applying foundational computer science principles, efficient data structures, relational DBMS theory, network protocols, and OS internals.",
      tags: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "OOP", "C", "C++"],
    },
  ] as WhatIDoItem[],
  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "C" },
        { name: "C++" },
        { name: "Java" },
        { name: "Python" },
        { name: "JavaScript" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      category: "Backend & Frameworks",
      skills: [
        { name: "FastAPI" },
        { name: "Spring Boot" },
        { name: "Hibernate" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
      ],
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Microsoft Azure" },
        { name: "AWS" },
        { name: "Docker" },
        { name: "Linux" },
        { name: "Azure Monitor" },
        { name: "KQL" },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Eclipse" },
        { name: "Vercel" },
      ],
    },
    {
      category: "Core Computer Science",
      skills: [
        { name: "Data Structures & Algorithms" },
        { name: "Database Management Systems" },
        { name: "Operating Systems" },
        { name: "Computer Networks" },
        { name: "Object-Oriented Programming" },
      ],
    },
  ] as SkillCategory[],
  experience: [
    {
      title: "Azure Operations Dashboard",
      category: "VM Health & Performance Monitoring | Microsoft Azure",
      duration: "Cloud Project & Operations",
      highlights: [
        "Developed a centralized cloud monitoring dashboard using Microsoft Azure to monitor the health, availability, and performance of an Azure Virtual Machine (CPU utilization, memory availability, network traffic, disk activity, and VM availability).",
        "Configured real-time VM performance monitoring via Azure Monitor metrics, interactive Azure Monitor Workbooks visualizations, and centralized operational telemetry.",
        "Implemented KQL queries to retrieve alert and resource health information, establishing CPU threshold and VM availability alerts with automated email notifications.",
        "My Contribution: Designed and configured the Azure Monitor Workbook, integrated monitoring metrics and KQL queries, organized dashboard sections, and verified resource outputs using Azure CLI.",
        "Technologies: Microsoft Azure, Azure Monitor, Azure Virtual Machines, Log Analytics, Azure Monitor Agent, Data Collection Rules, KQL, Azure Resource Graph, Azure CLI, GitHub.",
        "GitHub Repository: https://github.com/2400090091kl/Azure-Operations-Dashboard",
      ],
    },
    {
      title: "Hackathon Project",
      category: "Full-Stack Development & Collaboration",
      duration: "Collaborative Project",
      highlights: [
        "Developed a full-stack web platform for managing student group projects with task tracking, member assignments, and collaboration features.",
        "Implemented task assignment, progress tracking, and team communication tools to streamline agile group workflows.",
        "Collaborated with team members to design, build, and present a functional project management platform under hackathon deadlines.",
      ],
    },
  ] as ExperienceItem[],
  leadership: [
    {
      role: "President",
      organization: "ForensiXplore Club – KL University",
      duration: "Apr 2024 – Present",
      description:
        "Organized university technical events, coordinated team activities, led workshops, and promoted cybersecurity and digital forensics awareness across campus.",
    },
    {
      role: "Technical Member",
      organization: "Broadband Networks Club – KL University",
      duration: "Aug 2025 – Present",
      description:
        "Delivered technical sessions on modern networking, broadband protocols, and network topology configurations, and organized hands-on technical workshops.",
    },
  ] as LeadershipItem[],
  projects: [
    {
      title: "MatchMind AI – Football Match Analytics Platform",
      category: "Full-Stack AI Analytics & Telemetry",
      tagline: "Turning Football Match Data into Meaningful Insights with Interactive Analytics.",
      year: "2026",
      status: "Featured Platform",
      description: [
        "MatchMind AI is a full-stack football analytics platform that transforms match data into interactive visualizations and tactical insights. It helps users analyze team performance, compare players, explore match statistics, and identify important game patterns through an intuitive dashboard.",
      ],
      features: [
        "Interactive match statistics and visual analytics.",
        "Player performance comparisons and rankings.",
        "Tactical insights and important moment analysis.",
        "Analyst Mode and Casual Fan Mode.",
        "Custom match data ingestion through REST APIs.",
        "Broadcast-style match overlay.",
      ],
      techStack: [
        "React.js",
        "Vite",
        "JavaScript",
        "CSS",
        "Python",
        "FastAPI",
        "Pandas",
        "REST APIs",
        "Vercel",
        "GitHub",
      ],
      githubUrl: "https://github.com/2400090091kl/matchmind-ai",
      liveUrl: null, // Note: Set to null as https://matchmind-ai-7ich.vercel.app/ is currently returning 404 for frontend and API routes
    },
    {
      title: "Azure Operations Dashboard",
      category: "Cloud Monitoring | Microsoft Azure",
      tagline: "Centralized VM Health, Availability & Performance Operations",
      year: "2026",
      status: "Cloud Infrastructure",
      description: [
        "Developed a centralized cloud monitoring dashboard using Microsoft Azure to monitor the health, availability, and performance of an Azure Virtual Machine. The dashboard visualizes CPU utilization, memory availability, network traffic, disk activity, and VM availability, with metric-based alerts and resource health monitoring.",
      ],
      features: [
        "Real-time VM performance monitoring through Azure Monitor metrics.",
        "Interactive visualizations using Azure Monitor Workbooks.",
        "KQL queries to retrieve alert and resource health information.",
        "CPU threshold and VM availability alerts with email notifications.",
        "Centralized view of operational metrics and resource health.",
      ],
      contribution:
        "Designed and configured the Azure Monitor Workbook, integrated monitoring metrics and KQL queries, organized dashboard sections, and verified resource and monitoring outputs using Azure CLI.",
      techStack: [
        "Microsoft Azure",
        "Azure Monitor",
        "Azure Virtual Machines",
        "Log Analytics",
        "Azure Monitor Agent",
        "Data Collection Rules",
        "KQL",
        "Azure Resource Graph",
        "Azure CLI",
        "GitHub",
      ],
      githubUrl: "https://github.com/2400090091kl/Azure-Operations-Dashboard",
      liveUrl: null,
    },
    {
      title: "Car Crash Detecting Sensor",
      category: "Embedded Systems & IoT Safety",
      tagline: "Autonomous Real-Time Collision Sensing & Emergency Alerting",
      year: "2025",
      status: "Hardware & Robotics",
      description: [
        "A real-time collision detection system designed to improve road safety by identifying crashes using ultrasonic sensing and microcontroller-based logic.",
        "Enables timely alerts and automated response mechanisms to reduce emergency reaction delays.",
        "Integrates sensor-driven telemetry and control logic for enhanced vehicular safety and automated monitoring.",
      ],
      features: [
        "Real-time obstacle and collision telemetry using ultrasonic sensing.",
        "Microcontroller-based threshold control and automated servo actuators.",
        "Instant emergency warning and vehicular response triggering.",
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
};
