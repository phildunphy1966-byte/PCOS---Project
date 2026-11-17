# PCOS UNLOCKED
## Complete Project Dossier, Website Specification, JSON Configuration and Google AI Studio Master Prompt

**Tagline:** Understand your body. Question the myths. Find your way forward.  
**Project type:** Responsive, multi-page, interactive PCOS awareness and body-literacy website  
**Primary context:** India  
**Working website name:** PCOS Unlocked  
**Document purpose:** One consolidated source-of-truth document for planning, designing, generating and testing the website in Google AI Studio.

---

# PART 1 — PROJECT DOSSIER

## 1.1 Project overview

PCOS Unlocked is an educational website designed to make information about Polycystic Ovary Syndrome (PCOS), hormones, reproductive health and related wellbeing topics easier to understand. It is intended for people across different age groups and genders, with two distinct learning pathways: a female learning pathway and a male ally pathway.

The website will combine clear written explanations with illustrated diagrams, interactive learning elements, myth-versus-fact activities, knowledge checks and reliable external references. It should feel contemporary, welcoming, visually engaging and scientifically responsible—not childish, overly clinical or gimmicky.

The experience is multi-page. Visitors must be able to move freely between pages, return to previous pages, use the global navigation, switch learning pathways and explore shared topics at any time.

## 1.2 Project aim

To develop an accessible, age-appropriate and gender-inclusive digital learning experience that improves understanding of PCOS and body health, challenges common misconceptions and encourages informed, respectful conversations and appropriate healthcare-seeking.

## 1.3 Design problem

PCOS is often discussed through fragmented information, myths, stigma and oversimplified explanations. People may encounter confusion about hormones, menstruation, symptoms, diagnosis, fertility, weight, lifestyle and treatment. People who do not personally experience PCOS may also lack the knowledge needed to understand or support someone who does.

The design challenge is to organise complex health information into a clear, engaging and navigable learning experience for people with different ages, knowledge levels and reasons for visiting.

## 1.4 Central design question

**How might an interactive, age-appropriate and gender-inclusive website help people in India understand PCOS, question misinformation and find reliable next steps through clear visual communication?**

## 1.5 Target audiences

### Primary audience
Young women aged 18–25 in India, including:
- people who have been diagnosed with PCOS;
- people who have heard of PCOS but do not understand it;
- people who have questions about symptoms or menstrual health;
- people who want to understand their bodies and health information.

### Secondary audiences
- Under-18 users who need age-appropriate foundational body education.
- Adults aged 26–30, 31–35 and above 35.
- Male users who want to understand PCOS and support a friend, partner, sibling or family member.
- Parents, caregivers and educators seeking reliable introductory information.

### Age bands
1. Under 18
2. 18–21
3. 22–25
4. 26–30
5. 31–35
6. Above 35

Age selection is optional and changeable. It should adapt language, examples and depth—not assume knowledge, diagnosis or experience, and not block access to essential information.

## 1.6 Gender pathways

### Female learning pathway
Emphasis:
- body literacy and reproductive anatomy;
- menstrual cycle and hormonal health;
- understanding PCOS;
- symptoms and varied experiences;
- diagnosis and clinical assessment;
- reproductive and metabolic health;
- lifestyle and wellbeing;
- emotional health and body image;
- treatment and management options;
- preparing for a healthcare consultation.

The pathway must not assume that every visitor menstruates, is sexually active, wants children, has a diagnosis or identifies in the same way.

### Male ally pathway
Emphasis:
- what PCOS is;
- how hormones and reproductive health relate to the condition;
- common myths and misconceptions;
- how PCOS may affect someone's everyday life;
- respectful communication;
- how to listen and offer support;
- how to share reliable information without judgement.

This is an ally-learning pathway. It must not imply that males have PCOS or create a male PCOS symptom/diagnosis journey.

### Shared foundation
Both pathways can access:
- Know Your Body;
- reproductive anatomy;
- menstrual health education;
- hormones and the endocrine system;
- insulin and metabolism;
- What is PCOS?;
- myths and facts;
- FAQs;
- reliable sources;
- Find Support.

Users can switch pathways or explore all content at any time.

## 1.7 Website objectives

1. Explain PCOS in plain, accurate language.
2. Help visitors understand relevant body systems, hormones and reproductive health.
3. Present symptoms and experiences without implying that all people experience the same things.
4. Explain that diagnosis requires qualified clinical assessment.
5. Challenge misinformation about weight, fertility, menstrual products, lifestyle and ovarian cysts.
6. Provide a useful male ally learning route.
7. Adapt the depth of explanations to different age groups.
8. Make medical information easier to understand through illustrations and interaction.
9. Provide source links and encourage appropriate healthcare conversations.
10. Offer a smooth, accessible multi-page experience.

## 1.8 Brand and tone

**Name:** PCOS Unlocked  
**Tagline:** Understand your body. Question the myths. Find your way forward.

Tone:
- clear and reassuring;
- evidence-informed;
- inclusive and non-judgemental;
- friendly but not childish;
- direct without being alarming;
- educational rather than prescriptive.

Avoid:
- body shaming;
- fear-based messaging;
- pink-only gender coding;
- claims that PCOS is caused by laziness, weight, diet or stress;
- promises of a cure;
- medical jargon without explanation;
- implying that a quiz can diagnose PCOS.

