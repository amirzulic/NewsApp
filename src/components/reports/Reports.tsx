import React, { useCallback, useEffect, useState } from 'react';
import ReportCard from './ReportCard';
import Grid from '@mui/material/Grid';
import { getAllReports } from '../../service/ReportService';

function Reports() {
  const [reports, setReports] = useState([]);

  function handleGetAllReports(controller) {
    getAllReports(controller)
      .then((res) => {
        setReports(res.data.reports);
      })
      .catch((err) => {
        console.log(err);
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
    <Grid container sx={{ flexGrow: 1 }} spacing={2}>
      {reports.map((item, key) => (
        <Grid item xs={12} md={4} key={key}>
          <ReportCard report={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Reports;
