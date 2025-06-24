import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Container,
  TextField,
  Button,
  Alert,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Avatar,
  Tooltip
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Send as SendIcon
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // In a real application, you would use EmailJS or a backend API
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'prathap0955@gmail.com',
      link: 'mailto:prathap0955@gmail.com'
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: '+916374550093',
      link: 'tel:+916374550093'
    },
    {
      icon: <LocationIcon />,
      label: 'Location',
      value: 'Thiruvanmiyur, Chennai, 600041',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/prathap-p0955'
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      url: 'https://github.com'
    }
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 100,
                height: 4,
                background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
                borderRadius: 2,
              }
            }}
          >
            Get In Touch
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          {/* Contact Info Section */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)',
                  }
                }}
              >
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h4" color="primary" sx={{ mb: 3 }}>
                    Let's Connect
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      flex: '0 0 auto'
                    }}
                  >
                    I'm always interested in new opportunities and exciting projects.
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </Typography>

                  {/* Contact Information */}
                        <Box sx={{display:'flex'}}>
                  <Box sx={{ flex: 1, mb: 4 }}>
                    <List sx={{ p: 0 }}>
                      {contactInfo.map((info, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <ListItem sx={{ px: 0, py: 2 }}>
                            <Avatar
                              sx={{
                                bgcolor: 'primary.main',
                                mr: 3,
                                width: 50,
                                height: 50
                              }}
                            >
                              {info.icon}
                            </Avatar>
                            <ListItemText
                              primary={
                                <Typography variant="subtitle1" fontWeight="medium">
                                  {info.label}
                                </Typography>
                              }
                              secondary={
                                info.link ? (
                                  <Typography
                                    component="a"
                                    href={info.link}
                                    sx={{
                                      color: 'text.secondary',
                                      textDecoration: 'none',
                                      fontSize: '0.95rem',
                                      '&:hover': {
                                        color: 'primary.main'
                                      }
                                    }}
                                  >
                                    {info.value}
                                  </Typography>
                                ) : (
                                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem' }}>
                                    {info.value}
                                  </Typography>
                                )
                              }
                            />
                          </ListItem>
                        </motion.div>
                      ))}
                    </List>
                  </Box>
            
                     <Box sx={{flex:1}} component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3} direction="column">
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          multiline
                          rows={5}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            disabled={isSubmitting}
                            startIcon={<SendIcon />}
                            sx={{ py: 1.5 }}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </Box>
                  </Box>
                  {/* Social Links */}
                  <Box mt={4}>
                    <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                      Follow Me
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      {socialLinks.map((social, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <IconButton
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                width: 50,
                                height: 50,
                                border: '2px solid',
                                borderColor: 'divider',
                                color: 'text.secondary',
                                '&:hover': {
                                  borderColor: 'primary.main',
                                  color: 'primary.main',
                                  backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                }
                              }}
                            >
                              {social.icon}
                            </IconButton>
                          </motion.div>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;