---

# PART 2 — RESEARCH AND DATASET DOSSIER

## 2.1 Dataset files supplied

Two CSV files were supplied in the project conversation:

### `pcos_dataset.csv`
Previously inspected as a 1,000-row, 6-column dataset. The described fields include age, BMI, menstrual irregularity, testosterone, antral follicle count and a PCOS diagnosis field.

**Use cautiously:** the file itself does not establish the source population, recruitment method, geography, diagnostic protocol, measurement validity or representativeness. Do not describe it as a representative Indian dataset or use it to estimate national prevalence.

### `Cleaned-Data.csv`
Previously inspected as a 173-row, 36-column dataset. It includes a mixture of age-group, PCOS-related health, family-history, symptom, diet, exercise, sleep, stress and medication-related fields.

**Use cautiously:** some fields contain compound or ambiguous self-reported responses, and medication fields may contain free text or inconsistent wording. Do not treat all responses as verified diagnoses or standardised clinical categories.

### Important distinction
These CSVs are not the same as the separate male and female Google Forms awareness surveys previously described. The inspected datasets do not establish a male-versus-female awareness comparison. Do not infer gender from symptoms, marital status or other indirect fields.

## 2.2 Dataset use rules

- Use the datasets as background research inputs only unless their provenance and coding are independently verified.
- Do not claim that they represent the Indian population.
- Do not infer diagnosis from a symptom, BMI or lab value.
- Do not infer gender where no gender field exists.
- Do not claim causation from correlations.
- Do not imply that weight, food, exercise, stress or menstrual products cause PCOS.
- Do not publish individual-level health records.
- Do not invent percentages or charts.
- If aggregate charts are created after careful analysis, display the sample size, variable definition, missing-data handling and a clear limitation statement.
- Keep clinical education grounded in authoritative medical guidance, not in the CSV files alone.

Suggested wording for any future dataset chart:
> These findings describe the supplied dataset only. They are not population estimates and do not establish cause and effect.

## 2.3 Research themes to cover

1. PCOS overview and terminology.
2. Endocrine system and hormone communication.
3. Reproductive anatomy.
4. Menstrual cycle and ovulation.
5. Diagnostic assessment and Rotterdam criteria, with adult/adolescent distinctions.
6. Androgens and possible symptoms.
7. Insulin resistance and metabolic health.
8. Reproductive and sexual health.
9. Mental wellbeing, stigma and body image.
10. Lifestyle, nutrition, movement, sleep and stress—without blame or cure claims.
11. Myths about fertility and weight.
12. Menstrual products: pads, tampons and menstrual cups.
13. Environmental exposures and endocrine-disrupting chemicals, with careful distinction between general endocrine research and proven PCOS causation.
14. Indian context, awareness gaps and access to reliable information.
15. Supportive communication for friends, partners and families.

## 2.4 Research and medical references

Use current versions of these sources and verify each page before publishing. Do not fabricate article details, quotations or statistics.

1. World Health Organization — Polycystic ovary syndrome fact sheet:  
   https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome

2. 2023 International Evidence-based Guideline for the Assessment and Management of PCOS:  
   https://pmc.ncbi.nlm.nih.gov/articles/10477934/

3. Indian multicentre PCOS prevalence research (verify study design, sample and limitations before quoting):  
   https://pmc.ncbi.nlm.nih.gov/articles/PMC11581580/

4. Research article previously shared in the project:  
   https://pmc.ncbi.nlm.nih.gov/articles/PMC9826643/

5. Menstrual cup systematic review:  
   https://doi.org/10.1016/S2468-2667(19)30111-2

6. Know Your Body Lessons reference website:  
   https://www.knowyourbodylessons.org/

The reference website is a precedent for age-appropriate health education and interactive learning. Do not copy its brand, text, illustrations, layouts or assets.

## 2.5 Medical editorial rules

- PCOS is the primary public-facing term because it is widely recognised and searchable.
- If emerging terminology such as PMOS is discussed, explain that terminology is evolving and cite the exact source and date. Do not silently replace PCOS throughout the website.
- PCOS is a complex condition with varied presentations.
- Not everyone with PCOS has every feature.
- Ovarian appearance alone does not define PCOS.
- Diagnosis is a clinical process and requires consideration of other possible causes.
- Explain adult and adolescent diagnostic approaches separately.
- Do not present the 28-day menstrual cycle as universal.
- Do not imply that everyone with PCOS has insulin resistance.
- Do not imply that every person with PCOS has fertility problems.
- Do not imply that lifestyle changes cure PCOS.
- Do not imply that pads, tampons or menstrual cups cause PCOS.
- Distinguish associations from causes.
- All clinical pages must be reviewed by a qualified healthcare professional before public launch.

---

# PART 3 — KEY WEBSITE FEATURES

