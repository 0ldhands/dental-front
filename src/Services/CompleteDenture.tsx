import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import serviceImage from "../assets/services/Complete Denture.jpg";

const CompleteDenture: React.FC = () => {
  return (
    <div>
      <Navbar />

      <Box sx={{ p: { xs: 2, md: 5 } }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
        >
          Complete Denture
        </Typography>

        <Paper
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            p: 3,
            borderRadius: 2,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              mb: { xs: 2, md: 0 },
              mr: { md: 2 },
            }}
          >
            <img
              src={serviceImage}
              alt="Complete Denture"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>

          {/* Description */}
          <Box sx={{ width: { xs: "100%", md: "60%" } }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Complete Denture Treatment
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              Complete dentures are a great solution for people who have lost
              most or all of their teeth. They are custom-made to fit
              comfortably in your mouth, restoring the appearance and function
              of your smile.
              <br />
              <br />
              Our dentures are designed to help you speak, chew, and smile with
              confidence. We work closely with you to ensure a perfect fit and
              natural look.
              <br />
              <br />
              Visit us to learn more about how complete dentures can improve
              your quality of life and give you the comfort and confidence you
              deserve.
            </Typography>
          </Box>
        </Paper>
      </Box>

      <Footer />
    </div>
  );
};

export default CompleteDenture;
