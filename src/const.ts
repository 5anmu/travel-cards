// https://en.wikipedia.org/wiki/IETF_language_tag#ISO_15924,_ISO/IEC_10646_and_Unicode

export const LanguageCodes = {
  enUS: 'enUS',
  zhHant:  'zhHant',
} as const;

export const languageLabelMapEnglish = {
  'enUS': "English",
  'zhHant': 'Mandarin, Traditional'
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
}

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
  [ LanguageCodes['enUS'] ]: primaryNeedsEnUS,
  [ LanguageCodes['zhHant'] ]: primaryNeedsZhHant,
} as const;

export const  FoodAllergies  = {
  peanuts: 'peanuts',
  hazelnuts:'hazelnuts' ,
  nuts: 'nuts',
  shellfish: 'shellfish',
} as const;

export const FoodAllergiesEnUS = {
  [FoodAllergies.peanuts]: 'Peanuts',
  [FoodAllergies.hazelnuts]: 'Hazelnuts',
  [FoodAllergies.nuts]: 'Nuts',
  [FoodAllergies.shellfish]: 'Shellfish',
} as const;

export const FoodAllergiesZhHant = {
  [FoodAllergies.peanuts]: '花生',
  [FoodAllergies.hazelnuts]: '榛子',
  [FoodAllergies.nuts]: '堅果',
  [FoodAllergies.shellfish]: '貝類',
} as const;
