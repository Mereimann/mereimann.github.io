// =============================================================================
// MERLE REIMANN — PERSONAL WEBSITE DATA
// =============================================================================
// This file contains all the content for the website.
// Edit this file to update any section. After editing, commit and push to GitHub
// and the site will update automatically.
//
// SECTIONS IN THIS FILE:
//   1. SITE       — personal info, links, about text
//   2. NEWS       — recent news items (shown on home page)
//   3. PUBS       — publications (newest first)
//   4. TALKS      — talks & presentations (newest first)
//   5. TEACHING   — teaching roles (courses)
//   6. STUDENTS   — current and past students supervised
//   7. OPEN_THESIS — open MSc thesis topics
// =============================================================================


// =============================================================================
// 1. SITE — Personal info & links
// =============================================================================
// PORTRAIT_SRC: set to "uploads/portrait.jpg" (or any image path) once you
//   have a photo. Set to null to show the placeholder silhouette.
const PORTRAIT_SRC = "uploads/portrait.jpg";

const SITE = {
  name:        "Merle M. Reimann",
  short:       "Merle Reimann",
  role:        "Postdoctoral Researcher",
  affiliation: "KTH Royal Institute of Technology",
  division:    "Division of Robotics, Perception and Learning (RPL)",
  supervisor:  "Iolanda Leite",
  city:        "Stockholm, Sweden",
  email:       "mmrei [at] kth.se",         // display text
  emailHref:   "mmrei@kth.se",              // used in mailto: links
  scholar:     "https://scholar.google.com/citations?user=sH7FeRoAAAAJ",
  linkedin:    "https://www.linkedin.com/in/merle-reimann-680465290/",
  kth:         "https://www.kth.se/profile/mmrei",
  // Path to CV PDF in uploads/ folder. Update filename if needed.
  cv:          "uploads/CV_Merle_Reimann.pdf",

  // Short bio shown on home page (italic, below main bio)
  about_short:
    "I research spoken human–robot interaction, with a focus on dialogue management and how robots can communicate their capabilities so that people can have smooth interactions with them.",

  // Full bio shown on home page
  about_long:
    "I am a postdoctoral researcher in the Division of Robotics, Perception and Learning (RPL) at KTH, working with Iolanda Leite. I completed my PhD on dialogue management and capability communication in human–robot interaction at the Vrije Universiteit Amsterdam, supervised by Koen Hindriks (VU Amsterdam), Florian Kunneman (Utrecht University), and Catharine Oertel (TU Delft). Before that, I did a double M.Sc. in Intelligent Systems (Bielefeld) and Computer Science (Bologna), and a B.Sc. in Cognitive Science at Osnabrück.",

  // Contact page — address
  address:     "Lindstedtsvägen 24, 114 28 Stockholm",
};


// =============================================================================
// 2. NEWS — Recent news items (shown on home page)
// =============================================================================
// Each item has:
//   date    — e.g. "2026 · Apr"
//   tag     — short category label: "paper", "talk", "move", "milestone", "award"
//   text    — one-sentence description
//   youtube — (optional) YouTube URL, renders a button next to the text
//
// Items are shown newest-first. The first 5 are shown on the home page.
// Add new items at the TOP of this array.
const NEWS = [
  {
    date:    "2026 · Apr",
    tag:     "talk",
    text:    "Gave an invited talk at Talking Robotics on spoken capability communication.",
    youtube: "https://www.youtube.com/watch?v=ySr0t-2n3jc",
  },
  {
    date:    "2026 · Mar",
    tag:     "workshop organization",
    text:    "Organized the Workshop on Transparent and Understandable Robots (D-TUR) at HRI '26.",
  },
  {
    date:    "2025 · Oct",
    tag:     "position",
    text:    "Started as a postdoctoral researcher at RPL, KTH with Iolanda Leite.",
  },
  {
    date:    "2025 · Sep",
    tag:     "milestone",
    text:    "Successfully defended my PhD thesis 'Speaking the Same Language' at VU Amsterdam.",
  },
  {
    date:    "2025 · Jul",
    tag:     "paper",
    text:    "New paper at CUI '25 on transparent conversational agents and capability communication.",
  },
  {
    date:    "2025 · Mar",
    tag:     "paper",
    text:    "Paper presented at HRI '25: 'What Can You Say to a Robot?'",
  },
];


