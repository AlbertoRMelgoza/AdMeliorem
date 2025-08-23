// app/products/culture-risk-diagnostic/subsubproducts.ts

// A purchasable “sub-subproduct” (a domain or category under a survey/product)
export type SubSubproduct = {
  // parent subproduct slug: 'copsoq' | 'seq' | 'culture-pulse-surveys'
  parent: "copsoq" | "seq" | "culture-pulse-surveys";
  // unique slug within site, e.g., 'copsoq-demands-at-work'
  slug: string;
  title: string;
  short: string;
  description: string;
  // Optional academic / professional citation(s)
  reference?: string;
  // Pricing (suggested). Use for Stripe price mapping if desired.
  priceUSD?: number;          // e.g., 1500–2500 self-service per sub-subproduct
  bundleEligible?: boolean;   // whether to include in a bundle purchase
  // Optional Stripe price id if you wire direct to Checkout
  stripePriceId?: string;
};

// ───────────────────────────────────────────────────────────────────────────────
// COPSOQ — 5 domains → 5 sub-subproducts
// Reference applies to all domains (repeated for clarity on each item).
// Kristensen, T. S., Hannerz, H., Hogh, A., & Borg, V. (2005).
// The Copenhagen Psychosocial Questionnaire — a tool for the assessment and
// improvement of the psychosocial work environment.
// ───────────────────────────────────────────────────────────────────────────────
const COPSOQ_REF =
  "Kristensen, T. S., Hannerz, H., Hogh, A., & Borg, V. (2005). The Copenhagen Psychosocial Questionnaire — a tool for the assessment and improvement of the psychosocial work environment.";

export const SUBSUB_COPSOQ: SubSubproduct[] = [
  {
    parent: "copsoq",
    slug: "copsoq-demands-at-work",
    title: "COPSOQ: Demands at Work",
    short: "Workload, pace, emotional demands.",
    description:
      "Assesses workload intensity, time pressure, and emotional demands to identify strain hotspots and inform preventative controls.",
    reference: COPSOQ_REF,
    priceUSD: 1800,
    bundleEligible: true,
  },
  {
    parent: "copsoq",
    slug: "copsoq-work-organisation-job-content",
    title: "COPSOQ: Work Organisation & Job Content",
    short: "Autonomy, skills, learning, meaningfulness.",
    description:
      "Evaluates job design quality, decision latitude, skill use, learning opportunities, and meaningfulness—key buffers against psychosocial risk.",
    reference: COPSOQ_REF,
    priceUSD: 1800,
    bundleEligible: true,
  },
  {
    parent: "copsoq",
    slug: "copsoq-interpersonal-relations-leadership",
    title: "COPSOQ: Interpersonal Relations & Leadership",
    short: "Communication, expectations, support, collegiality.",
    description:
      "Measures quality of supervision and collegial relations, clarity of expectations, and support—often early indicators of risk.",
    reference: COPSOQ_REF,
    priceUSD: 1800,
    bundleEligible: true,
  },
  {
    parent: "copsoq",
    slug: "copsoq-work-individual-interface",
    title: "COPSOQ: Work–Individual Interface",
    short: "Engagement, satisfaction, insecurity, balance.",
    description:
      "Explores job engagement and satisfaction, job insecurity, and work–life balance to reveal pressure points impacting wellbeing.",
    reference: COPSOQ_REF,
    priceUSD: 1800,
    bundleEligible: true,
  },
  {
    parent: "copsoq",
    slug: "copsoq-social-capital",
    title: "COPSOQ: Social Capital",
    short: "Trust, fairness, participation.",
    description:
      "Assesses trust and fairness in the organisation and the degree of participation—foundations for a safe and just culture.",
    reference: COPSOQ_REF,
    priceUSD: 1800,
    bundleEligible: true,
  },
];