1. **Simple landing page:** a clear headline, one-sentence explanation and obvious entry points.
2. **Optional age selection:** six age bands; user can skip, change or reset.
3. **Two learning pathways:** female learning and male ally learning, with shared content.
4. **Know Your Body:** reproductive anatomy, menstrual cycle and body systems.
5. **Hormones explained:** endocrine system, hormone communication and androgen basics.
6. **Metabolism explained:** insulin, glucose and metabolic health.
7. **Understand PCOS:** overview, possible features, diagnosis and health associations.
8. **Care and management:** evidence-informed overview of treatment and support options.
9. **Lifestyle and wellbeing:** food, movement, sleep, stress and mental health without blame.
10. **Myths vs Facts:** interactive claim cards with explanations and sources.
11. **Knowledge checks:** short educational quizzes; never diagnostic.
12. **Find Support:** when to seek advice, preparing for appointments and supportive conversations.
13. **Search:** search topic titles and descriptions.
14. **Related topics:** every page suggests relevant next pages.
15. **Sources and references:** clear source trail, review dates and medical disclaimer.
16. **Accessibility:** keyboard navigation, screen-reader labels, contrast, captions and reduced motion.
17. **Responsive design:** desktop, tablet and mobile.
18. **No sensitive health-data collection:** no account, symptom tracker, cycle tracker or diagnostic questionnaire.

---

# PART 4 — CARD SORTING

## 4.1 Proposed content cards

- What is PCOS?
- Know your body
- Reproductive anatomy
- The menstrual cycle
- Hormones and the endocrine system
- Insulin and metabolism
- Symptoms and experiences
- Diagnosis
- Treatment and management
- Food and nutrition
- Movement and exercise
- Sleep and stress
- Mental wellbeing and body image
- Fertility: facts and myths
- Menstrual products
- Myths vs facts
- Supporting someone with PCOS
- When to seek medical advice
- Preparing for an appointment
- FAQs
- Knowledge check
- Sources and further reading

## 4.2 Proposed card groups

1. **Know Your Body:** anatomy, menstrual cycle, hormones.
2. **Understand PCOS:** definition, possible features, health associations.
3. **Symptoms, Diagnosis & Care:** experiences, assessment, management.
4. **Everyday Wellbeing:** nutrition, movement, sleep, stress and mental health.
5. **Myths, Questions & Quizzes:** myths/facts, FAQs and knowledge checks.
6. **Support Someone:** ally information and respectful communication.
7. **Find Help & Reliable Sources:** appointment preparation and references.

## 4.3 Card-sorting research method

Conduct open card sorting with 5–8 participants from different age groups and genders. Ask participants to group cards in a way that makes sense to them and name each group. Follow with closed card sorting to test the proposed groups.

Observe:
- which cards are grouped together;
- which labels are unclear;
- whether participants organise by body system, age, gender or personal need;
- whether any card belongs in multiple groups;
- differences in how male and female participants interpret the content.

Treat the grouping above as a proposed structure until validated with participants.

---

# PART 5 — INFORMATION ARCHITECTURE

```text
PCOS UNLOCKED
├── Home
├── Start / Choose Your Route
│   ├── Optional Age Selection
│   ├── Female Learning Path
│   ├── Male Ally Path
│   └── Explore Everything
├── Know Your Body (Shared)
│   ├── Reproductive Anatomy
│   ├── Menstrual Cycle
│   ├── Hormones & Endocrine System
│   └── Insulin & Metabolism
├── Understand PCOS (Shared)
│   ├── What is PCOS?
│   ├── Possible Features & Experiences
│   ├── Diagnosis
│   ├── Health Associations
│   └── Treatment & Management
├── Female Learning Path
│   ├── Symptoms & Experiences
│   ├── Menstrual & Reproductive Health
│   ├── Diagnosis & Care
│   ├── Lifestyle & Wellbeing
│   └── Mental Health & Body Image
├── Male Ally Path
│   ├── PCOS Explained
│   ├── Myths & Misconceptions
│   ├── Everyday Impact
│   ├── Supportive Communication
│   └── How to Be an Ally
├── Learn & Explore
│   ├── Myths vs Facts
│   ├── Interactive Explainers
│   ├── Knowledge Checks
│   └── FAQs
├── Find Support
│   ├── When to Seek Medical Advice
│   ├── Prepare for an Appointment
│   ├── Talk to Someone
│   └── Reliable Resources
└── About
    ├── About This Project
    ├── Medical Sources & Review Dates
    ├── Accessibility
    └── Privacy
```

---

# PART 6 — SITEMAP AND ROUTES

| Page | Route |
|---|---|
| Home | `/` |
| Choose your route | `/start` |
| Know Your Body hub | `/know-your-body` |
| Reproductive anatomy | `/know-your-body/anatomy` |
| Menstrual cycle | `/know-your-body/menstrual-cycle` |
| Hormones | `/know-your-body/hormones` |
| Insulin & metabolism | `/know-your-body/metabolism` |
| Understand PCOS | `/pcos` |
| PCOS features | `/pcos/features` |
| Diagnosis | `/pcos/diagnosis` |
| Health associations | `/pcos/health` |
| Management | `/pcos/management` |
| Female pathway | `/pathways/women` |
| Female experiences | `/pathways/women/experiences` |
| Female wellbeing | `/pathways/women/wellbeing` |
| Male ally pathway | `/pathways/allies` |
| Supporting someone | `/pathways/allies/support` |
| Learn & Explore | `/explore` |
| Myths & facts | `/explore/myths` |
| Knowledge check | `/explore/quiz` |
| FAQs | `/explore/faqs` |
| Find Support | `/support` |
| When to seek help | `/support/when-to-seek-help` |
| Appointment preparation | `/support/appointment` |
| Reliable resources | `/support/resources` |
| About | `/about` |
| Sources | `/about/sources` |
| Accessibility | `/about/accessibility` |
| Privacy | `/about/privacy` |

