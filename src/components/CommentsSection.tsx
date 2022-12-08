import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

function CommentsSection(props) {
    return(
        <div>
            {!props.showComments ?
                <Button sx={{backgroundColor: "#e8d7a7", color: 'text.secondary', borderRadius: 0}}
                        onClick={() => props.setShowComments(true)}>
                    COMMENTS
                </Button> :
                <Button sx={{backgroundColor: "#e8d7a7", color: 'text.secondary', borderRadius: 0}}
                        onClick={() => props.setShowComments(false)}>
                    HIDE COMMENTS
                </Button>
            }
            {props.showComments ?
                <Box>
                    <CommentForm/>
                </Box> : null
            }
            {props.showComments ? props.names.map((name, key) => (
                    <Box key={key}>
                        <br/>
                        <Comment name = {name}/>
                    </Box>
                ))
                : null
            }
        </div>
    );
}

export default CommentsSection;