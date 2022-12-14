import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { postComment } from '../../service/CommentService';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

interface Props {
  report_id: string | undefined;
}

function CommentForm(props: Props) {
  let navigate = useNavigate();

  const [comment, setComment] = useState('');
  const [hasFailed, setHasFailed] = useState(false);

  function handleComment(e) {
    setComment(e.target.value);
  }

  const createComment = () => {
    let sendComment = {
      comment: comment,
      date: new Date().toDateString(),
      report_id: props.report_id
    };
    postComment(sendComment)
      .then(() => {
        navigate(0);
      })
      .catch((err) => {
        setHasFailed(true);
        console.log(err);
      });
  };

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
              onChange={(event) => {
                handleComment(event);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Button
              onClick={createComment}
              sx={{ backgroundColor: '#e8d7a7', color: 'text.secondary', borderRadius: 0 }}>
              COMMENT
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={hasFailed}
        autoHideDuration={5000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          There has been a problem!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CommentForm;
