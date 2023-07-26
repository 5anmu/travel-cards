// https://en.wikipedia.org/wiki/IETF_language_tag#ISO_15924,_ISO/IEC_10646_and_Unicode

export const LanguagesEnglish = {
  enUS: 'enUS',
  zhHant:  'zhHant',
} as const;

export const languageLabelMap = {
  'enUS': "English",
  'zhHant': 'Mandarin, Traditional'
} as const;

export enum PrimaryNeeds {
  foodAllergies,
  foodRestrictions,
  medicineAllergies,
  medicalConditions,
  phobias,
  other,
}

export const primaryNeedsEnUS = {
  [PrimaryNeeds.foodAllergies]: 'Food Allergies',
  [PrimaryNeeds.foodRestrictions]: 'Food Restrictions',
  [PrimaryNeeds.medicineAllergies]: 'Medicine Allergies',
  [PrimaryNeeds.medicalConditions]: 'Medical Conditions',
  [PrimaryNeeds.phobias]: 'Phobias',
  [PrimaryNeeds.other]: 'Other',
} as const;

export const primaryNeedsZhHant = {
  [PrimaryNeeds.foodAllergies]: '食物過敏',
  [PrimaryNeeds.foodRestrictions]: '食物限制',
  [PrimaryNeeds.medicineAllergies]: '藥物過敏',
  [PrimaryNeeds.medicalConditions]: '醫療條件',
  [PrimaryNeeds.phobias]: '恐懼症',
  [PrimaryNeeds.other]: '其他',
} as const;

export enum FoodAllergies  {
  peanuts,
  hazelnuts,
  nuts,
  shellfish,
}

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
