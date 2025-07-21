import { motion } from 'framer-motion';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Chip,
  Button,
  CardActions
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  ShoppingCart as ShoppingCartIcon,
  Assignment as AssignmentIcon,
  Analytics as AnalyticsIcon,
  Chat as ChatIcon,
  WbSunny as WeatherIcon,
  Palette as PortfolioIcon
} from '@mui/icons-material';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      github: "https://github.com",
      live: "https://demo-ecommerce.com",
      icon: <ShoppingCartIcon />
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React frontend and Node.js backend.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux", "Material-UI"],
      github: "https://github.com",
      live: "https://task-app-demo.com",
      icon: <AssignmentIcon />
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms. Features real-time analytics, customizable reports, and data visualization.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Chart.js", "OAuth"],
      github: "https://github.com",
      live: "https://social-dashboard.com",
      icon: <AnalyticsIcon />
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and video calling capabilities. Built with React, Node.js, and WebRTC technology.",
      technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "AWS S3"],
      github: "https://github.com",
      live: "https://chat-app-demo.com",
      icon: <ChatIcon />
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "A weather application that provides current weather conditions and forecasts. Features location-based weather, 7-day forecasts, and weather alerts.",
      technologies: ["React", "Node.js", "Express", "OpenWeather API", "Geolocation", "PWA"],
      github: "https://github.com",
      live: "https://weather-app-demo.com",
      icon: <WeatherIcon />
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills. Features smooth animations, contact form, and modern design with React and Framer Motion.",
      technologies: ["React", "Framer Motion", "CSS3", "EmailJS", "Responsive Design"],
      github: "https://github.com",
      live: "https://portfolio-demo.com",
      icon: <PortfolioIcon />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box
      id="projects"
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
            Featured Projects
          </Typography>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)',
                      },
                      minHeight: 320,
                      maxWidth: 340,
                      mx: 'auto',
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: 120,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
                        color: 'white',
                        fontSize: '2.2rem'
                      }}
                    >
                      {project.icon}
                    </CardMedia>
                    
                    <CardContent sx={{ flexGrow: 1, p: 2 }}>
                      <Typography variant="h6" color="primary" sx={{ mb: 1.2, fontWeight: 600 }}>
                        {project.title}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5, fontSize: '0.95rem',minHeight:150 }}>
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7, mb: 2 }}>
                        {project.technologies.map((tech, index) => (
                          <Chip
                            key={index}
                            label={tech}
                            size="small"
                            sx={{
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                color: 'primary.contrastText',
                              },
                              fontSize: '0.8rem',
                              height: 22
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'text.secondary' }}
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'text.secondary' }}
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Want to see more of my work?
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Projects
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 