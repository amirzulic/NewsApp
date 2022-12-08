import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {SINGLE_REPORT_TEXT}  from "../../data/Data";
import CommentsSection from "../comments/CommentsSection";
import {useParams} from "react-router-dom";
import {PAGE_REPORTS} from "../../data/Data";

function SingleReport() {
    const names = ["Commenter1", "Commenter2", "James Reed", "Greg Oden"]

    const { id } = useParams();

    const [showComments, setShowComments] = useState(false);

    const report = PAGE_REPORTS.find(obj => {
        return obj.id === parseInt(id!);
    });

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
                                        {report?.title}
                                    </h1>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {SINGLE_REPORT_TEXT}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <p>Author - {report?.author}</p>
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
