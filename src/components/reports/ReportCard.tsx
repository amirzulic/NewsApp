import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Report } from '../types/Types';
interface Props {
  report: Report;
}
function ReportCard(props: Props) {
  const navigate = useNavigate();

  function handleNavigate(id) {
    navigate('/report/' + id);
  }

  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia component="img" height="150" image={props.report.photo} alt="image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.report.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.report.headline_text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                handleNavigate(props.report.report_id);
              }}>
              Learn More
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ReportCard;
