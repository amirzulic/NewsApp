import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from "@mui/material";
import {useNavigate} from "react-router-dom";

function ReportCard(props) {
    const navigate = useNavigate();

    function handleNavigate(id) {
        navigate("/report/"+id);
    }

    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.thediaryofanomad.com/wp-content/w3-webp/uploads/2020/04/london-photo-spots-big-ben-1.jpgw3.webp"
                        alt="image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.reports.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => {
                            handleNavigate(props.reports.id)
                        }}>Learn More</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default ReportCard;
