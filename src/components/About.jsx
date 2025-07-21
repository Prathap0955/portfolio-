import { motion } from 'framer-motion';
import {
  Typography,
  Button,
  Box,
  Container,
  Avatar
} from '@mui/material';
import {
  Download as DownloadIcon,
  Work as WorkIcon,
  Star as StarIcon
} from '@mui/icons-material';

const About = () => {
  const downloadResume = () => {
    // In a real app, this would download an actual resume file
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Prathap_Resume.pdf';
    link.click();
  };

  // const stats = [
  //   { icon: <WorkIcon />, value: '5+', label: 'Years Experience' },
  //   { icon: <StarIcon />, value: '50+', label: 'Projects Completed' },
  //   { icon: <WorkIcon />, value: '20+', label: 'Happy Clients' },
  //   { icon: <StarIcon />, value: '100%', label: 'Client Satisfaction' }
  // ];

  return (
    <Box
      id="about"
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
            About Me
          </Typography>
        </motion.div>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h3" color="primary" sx={{ mb: 3 }}>
                Passionate Full Stack Developer
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
              I'm an aspiring full-stack developer with over 1 year of hands-on experience building web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). I’m continuously learning and improving my skills by working on real-world projects, building my portfolio, and exploring best practices in clean, maintainable code.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
                I enjoy solving problems through code and take pride in creating user-friendly, responsive, and scalable web applications. I'm always open to learning new technologies and growing as a developer.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                Outside of coding, I like exploring new tools, studying software engineering concepts, and engaging with the developer community to grow and share knowledge.
              </Typography>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DownloadIcon />}
                  onClick={downloadResume}
                >
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Avatar
                sx={{
                  width: 300,
                  height: 300,
                  background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
                  fontSize: '4rem',
                  fontWeight: 700,
                  border: '4px solid',
                  borderColor: 'primary.main',
                }}
              >
                PP
              </Avatar>
            </motion.div>
          </Box>
        </Box>
        
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 8 }}>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)',
                        }
                      }}
                    >
                      <CardContent>
                        <Box sx={{ color: 'primary.main', fontSize: '2rem', mb: 2 }}>
                          {stat.icon}
                        </Box>
                        <Typography variant="h3" color="primary" sx={{ mb: 1, fontWeight: 700 }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {stat.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div> */}
      </Container>
    </Box>
  );
};

export default About; 