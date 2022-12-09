import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CommentForm from './CommentForm';
import Comment from './Comment';

interface Props {
  names: Array<string>;
}
function CommentsSection(props: Props) {
  const [showComments, setShowComments] = useState(false);
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
          <CommentForm />
        </Box>
      )}
      {showComments &&
        props.names.map((name, key) => (
          <Box key={key}>
            <br />
            <Comment name={name} />
          </Box>
        ))}
    </div>
  );
}

export default CommentsSection;