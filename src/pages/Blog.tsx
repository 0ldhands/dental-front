import { Box, Grid, Typography, Button, Paper } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Import images from src/assets/services
import blog1Image from '../assets/services/blog1.webp';
import blog2Image from '../assets/services/blog2.webp';
import blog3Image from '../assets/services/blog3.jpg';

// Sample blog data with imported images
const blogPosts = [
  {
    title: 'The Importance of Regular Dental Check-ups',
    description:
      'Regular dental check-ups help identify potential issues early, preventing bigger problems down the line. Learn why it\'s crucial to maintain your oral health...',
    imageUrl: blog1Image,  // Local image from src/assets/services
    link: '/blog/1',
  },
  {
    title: 'How to Take Care of Your Teeth at Home',
    description:
      'Brushing, flossing, and proper diet can help you maintain healthy teeth. This blog covers the essential steps you need to take for a great smile...',
    imageUrl: blog2Image,  // Local image from src/assets/services
    link: '/blog/2',
  },
  {
    title: 'Top 5 Cosmetic Dentistry Trends',
    description:
      'Cosmetic dentistry has evolved with advanced technology and new techniques. Learn about the top trends that are shaping the future of smile makeovers...',
    imageUrl: blog3Image,  // Local image from src/assets/services
    link: '/blog/3',
  },
];

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ padding: '60px 20px', backgroundColor: '#f4f6f9' }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#2c3e50',
          }}
        >
          Our Latest Blog Posts
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  padding: '20px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: '15px',
                    fontWeight: 'bold',
                    color: '#34495e',
                    textAlign: 'center',
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '10px',
                    color: '#7f8c8d',
                    textAlign: 'center',
                  }}
                >
                  {post.description}
                </Typography>
                <Box sx={{ textAlign: 'center', marginTop: '15px' }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to={post.link}
                    sx={{
                      borderRadius: '20px',
                      padding: '8px 20px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#2980b9',
                        color: '#fff',
                      },
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Blog;