// =============================================================================
// 3. PUBS — Publications (newest first)
// =============================================================================
// Each publication has:
//   year       — publication year (number)
//   venue      — short venue name, e.g. "HRI '25"
//   venueFull  — full venue name
//   title      — full paper title
//   authors    — author list as string
//   pages      — pages / article info
//   links      — array of { label, href } — e.g. [{ label: "PDF", href: "..." }]
//   blurb      — one-sentence summary (shown when you click the entry)
//   figure     — figure style ID: "thesis" | "dialogue" | "wild" | "survey" | "restaurant"
//               Leave as "thesis" for a book-style thumbnail, or use any key for a generic one.
//
// To add a new publication: copy one block, paste at the TOP of the array, and fill in.
// To remove one: delete its block (from opening { to closing },)
const PUBS = [
  {
    year:      2025,
    venue:     "PhD Thesis",
    venueFull: "Vrije Universiteit Amsterdam",
    title:
      "Speaking the Same Language: Spoken Capability Communication in Human–Agent and Human–Robot Interaction",
    authors:   "M. M. Reimann",
    links:     [{ label: "Thesis", href: "https://research.vu.nl/en/publications/speaking-the-same-language-spoken-capability-communication-in-hum/" }],
    blurb:
      "Defended September 2025. How spoken interaction can teach users what a conversational agent and robot can(not) do.",
    figure:    "thesis",
  },
  {
    year:      2025,
    venue:     "CUI '25",
    venueFull: "7th ACM Conference on Conversational User Interfaces",
    title:
      "Transparent Conversational Agents: The Impact of Capability Communication on User Behavior and Mental Model Alignment",
    authors:   "M. M. Reimann, F. A. Kunneman, C. Oertel, K. V. Hindriks",
    pages:     "pp. 1–12",
    links:     [{ label: "ACM", href: "https://dl.acm.org/doi/abs/10.1145/3570945.3607332" }],
    blurb:
      "Comparing proactive vs. reactive ways for a voice agent to communicate what it can actually do — and how this shapes users' mental models.",
    figure:    "dialogue",
  },
  {
    year:      2025,
    venue:     "RO-MAN '25",
    venueFull: "Workshop on Real-World HRI in Public and Private Spaces (PubRob-Fails), IEEE RO-MAN",
    title:
      "Why Report Failed Interactions With Robots?! Towards Vignette-based Interaction Quality Reporting",
    authors:   "A. Axelsson, M. M. Reimann, R. Cumbal, H. R. M. Pelikan, D. Lala",
    pages:     "workshop paper",
    links:     [{ label: "arXiv", href: "https://arxiv.org/abs/2508.10603" }],
    blurb:
      "Investigating motivations and barriers for users to report failed robot interactions using vignettes.",
    figure:    "wild",
  },
  {
    year:      2025,
    venue:     "HRI '25",
    venueFull: "ACM/IEEE International Conference on Human-Robot Interaction",
    title:
      "What Can You Say to a Robot? Capability Communication Leads to More Natural Conversations",
    authors:
      "M. M. Reimann, K. V. Hindriks, F. A. Kunneman, C. Oertel, G. Skantze, I. Leite",
    pages:     "pp. 708–716",
    links:     [
      { label: "arXiv", href: "https://arxiv.org/abs/2502.01448" },
      { label: "IEEE",   href: "https://ieeexplore.ieee.org/abstract/document/10974151" },
    ],
    blurb:
      "120-participant in-person study in a restaurant scenario — proactive capability communication made interactions more conversational and more enjoyable.",
    figure:    "restaurant",
  },
  {
    year:      2024,
    venue:     "ACM THRI",
    venueFull: "ACM Transactions on Human-Robot Interaction 13(2)",
    title:     "A Survey on Dialogue Management in Human-Robot Interaction",
    authors:   "M. M. Reimann, F. A. Kunneman, C. Oertel, K. V. Hindriks",
    pages:     "Article 22, 22 pp.",
    links:     [
      { label: "ACM",  href: "https://dl.acm.org/doi/full/10.1145/3648605" },
      { label: "arXiv", href: "https://arxiv.org/abs/2307.10897" },
    ],
    blurb:
      "Systematic review of dialogue managers in HRI — approach, domain, robot form, situatedness, modality.",
    figure:    "survey",
  },
  {
    year:      2023,
    venue:     "ICSR '23",
    venueFull: "Int. Conf. on Social Robotics, Doha, LNCS 14454",
    title:     "Social Robots in the Wild and the Novelty Effect",
    authors:
      "M. Reimann, J. van de Graaf, N. van Gulik, S. van de Sanden, T. Verhagen, K. Hindriks",
    pages:     "pp. 38–48",
    links:     [
      {
        label: "Springer",
        href:  "https://link.springer.com/chapter/10.1007/978-981-99-8718-4_4",
      },
    ],
    blurb:
      "Indicators identified during an in-the-wild user study to tell apart novelty-driven from need-driven interactions with a robot.",
    figure:    "wild",
  },
  {
    year:      2023,
    venue:     "IVA '23",
    venueFull: "23rd ACM International Conference on Intelligent Virtual Agents",
    title:
      "Predicting Interaction Quality Aspects Using Level-Based Scores for Conversational Agents",
    authors:   "M. M. Reimann, C. Oertel, F. A. Kunneman, K. V. Hindriks",
    pages:     "",
    links:     [{ label: "ACM", href: "https://doi.org/10.1145/3570945.3607332" }],
    blurb:
      "A level-based scoring approach for task-oriented conversational agents to guide iterative improvements and predict interaction quality.",
    figure:    "dialogue",
  },
];