Every route must load directly, survive refresh and support browser back/forward. Unknown routes must show a helpful 404 page with links to Home, Explore and Support.

---

# PART 7 — TASK FLOWS

## Task A: Understand PCOS
Home → Start Exploring → optional age selection → choose or skip pathway → Understand PCOS → What is PCOS? → interactive diagram → possible features → diagnosis overview → related topics → sources.

## Task B: Female visitor explores symptoms
Home → Female pathway → Symptoms & Experiences → select topic → read explanation → learn when to seek clinical advice → Appointment Preparation → return to pathway.

## Task C: Male visitor learns how to support someone
Home → Male Ally Path → PCOS Explained → Myths & Misconceptions → Everyday Impact → Supportive Communication → Practical Ways to Help → share reliable resources.

## Task D: Check a myth
Home → Learn & Explore → Myths vs Facts → choose statement → select True / False / Not Sure → reveal explanation → source → related topic.

## Task E: Prepare for a healthcare appointment
Any page → Find Support → Prepare for an Appointment → review discussion prompts → print page if desired → read what a clinician may ask → sources.

---

# PART 8 — USER FLOWS

## First-time visitor
Landing page → understand purpose → optional age selection → choose pathway or explore all → open a topic → interact with diagram or cards → read key takeaways → open related topic or support.

## Female pathway visitor
Home → Female pathway → orientation → choose symptoms, menstrual health, diagnosis, management or wellbeing → read visual explanation → explore related topic → Find Support.

## Male ally visitor
Home → Male ally pathway → PCOS explained → myths → possible everyday impact → supportive communication → ways to help → reliable resources.

## Under-18 visitor
Home → optional age setting → foundational body literacy → simple PCOS explanation → trusted adult/health professional support information. No symptom checker or collection of personal data.

## Returning visitor
Home or direct route → search/navigation → requested topic → breadcrumb/back link → related content. Any saved preference is optional and limited to age band/pathway, never health answers.

---

# PART 9 — NAVIGATION AND INTERACTION FLOW

## Global header
- Brand: PCOS Unlocked
- Know Your Body
- Understand PCOS
- Learn & Explore
- Find Support
- About
- Search
- Choose/Change Learning Route

## Footer
- About this project
- Medical sources
- Accessibility
- Privacy
- Find Support
- Educational disclaimer

## Navigation behaviour
- Header and footer are consistent on every page.
- Breadcrumbs appear on nested pages.
- Browser back/forward works.
- Every page has a clear next step and route back to its parent/hub.
- Users can switch pathways at any time.
- Search opens relevant pages.
- Mobile navigation is accessible and closes after a route is selected.
- No dead-end pages.

## Required interactions
1. Optional age selector.
2. Female and male pathway cards.
3. Clickable topic cards.
4. Keyboard-operable accordions.
5. Accessible tabs.
6. Clickable diagram hotspots with text alternatives.
7. Menstrual cycle stepper with previous/next and phase selection.
8. Myth/fact reveal cards.
9. Educational quiz with answer explanations and restart.
10. Search panel with empty state and clear action.
11. Print-friendly appointment preparation page.
12. Scroll-to-top control on long pages if useful.

## State and privacy
- Use URL routes for page state.
- Optional age/pathway preference may be stored locally.
- Do not store symptoms, cycle dates, diagnosis, medication, quiz health answers or other sensitive health data.
- No account or login is required.
- The website must work even if local storage is unavailable.

---

# PART 10 — PAGE-BY-PAGE CONTENT SPECIFICATION

## 10.1 Home page

**Headline:** Your body deserves clear answers.

**Subheading:** Explore PCOS, hormones and reproductive health through clear explanations, interactive visuals and myth-busting guides.

Primary actions:
- Explore PCOS
- Choose Your Learning Route

Secondary entry points:
- Know Your Body
- Female Learning Path
- Male Ally Path
- Learn & Explore
- Find Support

The first screen must immediately explain what the website is. Keep it uncluttered. Use one strong explanatory illustration rather than multiple decorative images.

## 10.2 Start / Choose Your Route

Explain that selection is optional. Age bands: Under 18, 18–21, 22–25, 26–30, 31–35, Above 35. Pathways: Female Learning, Male Ally, Explore Everything. Allow skipping, changing and resetting.

## 10.3 Know Your Body

Introduce reproductive anatomy, menstrual cycle, hormones and metabolism. Use labelled diagrams and short, plain-language explanations. Add a text alternative for each visual.

## 10.4 Reproductive Anatomy

Label ovaries, fallopian tubes, uterus, cervix and vagina. Explain that the diagram is simplified and not to scale. Avoid assuming all bodies are identical.

## 10.5 Menstrual Cycle

Explain that the cycle involves coordinated signals between the brain, ovaries and uterus. Introduce menstruation, follicular phase, ovulation and luteal phase. State clearly that cycle length and timing vary and that a 28-day cycle is not universal.

## 10.6 Hormones and Endocrine System

Explain hormones as chemical messengers. Introduce GnRH, FSH, LH, oestrogen, progesterone, androgens and insulin at an appropriate level. Avoid implying that one hormone alone explains PCOS. Use a simplified network diagram with a clear caveat.

