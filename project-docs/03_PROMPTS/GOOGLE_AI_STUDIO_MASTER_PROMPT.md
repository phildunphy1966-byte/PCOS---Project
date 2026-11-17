# Google AI Studio Master Prompt — PCOS Unlocked

You are a senior product designer, UX architect, health-education content designer and experienced frontend engineer. Build a complete, responsive, accessible, multi-page educational website called **PCOS Unlocked**.

**Tagline:** “Understand your body. Question the myths. Find your way forward.”

The website is an India-context PCOS awareness and body-literacy platform for different age groups and genders. It must have a female learning pathway and a male ally pathway, while keeping shared foundational content accessible to everyone.

### A. Read and follow the supplied dossier

Treat this dossier and the accompanying JSON configuration as the source of truth for:
- project purpose and audiences;
- information architecture;
- sitemap and routes;
- task, user and navigation flows;
- page content;
- visual design;
- medical safety;
- accessibility;
- privacy;
- dataset limitations.

Do not reduce the project to a single landing page. Do not omit pages simply because the sitemap is extensive. If implementation must be split into stages, preserve the full route plan and clearly report what remains unfinished.

### B. Build a real multi-page application

Implement all routes listed in the sitemap. Use React with TypeScript and a proper routing system if supported by the environment.

The application must:
- load every route directly;
- survive browser refresh on nested routes;
- support browser back and forward;
- have working global navigation;
- have working breadcrumbs;
- have working related-topic links;
- have a useful 404 page;
- work on desktop, tablet and mobile;
- use reusable components and a consistent design system.

### C. Homepage

The homepage must immediately communicate the purpose of the website.

Use this headline:
**“Your body deserves clear answers.”**

Use this supporting line:
“Explore PCOS, hormones and reproductive health through clear explanations, interactive visuals and myth-busting guides.”

Primary actions:
- Explore PCOS
- Choose Your Learning Route

Provide clear entry points for:
- Know Your Body
- Understand PCOS
- Female Learning Path
- Male Ally Path
- Learn & Explore
- Find Support

Keep the first screen simple, clear and visually strong. Do not overwhelm it with long paragraphs or too many cards.

### D. Age and pathway selection

Age selection must be optional and include:
- Under 18
- 18–21
- 22–25
- 26–30
- 31–35
- Above 35

Users must be able to skip, change and reset their selection.

Age adaptation should change reading depth, examples and explanation style. It must not block access to important information or assume that age determines knowledge.

Provide two pathways:
1. Female Learning Path.
2. Male Ally Path.

Also provide “Explore Everything” so visitors can access all shared content without selecting a pathway.

The male route is an ally education pathway. Never imply that males have PCOS or build a male PCOS diagnosis flow.

### E. Implement every sitemap page

Create all pages and populate them with meaningful, readable educational content. No lorem ipsum, empty placeholder pages or dead-end cards.

Implement:
- Home and Start.
- Know Your Body hub.
- Reproductive Anatomy.
- Menstrual Cycle.
- Hormones.
- Insulin and Metabolism.
- Understand PCOS.
- PCOS Features and Experiences.
- Diagnosis.
- Health Associations.
- Management.
- Female Pathway and its subpages.
- Male Ally Pathway and its support page.
- Learn & Explore.
- Myths & Facts.
- Knowledge Check.
- FAQs.
- Find Support.
- When to Seek Help.
- Appointment Preparation.
- Reliable Resources.
- About.
- Sources.
- Accessibility.
- Privacy.

### F. Interactive learning

Implement real interactions, not decorative controls:
- clickable topic cards;
- expandable accordions;
- accessible tabs;
- labelled diagram hotspots;
- menstrual-cycle stepper;
- myth/fact reveal cards;
- quiz with answer feedback and explanations;
- search panel with results and empty state;
- optional age selector;
- pathway switching;
- breadcrumbs;
- related-content navigation;
- print-friendly appointment preparation.

Every interactive control must work with mouse, touch and keyboard. Give visible hover, focus, active and selected states. Do not hide essential medical information behind interactions.

### G. Visual design

Use a contemporary editorial health-education aesthetic. It should feel:
- clear;
- calm;
- warm;
- inclusive;
- scientifically grounded;
- visually engaging;
- suitable for teenagers and adults;
- not childish or gimmicky;
- not like a hospital portal.

Use this palette:
- Deep plum `#39243F`
- Soft lilac `#EAE3F0`
- Warm coral `#E98978`
- Sage `#A9BBA5`
- Cream `#FAF7F2`
- Ink `#242126`
- White `#FFFFFF`

