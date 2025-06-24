import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Grid,
  Divider
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    },
    {
      icon: <EmailIcon />,
      label: 'Email',
      url: 'mailto:prathap0955@gmail.com'
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      url: 'tel:+916374550093'
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.default',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center"  sx={{display:'flex',justifyContent:'space-between'}}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                Prathap
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Full Stack Developer specializing in React, Node.js, and modern web technologies.
              </Typography>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
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
            </motion.div>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3 }} />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Prathap. All rights reserved.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Built with React & Material-UI
            </Typography>
          </Box> */}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer; 