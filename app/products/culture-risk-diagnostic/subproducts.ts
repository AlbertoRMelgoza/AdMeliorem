// Central registry for all subproducts under Culture Risk Diagnostic™.
// Add/edit here and both the list + individual pages update automatically.

export type Subproduct = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image?: string; // full hero image (e.g., /Images/xyz.jpg)
  thumb?: string; // smaller grid thumbnail (e.g., /Images/subproducts/xyz-thumb.jpg)
  cta?: { label: string; href: string }; // Stripe Checkout or Enquire
  includedInPackages?: ("Starter" | "Standard" | "Enterprise")[];
};

export const SUBPRODUCTS: Subproduct[] = [
  {
    slug: "copsoq",
    title: "COPSOQ (Copenhagen Psychosocial Questionnaire)",
    short: "Psychosocial hazard mapping across workload, justice, relationships.",
    description:
      "Measures the psychosocial risk environment and flags existing/emerging hazards. Outputs include heatmaps, scores, and defensible indicators aligned to WHS/psychosocial duties.",
    image: "/Images/COPSOQ.jpg",
    thumb: "/Images/subproducts/copsoq-thumb.jpg",
    includedInPackages: ["Standard", "Enterprise"],
  },
  {
    slug: "seq",
    title: "SEQ (Sexual Experience Questionnaire)",
    short: "Surfaces harassment, unwanted sexual attention, coercion, unsafe climates.",
    description:
      "Captures data on sexist remarks and sexual harassment to identify risk concentrations by unit or role, enabling targeted control measures.",
    image: "/Images/SEQ.jpg",
    thumb: "/Images/subproducts/seq-thumb.jpg",
    includedInPackages: ["Standard", "Enterprise"],
  },
  {
    slug: "ocas",
    title: "OCAS (Overt–Covert Aggression Scale)",
    short: "Detects bullying, aggression, intimidation — overt and subtle.",
    description:
      "Assesses wrongful behaviours including aggression, bullying, and harassment; highlights patterns and hotspots to guide prevention.",
    image: "/Images/OCAS.jpg",
    thumb: "/Images/subproducts/ocas-thumb.jpg",
    includedInPackages: ["Starter", "Standard", "Enterprise"],
  },
  {
    slug: "wfbs",
    title: "WFBS (Workplace Feelings & Behaviour Survey)",
    short: "Maps in-group favouritism, exclusion and covert harmful behaviours.",
    description:
      "Evaluates perceptions and dynamics that drive culture risk; developed and validated in Australia. Ideal for large or complex teams.",
    image: "/Images/WFBS.jpg",
    thumb: "/Images/subproducts/wfbs-thumb.jpg",
    includedInPackages: ["Standard", "Enterprise"],
  },
  {
    slug: "iat",
    title: "IAT (Implicit Association Test)",
    short: "Surfaces unconscious biases that drive exclusion and unsafe dynamics.",
    description:
      "Administered with strict anonymity. Aggregate insights inform targeted controls and leadership practice.",
    image: "/Images/IAT.jpg",
    thumb: "/Images/subproducts/iat-thumb.jpg",
    includedInPackages: ["Enterprise"],
  },
  {
    slug: "culture-pulse-surveys",
    title: "Culture Pulse Surveys",
    short: "Short, repeatable pulses to track change and sustain improvement.",
    description:
      "Lightweight instruments scheduled monthly/quarterly with dashboards to show movement on key culture risk indicators.",
    image: "/Images/Culture Pulse Survey.jpg",
    thumb: "/Images/subproducts/culture-pulse-thumb.jpg",
    includedInPackages: ["Starter", "Standard", "Enterprise"],
  },
  {
    slug: "hogan-mvpi",
    title: "Hogan MVPI",
    short: "Values & motives alignment to desired culture.",
    description:
      "Assesses leadership/organisational values and cultural fit. Useful for culture design and selection.",
    image: "/Images/Hogan MVPI.jpg",
    thumb: "/Images/subproducts/hogan-mvpi-thumb.jpg",
    includedInPackages: ["Enterprise"],
  },
  {
    slug: "hogan-hds",
    title: "Hogan HDS",
    short: "Leadership derailers & toxic risk profile.",
    description:
      "Identifies risk factors in leadership behaviour that amplify culture hazards; supports board-level oversight.",
    image: "/Images/Hogan HDS.jpg",
    thumb: "/Images/subproducts/hogan-hds-thumb.jpg",
    includedInPackages: ["Enterprise"],
  },
  {
    slug: "code-of-conduct",
    title: "Review / Development of Code of Conduct",
    short: "Modern, defensible conduct standards and roll-out.",
    description:
      "Audit or draft a Code of Conduct aligned with psychosocial risk controls and procedural justice best-practice.",
    image: "/Images/Code of Conduct.jpg",
    thumb: "/Images/subproducts/code-of-conduct-thumb.jpg",
    includedInPackages: ["Starter", "Standard", "Enterprise"],
  },
  {
    slug: "code-of-ethics",
    title: "Review / Development of Code of Ethics",
    short: "Ethical principles beyond compliance — embedded in practice.",
    description:
      "Audit or draft a Code of Ethics with implementation toolkit, training and governance integration.",
    image: "/Images/Code of Ethics.jpg",
    thumb: "/Images/subproducts/code-of-ethics-thumb.jpg",
    includedInPackages: ["Standard", "Enterprise"],
  },
  {
  slug: "culture-risk-indicators",
  title: "Culture Risk Indicators (Risk Culture)",
  short: "Customisable indicators aligned to key risk domains.",
  description:
    "Risk culture indicators tailored to client needs. Examples: cyber security, industrial relations, health & safety, operating model, money laundering, anti-corruption, bribery, modern slavery. Flexible to measure any area relevant to governance and compliance.",
  includedInPackages: ["Standard", "Enterprise"],
},
{
  slug: "qualitative-interventions",
  title: "Qualitative Interventions",
  short: "Focus Groups • Interviews • Observations",
  description:
    "In-depth qualitative methods provide rich insights into cultural dynamics. Facilitates triangulation with survey results and delivers actionable recommendations that numbers alone cannot capture.",
  includedInPackages: ["Starter", "Standard", "Enterprise"],
},
];
