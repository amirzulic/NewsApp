import React, { useCallback, useEffect, useState } from 'react';
import Reports from './Reports';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import LinearProgress from '@mui/material/LinearProgress';
import { getAllReports } from '../../service/ReportService';

function ReportsTabs() {
  const [value, setValue] = useState('1');
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleGetAllReports(controller) {
    getAllReports(controller)
      .then((res) => {
        setReports(res.data.reports);
        setIsLoading(false);
      })
      .catch((err) => {
        {
          if (err.code === 'ERR_CANCELED') {
            console.log(err);
            setIsLoading(true);
          } else {
            console.log(err);
            setError(true);
            setErrorCode(err.code);
            setIsLoading(false);
          }
        }
      });
  }

  const getReports = useCallback(async (controller) => {
    handleGetAllReports(controller);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    getReports(controller);

    return () => {
      controller.abort();
    };
  }, [getReports]);

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        {isLoading && (
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
            <Reports error={error} errorCode={errorCode} reports={reports} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default ReportsTabs;
