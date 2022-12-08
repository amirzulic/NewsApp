import React from 'react';
import ReportCard from "./ReportCard";
import Grid from '@mui/material/Grid';
import {PAGE_REPORTS} from "../../data/Data";

function Reports() {
    return (
        <Grid container sx={{flexGrow: 1}} spacing={2}>
            {PAGE_REPORTS.map((item, key) => (
                <Grid item xs={12} md={4} key={key}>
                    <ReportCard reports={item}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default Reports;