## 10.7 Insulin and Metabolism

Explain insulin's role in helping cells use glucose. Explain that insulin resistance can be associated with PCOS for some people, but is not universal and cannot be identified by appearance. Do not present weight loss as a cure.

## 10.8 Understand PCOS

Explain PCOS as a complex hormonal and metabolic condition with varied presentations. Explain that some people experience ovulatory dysfunction, androgen-related features or polycystic ovarian morphology; not everyone has every feature. Ovarian appearance alone does not define PCOS.

## 10.9 Features and Experiences

Possible features may include irregular or absent periods, unpredictable ovulation, acne, excess facial/body hair, scalp hair thinning and metabolic features in some people. Symptoms vary and overlap with other conditions. Do not create a self-diagnosis checklist.

## 10.10 Diagnosis

Explain that diagnosis is made by a qualified clinician after assessment and consideration of other causes.

For adults, current international guidance generally uses two of three features: ovulatory dysfunction, clinical/biochemical hyperandrogenism, and polycystic ovarian morphology (with AMH as an adult alternative in guideline contexts). If irregular cycles and hyperandrogenism are both present, ultrasound/AMH may not be required.

For adolescents, both ovulatory dysfunction and hyperandrogenism are required; ultrasound/AMH are not recommended for adolescent diagnosis under the guideline approach.

The site must explain that diagnostic criteria are clinical guidance, not a self-assessment tool. Link to current guidance and encourage discussion with a qualified clinician.

## 10.11 Health Associations

Explain that PCOS may be associated with metabolic health concerns, sleep-related issues, psychological distress and reproductive challenges, but individual risks vary. Clinicians may consider blood pressure, glucose status, lipids and mental wellbeing based on individual circumstances.

## 10.12 Management

Explain that care is individualised and may include cycle regulation, symptom management, metabolic risk management, fertility support when desired, psychological support and lifestyle support. Medication decisions belong to clinicians. No single diet or exercise plan suits everyone. Do not promise a cure.

## 10.13 Female Pathway

Focus on lived experiences, menstrual/reproductive health, diagnosis, care conversations, body image and mental wellbeing. Do not assume all users menstruate, want pregnancy, are sexually active or have a diagnosis.

## 10.14 Male Ally Pathway

Explain PCOS, correct myths, discuss stigma and uncertainty, and show how to listen, ask what support is wanted, respect privacy, share reliable information and avoid unsolicited advice. Never frame the visitor as a patient.

## 10.15 Myths vs Facts

Include carefully sourced cards such as:
- “PCOS is only an ovarian problem.” — Incomplete. It is a complex condition involving reproductive, hormonal and metabolic features.
- “Everyone with PCOS has ovarian cysts.” — False. The name can be misleading; not everyone has this ultrasound feature.
- “Only people with larger bodies have PCOS.” — False. PCOS occurs across body sizes.
- “PCOS means someone cannot become pregnant.” — False. Fertility experiences vary; many people with PCOS can conceive, sometimes with support.
- “Lifestyle alone cures PCOS.” — False. Management is individualised; there is no universal cure.
- “Pads, tampons or menstrual cups cause PCOS.” — No established evidence supports this claim.
- “An online quiz can diagnose PCOS.” — False. Symptoms overlap and clinical assessment is required.

Each card must show a short explanation and source link.

## 10.16 Knowledge Check

Use 5–8 simple educational questions. Explain each answer. Do not score health risk, predict diagnosis or label a user as likely/unlikely to have PCOS.

## 10.17 Find Support

Explain when to consider professional advice: persistent irregular/absent periods, distressing symptoms, new or rapidly worsening symptoms, fertility concerns if relevant, or concerns about metabolic/mental health. Avoid alarmist language. For urgent/severe symptoms, direct users to local urgent/emergency medical care.

## 10.18 Appointment Preparation

Provide optional discussion prompts:
- What changes have I noticed, and when did they begin?
- How have my cycles changed, if relevant?
- Which symptoms affect daily life?
- What other causes might need consideration?
- What are the benefits, risks and alternatives of proposed treatments?
- What follow-up is recommended?

Provide a print-friendly version. Do not collect answers.

## 10.19 FAQs

Include questions about PCOS meaning, diagnosis, ovarian cysts, periods, fertility, weight, lifestyle, treatment, emotional wellbeing, ally support and reliable help.

## 10.20 About, Sources, Accessibility and Privacy

Explain project purpose and limitations; list sources with review dates; provide accessibility information; explain that no sensitive health data is collected and clarify any optional local preference storage.

---

# PART 11 — VISUAL DESIGN SYSTEM

## 11.1 Creative direction

A contemporary editorial health-education aesthetic: calm, clear, warm, inclusive and scientifically grounded. Avoid childish cartoons, hospital stock-photo clichés, pink-only gender coding, dense medical textbook layouts and excessive gradients.

## 11.2 Suggested colour palette

| Role | Colour | Hex |
|---|---|---|
| Primary text/brand | Deep plum | `#39243F` |
| Soft panels | Lilac | `#EAE3F0` |
| Accent | Warm coral | `#E98978` |
| Secondary accent | Sage | `#A9BBA5` |
| Main background | Cream | `#FAF7F2` |
| Body text | Ink | `#242126` |
| Card background | White | `#FFFFFF` |

