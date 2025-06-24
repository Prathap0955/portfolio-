import React from 'react';
import { motion } from 'framer-motion';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Container,
  Chip,
  Avatar
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import {
  Work as WorkIcon,
  School as SchoolIcon,
  Star as StarIcon,
  //   Award as AwardIcon
} from '@mui/icons-material';

const Experience = () => {
  const experiences = [
    // {
    //   id: 1,
    //   type: 'work',
    //   title: 'Senior Full Stack Developer',
    //   company: 'TechCorp Solutions',
    //   period: '2022 - Present',
    //   location: 'Chennai, India',
    //   description: 'Leading development of enterprise-level web applications using React, Node.js, and MongoDB. Mentoring junior developers and implementing best practices for code quality and performance.',
    //   achievements: [
    //     'Reduced application load time by 40% through optimization',
    //     'Implemented CI/CD pipeline reducing deployment time by 60%',
    //     'Led team of 5 developers on major client projects'
    //   ]
    // },
    // {
    //   id: 2,
    //   type: 'work',
    //   title: 'Full Stack Developer',
    //   company: 'Digital Innovations Inc.',
    //   period: '2020 - 2022',
    //   location: 'Chennai, India',
    //   description: 'Developed and maintained multiple client projects using the MERN stack. Collaborated with design and product teams to deliver high-quality user experiences.',
    //   achievements: [
    //     'Built 15+ client applications with 100% client satisfaction',
    //     'Introduced automated testing increasing code coverage to 85%',
    //     'Optimized database queries improving performance by 50%'
    //   ]
    // },
    {
      id: 1,
      type: 'work',
      title: 'Junior Developer',
      company: 'Yalabs Pvt',
      period: '2024 - now',
      location: 'Chennai, India',
      description: 'Started career as a junior developer, learning full-stack development with React and Node.js. Contributed to various projects and gained hands-on experience.',
      achievements: [
        'Completed 3 projects successfully within deadlines',
        'Learned modern development practices and tools',
        'Contributed to open-source projects'
      ]
    },
    {
      id: 2,
      type: 'education',
      title: 'Master of Commerce with Computer Application',
      company: 'Kongu College of Arts and Science',
      period: '2022 - 2024',
      location: 'Karur, India',
      description: 'Pursued a master degree combining commerce and computer applications, with a strong foundation in web technologies, algorithms, and software development principles. After graduation, completed a MERN stack developer training program at UPTOR, gaining hands-on experience in full-stack web development.',
      achievements: [
        'Graduated with First Class Honours',
        'Completed final-year project on full-stack web application development',
        'Completed MERN stack developer certification at UPTOR',
        'Active participant in coding clubs and regional hackathons'
      ]
    }

  ];

  const certifications = [
    { name: "Front-end Developer Certification", issuer: "Uptor", year: "2024" },
    { name: "Back-end Developer Certification", issuer: "Uptor", year: "2024" },
    { name: "DevOps Certification", issuer: "Uptor", year: "2024" },
    { name: "MERN Developer Certification", issuer: "Uptor", year: "2024" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <Box
      id="experience"
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
            Experience & Education
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Timeline position="alternate">
                {experiences.map((exp, index) => (
                  <motion.div key={exp.id} variants={itemVariants}>
                    <TimelineItem>
                      <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                        <Typography variant="body2" color="text.secondary">
                          {exp.period}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {exp.location}
                        </Typography>
                      </TimelineOppositeContent>

                      <TimelineSeparator>
                        <TimelineDot
                          sx={{
                            bgcolor: exp.type === 'work' ? 'primary.main' : 'secondary.main',
                            width: 20,
                            height: 20
                          }}
                        >
                          {exp.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
                        </TimelineDot>
                        {index < experiences.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>

                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Card
                          sx={{
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: 'primary.main',
                              transform: 'translateY(-5px)',
                              boxShadow: '0 10px 25px rgba(0, 212, 255, 0.1)',
                            }
                          }}
                        >
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                              <Avatar
                                sx={{
                                  bgcolor: exp.type === 'work' ? 'primary.main' : 'secondary.main',
                                  mr: 2,
                                  width: 40,
                                  height: 40
                                }}
                              >
                                {exp.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
                              </Avatar>
                              <Box>
                                <Typography variant="h6" fontWeight={600}>
                                  {exp.title}
                                </Typography>
                                <Typography variant="body1" color="primary">
                                  {exp.company}
                                </Typography>
                              </Box>
                            </Box>

                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                              {exp.description}
                            </Typography>

                            <Box>
                              <Typography variant="subtitle2" color="primary" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <StarIcon fontSize="small" />
                                Key Achievements:
                              </Typography>
                              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                {exp.achievements.map((achievement, idx) => (
                                  <Typography
                                    key={idx}
                                    component="li"
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 0.5 }}
                                  >
                                    {achievement}
                                  </Typography>
                                ))}
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      </TimelineContent>
                    </TimelineItem>
                  </motion.div>
                ))}
              </Timeline>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box sx={{ position: 'sticky', top: 100 }}>
                <Typography variant="h4" color="primary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                  Certifications
                </Typography>

                <Grid container spacing={2}>
                  {certifications.map((cert, index) => (
                    <Grid item xs={12} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card
                          sx={{
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: 'primary.main',
                              transform: 'translateY(-3px)',
                              boxShadow: '0 8px 20px rgba(0, 212, 255, 0.1)',
                            }
                          }}
                        >
                          <CardContent sx={{ textAlign: 'center', py: 3 }}>
                            <Typography variant="h6" color="primary" sx={{ mb: 1, fontWeight: 600 }}>
                              {cert.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                              {cert.issuer}
                            </Typography>
                            <Chip
                              label={cert.year}
                              size="small"
                              color="primary"
                              variant="outlined"
                            />
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience; 