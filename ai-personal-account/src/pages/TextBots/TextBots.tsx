import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import StatsTab from './ui/tabs/stats-tab.ui';
import ActivityTab from './ui/tabs/activity-tab.ui';

interface iTextBots {}

export default function TextBots({}: iTextBots) {
  const { t } = useTranslation();
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label={t('Activity')} value="1" />
              <Tab label={t('Stats')} value="2" />
              <Tab label={t('Knowledge Base')} value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><ActivityTab/></TabPanel>
          <TabPanel value="2"><StatsTab/></TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
