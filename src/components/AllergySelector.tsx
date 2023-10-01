import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
  foodAllergies,
  foodAllergiesByLanguage,
  foodRestrictions,
  foodRestrictionsByLanguage,
  LanguageCodes,
  medicalConditions,
  medicalConditionsByLanguage,
  medicineAllergies,
  medicineAllergiesByLanguage,
  phobias,
  phobiasByLanguage,
  PrimaryNeeds,
  primaryNeedsByLanguage,
} from '@/const';

export type AllergySelectorProps = {
  onChange: (selectedAllergies: {
    selectedFoodAllergies: (keyof typeof foodAllergies)[];
    selectedFoodRestrictions: (keyof typeof foodRestrictions)[];
    selectedMedicineAllergies: (keyof typeof medicineAllergies)[];
    selectedMedicalConditions: (keyof typeof medicalConditions)[];
    selectedPhobias: (keyof typeof phobias)[];
  }) => void;
  id: string;
  langCode: keyof typeof LanguageCodes;
  primaryNeeds: (keyof typeof PrimaryNeeds)[];
};

export default function AllergySelector({
  onChange,
  id,
  langCode,
  primaryNeeds,
}: AllergySelectorProps) {
  const [selectedFoodAllergies, setSelectedFoodAllergies] = useState<
    { code: string; label: string }[]
  >([]);
  const [selectedFoodRestrictions, setSelectedFoodRestrictions] = useState<
    { code: string; label: string }[]
  >([]);
  const [selectedMedicineAllergies, setSelectedMedicineAllergies] = useState<
    { code: string; label: string }[]
  >([]);
  const [selectedMedicalConditions, setSelectedMedicalConditions] = useState<
    { code: string; label: string }[]
  >([]);
  const [selectedPhobias, setSelectedPhobias] = useState<
    { code: string; label: string }[]
  >([]);

  const selectedAllergies = {
    selectedFoodAllergies: selectedFoodAllergies.map(
      (option) => option.code
    ) as (keyof typeof foodAllergies)[],
    selectedFoodRestrictions: selectedFoodRestrictions.map(
      (option) => option.code
    ) as (keyof typeof foodRestrictions)[],
    selectedMedicineAllergies: selectedMedicineAllergies.map(
      (option) => option.code
    ) as (keyof typeof medicineAllergies)[],
    selectedMedicalConditions: selectedMedicalConditions.map(
      (option) => option.code
    ) as (keyof typeof medicalConditions)[],
    selectedPhobias: selectedPhobias.map(
      (option) => option.code
    ) as (keyof typeof phobias)[],
  };

  const needsLabel = primaryNeedsByLanguage[langCode];

  const getAutocompleteSelector = (
    text: string,
    allergyType: string,
    label: string,
    options: { [key: string]: string },
    selectedValues: { code: string; label: string }[],
    setSelectedValues: React.Dispatch<
      React.SetStateAction<{ code: string; label: string }[]>
    >
  ) => (
    <div key={allergyType}>
      <Typography variant="h6" gutterBottom>
        {text}
      </Typography>
      <Autocomplete
        multiple
        id={`${id}-${allergyType}`}
        options={Object.keys(options).map((code) => ({
          label: options[code as keyof typeof options],
          code,
        }))}
        getOptionLabel={(option) => option.label}
        value={selectedValues}
        onChange={(_, newValue) => {
          setSelectedValues(newValue);
          onChange(selectedAllergies);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={label}
            placeholder="Type your needs"
          />
        )}
      />
    </div>
  );

  return (
    <div>
      {primaryNeeds.map((need) => (
        <div key={need} style={{ marginBottom: '20px' }}>
          {need === 'foodAllergies' &&
            getAutocompleteSelector(
              'I have the following ' + needsLabel.foodAllergies + ':',
              need,
              needsLabel.foodAllergies,
              foodAllergiesByLanguage[langCode],
              selectedFoodAllergies,
              setSelectedFoodAllergies
            )}
          {need === 'foodRestrictions' &&
            getAutocompleteSelector(
              'I have the following ' + needsLabel.foodRestrictions + ':',
              need,
              needsLabel.foodRestrictions,
              foodRestrictionsByLanguage[langCode],
              selectedFoodRestrictions,
              setSelectedFoodRestrictions
            )}
          {need === 'medicineAllergies' &&
            getAutocompleteSelector(
              'I have the following ' + needsLabel.medicineAllergies + ':',
              need,
              needsLabel.medicineAllergies,
              medicineAllergiesByLanguage[langCode],
              selectedMedicineAllergies,
              setSelectedMedicineAllergies
            )}
          {need === 'medicalConditions' &&
            getAutocompleteSelector(
              'I have the following ' + needsLabel.medicalConditions + ':',
              need,
              needsLabel.medicalConditions,
              medicalConditionsByLanguage[langCode],
              selectedMedicalConditions,
              setSelectedMedicalConditions
            )}
          {need === 'phobias' &&
            getAutocompleteSelector(
              'I have the following ' + needsLabel.phobias + ':',
              need,
              needsLabel.phobias,
              phobiasByLanguage[langCode],
              selectedPhobias,
              setSelectedPhobias
            )}
        </div>
      ))}
    </div>
  );
}