// ───────────────────────────────────────────────────────────────────────────────
// SEQ — 4 domains → 4 sub-subproducts
// References (combined):
// Fitzgerald, L. F., Drasgow, F., Hulin, C. L., Gelfand, M. J., & Magley, V. J. (1997).
// Antecedents and consequences of sexual harassment in organizations: A test of an integrated model.
// Journal of Applied Psychology, 82, 578–589. http://dx.doi.org/10.1037/0021-9010.82.4.578
// Fitzgerald, L. F., Gelfand, M. J., & Drasgow, F. (1995).
// Measuring sexual harassment: Theoretical and psychometric advances.
// Basic and Applied Social Psychology, 17, 425–445. http://dx.doi.org/10.1207/s15324834basp1704_2
// ───────────────────────────────────────────────────────────────────────────────
const SHEQ_REF =
  "Fitzgerald, L. F., Drasgow, F., Hulin, C. L., Gelfand, M. J., & Magley, V. J. (1997). Antecedents and consequences of sexual harassment in organizations: A test of an integrated model. Journal of Applied Psychology, 82, 578–589. http://dx.doi.org/10.1037/0021-9010.82.4.578; Fitzgerald, L. F., Gelfand, M. J., & Drasgow, F. (1995). Measuring sexual harassment: Theoretical and psychometric advances. Basic and Applied Social Psychology, 17, 425–445. http://dx.doi.org/10.1207/s15324834basp1704_2";

export const SUBSUB_SHEQ: SubSubproduct[] = [
  {
    parent: "sheq",
    slug: "sheq-gender-harassment-sexist-hostility",
    title: "SHEQ: Gender Harassment / Sexist Hostility",
    short: "Sexist remarks and hostile gendered climates.",
    description:
      "Detects climates where sexist attitudes and gender-based hostility are normalised—early warnings for harm escalation.",
    reference: SHEQ_REF,
    priceUSD: 2000,
    bundleEligible: true,
  },
  {
    parent: "sheq",
    slug: "sheq-sexual-hostility",
    title: "SHEQ: Sexual Hostility",
    short: "Sexualised hostility and degrading content.",
    description:
      "Assesses hostile, sexualised behaviour and content that create unsafe cultural conditions even without direct targeting.",
    reference: SHEQ_REF,
    priceUSD: 2000,
    bundleEligible: true,
  },
  {
    parent: "sheq",
    slug: "sheq-unwanted-sexual-attention",
    title: "SHEQ: Unwanted Sexual Attention",
    short: "Unwelcome advances and persistent pursuit.",
    description:
      "Measures prevalence of unwanted sexual attention and repeated advances—often concentrated by unit/role.",
    reference: SHEQ_REF,
    priceUSD: 2000,
    bundleEligible: true,
  },
  {
    parent: "sheq",
    slug: "sheq-sexual-coercion",
    title: "SHEQ: Sexual Coercion",
    short: "Quid pro quo and coercive behaviour.",
    description:
      "Identifies coercive or transactional sexual behaviours with the highest liability exposure and regulatory interest.",
    reference: SHEQ_REF,
    priceUSD: 2000,
    bundleEligible: true,
  },
];