// =============================================================================
// 4. TALKS — Talks & presentations (newest first)
// =============================================================================
// Each talk has:
//   date    — e.g. "Apr 2026"
//   venue   — event/seminar name
//   where   — city/country or "Online"
//   title   — talk title
//   kind    — type badge: "invited" | "conference" | "defense" | "workshop"
//   youtube — (optional) YouTube URL, renders a YouTube button
//
// To add a new talk: copy one block, paste at the TOP, fill in.
// To remove one: delete its block.
const TALKS = [
  {
    date:    "Apr 2026",
    venue:   "Talking Robotics",
    where:   "Online",
    title:   "Improving Robot Understandability Through Spoken Capability Communication",
    kind:    "invited",
    youtube: "https://www.youtube.com/watch?v=ySr0t-2n3jc",
  },
  {
    date:    "Nov 2025",
    venue:   "Social Robotics Lab",
    where:   "Uppsala University, Sweden",
    title:   "What Can You Say to a Robot?",
    kind:    "invited",
  },
  {
    date:    "Sep 2025",
    venue:   "PhD Defense",
    where:   "VU Amsterdam",
    title:   "Speaking the Same Language",
    kind:    "defense",
  },
  {
    date:    "Jul 2025",
    venue:   "CUI '25",
    where:   "Waterloo, Canada",
    title:   "Transparent Conversational Agents: Capability Communication and Mental Model Alignment",
    kind:    "conference",
  },
  {
    date:    "Jul 2025",
    venue:   "Hybrid Intelligence Center Consortium",
    where:   "Netherlands",
    title:   "Spoken Capability Communication in Human-Agent and Human-Robot Interaction",
    kind:    "invited",
  },
  {
    date:    "Jun 2025",
    venue:   "Computational Linguistics Lab",
    where:   "Bielefeld University, Germany",
    title:   "Speaking the Same Language",
    kind:    "invited",
  },
  {
    date:    "Mar 2025",
    venue:   "HRI '25",
    where:   "Melbourne, Australia",
    title:   "What Can You Say to a Robot? Capability Communication Leads to More Natural Conversations",
    kind:    "conference",
  },
  {
    date:    "Jul 2024",
    venue:   "Socially Perceptive Computing Lab",
    where:   "Delft University, Netherlands",
    title:   "Improving the User's Capability Model",
    kind:    "invited",
  },
  {
    date:    "May 2024",
    venue:   "Division of Speech, Music and Hearing",
    where:   "KTH Royal Institute of Technology, Sweden",
    title:   "Dialogue Management in Human-Robot Interaction",
    kind:    "invited",
  },
  {
    date:    "Sep 2023",
    venue:   "IVA '23",
    where:   "Würzburg, Germany",
    title:   "Predicting Interaction Quality Aspects Using Level-Based Scores for Conversational Agents",
    kind:    "conference",
  },
  {
    date:    "Nov 2022",
    venue:   "WAI (bi-Weekly AI meetings)",
    where:   "Vrije Universiteit Amsterdam",
    title:   "Dialogue Management in Human-Robot Interaction",
    kind:    "invited",
  },
];