Use readable typography such as Inter, Atkinson Hyperlegible or a system sans-serif. Maintain generous whitespace, clear hierarchy and consistent spacing.

Use original vector illustrations and labelled educational diagrams for:
- reproductive anatomy;
- menstrual cycle;
- hormone communication;
- insulin and metabolism;
- shared and separate learning pathways.

Do not copy images, text, layouts or brand assets from the reference website. Do not hotlink random images. Use local original SVG assets or verified licensed assets with attribution. If no licensed image is available, create an original SVG illustration.

### H. Medical content safety

The website is educational and not diagnostic.

Show this disclaimer:
“PCOS Unlocked is an educational resource. It does not provide a diagnosis or replace advice from a qualified healthcare professional.”

Never:
- diagnose a visitor;
- use a quiz as a symptom checker;
- recommend medication doses;
- promise a cure;
- imply that weight, diet, laziness, stress or menstrual products cause PCOS;
- imply that all people with PCOS have ovarian cysts;
- imply that everyone with PCOS has insulin resistance;
- imply that PCOS always causes infertility;
- present a 28-day menstrual cycle as universal;
- confuse association with causation.

Explain adult and adolescent diagnosis pathways separately and link to current clinical guidance. State that symptoms overlap with other conditions and diagnosis requires qualified clinical assessment.

Use PCOS as the main public-facing term. If discussing emerging terminology such as PMOS, explain that terminology is evolving and cite the exact source and date. Do not silently replace PCOS across the interface.

Every clinical page must show relevant source links and a review-date field. Do not claim clinician review unless it has actually happened. Clinical content must be reviewed by a qualified healthcare professional before public launch.

### I. Dataset rules

The supplied CSV files are research inputs, not clinical authority:
- `pcos_dataset.csv`: previously inspected as 1,000 rows and 6 fields, including age, BMI, menstrual irregularity, testosterone, antral follicle count and diagnosis.
- `Cleaned-Data.csv`: previously inspected as 173 rows and 36 mixed health/lifestyle fields, including self-report and free-text/ambiguous categories.

Neither file establishes a male/female awareness comparison. Do not infer gender, diagnosis, Indian population prevalence or causation. Do not build diagnosis functionality from the datasets. Any future chart must show sample size, variable definition and limitations.

### J. Privacy

Do not add:
- account creation;
- login;
- symptom tracker;
- menstrual-cycle tracker;
- diagnosis tool;
- medical chatbot;
- collection of sensitive health information;
- storage of quiz health answers.

Optional age/pathway preference may be stored locally only, with a clear reset/change control. The website must still work if local storage is unavailable.

### K. Accessibility

Implement:
- semantic HTML;
- skip-to-content link;
- logical heading hierarchy;
- keyboard navigation;
- visible focus states;
- accessible mobile menu;
- labels for controls;
- alt text and text alternatives for diagrams;
- contrast checks;
- no colour-only communication;
- reduced-motion support;
- no autoplay or flashing animation;
- responsive layouts without horizontal scrolling.

### L. Technical quality

Use reusable components such as:
- SiteHeader
- MobileNavigation
- SiteFooter
- Breadcrumbs
- TopicCard
- PathwayCard
- Accordion
- Tabs
- DiagramHotspot
- MythFactCard
- QuizQuestion
- SearchPanel
- SourceList
- Disclaimer
- NotFoundPage

Use a route configuration rather than scattered hard-coded links. Ensure all cards and navigation items have real destinations. Keep content separate from layout where practical.

### M. Completion and testing

Before saying the application is complete:
1. List every route implemented.
2. Open every route directly.
3. Test refresh on nested routes.
4. Test browser back and forward.
5. Test every header/footer link.
6. Test search and no-results state.
7. Test age selection and reset.
8. Test pathway switching.
9. Test every diagram hotspot.
10. Test accordions, tabs, stepper and quiz.
11. Test keyboard-only navigation.
12. Test mobile navigation and responsive layouts.
13. Test reduced-motion behaviour.
14. Check all images load locally.
15. Check there is no lorem ipsum, dead link or fake citation.
16. Check the disclaimer and source links appear.
17. Report any unfinished route or interaction honestly.

**Build the complete website now. Prioritise clarity, trust, accessibility, coherent visual storytelling and smooth navigation over decorative effects. Do not stop after producing a homepage mock-up.**
