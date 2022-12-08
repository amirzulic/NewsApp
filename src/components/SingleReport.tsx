import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function SingleReport() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis quis ex vel mattis. " +
        "Etiam eu augue commodo, efficitur justo at, egestas turpis. Nulla congue, magna ut dictum lacinia, massa quam " +
        "malesuada neque, ut varius lectus augue ac enim. Sed tincidunt turpis id lacus blandit, id rutrum nibh iaculis. " +
        "In urna mi, feugiat id eros at, euismod vulputate sem. Cras vitae elit vel lacus posuere varius. " +
        "Phasellus pretium rutrum massa, vitae facilisis dui fringilla ut. Aenean mattis justo in tortor semper venenatis. " +
        "Phasellus laoreet nibh vel ligula semper, sit amet elementum dui rutrum.\n" +
        "\n" +
        "Nullam in gravida urna. Praesent vel purus ipsum. Fusce elementum, odio quis convallis varius, ipsum dui efficitur nulla," +
        "et semper urna est nec urna. Donec a commodo odio. Etiam orci turpis, dapibus vitae dolor non, aliquet pretium massa." +
        " Morbi lobortis pretium sem, vel pellentesque nibh suscipit vel. Nullam efficitur justo sed congue ornare. " +
        "Duis auctor sodales risus, at posuere elit iaculis a. Aenean vel nibh magna.";

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
                                {!showComments ?
                                    <Button sx={{backgroundColor: "#e8d7a7", color: 'text.secondary', borderRadius: 0}}
                                            onClick={() => setShowComments(true)}>
                                        COMMENTS
                                    </Button> :
                                    <Button sx={{backgroundColor: "#e8d7a7", color: 'text.secondary', borderRadius: 0}}
                                            onClick={() => setShowComments(false)}>
                                        HIDE COMMENTS
                                    </Button>
                                }
                                {showComments ?
                                    <Box>
                                        <CommentForm/>
                                    </Box> : null
                                }
                                {showComments ? names.map((name, key) => (
                                        <Box key={key}>
                                            <br/>
                                            <CommentList name = {name}/>
                                        </Box>
                                    ))
                                     : null
                                }
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
