import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import serviceImage from "../assets/services/Cosmetic Dentistry.png";

const CosmeticDentistry: React.FC = () => {
  return (
    <div>
      <Navbar />

      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{ p: { xs: 2, md: 5 } }}
      >
        {/* Page Title Animation */}
        <Typography
          component={motion.h2}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
        >
          Cosmetic Dentistry
        </Typography>

        {/* Card Animation */}
        <Paper
          component={motion.div}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            p: 3,
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Image Animation */}
          <Box
            component={motion.div}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            sx={{
              width: { xs: "100%", md: "40%" },
              mb: { xs: 2, md: 0 },
              mr: { md: 2 },
            }}
          >
            <img
              src={serviceImage}
              alt="Cosmetic Dentistry"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>

          {/* Text Animation */}
          <Box
            component={motion.div}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            sx={{ width: { xs: "100%", md: "60%" } }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Cosmetic Dentistry Services
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              Cosmetic dentistry focuses on enhancing the appearance of your
              teeth and smile. Whether you want whiter teeth, a more balanced
              appearance, or a complete smile makeover, we offer a wide range of
              advanced cosmetic treatments tailored to your needs.
              <br />
              <br />
              Our cosmetic services include teeth whitening, veneers, bonding,
              reshaping, and more. Using the latest dental technology and
              techniques, we ensure natural-looking results that boost your
              confidence and transform your smile.
              <br />
              <br />
              Book your consultation today and explore how cosmetic dentistry
              can help you achieve the smile you’ve always dreamed of.
            </Typography>
          </Box>
        </Paper>
      </Box>

      <Footer />
    </div>
  );
};

export default CosmeticDentistry;
