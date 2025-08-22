// Central registry for all subproducts under Culture Risk Diagnostic™.
// Add/edit here and both the list + individual pages update automatically.

export type Subproduct = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image?: string; // optional: /Images/xyz.jpg
  cta?: { label: string; href: string }; // e.g., Stripe Checkout or Enquire
  includedInPackages?: ("Starter" | "Standard" | "Enterprise")[];
};

export const SUBPRODUCTS: Subproduct[] = [
  {
    slug: "copsoq",
    title: "COPSOQ (Copenhagen Psychosocial Questionnaire)",
    short: "Psychosocial hazard mapping across workload, justice, relationships.",
    description:
      "Measures the psychosocial risk environment and flags existing/emerging hazards. Outputs include heatmaps, scores, and defensible indicators aligned to WHS/psychosocial duties.",
    image: "/Images/subproducts/copsoq.jpg",
    includedInPackages: ["Standard", "Enterprise"],
  },
  {
    slug: "seq",
    title: "SEQ (Sexual Experience Questionnaire)",
    short: "Surfaces harassment, unwanted sexual attention, coercion, unsafe climates.",
    description:
      "Captures data on sexist remarks and sexual harassment to identify risk concentrations by unit or role, enabling targeted control measures.",
    image: "/Images/subproducts/seq.jpg",
    includedInPackages: ["Standard", "Enterprise"],
  },
  {
    slug: "ocas",
    title: "OCAS (Overt–Covert Aggression Scale)",
    short: "Detects bullying, aggression, intimidation — overt and subtle.",
    description:
      "Assesses wrongful behaviours including aggression, bullying, and harassment; highlights patterns and hotspots to guide prevention.",
    image: "/Images/subproducts/ocas.jpg",
    includedInPackages: ["Starter", "Standard", "Enterprise"],
  },
  {
    slug: "wfbs",
    title: "WFBS (Workplace Feelings & Behaviour Survey)",
    short: "Maps in-group favouritism, exclusion and covert harmful behaviours.",
    description:
      "Evaluates perceptions and dynamics that drive culture risk; developed and validated in Australia. Ideal for large or complex teams.",
    image: "/Images/subproducts/wfbs.jpg",
    includedInPackages: ["Standard", "Enterprise"],
  },
  {
    slug: "iat",
    title: "IAT (Implicit Association Test)",
    short: "Surfaces unconscious biases that drive exclusion and unsafe dynamics.",
    description:
      "Administered with strict anonymity. Aggregate insights inform targeted controls and leadership practice.",
    image: "/Images/subproducts/iat.jpg",
    includedInPackages: ["Enterprise"],
  },
  {
    slug: "culture-pulse-surveys",
    title: "Culture Pulse Surveys",
    short: "Short, repeatable pulses to track change and sustain improvement.",
    description:
      "Lightweight instruments scheduled monthly/quarterly with dashboards to show movement on key culture risk indicators.",
    image: "/Images/subproducts/pulse.jpg",
    includedInPackages: ["Starter", "Standard", "Enterprise"],
  },
  {
    slug: "hogan-mvpi",
    title: "Hogan MVPI",
    short: "Values & motives alignment to desired culture.",
    description:
      "Assesses leadership/organisational values and cultural fit. Useful for culture design and selection.",
    image: "/Images/subproducts/mvpi.jpg",
    includedInPackages: ["Enterprise"],
  },
  {
    slug: "hogan-hds",
    title: "Hogan HDS",
    short: "Leadership derailers & toxic risk profile.",
    description:
      "Identifies risk factors in leadership behaviour that amplify culture hazards; supports board-level oversight.",
    image: "/Images/subproducts/hds.jpg",
    includedInPackages: ["Enterprise"],
  },
  {
    slug: "code-of-conduct",
    title: "Review / Development of Code of Conduct",
    short: "Modern, defensible conduct standards and roll-out.",
    description:
      "Audit or draft a Code of Conduct aligned with psychosocial risk controls and procedural justice best-practice.",
    image: "/Images/subproducts/conduct.jpg",
    includedInPackages: ["Starter", "Standard", "Enterprise"],
  },
  {
    slug: "code-of-ethics",
    title: "Review / Development of Code of Ethics",
    short: "Ethical principles beyond compliance — embedded in practice.",
    description:
      "Audit or draft a Code of Ethics with implementation toolkit, training and governance integration.",
    image: "/Images/subproducts/ethics.jpg",
    includedInPackages: ["Standard", "Enterprise"],
  },
];

