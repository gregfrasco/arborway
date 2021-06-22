import React from 'react';

import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { ModalNames } from '../constants/modal-names';
import ContactUs from '../content/contact-us/contact-us.mdx';
import { Modal } from 'components/modal/modal';
import { useModal } from '../hooks/useModal';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  name: yup.string().required('Full name is required'),
  subject: yup.string().required('A Subject is required'),
  message: yup.string().required('A Message is required')
});

export default () => {
  const { openModal } = useModal();
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: '',
      name: '',
      subject: '',
      message: ''
    },
    onSubmit: (values, formikHelpers) => {
      axios.post('https://formspree.io/f/mgerybgj', values).then(() => {
        formikHelpers.setSubmitting(false);
        formikHelpers.resetForm();
        openModal(ModalNames.CONTACT_US);
      });
    }
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={5} style={{ marginTop: '1rem' }}>
          <Grid item xs={12}>
            <Typography color='primary' variant='h3' component='h1'>
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              disabled={formik.isSubmitting}
              variant='outlined'
              fullWidth
              id='name'
              name='name'
              label='Full Name'
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              disabled={formik.isSubmitting}
              variant='outlined'
              fullWidth
              id='email'
              name='email'
              label='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              fullWidth
              id='subject'
              name='subject'
              label='Subject'
              value={formik.values.subject}
              onChange={formik.handleChange}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={formik.isSubmitting}
              variant='outlined'
              fullWidth
              id='message'
              name='message'
              label='Message'
              multiline
              rows={6}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color='primary' size='large' variant='contained' fullWidth type='submit' disabled={formik.isSubmitting}>
              {formik.isSubmitting ? <CircularProgress color='secondary' /> : 'Submit'}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Modal name={ModalNames.CONTACT_US} title='Thank you'>
        <ContactUs />
      </Modal>
    </Container>
  );
};
