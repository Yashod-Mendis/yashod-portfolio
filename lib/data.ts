export type ProjectCategory =
  | "Tourism"
  | "Villa & Hospitality"
  | "Services"
  | "Portfolio"
  | "Mobile App";

export type Project = {
  name: string;
  type: string;
  category: ProjectCategory;
  platform: "web" | "mobile";
  period: string;
  description: string;
  tools: string[];
  featured?: boolean;
  /** Optional public Figma prototype URL */
  link?: string;
  /** Optional cover image in /public, e.g. "/projects/wise-travels.png" */
  image?: string;
};

export const profile = {
  name: "Yashod Mendis",
  firstName: "Yashod",
  role: "UI/UX Designer",
  location: "Sri Lanka",
  email: "yashodmendis@gmail.com",
  phone: "+94 77 906 8435",
  phoneHref: "tel:+94779068435",
  linkedin: "https://www.linkedin.com/in/yashod-mendis",
  linkedinLabel: "linkedin.com/in/yashod-mendis",
  github: "https://github.com/Yashod-Mendis",
  githubLabel: "github.com/Yashod-Mendis",
  /** Put the PDF in /public with this file name to enable the download button */
  cvUrl: "/Yashod-Mendis-CV.pdf",
  /** Put a portrait in /public (e.g. "/profile.jpg") to replace the monogram */
  photo: "/profile.JPG" as string | null,
  headline:
    "I design clear, intuitive digital products, from enterprise mobile apps to websites for travel and hospitality brands.",
  intro:
    "UI/UX Designer with a BSc (Hons) in Software Engineering and over a year and a half of industry experience designing high-fidelity web and mobile interfaces in Figma, from first wireframe to developer handoff.",
  about: [
    "I'm a detail-oriented UI/UX Designer with a strong academic background in Software Engineering. I care about interfaces that feel effortless: clear hierarchy, consistent systems, and layouts that work just as well on a phone as on a desktop.",
    "Most recently I designed the UI/UX for ManGo, a large-scale enterprise ride-hailing app, on an 8-month contract. Before that, during a year at Smart eWorks, I designed more than 15 websites for travel, villa, wellness and service businesses, and built responsive email templates in HTML and CSS. Because I understand front-end development, my designs are practical to build and my handoffs are easy for developers to follow.",
    "I'm known for clear communication, leadership and a collaborative mindset, and I'm looking for a team where I can apply design thinking to build impactful digital products.",
  ],
  year: 2026,
};

export const stats = [
  { value: "15+", label: "UI/UX projects delivered" },
  { value: "1.5+ yrs", label: "Industry experience" },
  { value: "BSc", label: "Hons, Software Engineering" },
];

