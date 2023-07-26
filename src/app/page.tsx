'use client'
import LanguagePicker from '@/components/LanguagePicker';
import { LanguagesEnglish } from '@/const';
import  Typography  from '@mui/material/Typography';
import  Box from '@mui/material/Box';
import { useState } from 'react';
import Checkboxes from '@/components/Checkboxes';

export default function Home() {
  const [primaryLanguage, setPrimaryLanguage] = useState('');
  const [secondaryLanguage, setSecondaryLanguage] = useState('');
  return (
    <main className="min-h-screen p-24">
      <Box className="flex flex-row justify-between">
        <Box sx={{width: '50%' }}>
          <Typography variant="h6" gutterBottom>I speak...</Typography>
          <LanguagePicker onChange={(val => setPrimaryLanguage(val || '') )} id="primary-language" label="Native Language" />
        </Box>
        <Box sx={{ width: '50%' }}>
          <Typography variant="h6" gutterBottom>I'm traveling somewhere that speaks...</Typography>
          <LanguagePicker onChange={(val => setSecondaryLanguage(val || ''))} id="secondary-language" label="Foreign Language" />
        </Box>
      </Box>
      {primaryLanguage && secondaryLanguage && <Box className="flex flex-row justify-between">
        <Box sx={{ width: '100%', mt: 3}} >
          <Typography variant="h6" gutterBottom>I have the following needs I need to communicate:</Typography>
        </Box>
      </Box>}
    </main>
  )
}