Check text contrast for every combination. Do not rely on colour alone to communicate meaning.

## 11.3 Typography

Use a highly legible sans-serif such as Inter, Atkinson Hyperlegible or a system sans-serif for body text. Use a restrained display style for headings only. Maintain readable type sizes, line heights and line lengths.

## 11.4 Layout

- Mobile-first responsive layout.
- Generous whitespace.
- Consistent spacing and card patterns.
- Clear hierarchy and short text blocks.
- Diagrams as explanatory anchors, not decoration.
- Strong primary and secondary action distinction.
- Consistent page template.

## 11.5 Illustration style

Use simplified vector diagrams with clear labels, restrained colours and accessible text descriptions. The diagrams are educational schematics, not diagnostic or exact anatomical references.

## 11.6 External image rules

Prefer original SVG diagrams and illustrations. For external visuals, use only assets with verified reuse rights. Record the creator, exact asset URL, licence and attribution. Do not copy assets from the reference site or hotlink random images. If rights are unclear, create an original vector illustration or omit the image.

Possible discovery sources (check the licence for each individual asset):
- https://openverse.org/
- https://commons.wikimedia.org/
- https://unsplash.com/license
- https://www.pexels.com/license/
- https://undraw.co/license

---

# PART 12 — ORIGINAL SVG DIAGRAM BRIEFS

Create or include original SVGs for:
1. Reproductive anatomy: ovaries, fallopian tubes, uterus, cervix and vagina.
2. Hormone communication: brain/hypothalamus, pituitary and ovaries, with simplified feedback.
3. Insulin and metabolism: food/glucose, insulin and cells.
4. Menstrual cycle: menstruation, follicular phase, ovulation and luteal phase.
5. Learning pathways: shared foundation branching to female learning and male ally pathways, returning to shared exploration/support.

Every SVG must:
- have a `viewBox`;
- include accessible `<title>` and `<desc>`;
- be original and locally stored;
- use clear labels;
- be responsive;
- have an equivalent text explanation on the page;
- be described as simplified and not to scale where appropriate.

---

# PART 13 — ACCESSIBILITY, PRIVACY AND SAFETY

## Accessibility
- Semantic HTML.
- Keyboard-operable navigation and controls.
- Visible focus states.
- Skip-to-content link.
- Logical heading order.
- Labels for form controls.
- ARIA only where needed and correctly applied.
- Alt text and text alternatives for diagrams.
- Captions/transcripts for video/audio.
- Colour contrast tested.
- No meaning conveyed by colour alone.
- Reduced-motion preference respected.
- No autoplay video or flashing animation.
- No horizontal scrolling on mobile.

## Privacy
- No login or account required.
- No collection of symptoms, cycle dates, diagnosis status, medication or other sensitive health data.
- Optional age/pathway preference only; if stored, store locally and provide reset/change.
- No health answers stored.
- Explain any analytics or cookies if introduced; default to no health-related tracking.

## Safety
Prominent but unobtrusive disclaimer:
> PCOS Unlocked is an educational resource. It does not provide a diagnosis or replace advice from a qualified healthcare professional.

All clinical content must be checked against current authoritative sources and reviewed by a qualified health professional before public release.

---

# PART 14 — JSON PROJECT CONFIGURATION

The following JSON is the machine-readable project configuration. Save it as `project.json` if Google AI Studio requires a separate JSON file.

