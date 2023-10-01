'use client';
import LanguagePicker from '@/components/LanguagePicker';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  LanguageCodes,
  PrimaryNeeds,
  foodAllergies,
  foodRestrictions,
  medicalConditions,
  medicineAllergies,
  phobias,
} from '@/const';
import PrimaryNeedsCheckboxes from '@/components/PrimaryNeedsCheckboxes';
import { useState } from 'react';
import AllergySelector from '@/components/AllergySelector';

export default function Home() {
  const [primaryLanguage, setPrimaryLanguage] = useState<
    keyof typeof LanguageCodes | ''
  >('');
  const [secondaryLanguage, setSecondaryLanguage] = useState('');
  const [primaryNeeds, setPrimaryNeeds] = useState<
    (keyof typeof PrimaryNeeds)[]
  >([]);
  const [childAllergies, setChildAllergies] = useState<{
    foodAllergies: (keyof typeof foodAllergies)[];
    foodRestrictions: (keyof typeof foodRestrictions)[];
    medicineAllergies: (keyof typeof medicineAllergies)[];
    medicalConditions: (keyof typeof medicalConditions)[];
    phobias: (keyof typeof phobias)[];
  }>({
    foodAllergies: [],
    foodRestrictions: [],
    medicineAllergies: [],
    medicalConditions: [],
    phobias: [],
  });

  const handlePrimaryNeedsChanged = (
    primaryNeeds: (keyof typeof PrimaryNeeds)[]
  ) => {
    setPrimaryNeeds(primaryNeeds);
  };

  const handleAllergiesChanged = ({
    selectedFoodAllergies,
    selectedFoodRestrictions,
    selectedMedicineAllergies,
    selectedMedicalConditions,
    selectedPhobias,
  }: {
    selectedFoodAllergies: (keyof typeof foodAllergies)[];
    selectedFoodRestrictions: (keyof typeof foodRestrictions)[];
    selectedMedicineAllergies: (keyof typeof medicineAllergies)[];
    selectedMedicalConditions: (keyof typeof medicalConditions)[];
    selectedPhobias: (keyof typeof phobias)[];
  }) => {
    setChildAllergies({
      foodAllergies: selectedFoodAllergies,
      foodRestrictions: selectedFoodRestrictions,
      medicineAllergies: selectedMedicineAllergies,
      medicalConditions: selectedMedicalConditions,
      phobias: selectedPhobias,
    });
  };

  return (
    <main className="min-h-screen p-24">
      <Box className="flex flex-row justify-between">
        <Box sx={{ width: '50%' }}>
          <Typography variant="h6" gutterBottom>
            I speak...
          </Typography>
          <LanguagePicker
            onChange={(val) => setPrimaryLanguage(val || '')}
            id="primary-language"
            label="Native Language"
          />
        </Box>
        <Box sx={{ width: '50%' }}>
          <Typography variant="h6" gutterBottom>
            I am traveling somewhere that speaks...
          </Typography>
          <LanguagePicker
            onChange={(val) => setSecondaryLanguage(val || '')}
            id="secondary-language"
            label="Foreign Language"
          />
        </Box>
      </Box>
      {primaryLanguage && secondaryLanguage && (
        <Box className="flex flex-row justify-between">
          <Box sx={{ width: '100%', mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              I have the following needs I need to communicate:
            </Typography>
            <PrimaryNeedsCheckboxes
              langCode={primaryLanguage}
              handlePrimaryNeedsChanged={handlePrimaryNeedsChanged}
            />
          </Box>
        </Box>
      )}

      {primaryLanguage && secondaryLanguage && primaryNeeds && (
        <Box className="flex flex-row justify-between">
          <Box sx={{ width: '100%', mt: 3 }}>
            <AllergySelector
              onChange={handleAllergiesChanged}
              id="child-allergy-selector"
              langCode={primaryLanguage}
              primaryNeeds={primaryNeeds}
            />
          </Box>
        </Box>
      )}
    </main>
  );
}
