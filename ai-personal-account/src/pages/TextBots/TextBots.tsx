import {
  Box,
  Paper,
  styled,
  Tabs,
  tabsClasses,
  Theme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import ActivityTab from './ui/tabs/activity-tab.ui';
import StatsTab from './ui/tabs/stats-tab.ui';
import KnowledgeTab from './ui/tabs/knowledge-tab.ui';
import HistoryIcon from '@mui/icons-material/History';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

export default function TextBots() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );
  const { t } = useTranslation();
  const location = useLocation();

  const [value, setValue] = useState(() => {
    const query = new URLSearchParams(location.search);
    const tab = query.get('tab');
    return tab ? String(tab) : 'Activity';
  });
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const tab = query.get('tab') || 'Activity';
    setValue(String(tab));
  }, [location.search]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    const query = new URLSearchParams(location.search);
    query.set('tab', newValue.toString());
    navigate({ search: query.toString() });
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
            <Tab
              iconPosition={isMobile ? 'top' : 'start'}
              icon={<HistoryIcon />}
              label={t('tabs.Activity')}
              value="Activity"
              sx={{
                minHeight: 'auto',
              }}
            />
            <Tab
              iconPosition={isMobile ? 'top' : 'start'}
              icon={<AssessmentOutlinedIcon />}
              label={t('tabs.Stats')}
              value="Stats"
              sx={{
                minHeight: 'auto',
              }}
            />
            <Tab
              iconPosition={isMobile ? 'top' : 'start'}
              icon={<StorageOutlinedIcon />}
              label={t('tabs.Knowledge')}
              value="Knowledge"
              sx={{
                minHeight: 'auto', // Убираем фиксированную высоту
              }}
            />
          </Tabs>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            p: { xs: 1, sm: 2, md: 4 },
            overflow: 'hidden',
          }}
        >
          <Paper
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              p: 1,
            }}
          >
            {value === 'Activity' ? <ActivityTab /> : null}
            {value === 'Stats' ? <StatsTab /> : null}
            {value === 'Knowledge' ? <KnowledgeTab /> : null}
          </Paper>
        </Box>
      </Box>
    </>
  );
}
