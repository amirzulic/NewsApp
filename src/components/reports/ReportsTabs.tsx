import React from 'react';
import Reports from './Reports';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';

function ReportsTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" color="primary">
              <Tab label="Main Page" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Reports />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default ReportsTabs;