```json
{
  "project": {
    "name": "PCOS Unlocked",
    "tagline": "Understand your body. Question the myths. Find your way forward.",
    "type": "responsive_multi_page_educational_website",
    "primary_context": "India",
    "primary_term": "PCOS",
    "reference_site": "https://www.knowyourbodylessons.org/"
  },
  "purpose": "An age-appropriate, gender-inclusive educational website that explains PCOS, body literacy, hormones, reproductive health, metabolism, myths, care and support.",
  "audiences": {
    "primary": "Young women aged 18–25 in India",
    "secondary": [
      "Under-18 learners",
      "Adults aged 26–30",
      "Adults aged 31–35",
      "Adults above 35",
      "Male allies, friends, partners and family members",
      "Parents, caregivers and educators"
    ],
    "age_bands": [
      "Under 18",
      "18–21",
      "22–25",
      "26–30",
      "31–35",
      "Above 35"
    ]
  },
  "pathways": [
    {
      "id": "female",
      "label": "Female Learning Path",
      "purpose": "Learn about body literacy, PCOS, symptoms, diagnosis, reproductive health, care and wellbeing."
    },
    {
      "id": "male_ally",
      "label": "Male Ally Path",
      "purpose": "Understand PCOS, challenge misconceptions and learn respectful ways to support someone."
    },
    {
      "id": "shared",
      "label": "Explore Everything",
      "purpose": "Access all shared learning and support content without selecting a pathway."
    }
  ],
  "navigation": {
    "global_items": [
      "Know Your Body",
      "Understand PCOS",
      "Learn & Explore",
      "Find Support",
      "About"
    ],
    "must_support": [
      "direct_route_loading",
      "browser_back_forward",
      "breadcrumbs",
      "related_topic_links",
      "search",
      "mobile_menu",
      "pathway_switching",
      "age_preference_reset"
    ]
  },
  "routes": [
    "/",
    "/start",
    "/know-your-body",
    "/know-your-body/anatomy",
    "/know-your-body/menstrual-cycle",
    "/know-your-body/hormones",
    "/know-your-body/metabolism",
    "/pcos",
    "/pcos/features",
    "/pcos/diagnosis",
    "/pcos/health",
    "/pcos/management",
    "/pathways/women",
    "/pathways/women/experiences",
    "/pathways/women/wellbeing",
    "/pathways/allies",
    "/pathways/allies/support",
    "/explore",
    "/explore/myths",
    "/explore/quiz",
    "/explore/faqs",
    "/support",
    "/support/when-to-seek-help",
    "/support/appointment",
    "/support/resources",
    "/about",
    "/about/sources",
    "/about/accessibility",
    "/about/privacy"
  ],
  "features": {
    "responsive": true,
    "multi_page": true,
    "age_selection_optional": true,
    "pathway_selection_optional": true,
    "pathway_switching_anytime": true,
    "interactive_diagrams": true,
    "myth_fact_activity": true,
    "educational_quiz": true,
    "search": true,
    "appointment_print_view": true,
    "sources_page": true,
    "no_diagnostic_tool": true,
    "no_sensitive_health_data_collection": true,
    "no_login_required": true
  },
  "interactions": [
    "topic_cards",
    "accordions",
    "accessible_tabs",
    "diagram_hotspots",
    "menstrual_cycle_stepper",
    "myth_fact_reveal",
    "quiz_feedback",
    "search_panel",
    "mobile_navigation",
    "breadcrumbs",
    "related_content"
  ],
  "design": {
    "direction": "contemporary_editorial_health_education",
    "tone": [
      "clear",
      "reassuring",
      "inclusive",
      "evidence_informed",
      "non_judgemental",
      "not_childish"
    ],
    "colors": {
      "plum": "#39243F",
      "lilac": "#EAE3F0",
      "coral": "#E98978",
      "sage": "#A9BBA5",
      "cream": "#FAF7F2",
      "ink": "#242126",
      "white": "#FFFFFF"
    },
    "typography": {
      "body": "Inter or Atkinson Hyperlegible or system sans-serif",
      "headings": "restrained legible display sans-serif"
    },
    "illustration": "original labelled vector diagrams, accessible text alternatives, simplified educational schematics"
  },
  "medical_safety": {
    "disclaimer": "PCOS Unlocked is an educational resource. It does not provide a diagnosis or replace advice from a qualified healthcare professional.",
    "no_diagnosis": true,
    "no_cure_claims": true,
    "no_weight_stigma": true,
    "distinguish_association_from_causation": true,
    "adult_and_adolescent_diagnosis_explained_separately": true,
    "clinical_review_required_before_public_launch": true
  },
  "datasets": {
    "pcos_dataset.csv": {
      "rows": 1000,
      "columns": 6,
      "use": "Exploratory research input only; provenance and representativeness must be verified."
    },
    "Cleaned-Data.csv": {
      "rows": 173,
      "columns": 36,
      "use": "Exploratory research input only; mixed/self-reported fields and ambiguous/free-text values require careful treatment."
    },
    "limitations": [
      "These are not the separate male/female awareness survey datasets.",
      "Do not infer gender if it is not recorded.",
      "Do not infer diagnosis from a symptom or isolated variable.",
      "Do not claim Indian population prevalence.",
      "Do not infer causation.",
      "Do not publish individual health records."
    ]
  },
  "sources": [
    "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome",
    "https://pmc.ncbi.nlm.nih.gov/articles/10477934/",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC11581580/",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC9826643/",
    "https://doi.org/10.1016/S2468-2667(19)30111-2",
    "https://www.knowyourbodylessons.org/"
  ],
  "completion": {
    "all_routes_implemented": true,
    "all_links_tested": true,
    "all_interactions_tested": true,
    "mobile_tested": true,
    "keyboard_tested": true,
    "reduced_motion_tested": true,
    "medical_sources_checked": true,
    "clinical_review_completed": false
  }
}
```

---

# PART 15 — JSON CONTENT MODEL

This optional content model shows how page content can be organised as data rather than hard-coded into components. Save as `content-model.json` if a separate JSON file is useful.