// ───────────────────────────────────────────────────────────────────────────────
// Culture Risk Pulse — 10 categories → 10 sub-subproducts
// Proprietary pulse categories; no external academic references required.
// ───────────────────────────────────────────────────────────────────────────────
export const SUBSUB_PULSE: SubSubproduct[] = [
  {
    parent: "culture-pulse-surveys",
    slug: "pulse-male-dominated-dynamics",
    title: "Pulse: Male-Dominated Dynamics",
    short: "Power patterns and gender skew.",
    description:
      "Rapid check on skewed gender norms and dominance patterns that suppress voice and increase exclusion risk.",
    priceUSD: 1500,
    bundleEligible: true,
  },
  {
    parent: "culture-pulse-surveys",
    slug: "pulse-female-dominated-dynamics",
    title: "Pulse: Female-Dominated Dynamics",
    short: "Group skew and informal norms.",
    description:
      "Assesses whether gender-skewed norms produce blind spots or exclusion of out-groups in female-majority settings.",
    priceUSD: 1500,
    bundleEligible: true,
  },
  {
    parent: "culture-pulse-surveys",
    slug: "pulse-power-imbalances",
    title: "Pulse: Power Imbalances",
    short: "Hierarchy pressure and gatekeeping.",
    description:
      "Screens for gatekeeping, retaliation risk, and undue influence—predictors of under-reporting and silent harm.",
    priceUSD: 1500,
    bundleEligible: true,
  },
  {
    parent: "culture-pulse-surveys",
    slug: "pulse-speak-up-tolerance",
    title: "Pulse: Speak-Up Tolerance",
    short: "Safety to challenge up, down, lateral.",
    description:
      "Measures climate for raising concerns and challenging decisions across hierarchies without fear of reprisal.",
    priceUSD: 1500,
    bundleEligible: true,
  },
  {
    parent: "culture-pulse-surveys",
    slug: "pulse-conflicts-of-interest",
    title: "Pulse: Conflicts of Interest",
    short: "Nepotism, favoritism, undisclosed ties.",
    description:
      "Detects perception of conflicts, in-group favoritism, and undisclosed relationships—drivers of covert harm.",
    priceUSD: 1500,
    bundleEligible: true,
  },
  {
    parent: "culture-pulse-surveys",
    slug: "pulse-values-in-practice",
    title: "Pulse: Values in Practice",
    short: "Do espoused values match behaviour?",
    description:
      "Checks whether stated values translate into day-to-day behaviour, decision criteria, and resource allocation.",
    priceUSD: 1500,
    bundleEligible: true,
  },
  {
    parent: "culture-pulse-surveys",
    slug: "pulse-beliefs",
    title: "Pulse: Beliefs",
    short: "Shared mental models.",
    description:
      "Surfaces underlying shared beliefs that shape sensemaking and explain resistance to change or blind spots.",
    priceUSD: 1500,
    bundleEligible: true,
  },
  {
    parent: "culture-pulse-surveys",
    slug: "pulse-attitudes",
    title: "Pulse: Attitudes",
    short: "Disposition toward inclusion & safety.",
    description:
      "Captures prevailing attitudes toward inclusion, procedural justice, and psychosocial safety across teams.",
    priceUSD: 1500,
    bundleEligible: true,
  },
  {
    parent: "culture-pulse-surveys",
    slug: "pulse-emotion",
    title: "Pulse: Emotion",
    short: "Affect states and signals.",
    description:
      "Rapid signal on emotional tone (e.g., fear, anger, cynicism) indicating risk of aggression or disengagement.",
    priceUSD: 1500,
    bundleEligible: true,
  },
  {
    parent: "culture-pulse-surveys",
    slug: "pulse-decision-making",
    title: "Pulse: Decision-Making",
    short: "Fairness, transparency, participation.",
    description:
      "Assesses perceptions of decision processes: clarity, fairness, and voice—key determinants of cultural risk.",
    priceUSD: 1500,
    bundleEligible: true,
  },
];

// ───────────────────────────────────────────────────────────────────────────────
// Aggregate export & helpers
// ───────────────────────────────────────────────────────────────────────────────
export const SUBSUBPRODUCTS: SubSubproduct[] = [
  ...SUBSUB_COPSOQ,
  ...SUBSUB_SEQ,
  ...SUBSUB_PULSE,
];

// Quick lookup by parent, e.g., SUBSUB_BY_PARENT['copsoq']
export const SUBSUB_BY_PARENT: Record<SubSubproduct["parent"], SubSubproduct[]> = {
  copsoq: SUBSUB_COPSOQ,
  seq: SUBSUB_SEQ,
  "culture-pulse-surveys": SUBSUB_PULSE,
};

// Helper to get one by slug
export function getSubSubproduct(slug: string): SubSubproduct | undefined {
  return SUBSUBPRODUCTS.find((s) => s.slug === slug);
}

