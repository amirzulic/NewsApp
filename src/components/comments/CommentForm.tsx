import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { postComment } from '../../service/CommentService';
import { useNavigate } from 'react-router-dom';

interface Props {
  report_id: string | undefined;
}
function CommentForm(props: Props) {
  let navigate = useNavigate();

  const [comment, setComment] = useState('');
  function handleComment(e) {
    setComment(e.target.value);
  }

  const createComment = () => {
    let sendComment = {
      //comment_id: 10,
      comment: comment,
      date: new Date().toDateString(),
      report_id: props.report_id
    };
    postComment(sendComment)
      .then((res) => {
        alert(res.data.message);
        navigate(0);
      })
      .catch((err) => {
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
    </div>
  );
}

export default CommentForm;
