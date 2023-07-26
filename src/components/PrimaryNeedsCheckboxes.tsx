import Checkboxes from '@/components/Checkboxes';
import {primaryNeedsByLanguage, LanguageCodes, primaryNeedLabels } from '@/const';

export type PrimaryNeedsCheckboxesProps = {
  langCode: keyof typeof LanguageCodes,
}
export default function PrimaryNeedsCheckboxes({langCode}: PrimaryNeedsCheckboxesProps) {
  const primaryNeeds = primaryNeedsByLanguage[langCode];
  const checkboxItems = (Object.keys(primaryNeeds) as (keyof primaryNeedLabels)[]).map((needKey: keyof primaryNeedLabels) => {
    return {
      label: primaryNeeds[needKey],
      code: needKey,
    };
  });
  return (
    <Checkboxes items={checkboxItems} formLabel="Needs" />
  )
}
