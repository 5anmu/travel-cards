import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { LanguagesEnglish } from '@/const';
import { useState } from 'react';

export type LanguagePickerProps = {
  onChange: (langCode: keyof typeof LanguagesEnglish | undefined) => void,
  id: string,
  label: string,
}
type pickerOption = {
  code: keyof typeof LanguagesEnglish,
  label: LanguagesEnglish,
};

function generateOption(key: keyof typeof LanguagesEnglish): pickerOption {
  return {
      code: key,
      label: LanguagesEnglish[key],
  }
}
function isOptionEqualToValue(option: pickerOption, value: pickerOption) {
  return option.code === value.code;
}
export default function LanguagePicker({onChange, id, label}: LanguagePickerProps) {
  const [language, setLanguage] = useState(null as any);
  const options = (Object.keys(LanguagesEnglish) as (keyof typeof LanguagesEnglish)[]).map(generateOption);
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
