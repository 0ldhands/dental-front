// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const ContactUs = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form), // the form data from the state
//       });
      

//       const result = await response.json();
//       console.log('Form submitted:', result);

//       if (response.ok) {
//         alert('Message sent successfully!');
//       } else {
//         alert('Failed to send message. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('An error occurred while sending the message. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <Box sx={{ padding: '60px 40px', backgroundColor: '#f4f6f9' }}>
//         <Typography
//           variant="h3"
//           sx={{
//             textAlign: 'center',
//             fontWeight: 'bold',
//             marginBottom: '20px',
//             color: '#2c3e50',
//           }}
//         >
//           Contact Us
//         </Typography>
        
//         <Typography
//           variant="body1"
//           sx={{
//             textAlign: 'center',
//             marginBottom: '40px',
//             color: '#7f8c8d',
//             maxWidth: '800px',
//             margin: '0 auto',
//             lineHeight: '1.8',
//           }}
//         >
//           We’d love to hear from you! If you have any questions, suggestions, or would like to book an appointment, feel free to fill out the form below. Our team will get back to you as soon as possible.
//         </Typography>

//         <Grid container justifyContent="center">
//           <Grid item xs={12} sm={8} md={6}>
//             <Paper
//               sx={{
//                 padding: '30px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                 borderRadius: '12px',
//                 backgroundColor: '#ffffff',
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 '&:hover': {
//                   transform: 'translateY(-5px)',
//                   boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
//                 },
//               }}
//             >
//               <form onSubmit={handleSubmit}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Full Name"
//                       name="name"
//                       value={form.name}
//                       onChange={handleInputChange}
//                       fullWidth
//                       variant="outlined"
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.Mui-focused fieldset': {
//                             borderColor: '#2980b9',
//                           },
//                         },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Email Address"
//                       name="email"
//                       value={form.email}
//                       onChange={handleInputChange}
//                       fullWidth
//                       variant="outlined"
//                       type="email"
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.Mui-focused fieldset': {
//                             borderColor: '#2980b9',
//                           },
//                         },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Phone Number"
//                       name="phone"
//                       value={form.phone}
//                       onChange={handleInputChange}
//                       fullWidth
//                       variant="outlined"
//                       type="tel"
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.Mui-focused fieldset': {
//                             borderColor: '#2980b9',
//                           },
//                         },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Message"
//                       name="message"
//                       value={form.message}
//                       onChange={handleInputChange}
//                       fullWidth
//                       variant="outlined"
//                       multiline
//                       rows={4}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.Mui-focused fieldset': {
//                             borderColor: '#2980b9',
//                           },
//                         },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sx={{ textAlign: 'center' }}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       type="submit"
//                       size="large"
//                       sx={{
//                         padding: '12px 30px',
//                         borderRadius: '30px',
//                         '&:hover': {
//                           backgroundColor: '#2980b9',
//                         },
//                       }}
//                     >
//                       Submit
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>

//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;


import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/send-email/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form), // the form data from the state
      });

      const result = await response.json();
      console.log('Form submitted:', result);

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the message. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ padding: '60px 40px', backgroundColor: '#f4f6f9' }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#2c3e50',
          }}
        >
          Contact Us
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            marginBottom: '40px',
            color: '#7f8c8d',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8',
          }}
        >
          We’d love to hear from you! If you have any questions, suggestions, or would like to book an appointment, feel free to fill out the form below. Our team will get back to you as soon as possible.
        </Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Paper
              sx={{
                padding: '30px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#2980b9',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email Address"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      type="email"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#2980b9',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone Number"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      type="tel"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#2980b9',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      name="message"
                      value={form.message}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      multiline
                      rows={4}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#2980b9',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      size="large"
                      sx={{
                        padding: '12px 30px',
                        borderRadius: '30px',
                        '&:hover': {
                          backgroundColor: '#2980b9',
                        },
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
};

export default ContactUs;
