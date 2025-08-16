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
  EmojiEvents as AwardIcon
} from '@mui/icons-material';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Junior Developer',
      company: 'Yalabs Pvt',
      period: '2024',
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
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
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(138, 43, 226, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, rgba(0, 212, 255, 0.02) 0%, transparent 50%, rgba(255, 107, 107, 0.02) 100%)
        `,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(0, 212, 255, 0.06), 
              transparent 40%
            )
          `,
          opacity: 0.7,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `
            conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg, 
              rgba(0, 212, 255, 0.03) 60deg, 
              transparent 120deg, 
              rgba(255, 107, 107, 0.03) 180deg, 
              transparent 240deg, 
              rgba(138, 43, 226, 0.03) 300deg, 
              transparent 360deg
            )
          `,
          animation: 'rotate 20s linear infinite',
          pointerEvents: 'none',
        },
        '@keyframes rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      }}
    >
      {/* Floating Background Elements */}
      <Box sx={{ position: 'absolute', top: '10%', left: '5%', opacity: 0.1, zIndex: 0 }}>
        <motion.div variants={floatingVariants} animate="animate">
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
              filter: 'blur(20px)',
            }}
          />
        </motion.div>
      </Box>

      <Box sx={{ position: 'absolute', bottom: '20%', right: '10%', opacity: 0.1, zIndex: 0 }}>
        <motion.div 
          variants={floatingVariants} 
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
              filter: 'blur(15px)',
            }}
          />
        </motion.div>
      </Box>

      <Box sx={{ position: 'absolute', top: '60%', left: '80%', opacity: 0.1, zIndex: 0 }}>
        <motion.div 
          variants={floatingVariants} 
          animate="animate"
          transition={{ delay: 4 }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #8a2be2, #9370db)',
              filter: 'blur(25px)',
            }}
          />
        </motion.div>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
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
              background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              textShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: -1,
              },
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
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
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
                            height: 20,
                            boxShadow: `0 0 20px ${exp.type === 'work' ? 'rgba(0, 212, 255, 0.6)' : 'rgba(255, 107, 107, 0.6)'}`,
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
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            '&:hover': {
                              borderColor: 'primary.main',
                              transform: 'translateY(-5px)',
                              boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)',
                              background: 'rgba(0, 212, 255, 0.05)',
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
                                  height: 40,
                                  boxShadow: `0 0 20px ${exp.type === 'work' ? 'rgba(0, 212, 255, 0.4)' : 'rgba(255, 107, 107, 0.4)'}`,
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
                <Typography 
                  variant="h4" 
                  color="primary" 
                  sx={{ 
                    mb: 3, 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    textShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                  }}
                >
                  <AwardIcon />
                  Certifications
                </Typography>

                <Grid container spacing={2}>
                  {certifications.map((cert, index) => (
                    <Grid item xs={12} key={index}>
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          rotate: [0, 1, -1, 0]
                        }}
                        transition={{ duration: 0.3 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        delay={index * 0.1}
                      >
                        <Card
                          sx={{
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            background: `
                              linear-gradient(135deg, 
                                rgba(0, 212, 255, 0.1) 0%, 
                                rgba(255, 107, 107, 0.1) 50%, 
                                rgba(138, 43, 226, 0.1) 100%
                              )
                            `,
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: 3,
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: '-100%',
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                              transition: 'left 0.6s ease',
                            },
                            '&:hover': {
                              borderColor: 'primary.main',
                              transform: 'translateY(-8px) scale(1.02)',
                              boxShadow: `
                                0 20px 40px rgba(0, 212, 255, 0.3),
                                0 0 60px rgba(0, 212, 255, 0.2),
                                inset 0 0 20px rgba(255, 255, 255, 0.1)
                              `,
                              background: `
                                linear-gradient(135deg, 
                                  rgba(0, 212, 255, 0.2) 0%, 
                                  rgba(255, 107, 107, 0.15) 50%, 
                                  rgba(138, 43, 226, 0.2) 100%
                                )
                              `,
                              '&::before': {
                                left: '100%',
                              }
                            }
                          }}
                        >
                          <CardContent 
                            sx={{ 
                              textAlign: 'center', 
                              py: 4,
                              position: 'relative',
                              zIndex: 1,
                            }}
                          >
                            <Box
                              sx={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                                boxShadow: '0 0 10px rgba(0, 212, 255, 0.6)',
                                animation: 'pulse 2s infinite',
                                '@keyframes pulse': {
                                  '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                                  '50%': { opacity: 0.7, transform: 'scale(1.2)' }
                                }
                              }}
                            />
                            <Typography 
                              variant="h6" 
                              color="primary" 
                              sx={{ 
                                mb: 1, 
                                fontWeight: 600,
                                textShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
                              }}
                            >
                              {cert.name}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              color="text.secondary" 
                              sx={{ 
                                mb: 2,
                                fontWeight: 500,
                              }}
                            >
                              {cert.issuer}
                            </Typography>
                            <Chip
                              label={cert.year}
                              size="small"
                              sx={{
                                background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
                                color: 'white',
                                fontWeight: 600,
                                boxShadow: '0 0 15px rgba(0, 212, 255, 0.4)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                '&:hover': {
                                  background: 'linear-gradient(45deg, #0099cc, #00d4ff)',
                                  transform: 'scale(1.05)',
                                }
                              }}
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