// =============================================================================
// 5. TEACHING — Teaching roles (courses only, shown at top of Teaching page)
// =============================================================================
// Each group has:
//   role   — e.g. "Master's courses"
//   where  — institutions and years
//   items  — list of course entries as strings
//
// To add a new course: add a string to the `items` array in the relevant group.
// To add a new group: copy one block and paste after the last one.
const TEACHING = [
  {
    role:  "Master's courses",
    where: "KTH · VU Amsterdam · TU Delft",
    items: [
      "Social Robotics, KTH (Nov–Dec 2025) — teaching support",
      "Socially Intelligent Robotics, VU Amsterdam (2023, 2024) — guest lecturer",
      "Conversational Agents, TU Delft (2023) — guest lecturer",
    ],
  },
  {
    role:  "Bachelor's courses",
    where: "VU Amsterdam · 2023–2025",
    items: [
      "Project Conversational Agents (Jan 2025) — teaching support",
      "Project Conversational Agents (Jan 2024) — teacher",
      "Project Multi-Agent Systems (Jan 2023) — teaching support",
    ],
  },
];


// =============================================================================
// 6. STUDENTS — Current and past supervised students
// =============================================================================
// current: students currently being supervised
//   name  — student's name
//   level — "MSc" or "BSc"
//   title — thesis title
//   where — institution
//   since — start year
//
// past: students who have completed their thesis
//   name  — student's name
//   level — "MSc" or "BSc"
//   title — thesis title
//   where — institution
//   year  — graduation year
const STUDENTS = {
  current: [
    {
      name:  "Yogie Permana",
      level: "MSc",
      title: "Bridging the gap: Interaction Strategies for Managing LLM Response Delays in Spoken Human–Robot Interaction",
      where: "KTH",
      since: "2026",
    },
  ],
  past: [
    {
      name:  "Brian Dmyszewicz",
      level: "MSc",
      title: "A Crowdsourced Data Collection Infrastructure for Conversational Agents",
      where: "VU Amsterdam",
      year:  "2023",
    },
    {
      name:  "Nina van Gulik",
      level: "MSc",
      title: "User Experience with a Conversational Wine Recommendation System on a Pepper Robot",
      where: "VU Amsterdam",
      year:  "2023",
    },
    {
      name:  "James Coenraad",
      level: "BSc",
      title: "Making a Conversational Agent for Recipe Recommendation More Robust",
      where: "VU Amsterdam",
      year:  "2023",
    },
    {
      name:  "Thijs Blom",
      level: "BSc",
      title: "Enhancing Conversational Repair Strategies in a Recipe Selection Agent",
      where: "VU Amsterdam",
      year:  "2023",
    },
  ],
};


// =============================================================================
// 7. OPEN_THESIS — Open MSc thesis topics (shown on Teaching page)
// =============================================================================
// Each topic has:
//   title       — thesis topic title
//   level       — "MSc" | "MSc / BSc" | "BSc"
//   description — 2-3 sentence description of the project
//   skills      — array of short skill/keyword tags
//
// To add a new topic: copy one block, paste at the TOP, fill in.
// To remove a topic: delete its block.
const OPEN_THESIS = [
  {
    title:       "Granularity of Capability Communication in Spoken Human-Robot Interaction",
    level:       "MSc",
    description: "Can a robot adapt how it communicates its capabilities based on what a user already knows? This project explores how much detail should be included in the explanation of the capabilities.",
    skills:      ["HRI", "User modelling", "Spoken dialogue"],
  },
  {
    title:       "Effects of Multimodal Capability Expectation Violations",
    level:       "MSc",
    description: "Robots can communicate their capabilities through multiple modalities. This project explores which effect the violation of the capability expectations has on the interaction and whether there are differences depending on whether the violation happens in the same modality that communicated about the capability.",
    skills:      ["Multimodal HRI", "Capability communication", "User studies"],
  },
];


// Make all data available globally (required for the multi-file script setup)
Object.assign(window, {
  PORTRAIT_SRC,
  SITE,
  NEWS,
  PUBS,
  TALKS,
  TEACHING,
  STUDENTS,
  OPEN_THESIS,
});
