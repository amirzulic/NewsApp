import React from 'react';
import Grid from '@mui/material/Grid';
import { SingleComment } from '../types/Types';

interface Props {
  comment: SingleComment;
}
function Comment(props: Props) {
  return (
    <div>
      <Grid container sx={{ boxShadow: 1, border: 1, pl: 1 }} className="tabHover">
        <Grid item xs={12} sm={12} md={2}>
          <p>
            <i>Anonymous:</i>
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <p>
            <b>{props.comment.comment}</b>
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <p>Posted on {props.comment.date}</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Comment;
