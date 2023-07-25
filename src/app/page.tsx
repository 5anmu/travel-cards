'use client'
import LanguagePicker from '@/components/LanguagePicker';
import { LanguagesEnglish } from '@/const';
import  Typography  from '@mui/material/Typography';
import  Box from '@mui/material/Box';
import { useState } from 'react';

export default function Home() {
  const [primaryLanguage, setPrimaryLanguage] = useState('');
  const [secondaryLanguage, setSecondaryLanguage] = useState('');
  return (
    <main className="flex min-h-screen flex-row justify-between p-24">
      <Box sx={{width: '50%' }}>
        <Typography variant="h6" gutterBottom>I speak...</Typography>
        <LanguagePicker onChange={(val => setPrimaryLanguage(val || '') )} id="primary-language" label="Native Language" />
      </Box>
      <Box sx={{ width: '50%' }}>
        <Typography variant="h6" gutterBottom>I'm traveling somewhere that speaks...</Typography>
        <LanguagePicker onChange={(val => setSecondaryLanguage(val || ''))} id="secondary-language" label="Foreign Language" />
      </Box>
    </main>
  )
}
