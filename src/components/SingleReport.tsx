import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {text} from "../data/Data";
import CommentsSection from "./CommentsSection";

function SingleReport() {
    const names = ["Commenter1", "Commenter2", "James Reed", "Greg Oden"]

    const [showComments, setShowComments] = useState(false);

    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image="https://www.thediaryofanomad.com/wp-content/w3-webp/uploads/2020/04/london-photo-spots-big-ben-1.jpgw3.webp"
                                    alt="image"
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <h1>
                                        Title
                                    </h1>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {text}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <p>Author - Name</p>
                                </Typography>
                                <CommentsSection showComments = {showComments} setShowComments = {setShowComments} names = {names}/>
                                <hr/>
                                <Typography variant="body2" color="text.secondary">
                                    <small>Copyright - NewsApp 2022</small>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default SingleReport;
