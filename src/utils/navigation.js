export const TOP_BAR_LINKS = [
  { label: "Know Your Body", to: "/know-your-body" },
  { label: "Understand PCOS", to: "/pcos" },
  { label: "Symptom Tracker", to: "/tracker" },
  { label: "Learn & Explore", to: "/explore" },
  { label: "Find Support", to: "/support" },
  { label: "About", to: "/about" },
];

export const HAMBURGER_MENU_SECTIONS = [
  {
    id: "know-your-body",
    number: "01",
    title: "Know Your Body",
    to: "/know-your-body",
    summary: "Age-adapted diagrams & reproductive literacy",
    links: [
      { label: "All Age-Adapted Diagrams", to: "/know-your-body" },
      { label: "Menstrual & Reproductive Health", to: "/know-your-body#kyb-menstrual-reproductive" },
      { label: "Management & Wellbeing", to: "/know-your-body#kyb-management-wellbeing" },
      { label: "Hormones & Metabolism", to: "/know-your-body#kyb-hormones-metabolism" },
      { label: "Reproductive Anatomy", to: "/know-your-body/anatomy" },
    ],
  },
  {
    id: "understand-pcos",
    number: "02",
    title: "Understand PCOS",
    to: "/pcos",
    summary: "Features, nutrition, management & FAQs",
    links: [
      { label: "PCOS Overview & Features", to: "/pcos" },
      { label: "Management & Lifestyle", to: "/pcos/management" },
      { label: "Nutritional Tips", to: "/pcos/nutrition" },
      { label: "Frequently Asked Questions", to: "/pcos/faqs" },
      { label: "Diagnosis & Assessment", to: "/pcos/diagnosis" },
    ],
  },
  {
    id: "pathways",
    number: "03",
    title: "Learning Pathways",
    to: "/start",
    summary: "Guided routes for patients & male allies",
    links: [
      { label: "Choose a Pathway", to: "/start" },
      { label: "Female Learning Path", to: "/pathways/women" },
      { label: "Male Ally Path (3 Sections)", to: "/pathways/allies" },
      { label: "Male Ally: Support & Communication", to: "/pathways/allies/support" },
    ],
  },
  {
    id: "learn-explore",
    number: "04",
    title: "Learn & Explore",
    to: "/explore",
    summary: "Myths vs. facts, knowledge check & FAQs",
    links: [
      { label: "Explore Hub", to: "/explore" },
      { label: "Myths & Facts", to: "/explore/myths" },
      { label: "Knowledge Check Quiz", to: "/explore/quiz" },
      { label: "Quick FAQs", to: "/explore/faqs" },
    ],
  },
  {
    id: "symptom-tracker",
    number: "05",
    title: "Symptom Tracker",
    to: "/tracker",
    summary: "Private daily symptoms & weekly habits",
    links: [
      { label: "Daily Log & Weekly Summary", to: "/tracker" },
    ],
  },
  {
    id: "find-support",
    number: "06",
    title: "Find Support",
    to: "/support",
    summary: "Specialists, Ask & Talk, visit prep & about",
    links: [
      { label: "Support Hub & Specialists", to: "/support" },
      { label: "Expert Specialist Advice", to: "/support/expert-advice" },
      { label: "Ask & Talk (Search & Voice)", to: "/assistant" },
      { label: "When to Seek Help", to: "/support/when-to-seek-help" },
      { label: "Prepare for an Appointment", to: "/support/appointment" },
      { label: "Reliable Resources", to: "/support/resources" },
    ],
  },
];

export const MENU_FOOTER_LINKS = [
  { label: "Home Overview", to: "/home" },
  { label: "About PCOS Unlocked", to: "/about" },
  { label: "Sources", to: "/about/sources" },
  { label: "Accessibility", to: "/about/accessibility" },
  { label: "Privacy", to: "/about/privacy" },
];

export function stripHashFromRoute(to) {
  if (!to || typeof to !== "string") return "/";
  const base = to.split("#")[0].replace(/\/$/, "");
  return base || "/";
}

export function isMenuRouteActive(currentPath, targetTo) {
  const normalizedCurrent = stripHashFromRoute(currentPath);
  const normalizedTarget = stripHashFromRoute(targetTo);
  if (targetTo.includes("#")) {
    return false;
  }
  return normalizedCurrent === normalizedTarget;
}

export function isSectionActive(currentPath, section) {
  if (!section) return false;
  const normalizedCurrent = stripHashFromRoute(currentPath);
  const sectionBase = stripHashFromRoute(section.to);
  if (normalizedCurrent === sectionBase) return true;
  return Array.isArray(section.links) && section.links.some((link) => stripHashFromRoute(link.to) === normalizedCurrent);
}