export const services = [
  {
    title: "Web UI/UX Design",
    body: "Landing pages, booking flows and full marketing sites designed for clarity and conversion.",
  },
  {
    title: "Mobile App Design",
    body: "Task-focused mobile interfaces with simple navigation and clear visual hierarchy.",
  },
  {
    title: "Wireframing & Prototyping",
    body: "From low-fidelity wireframes to interactive, high-fidelity Figma prototypes.",
  },
  {
    title: "Email Design & Development",
    body: "Responsive HTML/CSS email templates tested across major clients and MailWizz.",
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  duration: string;
  summary: string;
  points: string[];
  clientsLabel?: string;
  clients?: string[];
  tools: string[];
};

export const experience: Job[] = [
  {
    role: "UI/UX Designer (Contract)",
    company: "ManGo",
    period: "Aug 2025 – Mar 2026",
    duration: "8 months",
    summary:
      "Designed the end-to-end mobile experience for ManGo, a large-scale, enterprise ride-hailing and travel app in the style of PickMe and Uber.",
    points: [
      "Owned the UI/UX design of the ManGo mobile app, from user flows and wireframes to high-fidelity Figma prototypes.",
      "Designed core ride-hailing journeys: booking a ride, live trip tracking, fare details, payments and trip history.",
      "Built a consistent, scalable design system so a large product could grow without losing visual consistency.",
      "Worked with developers and stakeholders on an enterprise-scale project, delivering clear, build-ready design handoffs.",
    ],
    tools: ["Figma", "Canva Pro", "Adobe Photoshop"],
  },
  {
    role: "UI/UX Designer Intern",
    company: "Smart eWorks",
    period: "Jul 2024 – Jul 2025",
    duration: "1 year",
    summary:
      "Three months in Email Automation & Design, followed by nine months as a UI/UX Designer.",
    points: [
      "Contributed to 15+ UI/UX projects for travel, villa, wellness and service websites.",
      "Designed high-fidelity interfaces in Figma with a focus on usability, responsiveness and brand alignment.",
      "Designed and coded responsive email templates in HTML and CSS, ensuring compatibility across major email clients and MailWizz.",
      "Worked closely with developers and stakeholders to keep designs consistent and functional through to launch.",
    ],
    clientsLabel: "Email & brand projects",
    clients: [
      "Look Lanka",
      "Lanka Data Center",
      "Newsletters.lk",
      "WebSMS",
      "Smart eWorks",
      "Smart eMarketing",
    ],
    tools: ["Figma", "Canva Pro", "Adobe Photoshop", "HTML", "CSS"],
  },
];

export const projects: Project[] = [
  {
    name: "ManGo",
    type: "Ride-Hailing Mobile App",
    category: "Mobile App",
    platform: "mobile",
    period: "Aug 2025 – Mar 2026",
    description:
      "UI/UX for a large-scale enterprise ride-hailing app, similar to PickMe and Uber, covering ride booking, live tracking, payments and trip history.",
    tools: ["Figma", "Canva Pro"],
    featured: true,
  },
  {
    name: "Wise Travels",
    link: "https://www.figma.com/proto/2A4WdKZ6sDyjfzYb5aLG6i/Wise-Travelers?page-id=1011%3A1624&node-id=1011-1792&viewport=496%2C323%2C0.03&t=Yqm4QScmTiUVjKiq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1011%3A1792",
    image: "/project_covers/wise.jpg",
    type: "Tour Website",
    category: "Tourism",
    platform: "web",
    period: "Sep – Oct 2024",
    description:
      "A vibrant, user-friendly travel website that makes browsing tours and sending inquiries effortless.",
    tools: ["Figma", "Canva Pro"],
    featured: true,
  },
  {
    name: "HM House Pest Management",
    link: "https://www.figma.com/proto/o9KZv5ReD1tmzIqq7zEJYy/HM-House-Pest-Management-service?page-id=97%3A108&node-id=97-133&viewport=-480%2C217%2C0.06&t=6TErSCCe7OCzEUxF-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=97%3A133",
    image: "/project_covers/HM.jpg",
    type: "Pest Service Website",
    category: "Services",
    platform: "web",
    period: "Dec 2024",
    description:
      "A professional, trust-focused interface that presents services clearly and builds customer confidence.",
    tools: ["Figma", "Canva Pro"],
    featured: true,
  },
  {
    name: "The Jungle Dream World",
    link: "https://www.figma.com/proto/u9MtxR5pqLArdSlJgkwNYz/The-Jungle-Dream-World?node-id=1-2&t=xQAdiCOIHNJKovZn-1",
    image: "/project_covers/jungle.jpg",
    type: "Villa Website",
    category: "Villa & Hospitality",
    platform: "web",
    period: "Dec 2024",
    description:
      "An earthy, immersive UI that reflects the villa's jungle setting and unique atmosphere.",
    tools: ["Figma", "Canva Pro"],
    featured: true,
  },
  {
    name: "Rosemary Villa",
    link: "https://www.figma.com/proto/7witjCeUOdJT8145OMa8dW/Rosemary-Villa?page-id=636%3A724&node-id=636-726&viewport=-2336%2C2212%2C0.33&t=Qucr2PV4Zxe0pIcy-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=636%3A726",
    image: "/project_covers/rose.jpg",
    type: "Villa Website",
    category: "Villa & Hospitality",
    platform: "web",
    period: "Oct 2024",
    description:
      "A sleek, elegant interface that showcases the villa's features and improves booking appeal.",
    tools: ["Figma", "Canva Pro"],
    featured: true,
  },
  {
    name: "PetCare",
    type: "Mobile Application",
    category: "Mobile App",
    platform: "mobile",
    period: "Feb 2025",
    description:
      "A pet health app for tracking vaccinations, vet appointments and health records, with friendly, easy navigation.",
    tools: ["Figma", "Canva Pro"],
  },
  {
    name: "Cybersecurity Portfolio",
    link: "https://www.figma.com/proto/ZomrHipFvqL9tfWzHzdAKY/Personal-website-%7C-Portfolio--Community-?node-id=1655-313&t=BvrIRvvtYJ4FV3b4-1",
    image: "/project_covers/cyber.jpg",
    type: "Portfolio Website",
    category: "Portfolio",
    platform: "web",
    period: "Jun – Jul 2025",
    description:
      "A clean, professional portfolio for the cybersecurity domain, built on strong visual hierarchy, consistency and accessibility.",
    tools: ["Figma", "Canva Pro"],
  },
  {
    name: "Tour Plan Sri Lanka",
    link: "https://www.figma.com/proto/MBXrwtY5s9bABDePp84Xoz/TOUR-PLAN?node-id=443-375&t=jFHPswBKeuuSboi2-1",
    image: "/project_covers/toursplan.jpg",
    type: "Tour Website",
    category: "Tourism",
    platform: "web",
    period: "Oct – Nov 2024",
    description:
      "A visually appealing site that presents travel packages and contact options clearly.",
    tools: ["Figma", "Canva Pro"],
  },
  {
    name: "Aliya Tours",
    link: "https://www.figma.com/proto/vxanXj7KT0WEMieZ6Vw9Iu/Aliya-Tour?node-id=73-131&t=dtzcwBeigX9nKDH6-1",
    image: "/project_covers/aliya.jpg",
    type: "Tour Website",
    category: "Tourism",
    platform: "web",
    period: "Dec 2024",
    description:
      "A sleek, conversion-driven layout with streamlined access to tour packages and contact.",
    tools: ["Figma", "Canva Pro"],
  },
  {
    name: "Samadhi Lagoon Villa",
    link: "https://www.figma.com/proto/KkFkHq80haDAlqh0iUdgN9/Samadhi--Lagoon-Villa?node-id=1-2&t=M2kfZos4X0TrnDYm-1",
    image: "/project_covers/smadhi.jpg",
    type: "Villa Website",
    category: "Villa & Hospitality",
    platform: "web",
    period: "Nov 2024",
    description:
      "A calming, nature-inspired interface aligned with the villa's tranquil branding.",
    tools: ["Figma", "Canva Pro"],
  },
  {
    name: "Eagle Wilpattu Resort",
    link: "https://www.figma.com/proto/3HAYdhT3q4wiGxV7nm9dgJ/Eagle-Wilpattu?node-id=1-2&t=VH6QnPdbiKdsiwDV-1",
    image: "/project_covers/eagle.jpg",
    type: "Resort Website",
    category: "Villa & Hospitality",
    platform: "web",
    period: "Nov 2024",
    description:
      "A clean, immersive design highlighting nature, wildlife and hospitality.",
    tools: ["Figma", "Canva Pro"],
  },
  {
    name: "Randira Villa",
    link: "https://www.figma.com/proto/c78lB4YhPXHefXbwlEVqcw/Randika-Villa?node-id=4-340&t=CjDu5QfDHCGg9WUB-1",
    image: "/project_covers/randira.jpg",
    type: "Villa Website",
    category: "Villa & Hospitality",
    platform: "web",
    period: "Dec 2024",
    description:
      "A modern, welcoming UI tailored to showcase the villa's features and capture interest.",
    tools: ["Figma", "Canva Pro"],
  },
  {
    name: "Sandhara",
    link: "https://www.figma.com/proto/zIpDRbTGMcN90eaORzUrEj/Sandhara?node-id=561-105&t=qd8qaH8XWKtrzoRN-1",
    image: "/project_covers/sandhara.jpg",
    type: "Artist Portfolio Website",
    category: "Portfolio",
    platform: "web",
    period: "Oct 2024",
    description:
      "A unique portfolio concept for a wood artist. The design was completed but not published, at the client's preference.",
    tools: ["Figma", "Canva Pro"],
  },
];

export const skillGroups = [
  {
    title: "Design",
    items: [
      "UI/UX Design for Web",
      "Mobile App UI Design",
      "Wireframing & Prototyping",
      "Responsive Web Design",
      "Landing Page & Booking Interfaces",
      "Visual Design & Layout",
      "Usability & Accessibility",
      "Design Handoff",
    ],
  },
  {
    title: "Tools",
    items: ["Figma", "Canva Pro", "Adobe Photoshop", "GitHub", "VS Code"],
  },
  {
    title: "Development",
    items: ["HTML", "CSS", "JavaScript", "Java", "Flutter", "Spring Boot", "MySQL"],
  },
];

export const education = [
  {
    school: "NSBM Green University",
    location: "Homagama, Sri Lanka",
    credential: "BSc (Hons) in Software Engineering",
    period: "2021 – 2025",
  },
  {
    school: "G/Dharmasoka College",
    location: "Ambalangoda, Sri Lanka",
    credential: "G.C.E. Advanced Level & Ordinary Level",
    period: "2007 – 2020",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
