import { projects } from "./data";

export type Slide = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * A case study page is a stack of full-width slides. Screen mockups that
 * were exported at half width are laid out as a two-column grid on the
 * slide's own background colour so they read as one continuous page.
 */
export type CaseStudySection =
  | { kind: "slide"; slide: Slide }
  | { kind: "grid"; background: string; slides: Slide[] };

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  /** Real design screenshot used on the home page card */
  cover: string;
  meta: { label: string; value: string }[];
  /** Public Figma prototype, if one exists */
  prototype?: string;
  sections: CaseStudySection[];
};

/** "01 — Cover.jpg" → "Cover", "6.1-Screen — Home (Selected).jpg" → "Home (Selected)" */
function label(file: string) {
  return file
    .replace(/\.jpg$/i, "")
    .replace(/^[\d.]+\s*-?\s*(Screen\s*)?—\s*/, "")
    .trim();
}

function slide(folder: string, file: string, width: number, height: number): Slide {
  return {
    src: encodeURI(`/case_studies/${folder}/${file}`),
    width,
    height,
    alt: label(file),
  };
}

function full(folder: string, file: string, width: number, height: number): CaseStudySection {
  return { kind: "slide", slide: slide(folder, file, width, height) };
}

function grid(folder: string, background: string, files: string[]): CaseStudySection {
  return { kind: "grid", background, slides: files.map((f) => slide(folder, f, 620, 390)) };
}

