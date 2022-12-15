import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';

function ContactUs() {
  let navigate = useNavigate();

  const [hasFailed, setHasFailed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function sendEmail(emailData) {
    emailjs.send('service_eg2wfdo', 'template_agdnohr', emailData, 'APfvGvW3gFWJIaT4D').then(
      function () {
        setIsSuccess(true);
      },
      function () {
        setHasFailed(true);
      }
    );
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .max(50, 'The message can not be longer than 50 characters!')
        .required('Required')
    }),
    onSubmit: () => {
      const emailData = {
        email: formik.values.email,
        name: formik.values.name,
        message: formik.values.message
      };
      sendEmail(emailData);
    }
  });

  return (
    <div>
      {(formik.touched.email && formik.errors.email) ||
      (formik.touched.message && formik.errors.message) ||
      hasFailed ? (
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={true}
          autoHideDuration={5000}>
          <Alert severity={hasFailed ? 'error' : 'warning'} sx={{ width: '100%' }}>
            {formik.touched.email && formik.values.email === ''
              ? ' You need to provide us with your email.'
              : null}
            {formik.touched.message && formik.values.message === ''
              ? ' The message field is required.'
              : null}
            {formik.values.email !== '' && formik.errors.email ? ' Check your email.' : null}
            {formik.values.message !== '' && formik.errors.message
              ? ' Your message is too long.'
              : null}
            {hasFailed && ' There has been a problem'}
          </Alert>
        </Snackbar>
      ) : null}
      <br />
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <form onSubmit={formik.handleSubmit}>
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
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                  <Box sx={{ color: 'error.main' }}>{formik.errors.email}</Box>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="name"
                  name="name"
                  label="Enter your name"
                  variant="outlined"
                  size="small"
                  sx={{ width: 1 }}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
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
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.message && formik.errors.message ? (
                  <Box sx={{ color: 'error.main' }}>{formik.errors.message}</Box>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
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
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={isSuccess}
        autoHideDuration={5000}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Successfuly sent!
          <Button
            sx={{ color: 'text.secondary', borderRadius: 0 }}
            onClick={() => {
              navigate('/');
            }}>
            HOME PAGE
          </Button>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ContactUs;
