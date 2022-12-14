import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { LINKS_CREATOR } from '../data/Data';
import { LINKS_COMPANY } from '../data/Data';
import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FacebookShareButton } from 'react-share';
import { LinkedinShareButton } from 'react-share';
import { RedditShareButton } from 'react-share';

function Footer() {
  const help = ['Contact', 'Support', 'Privacy Policy'];
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          p: 2,
          color: 'secondary.dark'
        }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                  <Box borderBottom={1}>Help</Box>
                  {help.map((item, key) => (
                    <Box key={key}>
                      <Link href={key === 0 ? '/contact' : '/'} color="inherit">
                        {item}
                      </Link>
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box borderBottom={1}>Company links</Box>
                  {LINKS_COMPANY.map((item, key) => (
                    <Box key={key}>
                      <Link href={item.link} color="inherit">
                        {item.media}
                      </Link>
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box borderBottom={1}>Creator links</Box>
                  {LINKS_CREATOR.map((item, key) => (
                    <Box key={key}>
                      <Link href={item.link} color="inherit">
                        {item.media}
                      </Link>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                <Grid item xs={12} sx={{ fontSize: '12px' }}>
                  <h1>Want to share our app?</h1>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'end' }}>
                    <FacebookShareButton url={'localhost:3000'}>
                      <FacebookIcon height={40} />
                    </FacebookShareButton>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <LinkedinShareButton url={'localhost:3000'}>
                      <LinkedInIcon height={40} />
                    </LinkedinShareButton>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'start' }}>
                    <RedditShareButton url={'localhost:3000'}>
                      <RedditIcon height={40} />
                    </RedditShareButton>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
