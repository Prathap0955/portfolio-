import { motion } from 'framer-motion';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar
} from '@mui/material';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Web as WebIcon,
} from '@mui/icons-material';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <WebIcon />,
      skills: [
        "React.js", "JavaScript (ES6+)", "HTML5", "CSS3/Sass", 
        "TypeScript", "Redux", "Context API", "React Router",
        "Material-UI", "Tailwind CSS", "Responsive Design"
      ]
    },
    {
      title: "Backend Development",
      icon: <CodeIcon />,
      skills: [
        "Node.js", "Express.js", "RESTful APIs", "GraphQL",
        "Authentication & Authorization", "JWT", "OAuth", "API Design",
        "Middleware Development", "Error Handling"
      ]
    },
    {
      title: "Database & Storage",
      icon: <StorageIcon />,
      skills: [
        "MongoDB", "PostgreSQL", "Redis", "Mongoose", "Sequelize",
        "Database Design", "Data Modeling", "Query Optimization",
        "Database Migration", "Backup & Recovery"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <BuildIcon />,
      skills: [
        "Git & GitHub", "Docker", "AWS",
        //  "CI/CD", "Webpack",
        // "Jest Testing", "ESLint", "Prettier", "NPM/Yarn",
        // "Linux/Unix", "Shell Scripting"
      ]
    }
  ];

  const coreTechnologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "JavaScript", icon: "📜" },
    { name: "Git", icon: "📚" }
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
      id="skills"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
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
            Skills & Technologies
          </Typography>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={2}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      minHeight: 600,
                      maxWidth: 260,
                      mx: 'auto',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          sx={{
                            bgcolor: 'primary.main',
                            mr: 2,
                            width: 56,
                            height: 56
                          }}
                        >
                          {category.icon}
                        </Avatar>
                        <Typography variant="h5" color="primary" fontWeight={600}>
                          {category.title}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        <List dense disablePadding>
                          {category.skills.map((skill, skillIndex) => (
                            <ListItem key={skillIndex} disableGutters sx={{ py: 0.2 }}>
                              <ListItemIcon sx={{ minWidth: 28, color: 'primary.main' }}>•</ListItemIcon>
                              <ListItemText primary={skill} primaryTypographyProps={{ fontSize: '1rem' }} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </CardContent>
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
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
              Core Technologies
            </Typography>
            
            <Grid container spacing={3} justifyContent="center">
              {coreTechnologies.map((tech, index) => (
                <Grid item key={index}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        width: 120,
                        height: 120,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 25px rgba(0, 212, 255, 0.2)',
                        }
                      }}
                    >
                      <CardContent sx={{ textAlign: 'center', p: 2 }}>
                        <Typography variant="h3" sx={{ mb: 1 }}>
                          {tech.icon}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontWeight={500}>
                          {tech.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 