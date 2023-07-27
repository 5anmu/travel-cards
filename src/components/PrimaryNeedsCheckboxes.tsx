import Checkboxes, {CheckboxState } from '@/components/Checkboxes';
import {primaryNeedsByLanguage, LanguageCodes, primaryNeedLabels, PrimaryNeeds } from '@/const';

export type PrimaryNeedsCheckboxesProps = {
  langCode: keyof typeof LanguageCodes,
  handlePrimaryNeedsChanged: (selected: (keyof typeof PrimaryNeeds)[]) => void,
}
export default function PrimaryNeedsCheckboxes({langCode, handlePrimaryNeedsChanged}: PrimaryNeedsCheckboxesProps) {
  const primaryNeeds = primaryNeedsByLanguage[langCode];
  const checkboxItems = (Object.keys(primaryNeeds) as (keyof primaryNeedLabels)[]).map((needKey: keyof primaryNeedLabels) => {
    return {
      label: primaryNeeds[needKey],
      code: needKey,
    };
  });
  return (
    <Checkboxes items={checkboxItems} formLabel="Needs" handleStateChange={handlePrimaryNeedsChanged} />
  )
}
