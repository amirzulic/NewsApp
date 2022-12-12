import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CommentsSection from '../comments/CommentsSection';
import { useParams } from 'react-router-dom';
import { getSingleReport } from '../../service/ReportService';
import { REPORT } from '../../data/Data';

function SingleReport() {
  const [report, setReport] = useState(REPORT);

  const { id } = useParams();

  function handleGetSingleReport(controller) {
    getSingleReport(id, controller)
      .then((res) => {
        setReport(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const controller = new AbortController();
    handleGetSingleReport(controller);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
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
                  <h1>{report.title}</h1>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {report.text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>Author - {report.author}</p>
                </Typography>
                <CommentsSection />
                <hr />
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
