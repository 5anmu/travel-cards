'use client'
import LanguagePicker from '@/components/LanguagePicker';
import { LanguagesEnglish } from '@/const';
import { useState } from 'react';

export default function Home() {
  const [primaryLanguage, setPrimaryLanguage] = useState('');
  const [secondaryLanguage, setSecondaryLanguage] = useState('');
  function handleChange(val: keyof typeof LanguagesEnglish | undefined) {
  }
  return (
    <main className="flex min-h-screen flex-row justify-between p-24">
      <section>
        <LanguagePicker onChange={(val => setPrimaryLanguage(val || '') )} id="primary-language" label="Native Language" />
      </section>
      <section>
        <LanguagePicker onChange={(val => setSecondaryLanguage(val || ''))} id="secondary-language" label="Foreign Language" />
      </section>
    </main>
  )
}
