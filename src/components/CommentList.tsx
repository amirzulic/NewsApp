import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function CommentList(props) {
    const date = new Date().toDateString();
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={2}>
                    <Avatar alt={props.name} src="/static/images/avatar/1.jpg" />
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <p>{props.name}</p>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <p>This is the comment text here!</p>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <p>{date}</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default CommentList;