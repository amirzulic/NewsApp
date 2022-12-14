import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function ContactUs() {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [hasFailed, setHasFailed] = useState(false);

  function sendEmail() {
    const sendEmail = {
      email: email,
      name: name,
      message: message
    };

    emailjs.send('service_eg2wfdo', 'template_agdnohr', sendEmail, 'APfvGvW3gFWJIaT4D').then(
      function () {
        alert('Successfully recorded!');
        navigate('/');
      },
      function () {
        setHasFailed(true);
      }
    );
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={hasFailed}
        autoHideDuration={5000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          There has been a problem!
        </Alert>
      </Snackbar>
      <br />
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <form>
            <Grid container sx={{ flexGrow: 1 }} spacing={3}>
              <Grid item xs={12}>
                <h1>Contact us</h1>
              </Grid>
              <Grid item xs={12} sx={{ color: 'secondary.dark' }}>
                <p>Enter your information below and someone from our team will contact you!</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  name="email"
                  label="Enter your email"
                  variant="outlined"
                  size="small"
                  sx={{ width: 1 }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="name"
                  name="name"
                  label="Enter your name"
                  variant="outlined"
                  size="small"
                  sx={{ width: 1 }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="message"
                  name="message"
                  label="Your message"
                  variant="outlined"
                  multiline
                  rows={4}
                  size="small"
                  sx={{ width: 1 }}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="button"
                  onClick={sendEmail}
                  sx={{ backgroundColor: '#e8d7a7', color: 'text.secondary', borderRadius: 0 }}>
                  SUBMIT FORM
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ color: 'secondary.dark', textAlign: 'center' }}>
                <small>
                  You will get a confirmation mail after submitting the form. We will never share
                  your information!
                </small>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <br />
    </div>
  );
}

export default ContactUs;
