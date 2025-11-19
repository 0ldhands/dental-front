import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      
      {/* About Us Section */}
      <Box sx={{ padding: '60px 40px', backgroundColor: '#f4f6f9' }}>
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center', 
            fontWeight: 'bold', 
            marginBottom: '20px', 
            color: '#2c3e50'
          }}
        >
          About Us
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{
            textAlign: 'center', 
            lineHeight: '1.8', 
            marginBottom: '40px', 
            maxWidth: '900px', 
            margin: '0 auto', 
            color: '#7f8c8d'
          }}
        >
          Welcome to our dental clinic! We are dedicated to providing exceptional dental care with a focus on your comfort and well-being. Our clinic offers a comprehensive range of services, from routine check-ups to advanced treatments, ensuring that you and your family receive the highest quality care. Our experienced professionals use state-of-the-art technology to deliver the best results. Our goal is to help you maintain a healthy smile for life, while making each visit as comfortable and stress-free as possible.
        </Typography>
        
        {/* Mission and Vision Section */}
        <Grid container spacing={4} sx={{ marginBottom: '40px' }}>
          <Grid item xs={12} sm={6}>
            <Paper 
              sx={{ 
                padding: '20px', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                borderRadius: '12px', 
                backgroundColor: '#ecf0f1', 
                transition: 'transform 0.3s, box-shadow 0.3s', 
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                }
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#2980b9' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: '1.8', color: '#34495e' }}>
                Our mission is to provide top-quality dental care that exceeds our patients' expectations. We are committed to using the latest technology, offering personalized care, and making each visit a comfortable and positive experience.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper 
              sx={{ 
                padding: '20px', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                borderRadius: '12px', 
                backgroundColor: '#ecf0f1', 
                transition: 'transform 0.3s, box-shadow 0.3s', 
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                }
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#2980b9' }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: '1.8', color: '#34495e' }}>
                Our vision is to be the leading dental clinic in the area, offering comprehensive and innovative dental solutions. We aim to create a lasting impact on our patients' dental health and improve their overall quality of life.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Contact Us Section */}
        <Typography 
          variant="h4" 
          sx={{ 
            textAlign: 'center', 
            fontWeight: 'bold', 
            marginTop: '40px', 
            marginBottom: '20px', 
            color: '#2c3e50'
          }}
        >
          Contact Us
        </Typography>

        <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: '1.8', 
              color: '#7f8c8d', 
              maxWidth: '800px', 
              margin: '0 auto' 
            }}
          >
            We’d love to hear from you! If you have any questions or would like to schedule an appointment, please feel free to contact us. Our team is ready to assist you with any dental care needs.
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            href="/contact-us" 
            sx={{ 
              fontWeight: 'bold', 
              padding: '10px 20px', 
              borderRadius: '30px', 
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#2980b9',
              }
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default AboutPage;
