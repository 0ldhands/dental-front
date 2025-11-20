import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Images
import Home1 from "../assets/Homepageimages/Home2.jpg";
import Home2 from "../assets/Homepageimages/home1.jpg";

// Services
import serviceImage1 from "../assets/services/Teeth Whitening.jpeg";
import serviceImage2 from "../assets/services/dental-implant.webp";
import serviceImage3 from "../assets/services/Orthodontic Treatment.jpeg";
import serviceImage4 from "../assets/services/Root Canal Treatment.jpg";
import serviceImage5 from "../assets/services/Pediatric Dental Treatment.png";
import serviceImage6 from "../assets/services/Dental Crown And Bridges.jpg";
import serviceImage7 from "../assets/services/Complete Denture.jpg";
import serviceImage8 from "../assets/services/Wisdom Teeth Removal.jpg";
import serviceImage9 from "../assets/services/Dental Fillings.jpg";
import serviceImage10 from "../assets/services/Gum Treatment.webp";
import serviceImage11 from "../assets/services/Cosmetic Dentistry.png";
import serviceImage12 from "../assets/services/Dental Cleaning.jpg";

// Carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Service {
  name: string;
  image: string;
  link: string;
}

interface Testimonial {
  name: string;
  text: string;
}

const Home: React.FC = () => {

  const services: Service[] = [
    { name: 'Teeth Whitening', image: serviceImage1, link: '/service/teethwhitenting' },
    { name: 'Dental Implant', image: serviceImage2, link: '/service/dentalimaplant' },
    { name: 'Orthodontic Treatment', image: serviceImage3, link: '/service/orthodontictreatment' },
    { name: 'Root Canal Treatment', image: serviceImage4, link: '/service/rootcanal' },
    { name: 'Pediatric Dental Treatment', image: serviceImage5, link: '/service/pediatricdental' },
    { name: 'Dental Crown And Bridges', image: serviceImage6, link: '/service/dentalcrownandbridges' },
    { name: 'Complete Denture', image: serviceImage7, link: '/service/completdenture' },
    { name: 'Wisdom Teeth Removal', image: serviceImage8, link: '/service/wisdomteethremoval' },
    { name: 'Dental Fillings', image: serviceImage9, link: '/service/dentalfillings' },
    { name: 'Gum Treatment', image: serviceImage10, link: '/service/gumtreatment' },
    { name: 'Cosmetic Dentistry', image: serviceImage11, link: '/service/cosmeticdentistry' },
    { name: 'Dental Cleaning', image: serviceImage12, link: '/service/dentalcleaning' },
  ];

  const testimonials: Testimonial[] = [
    { name: 'John Doe', text: "Amazing experience! The staff is super friendly." },
    { name: 'Jane Smith', text: "Best dental clinic I’ve been to!" },
    { name: 'Mark Johnson', text: "Very professional and friendly." },
    { name: 'Emily Davis', text: "Highly satisfied with my treatment!" },
  ];

  return (
    <div>
      <Navbar />

      {/* HERO CAROUSEL */}
      <Box sx={{ textAlign: 'center' }}>
        <Carousel
          showArrows
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={500}
          showThumbs={false}
          showStatus={false}
        >
          <img src={Home1} style={{ width: '100%', maxHeight: 450, objectFit: 'cover' }} />
          <img src={Home2} style={{ width: '100%', maxHeight: 450, objectFit: 'cover' }} />
        </Carousel>
      </Box>

      {/* WELCOME SECTION */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          marginTop: 5,
          px: { xs: 2, md: 8 },
          gap: 4,
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '55%' } }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
            Welcome to MY Tooth Tales
          </Typography>

          <Typography variant="body1" sx={{ textAlign: 'justify' }}>
            We provide quality dental care with experienced professionals...
          </Typography>

          <Link to="/about-us" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
              Read More
            </Button>
          </Link>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
          <img src={Home2} style={{ width: '100%', borderRadius: 8 }} />
        </Box>
      </Box>

      {/* SERVICES */}
      <Box sx={{ textAlign: 'center', mt: 7 }}>
        <Typography variant="h4" fontWeight="bold">
          Our Services
        </Typography>

        <Box
          sx={{
            mt: 3,
            px: { xs: 2, md: 8 },
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
          {services.map((service, index) => (
            <Link to={service.link} key={index} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: 2,
                  overflow: 'hidden',
                  textAlign: 'center'
                }}
              >
                <img src={service.image} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <Typography
                  variant="h6"
                  sx={{
                    py: 1,
                    background: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    fontSize: { xs: 14, md: 16 }
                  }}
                >
                  {service.name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>

      {/* TESTIMONIALS */}
      <Box sx={{ mt: 7, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold">What People Say</Typography>

        <Carousel
          showArrows
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={500}
          showThumbs={false}
          showStatus={false}
        >
          {testimonials.map((t, i) => (
            <Card key={i} sx={{ maxWidth: 400, mx: 'auto', p: 3, textAlign: 'center' }}>
              <CardContent>
                <Typography variant="body1" fontStyle="italic">"{t.text}"</Typography>
                <Typography variant="h6" mt={1} fontWeight="bold">- {t.name}</Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Box>

      {/* VISION / MISSION / VALUES */}
      <Box sx={{ mt: 7, px: { xs: 2, md: 10 }, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold">Our Vision, Mission & Core Values</Typography>

        <Box
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            textAlign: 'center',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold">Vision</Typography>
            <Typography>To be the leading dental care provider…</Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold">Mission</Typography>
            <Typography>Our mission is to provide personalized care…</Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold">Core Values</Typography>
            <Typography>Integrity, Excellence, Compassion…</Typography>
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
