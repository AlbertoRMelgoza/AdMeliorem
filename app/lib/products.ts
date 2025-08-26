// app/lib/products.ts
// Generated from your products/prices CSVs (AUD). Amounts are in *cents*.
// You can reorder or rename SKUs, but keep keys unique.

export type SKU =
  | "NEGOTIATION"
  | "MEDIATION"
  | "PROCEDURAL_JUSTICE_FRAMEWORK"
  | "RCABH_RISK_CONTROL_AGGRESSION_BULLYING_H"
  | "SHSARC_SEXUAL_HARASSMENT_SEXUAL_ASSAULT_"
  | "CULTURE_RISK_INDICATORS_RISK_CULTURE"
  | "QUALITATIVE_INTERVENTIONS"
  | "REVIEW_AND_DEVELOPMENT_OF_CODE_OF_ETHICS"
  | "REVIEW_AND_DEVELOPMENT_OF_CODE_OF_CONDUC"
  | "OVERT_COVERT_AGGRESSION_QUESTIONNAIRE_OC"
  | "CULTURE_RISK_PULSE_SURVEY_DECISION_MAKIN"
  | "CULTURE_RISK_PULSE_SURVEY_EMOTION"
  | "CULTURE_RISK_PULSE_SURVEY_ATTITUDES"
  | "CULTURE_RISK_PULSE_SURVEY_BELIEFS"
  | "CULTURE_RISK_PULSE_SURVEY_VALUES_IN_PRACT"
  | "CULTURE_RISK_PULSE_SURVEY_CONFLICT_OF_INT"
  | "CULTURE_RISK_PULSE_SURVEY_SPEAK_UP_TOLER"
  | "CULTURE_RISK_PULSE_SURVEY_POWER_IMBALANC"
  | "CULTURE_PULSE_RISK_SURVEY_FEMALE_DOMINAT"
  | "CULTURE_RISK_PULSE_SURVEY_MALE_DOMINATED"
  | "CULTURE_RISK_PULSE_SURVEYS"
  | "SHEQ_SEXUAL_COERCION"
  | "SHEQ_UNWANTED_SEXUAL_ATTENTION"
  | "SHEQ_SEXUAL_HOSTILITY"
  | "SHEQ_GENDER_HARASSMENT_SEXIST_HOSTILITY"
  | "SHEQ_SEXUAL_HARASSMENT_EXPERIENCES_QUEST"
  | "COPSOQ_SOCIAL_CAPITAL"
  | "COPSOQ_WORK_INDIVIDUAL_INTERFACE"
  | "COPSOQ_INTERPERSONAL_RELATIONS_LEADERSHI";

export const PRODUCTS: Record<
  SKU,
  { name: string; unit_amount: number; currency: "aud" }
