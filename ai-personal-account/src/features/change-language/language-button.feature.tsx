import { ButtonGroup, Button } from '@mui/material';
import { theme } from '../../utils/theme/theme';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {};

export default function LanguageButton({}: Props) {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const changeLanguage = (lng: string) => {
    setCurrentLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <ButtonGroup
      orientation="vertical"
      variant="text"
      aria-label="Basic button group"
    >
      <Button
        size="small"
        onClick={() => changeLanguage('en')}
        sx={{
          p: 0,
          fontWeight: currentLanguage === 'en' ? 'bold' : 'normal',
          color:
            currentLanguage === 'en' ? theme.palette.primary.main : 'inherit',
        }}
      >
        En
      </Button>
      <Button
        size="small"
        onClick={() => changeLanguage('ru')}
        sx={{
          fontWeight: currentLanguage === 'ru' ? 'bold' : 'normal',
          color:
            currentLanguage === 'ru' ? theme.palette.primary.main : 'inherit',
        }}
      >
        RU
      </Button>
    </ButtonGroup>
  );
}