```json
{
  "site": "PCOS Unlocked",
  "navigation": [
    {"label": "Know Your Body", "href": "/know-your-body"},
    {"label": "Understand PCOS", "href": "/pcos"},
    {"label": "Learn & Explore", "href": "/explore"},
    {"label": "Find Support", "href": "/support"},
    {"label": "About", "href": "/about"}
  ],
  "contentSections": [
    {
      "id": "body",
      "title": "Know Your Body",
      "pages": [
        {"title": "Reproductive Anatomy", "href": "/know-your-body/anatomy"},
        {"title": "Menstrual Cycle", "href": "/know-your-body/menstrual-cycle"},
        {"title": "Hormones", "href": "/know-your-body/hormones"},
        {"title": "Insulin & Metabolism", "href": "/know-your-body/metabolism"}
      ]
    },
    {
      "id": "pcos",
      "title": "Understand PCOS",
      "pages": [
        {"title": "What is PCOS?", "href": "/pcos"},
        {"title": "Features & Experiences", "href": "/pcos/features"},
        {"title": "Diagnosis", "href": "/pcos/diagnosis"},
        {"title": "Health Associations", "href": "/pcos/health"},
        {"title": "Management", "href": "/pcos/management"}
      ]
    },
    {
      "id": "female",
      "title": "Female Learning Path",
      "pages": [
        {"title": "Female Pathway", "href": "/pathways/women"},
        {"title": "Experiences", "href": "/pathways/women/experiences"},
        {"title": "Wellbeing", "href": "/pathways/women/wellbeing"}
      ]
    },
    {
      "id": "ally",
      "title": "Male Ally Path",
      "pages": [
        {"title": "Male Ally Pathway", "href": "/pathways/allies"},
        {"title": "How to Support Someone", "href": "/pathways/allies/support"}
      ]
    },
    {
      "id": "explore",
      "title": "Learn & Explore",
      "pages": [
        {"title": "Myths & Facts", "href": "/explore/myths"},
        {"title": "Knowledge Check", "href": "/explore/quiz"},
        {"title": "FAQs", "href": "/explore/faqs"}
      ]
    },
    {
      "id": "support",
      "title": "Find Support",
      "pages": [
        {"title": "When to Seek Help", "href": "/support/when-to-seek-help"},
        {"title": "Prepare for an Appointment", "href": "/support/appointment"},
        {"title": "Reliable Resources", "href": "/support/resources"}
      ]
    }
  ],
  "mythFactCards": [
    {
      "claim": "Everyone with PCOS has ovarian cysts.",
      "answer": "False",
      "explanation": "The name can be misleading. Not everyone with PCOS has polycystic ovarian morphology, and ovarian appearance alone does not define the condition."
    },
    {
      "claim": "Only people with larger bodies have PCOS.",
      "answer": "False",
      "explanation": "PCOS occurs across body sizes. Appearance or weight cannot establish whether someone has PCOS."
    },
    {
      "claim": "PCOS always causes infertility.",
      "answer": "False",
      "explanation": "Fertility experiences vary. Many people with PCOS can conceive, sometimes with clinical support."
    },
    {
      "claim": "Menstrual cups, tampons or pads cause PCOS.",
      "answer": "No established evidence supports this claim",
      "explanation": "These menstrual products are not established causes of PCOS."
    },
    {
      "claim": "An online quiz can diagnose PCOS.",
      "answer": "False",
      "explanation": "Symptoms can overlap with other conditions. Diagnosis requires assessment by a qualified clinician."
    }
  ],
  "globalDisclaimer": "Educational resource only. Not a diagnostic tool and not a substitute for professional medical advice."
}
```

---

# PART 16 — GOOGLE AI STUDIO MASTER PROMPT

Copy the complete prompt below into Google AI Studio after providing this dossier and the JSON configuration. The prompt is deliberately explicit: it requires a complete multi-page implementation rather than a homepage-only concept.

## MASTER PROMPT — BEGIN

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

## MASTER PROMPT — END

---

# PART 17 — FINAL QUALITY ASSURANCE CHECKLIST

## Functional
- [ ] Every sitemap route exists.
- [ ] Direct URL loading and refresh work.
- [ ] Browser back/forward works.
- [ ] Header/footer links work on every page.
- [ ] Mobile menu opens, closes and closes after navigation.
- [ ] Search works and has an empty state.
- [ ] Age selection can be skipped, changed and reset.
- [ ] Pathway selection can be skipped and changed.
- [ ] Shared content is accessible from both pathways.
- [ ] All cards, tabs, accordions, hotspots, stepper and quiz work.
- [ ] Print layout is readable.
- [ ] 404 page offers recovery links.

## Content
- [ ] No lorem ipsum or empty pages.
- [ ] No diagnostic quiz or symptom checker.
- [ ] No weight stigma or unsupported causal claims.
- [ ] No claim that everyone with PCOS has ovarian cysts.
- [ ] Adult and adolescent diagnostic approaches are distinguished.
- [ ] Male pathway is ally-focused.
- [ ] Sources are linked and checked.
- [ ] Clinical review status is honest.

## Accessibility
- [ ] Keyboard-only navigation works.
- [ ] Focus indicators are visible.
- [ ] Skip link works.
- [ ] Heading structure is logical.
- [ ] Controls have labels.
- [ ] Diagrams have text alternatives.
- [ ] Colour is not the only carrier of meaning.
- [ ] Contrast is tested.
- [ ] Reduced-motion preference is respected.
- [ ] Touch targets are usable on mobile.

## Privacy and safety
- [ ] No sensitive health data is collected.
- [ ] No login is required.
- [ ] No health answers are saved.
- [ ] Optional preferences can be reset.
- [ ] Educational disclaimer is visible.
- [ ] Medical content is reviewed by a qualified professional before public launch.

---

# PART 18 — IMPLEMENTATION NOTE

This dossier is the complete consolidated project brief and build specification. It includes JSON configuration and a master prompt in one Markdown document.

The Markdown document itself does not execute code or create the application. Google AI Studio must use the master prompt and project specifications to generate the working frontend. After generation, test every route and interaction using the checklist above.

**Recommended first build milestone:** complete the homepage, shared navigation, pathway selection, Know Your Body hub, Understand PCOS, Myths & Facts and Find Support. Then continue through every remaining route without changing the agreed information architecture.
