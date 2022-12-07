import React from 'react';
import Cards from "./Cards";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function News() {
    const titles = ["Report1", "Report2", "Report3", "Report4", "Report5"];
    return (
        <Grid container sx={{flexGrow: 1}} spacing={2}>
            {titles.map((item, key) => (
                <Grid item xs={12} md={4}>
                    <Cards title={item}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default News;
