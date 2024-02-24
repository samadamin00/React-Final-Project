import React from 'react';
import { Container, Grid } from '@mui/material';
import style from './Footer.module.css'
const Footer = () => {
  return (
    <>
      <section className='facilities'>
        <Container maxWidth={'lg'}>
          <Grid container pt={5} pb={5}>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
              <div className={style.footerContent}>
                <h2>Do you need towing service?</h2>
                <p style={{ color: 'rgba(2,7,16,65%)' }}>We hope you won't need it, but we are ready to help.</p>
              </div>
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} item xs={12} sm={12} md={12} lg={5} xl={5}>
              <div className={style.button}>
                <button className='btn btn-black'>Call us now</button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

    </>
  )
}

export default Footer