function prototypeFor(name: string) {
  return projects.find((p) => p.name === name)?.link;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "wise-travels",
    title: "Wise Travels",
    eyebrow: "Travel agency website",
    summary:
      "A travel agency website for Sri Lankan and international tours, designed to make browsing destinations, tours and offers effortless, with a clear path to sending an inquiry.",
    cover: "/project_covers/wise.jpg",
    meta: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Market", value: "Sri Lanka & International" },
      { label: "Platform", value: "Web · 1440px" },
      { label: "Screens", value: "8 key screens" },
    ],
    prototype: prototypeFor("Wise Travels"),
    sections: [
      full("wise", "01 — Cover.jpg", 1440, 960),
      full("wise", "02 — Project Overview.jpg", 1440, 640),
      full("wise", "03 — Company Background.jpg", 1440, 560),
      full("wise", "04 — Screens Header.jpg", 1440, 180),
      grid("wise", "#f7f7f7", [
        "4.1-Screen — HOME.jpg",
        "4.2-Screen — ABOUT US.jpg",
        "4.3-Screen — DESTINATIONS.jpg",
        "4.4-Screen — SINGLE DESTINATION.jpg",
        "4.5-Screen — TOURS.jpg",
        "4.6-Screen — OFFER.jpg",
        "4.7-Screen — FLIGHT TICKETS.jpg",
        "4.8-Screen — CONTACT US.jpg",
      ]),
      full("wise", "05 — Color & Typography.jpg", 1440, 540),
      full("wise", "06 — Partners.jpg", 1440, 400),
      full("wise", "07 — Key Design Decisions.jpg", 1440, 560),
      full("wise", "08 — Outcomes.jpg", 1440, 600),
      full("wise", "09 — End Card.jpg", 1440, 280),
    ],
  },
  {
    slug: "rosemary-villa",
    title: "Rosemary Villa",
    eyebrow: "Client work · Smart eWorks",
    summary:
      "A luxury villa website designed during my internship, reflecting the villa's elegance, streamlining bookings and inspiring traveller confidence.",
    cover: "/project_covers/rose.jpg",
    meta: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Company", value: "Smart eWorks" },
      { label: "Platform", value: "Web · 1440px" },
      { label: "Screens", value: "12 screens" },
    ],
    prototype: prototypeFor("Rosemary Villa"),
    sections: [
      full("rosemary", "01 — Cover.jpg", 1440, 960),
      full("rosemary", "02 — Project Overview.jpg", 1440, 640),
      full("rosemary", "03 — Background.jpg", 1440, 540),
      full("rosemary", "04 — Problem Statement.jpg", 1440, 700),
      full("rosemary", "05 — Design Goals.jpg", 1440, 560),
      full("rosemary", "06 — Screens Header.jpg", 1440, 180),
      grid("rosemary", "#f6fef1", [
        "6.1-Screen — Home (Selected).jpg",
        "6.2-Screen — About Us — Version 01.jpg",
        "6.3-Screen — About Us — Version 02.jpg",
        "6.4-Screen — Our Villa — Welegoda.jpg",
        "6.5-Screen — Our Villa — First Floor.jpg",
        "6.6-Screen — Our Villa — Ground Floor.jpg",
        "6.7-Screen — Nearest Destination.jpg",
        "6.8-Screen — Single Destination.jpg",
        "6.9-Screen — Activities.jpg",
        "6.10-Screen — Gallery.jpg",
        "6.11-Screen — Dine (Two Versions).jpg",
        "6.12-Screen — Contact Us + Inquiry Form.jpg",
      ]),
      full("rosemary", "07 — Color & Typography.jpg", 1440, 540),
      full("rosemary", "08 — Key Design Decisions.jpg", 1440, 560),
      full("rosemary", "09 — Outcomes & Reflection.jpg", 1440, 600),
      full("rosemary", "10 — End Card.jpg", 1440, 280),
    ],
  },
  {
    slug: "biscope",
    title: "Biscope",
    eyebrow: "UX/UI redesign practice",
    summary:
      "Redesigning a Sri Lankan streaming website for better clarity, structure and user experience, fixing poor navigation, inconsistent layouts and unclear visual hierarchy.",
    cover: "/project_covers/biscope.jpg",
    meta: [
      { label: "Role", value: "UX/UI Designer (Solo)" },
      { label: "Type", value: "Personal practice project" },
      { label: "Year", value: "2025" },
      { label: "Screens", value: "8 redesigned" },
    ],
    sections: [
      full("biscope", "01 — Cover.jpg", 1440, 900),
      full("biscope", "02 — Overview.jpg", 1440, 640),
      full("biscope", "03 — Problem.jpg", 1440, 700),
      full("biscope", "04 — Goals.jpg", 1440, 560),
      full("biscope", "05 — Screens.jpg", 1440, 200),
      full("biscope", "All Pages.jpg", 1440, 1760),
      full("biscope", "06 — Key Design Decisions.jpg", 1440, 580),
      full("biscope", "07 — Outcomes & Reflection.jpg", 1440, 600),
      full("biscope", "08 — End Card.jpg", 1440, 300),
    ],
  },
  {
    slug: "zintra-web",
    title: "Zintra Web",
    eyebrow: "Digital solutions company",
    summary:
      "A corporate, large-scale digital solutions website designed during university as a future business vision: elegant, posh and intentionally simple.",
    cover: "/project_covers/zyntra.jpg",
    meta: [
      { label: "Type", value: "Personal · University" },
      { label: "Industry", value: "Digital solutions" },
      { label: "Pages", value: "5 full pages" },
      { label: "Iterations", value: "v0.1 – v0.6" },
    ],
    sections: [
      full("zyntra", "01 — Cover.jpg", 1440, 960),
      full("zyntra", "02 — Project Overview.jpg", 1440, 640),
      full("zyntra", "03 — Vision & Research.jpg", 1440, 580),
      full("zyntra", "04 — Design Principles.jpg", 1440, 520),
      full("zyntra", "05 — Screens Header.jpg", 1440, 180),
      full("zyntra", "06 -Screen — Home Page.jpg", 1440, 3336),
      full("zyntra", "07 - Screen — About Us.jpg", 1440, 1702),
      full("zyntra", "08-Screen — Services.jpg", 1440, 1962),
      full("zyntra", "09-Screen — Portfolio.jpg", 1440, 2512),
      full("zyntra", "10-Screen — Contact Us.jpg", 1440, 2110),
      full("zyntra", "11 — Color & Typography.jpg", 1440, 560),
      full("zyntra", "12 — Services Breakdown.jpg", 1440, 560),
      full("zyntra", "13 — Design Evolution.jpg", 1440, 460),
      full("zyntra", "14 — Outcomes & Reflection.jpg", 1440, 600),
      full("zyntra", "15 — End Card.jpg", 1440, 280),
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
