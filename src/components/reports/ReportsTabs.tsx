import React, { useState } from 'react';
import Reports from './Reports';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import LinearProgress from '@mui/material/LinearProgress';

function ReportsTabs() {
  const [value, setValue] = useState('1');
  const [loaded, setLoaded] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function getLoaded(loaded: boolean) {
    console.log(loaded);
    setLoaded(loaded);
  }

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        {!loaded && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" color="primary">
              <Tab label="Main Page" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Reports getLoaded={getLoaded} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default ReportsTabs;
