import React from 'react';
import Grid from '@mui/material/Grid';

/*interface Props {
  name: string;
}*/
function Comment() {
  const date = new Date().toDateString();
  return (
    <div>
      <Grid container sx={{ boxShadow: 1, border: 1, pl: 1 }} className="tabHover">
        <Grid item xs={12} sm={12} md={10}>
          <p>This is the comment text here!</p>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <p>{date}</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Comment;
