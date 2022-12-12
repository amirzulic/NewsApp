import React, { useEffect, useState } from 'react';
import ReportCard from './ReportCard';
import Grid from '@mui/material/Grid';
import { getAllReports } from '../../service/ReportService';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getAllReports()
      .then((res) => {
        setReports(res.data.reports);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
