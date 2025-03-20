import { Box, Tabs, tabsClasses } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import ActivityTab from './ui/tabs/activity-tab.ui';
import StatsTab from './ui/tabs/stats-tab.ui';
import KnowledgeTab from './ui/tabs/knowledge-tab.ui';

interface iTextBots {}

export default function TextBots({}: iTextBots) {
  const { t } = useTranslation();
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            // justifyContent: { xs: 'center', sm: 'start' },
          }}
        >
          <Tabs
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
            }}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab value={1} label={t('tabs.Activity')} />
            <Tab value={2} label={t('tabs.Stats')} />
            <Tab value={3} label={t('tabs.Knowledge Base')} />
          </Tabs>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            p: { xs: 1, sm: 2, md: 4 },
          }}
        >
          {value === 1 ? <ActivityTab /> : null}
          {value === 2 ? <StatsTab /> : null}
          {value === 3 ? <KnowledgeTab /> : null}
        </Box>
      </Box>
    </>
  );
}
