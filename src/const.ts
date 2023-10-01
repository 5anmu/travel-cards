// https://en.wikipedia.org/wiki/IETF_language_tag#ISO_15924,_ISO/IEC_10646_and_Unicode

export const LanguageCodes = {
  enUS: 'enUS',
  zhHant: 'zhHant',
} as const;

export const languageLabelMapEnglish = {
  enUS: 'English',
  zhHant: 'Mandarin, Traditional',
} as const;

export const PrimaryNeeds = {
  foodAllergies: 'foodAllergies',
  foodRestrictions: 'foodRestrictions',
  medicineAllergies: 'medicineAllergies',
  medicalConditions: 'medicalConditions',
  phobias: 'phobias',
  other: 'other',
} as const;

export type primaryNeedLabels = {
  [key in keyof typeof PrimaryNeeds]: string;
};

export const primaryNeedsEnUS: primaryNeedLabels = {
  [PrimaryNeeds.foodAllergies]: 'Food Allergies',
  [PrimaryNeeds.foodRestrictions]: 'Food Restrictions',
  [PrimaryNeeds.medicineAllergies]: 'Medicine Allergies',
  [PrimaryNeeds.medicalConditions]: 'Medical Conditions',
  [PrimaryNeeds.phobias]: 'Phobias',
  [PrimaryNeeds.other]: 'Other',
} as const;

export const primaryNeedsZhHant: primaryNeedLabels = {
  [PrimaryNeeds.foodAllergies]: '食物過敏',
  [PrimaryNeeds.foodRestrictions]: '食物限制',
  [PrimaryNeeds.medicineAllergies]: '藥物過敏',
  [PrimaryNeeds.medicalConditions]: '醫療條件',
  [PrimaryNeeds.phobias]: '恐懼症',
  [PrimaryNeeds.other]: '其他',
} as const;

export const primaryNeedsByLanguage = {
  [LanguageCodes['enUS']]: primaryNeedsEnUS,
  [LanguageCodes['zhHant']]: primaryNeedsZhHant,
} as const;

export const foodAllergies = {
  peanuts: 'peanuts',
  hazelnuts: 'hazelnuts',
  nuts: 'nuts',
  shellfish: 'shellfish',
} as const;

export const foodAllergiesEnUS = {
  [foodAllergies.peanuts]: 'Peanuts',
  [foodAllergies.hazelnuts]: 'Hazelnuts',
  [foodAllergies.nuts]: 'Nuts',
  [foodAllergies.shellfish]: 'Shellfish',
} as const;

export const foodAllergiesZhHant = {
  [foodAllergies.peanuts]: '花生',
  [foodAllergies.hazelnuts]: '榛子',
  [foodAllergies.nuts]: '堅果',
  [foodAllergies.shellfish]: '貝類',
} as const;

export const foodAllergiesByLanguage = {
  [LanguageCodes['enUS']]: foodAllergiesEnUS,
  [LanguageCodes['zhHant']]: foodAllergiesZhHant,
} as const;

export const foodRestrictions = {} as const;

export const foodRestrictionsEnUS = {} as const;

export const foodRestrictionsZhHant = {} as const;

export const foodRestrictionsByLanguage = {
  [LanguageCodes['enUS']]: foodRestrictionsEnUS,
  [LanguageCodes['zhHant']]: foodRestrictionsZhHant,
} as const;

export const medicineAllergies = {} as const;

export const medicineAllergiesEnUS = {} as const;

export const medicineAllergiesZhHant = {} as const;

export const medicineAllergiesByLanguage = {
  [LanguageCodes['enUS']]: medicineAllergiesEnUS,
  [LanguageCodes['zhHant']]: medicineAllergiesZhHant,
} as const;

export const medicalConditions = {} as const;

export const medicalConditionsEnUS = {} as const;

export const medicalConditionsZhHant = {} as const;

export const medicalConditionsByLanguage = {
  [LanguageCodes['enUS']]: medicalConditionsEnUS,
  [LanguageCodes['zhHant']]: medicalConditionsZhHant,
} as const;

export const phobias = {} as const;

export const phobiasEnUS = {} as const;

export const phobiasZhHant = {} as const;

export const phobiasByLanguage = {
  [LanguageCodes['enUS']]: phobiasEnUS,
  [LanguageCodes['zhHant']]: phobiasZhHant,
} as const;
