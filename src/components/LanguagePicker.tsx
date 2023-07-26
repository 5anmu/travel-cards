import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { LanguageCodes, languageLabelMapEnglish } from '@/const';
import { useState } from 'react';

export type LanguagePickerProps = {
  onChange: (langCode: keyof typeof LanguageCodes | undefined) => void,
  id: string,
  label: string,
}
type pickerOption = {
  code: keyof typeof LanguageCodes,
  label: typeof languageLabelMapEnglish[ keyof typeof LanguageCodes],
};

function generateOption(key: keyof typeof LanguageCodes): pickerOption {
  return {
      code: key,
      label: languageLabelMapEnglish[key],
  }
}
function isOptionEqualToValue(option: pickerOption, value: pickerOption) {
  return option.code === value.code;
}
export default function LanguagePicker({onChange, id, label}: LanguagePickerProps) {
  const [language, setLanguage] = useState(null as any);
  const options = Object.keys(LanguageCodes).map(language => generateOption(language as keyof typeof LanguageCodes));
  return (
  <Autocomplete
    value={language}
    options={options}
    onChange={(event: any, newValue: pickerOption | null) => {
      setLanguage(newValue);
      onChange(newValue?.code);
    }}
    id={id}
    renderInput={(params) => <TextField {...params} label={label} />}
    renderOption={(props, option) => {
      return (
        <li {...props} key={option.code}>
          {option.label}
        </li>
      )
    }}
    renderTags={(tagValue, getTagProps) => {
      return tagValue.map((option, index) => (
        <Chip {...getTagProps({ index })} key={option.code} label={option.label} />
      ))
    }}
    isOptionEqualToValue={isOptionEqualToValue}
    sx={{width: 300}}
  />
  )
}
