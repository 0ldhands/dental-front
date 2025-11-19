import React from 'react';
import Navbar from "../components/Navbar";
import teeth from '../assets/services/teethwhite.jpg';
import { Box, Typography, Grid } from '@mui/material';
import teeth2 from '../assets/services/teethwhite2.jpg'
import teeth3 from '../assets/services/teethwhite3.jpg'
import teeth4 from '../assets/services/teethwhite4.jpg'
import Footer from '../components/Footer';

const TeethWhitening: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      {/* Image Section */}
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          margin: '20px',
          backgroundColor: '#c9e6fa',
          boxShadow: '5px 5px 5px grey',
          borderRadius: '5px',
          padding: '10px',
        }}
      >
        <Grid container spacing={2} sx={{display:'flex',justifyContent:'cnetr'}}>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold" sx={{ textAlign: 'center' }}>
              Teeth Whitening Service
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} alignItems="center" justifyContent="center" sx={{ marginLeft:'35%' , '@media (max-width:600px)': {
          justifyContent: 'center',  // Center horizontally on xs (mobile)
          textAlign: 'center', }}} >
            <img
              src={teeth}
              alt="Teeth Whitening"
              style={{
                width: '200px',
                borderRadius: '5px',
              }}
            />
          </Grid>
        </Grid>
      </Box>
      
      {/* Content Section: What is Teeth Whitening */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="start"
        boxShadow="5px 5px 5px grey"
        margin="10px"
        padding="10px"
        borderRadius="5px"
        sx={{ backgroundColor: '#c9e6fa' }}
      >
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid item xs={12} md={8}>
          <Typography variant="h5" fontWeight="bold">
              What is Teeth Whitening?
            </Typography>
            <Typography variant="body1">
              Teeth whitening is a cosmetic dental procedure aimed at lightening the color of teeth and removing stains or discoloration. It can be done in a variety of ways, ranging from professional treatments at a dentist's office to over-the-counter products for home use.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={teeth2}
              alt="Teeth Whitening"
              style={{
                width: '100%',
                maxWidth: '200px',
                borderRadius: '5px',
                margin:'10px'
              }}
            />
          </Grid>
      </Box>
      
      {/* Content Section: Why Teeth Whitening is Needed */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="end"
        marginTop="20px"
        boxShadow="5px 5px 5px grey"
        margin="10px"
        padding="10px"
        borderRadius="5px"
        sx={{ backgroundColor: '#c9e6fa' }}
      >
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" fontWeight="bold">
              Why it is Needed?
            </Typography>
            <Typography variant="body1">
              Teeth whitening helps brighten discolored or stained teeth caused by factors like aging, food, drinks, or smoking. It enhances your smile, boosting confidence and giving a more youthful, healthy appearance. Many people choose whitening for a more uniform, attractive look.
            </Typography>
          </Grid>
          
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={teeth3}
              alt="Teeth Whitening"
              style={{
                width: '100%',
                maxWidth: '200px',
                borderRadius: '5px',
                margin:'5px'
              }}
            />
          </Grid>
      </Box>
      
      {/* Content Section: Benefits of Teeth Whitening */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="start"
        marginTop="20px"
        boxShadow="5px 5px 5px grey"
        margin="10px"
        padding="10px"
        borderRadius="5px"
        sx={{ backgroundColor: '#c9e6fa' }}
      >
        <Grid container spacing={2} sx={{ width: '100%', marginLeft:'5px'}}>
         
          <Grid item xs={12} md={8}> <Typography variant="h5" fontWeight="bold">
              Benefits of Teeth Whitening
            </Typography>

            <Typography variant="body1">
              <ol>
                <li>Improved Aesthetic Appearance</li>
                <li>Boost in Confidence</li>
                <li>Youthful Look</li>
                <li>Enhanced Oral Health Perception</li>
                <li>Motivation for Better Oral Care</li>
                <li>Minimal Downtime</li>
              </ol>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center'}}>
            <img
              src={teeth4}
              alt="Teeth Whitening"
              style={{
                width: '100%',
                maxWidth: '200px',
                maxHeight:'150px',
                borderRadius: '5px',
                marginRight:"10px",
                marginTop:'10px'
              }}
            />
          </Grid>
        </Grid>
      </Box>
      
      <Footer />
    </div>
  );
};

export default TeethWhitening;
