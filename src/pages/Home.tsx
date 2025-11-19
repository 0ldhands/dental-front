import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home1 from "../assets/Homepageimages/Home2.jpg";
import Home2 from "../assets/Homepageimages/home1.jpg";

// Add images for the services
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

// Import Carousel from react-responsive-carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Type definition for services
interface Service {
  name: string;
  image: string;
  link: string;
}

// Type definition for testimonials
interface Testimonial {
  name: string;
  text: string;
}

const Home: React.FC = () => {
  // Services data array with updated paths
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

  // Testimonials data
  const testimonials: Testimonial[] = [
    { name: 'John Doe', text: "Amazing experience! The staff is super friendly, and I felt comfortable the entire time. Highly recommend!" },
    { name: 'Jane Smith', text: "Best dental clinic I’ve been to! They made me feel at ease, and the results were fantastic!" },
    { name: 'Mark Johnson', text: "Great service and very professional staff. I’ll be coming back for all my future dental needs." },
    { name: 'Emily Davis', text: "I was really nervous at first, but the team was so caring and understanding. Highly satisfied with my treatment!" },
  ];

  return (
    <div>
      <Navbar />
      {/* Image Carousel */}
      <Box style={{ textAlign: 'center', marginTop: '0px' }}>
        <Carousel 
          showArrows={true} 
          infiniteLoop={true} 
          autoPlay={true} 
          interval={3000} 
          transitionTime={500}
          showThumbs={false}
          showStatus={false}
        >
          <Box>
            <img src={Home1} alt="Dental Services 1" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
          </Box>
          <Box>
            <img src={Home2} alt="Dental Services 2" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
          </Box>
        </Carousel>
      </Box>

      {/* Welcome Section */}
      <Box style={{ display: 'flex', marginTop: '50px', justifyContent: 'center', alignItems: 'center' }}>
        <Box style={{ width: '55%', paddingRight: '20px', textAlign: 'left', marginLeft: '10%' }}>
          <Typography 
            variant="h4" 
            style={{ 
              textAlign: 'center', 
              marginBottom: '20px', 
              fontWeight: 'bold' 
            }}>
            Welcome to Our MY Tooth Tales
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '20px' }}>
            We provide quality dental care with experienced professionals and the latest technology. 
            Our clinic offers a wide range of services to meet all of your dental needs, from routine cleanings to advanced treatments.
            We are equipped with state-of-the-art equipment and staffed with highly skilled specialists who are dedicated to ensuring your comfort and health.
            We believe in preventive care and strive to educate our patients on how to maintain their dental health for the long term.
            Whether you need a simple filling or a complete smile makeover, we have the expertise to help.
            Our friendly team will guide you through every step of the process, making your visit as stress-free as possible.
            At our clinic, we focus on building lasting relationships with our patients, providing personalized care tailored to your needs.
            Our goal is to help you achieve and maintain a healthy, beautiful smile for a lifetime. 
            We are passionate about dental health, and we look forward to welcoming you to our clinic. 
          </Typography>
          <Link to="/about-us" style={{ textDecoration: 'none' }}>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ marginTop: '20px' }}
            >
              Read More
            </Button>
          </Link>
        </Box>
        <Box style={{ width: '35%', marginRight: '5%' }}>
          <img src={Home2} alt="Dental Clinic" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
        </Box>
      </Box>

      {/* Our Services Section */}
      <Box style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
          Our Services
        </Typography>
      </Box>

      <Box style={{ margin: '0 10%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '20px' }}>
        {services.map((service, index) => (
          <Link to={service.link} key={index} style={{ textDecoration: 'none' }}>
            <Box style={{ textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
              <img src={service.image} alt={service.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <Typography 
                variant="h6" 
                style={{ 
                  padding: '5px 10px', 
                  background: 'rgba(0, 0, 0, 0.6)', 
                  color: 'white', 
                  whiteSpace: 'nowrap' // Prevents text wrapping for longer service names
                }}>
                {service.name}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>

      {/* Patient Testimonials Carousel with Card Effect */}
      <Box style={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
          What People Say
        </Typography>
        <Carousel 
          showArrows={true} 
          infiniteLoop={true} 
          autoPlay={true} 
          interval={3000} 
          transitionTime={500}
          showThumbs={false}
          showStatus={false}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="body1" style={{ fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </Typography>
                <Typography variant="h6" style={{ marginTop: '10px', fontWeight: 'bold' }}>
                  - {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Box>

      {/* Vision, Mission, Core Statements Section */}
      <Box style={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
          Our Vision, Mission & Core Values
        </Typography>
        <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <Box style={{ width: '30%', padding: '20px' }}>
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Vision
            </Typography>
            <Typography variant="body1">
              To be the leading dental care provider in the region, offering exceptional services with a focus on patient care and comfort.
            </Typography>
          </Box>
          <Box style={{ width: '30%', padding: '20px' }}>
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Mission
            </Typography>
            <Typography variant="body1">
              Our mission is to provide personalized, high-quality dental care in a compassionate and professional environment.
            </Typography>
          </Box>
          <Box style={{ width: '30%', padding: '20px' }}>
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Core Values
            </Typography>
            <Typography variant="body1">
              Integrity, Excellence, Compassion, Innovation, and Commitment to our patients' health and well-being.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default Home;