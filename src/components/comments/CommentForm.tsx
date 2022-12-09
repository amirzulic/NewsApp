import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function CommentForm() {
  function handleComment() {
    alert('Clicked to comment');
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField
              id="outlined-size-small"
              label="Enter your comment here"
              variant="outlined"
              size="small"
              sx={{ width: 1 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Button
              onClick={handleComment}
              sx={{ backgroundColor: '#e8d7a7', color: 'text.secondary', borderRadius: 0 }}>
              COMMENT
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CommentForm;
