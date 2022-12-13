import React from 'react';
import ReportCard from './ReportCard';
import Grid from '@mui/material/Grid';
import SomethingWentWrong from '../error/SomethingWentWrong';
import { Report } from '../types/Types';

interface Props {
  error: boolean;
  errorCode: string;
  reports: Report[];
}
function Reports(props: Props) {
  return (
    <div>
      {!props.error ? (
        <Grid container sx={{ flexGrow: 1 }} spacing={2}>
          {props.reports.map((item, key) => (
            <Grid item xs={12} md={4} key={key}>
              <ReportCard report={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <SomethingWentWrong errors={props.errorCode} />
      )}
    </div>
  );
}

export default Reports;
