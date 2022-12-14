import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { getAllComments } from '../../service/CommentService';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ShareIcon from '@mui/icons-material/Share';
import Grid from '@mui/material/Grid';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  ViberIcon,
  ViberShareButton
} from 'react-share';

interface Props {
  id: string | undefined;
}

function CommentsSection(props: Props) {
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(1);
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
      <Button
        onClick={() => {
          setShowShare(showShare + 1);
        }}>
        <ShareIcon /> Share article
      </Button>
      {showShare % 2 === 0 && (
        <Grid container sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={3} lg={1}>
            <Box sx={{ textAlign: 'start' }}>
              <br />
              <FacebookShareButton url={'https://trello.com/b/jzt85IOO/amir'}>
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={1}>
            <Box sx={{ textAlign: 'start' }}>
              <br />
              <LinkedinShareButton url={'https://trello.com/b/jzt85IOO/amir'}>
                <LinkedinIcon size={40} round={true} />
              </LinkedinShareButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={1}>
            <Box sx={{ textAlign: 'start' }}>
              <br />
              <ViberShareButton url={'https://trello.com/b/jzt85IOO/amir'}>
                <ViberIcon size={40} round={true} />
              </ViberShareButton>
            </Box>
          </Grid>
        </Grid>
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
            {comments.length !== 0 ? (
              comments.map((item, key) => (
                <div key={key}>
                  <Comment comment={item} />
                  <br />
                </div>
              ))
            ) : (
              <div>There is no comments on this article. Wanna be the first to comment?</div>
            )}
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
