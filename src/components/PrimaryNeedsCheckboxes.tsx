import Checkboxes from '@/components/Checkboxes';
import {LanguagesEnglish, primaryNeedsEnUS, primaryNeedsZhHant } from '@/const';

export type PrimaryNeedsCheckboxesProps = {
  langCode: LanguagesEnglish,
}
export default function PrimaryNeedsCheckboxes({langCode}: PrimaryNeedsCheckboxesProps) {
  let primaryNeeds: typeof primaryNeedsEnUS | typeof primaryNeedsZhHant;
  switch (langCode){
      case LanguagesEnglish.enUS:
      primaryNeeds = primaryNeedsEnUS;
      case LanguagesEnglish.zhHant:
      primaryNeeds= primaryNeedsZhHant;
  }
  const checkboxItems = Object.keys(primaryNeeds).map((needKey: keyof typeof primaryNeedsEnUS | keyof typeof primaryNeedsZhHant) => {
    return {
      label: primaryNeeds[needKey],
      code: needKey,
    };
  });
    /* const checkboxItems = [
*     { label: 'Test', code: 'test' },
*     { label: 'Test2', code: 'test2' },
*     { label: 'Test3', code: 'test3' },
* ]
 */
  return (
    <Checkboxes items={checkboxItems} formLabel="Needs" />
  )
}
