// Central registry for all subproducts under Culture Risk Diagnostic™.
// Add/edit here and both the list + individual pages update automatically.

export type Subproduct = {
  slug: string;
  title: string;
  short: string;
  description: string;
  includedInPackages?: ("Starter" | "Standard" | "Enterprise")[];
  reference?: string; // Academic/professional citation (optional)
  cta?: { label: string; href: string }; // Optional: Stripe Checkout or Enquire
};

// ───────────────────────────────────────────────────────────────────────────────
// EXACTLY 9 SUBPRODUCTS (no images, no LVI)
// ───────────────────────────────────────────────────────────────────────────────

export const SUBPRODUCTS: Subproduct[] = [
  {
    slug: "copsoq",
    title: "COPSOQ (Copenhagen Psychosocial Questionnaire)",
    short: "Psychosocial hazard mapping across workload, justice, relationships.",
    description:
      "Measures the psychosocial risk environment and flags existing/emerging hazards. Outputs include heatmaps, scores, and defensible indicators aligned to WHS/psychosocial duties.",
    includedInPackages: ["Standard", "Enterprise"],
    reference:
      "Kristensen, T. S., Hannerz, H., Hogh, A., & Borg, V. (2005). The Copenhagen Psychosocial Questionnaire — a tool for the assessment and improvement of the psychosocial work environment.",
  },
  {
    slug: "sheq",
    title: "SHEQ (Sexual Harassment Experiences Questionnaire)",
    short: "Surfaces harassment, unwanted sexual attention, coercion, unsafe climates.",
    description:
      "Captures data on sexist remarks and sexual harassment to identify risk concentrations by unit or role, enabling targeted control measures.",
    includedInPackages: ["Standard", "Enterprise"],
    reference:
      "Fitzgerald, L. F., Drasgow, F., Hulin, C. L., Gelfand, M. J., & Magley, V. J. (1997). Antecedents and consequences of sexual harassment in organizations: A test of an integrated model. Journal of Applied Psychology, 82, 578–589. http://dx.doi.org/10.1037/0021-9010.82.4.578; Fitzgerald, L. F., Gelfand, M. J., & Drasgow, F. (1995). Measuring sexual harassment: Theoretical and psychometric advances. Basic and Applied Social Psychology, 17, 425–445. http://dx.doi.org/10.1207/s15324834basp1704_2",
  },
  {
    slug: "ocas",
    title: "OCAS (Overt–Covert Aggression Scale)",
    short: "Detects bullying, aggression, intimidation — overt and subtle.",
    description:
      "Assesses wrongful behaviours including aggression, bullying, and harassment; highlights patterns and hotspots to guide prevention.",
    includedInPackages: ["Starter", "Standard", "Enterprise"],
    reference:
      "Kaukiainen, A., Salmivalli, C., Lagerspetz, K. M. J., Lahtinen, A., & Kostamo, A. (1997). Overt–Covert Aggression Scale (OCAS). Turku, Finland: Department of Psychology, University of Turku.",
  },
  {
    slug: "wfbs",
    title: "WFBS (Workplace Feelings & Behaviour Survey)",
    short: "Maps in-group favouritism, exclusion and covert harmful behaviours.",
    description:
      "Evaluates perceptions and dynamics that drive culture risk; developed and validated in Australia. Ideal for large or complex teams.",
    includedInPackages: ["Standard", "Enterprise"],
    reference:
      "Ramirez-Melgoza, A. (2006). Gender, emotion, and aggression in the workplace: An investigation on the role of emotional intelligence. Master of Business by Research, RMIT University.",
  },
  {
    slug: "culture-pulse-surveys",
    title: "Culture Pulse Surveys",
    short: "Short, repeatable pulses to track change and sustain improvement.",
    description:
      "Lightweight, repeatable surveys tailored to organisational needs, scheduled monthly/quarterly with dashboards to show movement on key culture risk indicators.",
    includedInPackages: ["Starter", "Standard", "Enterprise"],
  },
  {
    slug: "code-of-conduct",
    title: "Review / Development of Code of Conduct",
    short: "Modern, defensible conduct standards and roll-out.",
    description:
      "Audit or draft a Code of Conduct aligned with psychosocial risk controls and procedural justice best-practice, including implementation and communication planning.",
    includedInPackages: ["Starter", "Standard", "Enterprise"],
  },
  {
    slug: "code-of-ethics",
    title: "Review / Development of Code of Ethics",
    short: "Ethical principles beyond compliance — embedded in practice.",
    description:
      "Audit or draft a Code of Ethics with implementation toolkit, training and governance integration; aligned to contemporary governance and integrity frameworks.",
    includedInPackages: ["Standard", "Enterprise"],
  },
  {
    slug: "qualitative-interventions",
    title: "Qualitative Interventions",
    short: "Focus Groups • Interviews • Observations",
    description:
      "In-depth qualitative methods provide rich insights into cultural dynamics. Triangulates with survey results and delivers actionable recommendations that numbers alone cannot capture.",
    includedInPackages: ["Starter", "Standard", "Enterprise"],
  },
  {
    slug: "culture-risk-indicators",
    title: "Culture Risk Indicators (Risk Culture)",
    short: "Customisable indicators aligned to key risk domains.",
    description:
      "Tailored risk culture indicators mapped to client context. Examples: cyber security, industrial relations, health & safety, operating model, anti-money-laundering, anti-corruption, bribery, modern slavery — or any governance area relevant to the organisation.",
    includedInPackages: ["Standard", "Enterprise"],
  },
];
