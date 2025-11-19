import { Box, Typography, Grid, Paper } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Service Images
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
  { name: 'Teeth Whitening', image: serviceImage1, description: 'We offer professional teeth whitening services to give you a bright and healthy smile. Our whitening treatments are safe, fast, and highly effective for removing stains from your teeth. Whether you have coffee stains or discoloration, we can help you achieve a brighter smile. We use the latest whitening technology to provide the best results. Visit us today and enjoy a whiter, more confident smile.' },
  { name: 'Dental Implant', image: serviceImage2, description: 'Dental implants are the perfect solution for replacing missing teeth. Our implants are designed to integrate naturally with your jawbone, providing a permanent, secure fit. The procedure is minimally invasive, and recovery time is quick. With implants, you can restore both the function and appearance of your smile. We offer customized treatments to meet your individual needs, ensuring a natural look.' },
  { name: 'Orthodontic Treatment', image: serviceImage3, description: 'Orthodontic treatments, including braces and clear aligners, can straighten your teeth and improve your bite. We offer personalized treatment plans to suit your needs, whether you’re looking for metal braces, ceramic braces, or clear aligners. Our goal is to give you a smile that’s not only beautiful but also healthy. Consult with our orthodontists to explore your options and start your journey to a better smile.' },
  { name: 'Root Canal Treatment', image: serviceImage4, description: 'Root canal treatment is performed to save teeth that are damaged or infected. This procedure removes the infected tissue from the root of the tooth and seals it to prevent further infection. Root canals can alleviate pain, restore your tooth, and prevent the need for extraction. It’s a safe, effective procedure performed by our experienced dentists. Don’t let a damaged tooth cause more problems – get treatment today.' },
  { name: 'Pediatric Dental Treatment', image: serviceImage5, description: 'Our pediatric dental treatments are designed with your child’s comfort in mind. From routine check-ups to cavity prevention, we ensure your child’s teeth are well cared for. We focus on making dental visits fun and stress-free, helping children develop good oral hygiene habits early on. Our friendly team of pediatric dentists is here to support your child’s dental health and ensure they grow up with a healthy smile.' },
  { name: 'Dental Crown and Bridges', image: serviceImage6, description: 'Dental crowns and bridges are ideal for restoring damaged or missing teeth. Crowns cover and protect weakened teeth, while bridges replace missing teeth by connecting to surrounding teeth. Our crowns and bridges are made from high-quality materials that look natural and function like real teeth. Whether you need to restore one tooth or a few, we provide durable and aesthetically pleasing solutions for your smile.' },
  { name: 'Complete Denture', image: serviceImage7, description: 'Complete dentures are a great solution for people who have lost most or all of their teeth. They are custom-made to fit comfortably in your mouth, restoring the appearance and function of your smile. Our dentures are designed to help you speak, chew, and smile with confidence. We work closely with you to ensure a perfect fit and natural look. Visit us to learn more about how complete dentures can improve your quality of life.' },
  { name: 'Wisdom Teeth Removal', image: serviceImage8, description: 'Wisdom teeth removal is a common procedure to prevent complications like impaction, infection, and crowding. Our experienced dental surgeons can safely remove your wisdom teeth to avoid future dental issues. The procedure is done under local anesthesia, ensuring a comfortable experience. If you’re experiencing pain or discomfort from your wisdom teeth, contact us to schedule an evaluation and discuss your options.' },
  { name: 'Dental Fillings', image: serviceImage9, description: 'Dental fillings are used to restore teeth that have been damaged by cavities. We offer a variety of filling materials, including composite resin, which blends seamlessly with your natural tooth color. Fillings help restore the function of your teeth, making them look and feel like new. Our dentists ensure that the procedure is quick and comfortable. Don’t let cavities affect your smile – book an appointment for a filling today.' },
  { name: 'Gum Treatment', image: serviceImage10, description: 'Our gum treatment services focus on preventing and treating gum disease. From scaling and root planing to more advanced procedures, we can help restore your gum health. Gum disease can lead to tooth loss if not treated, so early intervention is important. Our team will work with you to develop a personalized treatment plan that addresses your specific needs and ensures the long-term health of your gums and teeth.' },
  { name: 'Cosmetic Dentistry', image: serviceImage11, description: 'Cosmetic dentistry includes a wide range of treatments aimed at improving the appearance of your teeth and smile. From veneers and bonding to teeth whitening, we offer solutions that can transform your smile. Our team of cosmetic dentists uses the latest technology to deliver beautiful, natural results. Whether you want to fix imperfections or enhance your smile, we have the expertise to help you achieve your goals.' },
  { name: 'Dental Cleaning', image: serviceImage12, description: 'Dental cleaning is essential for maintaining oral health. Regular cleanings help prevent cavities, gum disease, and other dental issues. Our hygienists use advanced tools to remove plaque and tartar buildup, leaving your teeth smooth and clean. We recommend professional cleanings every six months to keep your teeth healthy and your smile bright. Schedule your dental cleaning appointment today for a healthier mouth.' }
];

const Services = () => {
  return (
    <div>
      <Navbar />
      <Box style={{ padding: '40px' }}>
        <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold' }}>
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} key={index}>
              <Paper style={{ display: 'flex', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                {/* Left Side: Service Image */}
                <Box style={{ width: '40%', marginRight: '20px' }}>
                  <img
                    src={service.image}
                    alt={service.name}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} // Fixed height and uniform width
                  />
                </Box>
                {/* Right Side: Service Description */}
                <Box style={{ width: '60%' }}>
                  <Typography variant="h5" style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                    {service.name}
                  </Typography>
                  <Typography variant="body1" style={{ lineHeight: '1.6' }}>
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