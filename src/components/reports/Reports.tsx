import React, { useCallback, useEffect, useState } from 'react';
import ReportCard from './ReportCard';
import Grid from '@mui/material/Grid';
import { getAllReports } from '../../service/ReportService';
import SomethingWentWrong from '../error/SomethingWentWrong';

function Reports() {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState('');

  function handleGetAllReports(controller) {
    getAllReports(controller)
      .then((res) => {
        setReports(res.data.reports);
      })
      .catch((err) => {
        {
          if (err.code === 'ERR_CANCELED') {
            console.log(err);
          } else {
            console.log(err);
            setError(true);
            setErrorCode(err.code);
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
      {!error ? (
        <Grid container sx={{ flexGrow: 1 }} spacing={2}>
          {reports.map((item, key) => (
            <Grid item xs={12} md={4} key={key}>
              <ReportCard report={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <SomethingWentWrong errors={errorCode} />
      )}
    </div>
  );
}

export default Reports;
