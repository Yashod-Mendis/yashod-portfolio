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
  cvUrl: "/Yashod_Mendis_CV.pdf",
  /** Put a portrait in /public (e.g. "/profile.jpg") to replace the monogram */
  photo: null as string | null,
  headline:
    "I design clear, intuitive digital interfaces for travel, hospitality and service brands.",
  intro:
    "UI/UX Designer with a BSc (Hons) in Software Engineering and a year of industry experience designing high-fidelity web and mobile interfaces in Figma, from first wireframe to developer handoff.",
  about: [
    "I'm a detail-oriented UI/UX Designer with a strong academic background in Software Engineering. I care about interfaces that feel effortless: clear hierarchy, consistent systems, and layouts that work just as well on a phone as on a desktop.",
    "During a year at Smart eWorks I designed more than 15 websites for travel, villa, wellness and service businesses, and built responsive email templates in HTML and CSS. Because I understand front-end development, my designs are practical to build and my handoffs are easy for developers to follow.",
    "I'm known for clear communication, leadership and a collaborative mindset, and I'm looking for a team where I can apply design thinking to build impactful digital products.",
  ],
  year: 2026,
};

export const stats = [
  { value: "15+", label: "UI/UX projects delivered" },
  { value: "1 yr", label: "Industry experience" },
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

export const experience = [
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
    name: "Wise Travels",
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
    type: "Tour Website",
    category: "Tourism",
    platform: "web",
    period: "Dec 2024",
    description:
      "A sleek, conversion-driven layout with streamlined access to tour packages and contact.",
    tools: ["Figma", "Canva Pro"],
  },
  {
    name: "Galle Camellia",
    type: "Villa Website",
    category: "Villa & Hospitality",
    platform: "web",
    period: "Sep 2024",
    description:
      "A modern villa website design that showcases luxury accommodation.",
    tools: ["Figma", "Canva Pro"],
  },
  {
    name: "Samadhi Lagoon Villa",
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
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
