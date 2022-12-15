import Grid from '@mui/material/Grid';
import React from 'react';
import './somethingWentWrong.css';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Link from '@mui/material/Link';

interface Props {
  errors: string;
}
function SomethingWentWrong(props: Props) {
  return (
    <div>
      <Grid container sx={{ textAlign: 'center', backgroundColor: 'primary.light' }} rowSpacing={2}>
        <Grid item xs={12} sx={{ fontSize: 'large' }}>
          <img src="https://cdn.iconscout.com/icon/free/png-256/warning-190-457484.png" />
        </Grid>
        <Grid item xs={12}>
          <h1 className="title">Oops, something went wrong! :(</h1>
        </Grid>
        <Grid item xs={12}>
          <h2>
            <ContactSupportIcon />
            <Link href="/contact" underline="none" color="inherit">
              Click to contact our support team
            </Link>
          </h2>
          <h3 className="hints">
            Support email:{' '}
            <i>
              <b>company@support.com</b>
            </i>
          </h3>
        </Grid>
        <Grid item xs={12}>
          <NewReleasesIcon />
          <small>Error status: {props.errors}</small>
        </Grid>
      </Grid>
    </div>
  );
}

export default SomethingWentWrong;
