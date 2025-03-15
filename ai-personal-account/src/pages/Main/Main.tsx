import { Container, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface iMain {}

export default function Main({}: iMain) {
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        {t('welcome')}, MUI!
      </Typography>
      <Container sx={{ gap: 2, display: 'flex',alignItems: 'center', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => changeLanguage('en')}
        >
          English
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => changeLanguage('ru')}
        >
          Русский
        </Button>
      </Container>
    </Container>
  );
}
