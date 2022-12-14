import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { LINKS_CREATOR } from '../data/Data';
import { LINKS_COMPANY } from '../data/Data';

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
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
