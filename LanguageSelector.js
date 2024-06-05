import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('fr')}>French</Button>
    </div>
  );
};

export default LanguageSelector;
