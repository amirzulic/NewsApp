import React, { useCallback, useEffect, useState } from 'react';
import ReportCard from './ReportCard';
import Grid from '@mui/material/Grid';
import { getAllReports } from '../../service/ReportService';
import SomethingWentWrong from '../error/SomethingWentWrong';

interface Props {
  // eslint-disable-next-line no-unused-vars
  getLoaded: (b: boolean) => void;
}
function Reports(props: Props) {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState('');

  function handleGetAllReports(controller) {
    getAllReports(controller)
      .then((res) => {
        setReports(res.data.reports);
        props.getLoaded(true);
      })
      .catch((err) => {
        {
          if (err.code === 'ERR_CANCELED') {
            console.log(err);
            props.getLoaded(false);
          } else {
            console.log(err);
            setError(true);
            setErrorCode(err.code);
            props.getLoaded(true);
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
