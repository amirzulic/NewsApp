import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { getAllComments } from '../../service/CommentService';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface Props {
  id: string | undefined;
}
function CommentsSection(props: Props) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

  function handleGetAllComments(controller) {
    getAllComments(props.id, controller)
      .then((res) => {
        setComments(res.data.comments);
      })
      .catch((err) => {
        if (err.code === 'ERR_CANCELED') {
          console.log(err);
        } else {
          console.log(err);
          setError(true);
        }
      });
  }

  const getComments = useCallback(async (controller) => {
    handleGetAllComments(controller);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    getComments(controller);

    return () => {
      controller.abort();
    };
  }, [getComments]);

  return (
    <div>
      {!showComments ? (
        <Button
          sx={{ backgroundColor: '#e8d7a7', color: 'text.secondary', borderRadius: 0 }}
          onClick={() => setShowComments(true)}>
          COMMENTS
        </Button>
      ) : (
        <Button
          sx={{ backgroundColor: '#e8d7a7', color: 'text.secondary', borderRadius: 0 }}
          onClick={() => setShowComments(false)}>
          HIDE COMMENTS
        </Button>
      )}
      {showComments && (
        <Box>
          <CommentForm report_id={props.id} />
        </Box>
      )}
      {showComments && (
        <div>
          <br />
          <Box
            sx={{
              borderRadius: 1,
              border: 1,
              borderColor: '#bfbeba',
              color: 'text.secondary',
              backgroundColor: 'primary.light'
            }}>
            {comments.map((item, key) => (
              <div key={key}>
                <Comment comment={item} />
                <br />
              </div>
            ))}
          </Box>
          {error && (
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={error}>
              <Alert severity="error" sx={{ width: '100%' }}>
                There has been a problem with loading the data!
              </Alert>
            </Snackbar>
          )}
          <br />
        </div>
      )}
    </div>
  );
}

export default CommentsSection;