> = {
  NEGOTIATION: {
    name: "Negotiation",
    unit_amount: 300000,
    currency: "aud",
  },
  MEDIATION: { name: "Mediation", unit_amount: 300000, currency: "aud" },
  PROCEDURAL_JUSTICE_FRAMEWORK: {
    name: "Procedural Justice Framework™",
    unit_amount: 400000,
    currency: "aud",
  },
  RCABH_RISK_CONTROL_AGGRESSION_BULLYING_H: {
    name: "RCABH™ — Risk Control Aggression, Bullying & Harassment workshop",
    unit_amount: 75000,
    currency: "aud",
  },
  SHSARC_SEXUAL_HARASSMENT_SEXUAL_ASSAULT_: {
    name: "SHSARC™ Sexual harassment & Sexual Assault Risk Control Workshop",
    unit_amount: 75000,
    currency: "aud",
  },
  CULTURE_RISK_INDICATORS_RISK_CULTURE: {
    name: "Culture Risk Indicators (Risk Culture)",
    unit_amount: 75000,
    currency: "aud",
  },
  QUALITATIVE_INTERVENTIONS: {
    name: "Qualitative interventions",
    unit_amount: 75000,
    currency: "aud",
  },
  REVIEW_AND_DEVELOPMENT_OF_CODE_OF_ETHICS: {
    name: "Review and development of Code of Ethics",
    unit_amount: 75000,
    currency: "aud",
  },
  REVIEW_AND_DEVELOPMENT_OF_CODE_OF_CONDUC: {
    name: "Review and development of Code of Conduct",
    unit_amount: 75000,
    currency: "aud",
  },
  OVERT_COVERT_AGGRESSION_QUESTIONNAIRE_OC: {
    name: "Overt Covert Aggression Questionnaire OCAS",
    unit_amount: 225000,
    currency: "aud",
  },
  CULTURE_RISK_PULSE_SURVEY_DECISION_MAKIN: {
    name: "Culture Risk Pulse Survey: Decision Making",
    unit_amount: 30000,
    currency: "aud",
  },
  CULTURE_RISK_PULSE_SURVEY_EMOTION: {
    name: "Culture Risk Pulse Survey: Emotion",
    unit_amount: 30000,
    currency: "aud",
  },
  CULTURE_RISK_PULSE_SURVEY_ATTITUDES: {
    name: "Culture Risk Pulse Survey: Attitudes",
    unit_amount: 30000,
    currency: "aud",
  },
  CULTURE_RISK_PULSE_SURVEY_BELIEFS: {
    name: "Culture Risk Pulse Survey: Beliefs",
    unit_amount: 30000,
    currency: "aud",
  },
  CULTURE_RISK_PULSE_SURVEY_VALUES_IN_PRACT: {
    name: "Culture Risk Pulse Survey: Values in Practice",
    unit_amount: 30000,
    currency: "aud",
  },
  CULTURE_RISK_PULSE_SURVEY_CONFLICT_OF_INT: {
    name: "Culture Risk Pulse Survey: Conflict of Interest",
    unit_amount: 30000,
    currency: "aud",
  },
  CULTURE_RISK_PULSE_SURVEY_SPEAK_UP_TOLER: {
    name: "Culture Risk Pulse Survey: Speak-Up Tolerance",
    unit_amount: 30000,
    currency: "aud",
  },
  CULTURE_RISK_PULSE_SURVEY_POWER_IMBALANC: {
    name: "Culture Risk Pulse Survey: Power Imbalances",
    unit_amount: 30000,
    currency: "aud",
  },
  CULTURE_PULSE_RISK_SURVEY_FEMALE_DOMINAT: {
    name: "Culture Pulse Risk Survey: Female Dominated Dynamics",
    unit_amount: 30000,
    currency: "aud",
  },
  CULTURE_RISK_PULSE_SURVEY_MALE_DOMINATED: {
    name: "Culture Risk Pulse Survey: Male dominated dynamics",
    unit_amount: 30000,
    currency: "aud",
  },
  CULTURE_RISK_PULSE_SURVEYS: {
    name: "Culture Risk Pulse Surveys",
    unit_amount: 300000,
    currency: "aud",
  },
  SHEQ_SEXUAL_COERCION: {
    name: "SHEQ: Sexual Coercion",
    unit_amount: 75000,
    currency: "aud",
  },
  SHEQ_UNWANTED_SEXUAL_ATTENTION: {
    name: "SHEQ: Unwanted sexual attention",
    unit_amount: 75000,
    currency: "aud",
  },
  SHEQ_SEXUAL_HOSTILITY: {
    name: "SHEQ: Sexual Hostility",
    unit_amount: 75000,
    currency: "aud",
  },
  SHEQ_GENDER_HARASSMENT_SEXIST_HOSTILITY: {
    name: "SHEQ: Gender Harassment/Sexist Hostility",
    unit_amount: 75000,
    currency: "aud",
  },
  SHEQ_SEXUAL_HARASSMENT_EXPERIENCES_QUEST: {
    name: "SHEQ (Sexual Harassment Experiences Questionnaire)",
    unit_amount: 300000,
    currency: "aud",
  },
  COPSOQ_SOCIAL_CAPITAL: {
    name: "COPSOQ: Social Capital",
    unit_amount: 75000,
    currency: "aud",
  },
  COPSOQ_WORK_INDIVIDUAL_INTERFACE: {
    name: "COPSOQ: Work-Individual Interface",
    unit_amount: 75000,
    currency: "aud",
  },
  COPSOQ_INTERPERSONAL_RELATIONS_LEADERSHI: {
    name: "COPSOQ: Interpersonal Relations & Leaderships",
    unit_amount: 75000,
    currency: "aud",
  },
};
