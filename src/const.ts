// https://en.wikipedia.org/wiki/IETF_language_tag#ISO_15924,_ISO/IEC_10646_and_Unicode

export enum LanguagesEnglish {
  enUS = 'enUs',
  zhHant = 'zhHant',
};
export const languageLabelMap = {
  [LanguagesEnglish.enUS]: "English",
  [LanguagesEnglish.zhHant]: 'Mandarin, Traditional'
} as const;
