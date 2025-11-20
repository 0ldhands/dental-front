import { Box, Typography, Grid, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Images
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

const servicesData = [
  { name: "Teeth Whitening", image: serviceImage1, description: "We offer professional teeth whitening services..." },
  { name: "Dental Implant", image: serviceImage2, description: "Dental implants are the perfect solution..." },
  { name: "Orthodontic Treatment", image: serviceImage3, description: "Orthodontic treatments, including braces..." },
  { name: "Root Canal Treatment", image: serviceImage4, description: "Root canal treatment is performed to save teeth..." },
  { name: "Pediatric Dental Treatment", image: serviceImage5, description: "Our pediatric dental treatments are designed..." },
  { name: "Dental Crown and Bridges", image: serviceImage6, description: "Dental crowns and bridges are ideal for restoring..." },
  { name: "Complete Denture", image: serviceImage7, description: "Complete dentures are a great solution..." },
  { name: "Wisdom Teeth Removal", image: serviceImage8, description: "Wisdom teeth removal is a common procedure..." },
  { name: "Dental Fillings", image: serviceImage9, description: "Dental fillings are used to restore teeth..." },
  { name: "Gum Treatment", image: serviceImage10, description: "Our gum treatment services focus on preventing..." },
  { name: "Cosmetic Dentistry", image: serviceImage11, description: "Cosmetic dentistry includes a wide range..." },
  { name: "Dental Cleaning", image: serviceImage12, description: "Dental cleaning is essential for maintaining..." },
];

const Services = () => {
  return (
    <div>
      <Navbar />

      <Box sx={{ p: { xs: 2, md: 5 } }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
        >
          Our Services
        </Typography>

        <Grid container spacing={3}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
                  p: 2,
                  borderRadius: 2,
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    width: { xs: "100%", md: "40%" },
                    mb: { xs: 2, md: 0 },
                    mr: { xs: 0, md: index % 2 === 0 ? 2 : 0 },
                    ml: { xs: 0, md: index % 2 !== 0 ? 2 : 0 },
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>

                {/* Content Section */}
                <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
                    {service.name}
                  </Typography>

                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
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

export default Services;
