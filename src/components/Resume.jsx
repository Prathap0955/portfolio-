import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Container,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import {
  Work as WorkIcon,
  School as SchoolIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Star as StarIcon,
  Code as CodeIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Web as WebIcon
} from '@mui/icons-material';

const Resume = () => {
  const personalInfo = {
    name: "Prathap",
    title: "Full Stack MERN Developer",
    email: "prathap0955@gmail.com",
    phone: "+916374550093",
    location: "Thiruvanmiyur, Chennai, 600041",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/prathap-p0955"
  };

  const skills = {
    frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3/Sass", "TypeScript", "Redux", "Material-UI", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT", "OAuth", "API Design"],
    database: ["MongoDB", "PostgreSQL", "Redis", "Mongoose", "Sequelize", "Database Design"],
    tools: ["Git & GitHub", "Docker", "AWS", "CI/CD", "Webpack", "Jest", "ESLint"]
  };

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "Chennai, India",
      achievements: [
        "Led development of enterprise-level web applications using React, Node.js, and MongoDB",
        "Reduced application load time by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored team of 5 developers on major client projects"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc.",
      period: "2020 - 2022",
      location: "Chennai, India",
      achievements: [
        "Developed and maintained multiple client projects using the MERN stack",
        "Built 15+ client applications with 100% client satisfaction",
        "Introduced automated testing increasing code coverage to 85%",
        "Optimized database queries improving performance by 50%"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      location: "Chennai, India",
      achievements: [
        "Started career as a junior developer, learning full-stack development",
        "Completed 8 projects successfully within deadlines",
        "Learned modern development practices and tools",
        "Contributed to open-source projects"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      location: "Chennai, India",
      details: [
        "Graduated with First Class Honours",
        "Completed final year project on web application development",
        "Active member of coding clubs and hackathons"
      ]
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB University", year: "2022" },
    { name: "React Developer Certification", issuer: "Meta", year: "2021" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with payment integration, user authentication, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team collaboration features",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"]
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard aggregating data from multiple social media platforms",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js", "OAuth"]
    }
  ];

  return (
    <Box
      id="resume"
      sx={{
        py: 4,
        backgroundColor: 'background.default',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: 'background.paper',
            borderRadius: 2
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" color="primary" fontWeight={700} gutterBottom>
              {personalInfo.name}
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {personalInfo.title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" />
                <Typography variant="body2">{personalInfo.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon color="primary" />
                <Typography variant="body2">{personalInfo.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationIcon color="primary" />
                <Typography variant="body2">{personalInfo.location}</Typography>
              </Box>
            </Box>
          </Box>

          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} md={8}>
              {/* Experience */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" color="primary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <WorkIcon /> Professional Experience
                </Typography>
                {experience.map((exp, index) => (
                  <Card key={index} sx={{ mb: 3, border: '1px solid', borderColor: 'divider' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box>
                          <Typography variant="h6" fontWeight={600}>
                            {exp.title}
                          </Typography>
                          <Typography variant="body1" color="primary">
                            {exp.company}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="body2" color="text.secondary">
                            {exp.period}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {exp.location}
                          </Typography>
                        </Box>
                      </Box>
                      <List dense>
                        {exp.achievements.map((achievement, idx) => (
                          <ListItem key={idx} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                              <StarIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={achievement} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* Education */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" color="primary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <SchoolIcon /> Education
                </Typography>
                {education.map((edu, index) => (
                  <Card key={index} sx={{ border: '1px solid', borderColor: 'divider' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box>
                          <Typography variant="h6" fontWeight={600}>
                            {edu.degree}
                          </Typography>
                          <Typography variant="body1" color="primary">
                            {edu.school}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="body2" color="text.secondary">
                            {edu.period}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {edu.location}
                          </Typography>
                        </Box>
                      </Box>
                      <List dense>
                        {edu.details.map((detail, idx) => (
                          <ListItem key={idx} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                              <StarIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={detail} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* Projects */}
              <Box>
                <Typography variant="h4" color="primary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CodeIcon /> Key Projects
                </Typography>
                {projects.map((project, index) => (
                  <Card key={index} sx={{ mb: 3, border: '1px solid', borderColor: 'divider' }}>
                    <CardContent>
                      <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.tech.map((tech, idx) => (
                          <Chip key={idx} label={tech} size="small" />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={4}>
              {/* Skills */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" color="primary" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <WebIcon /> Frontend
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {skills.frontend.map((skill, index) => (
                    <Chip key={index} label={skill} size="small" />
                  ))}
                </Box>

                <Typography variant="h5" color="primary" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CodeIcon /> Backend
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {skills.backend.map((skill, index) => (
                    <Chip key={index} label={skill} size="small" />
                  ))}
                </Box>

                <Typography variant="h5" color="primary" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <StorageIcon /> Database
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {skills.database.map((skill, index) => (
                    <Chip key={index} label={skill} size="small" />
                  ))}
                </Box>

                <Typography variant="h5" color="primary" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <BuildIcon /> Tools & DevOps
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills.tools.map((skill, index) => (
                    <Chip key={index} label={skill} size="small" />
                  ))}
                </Box>
              </Box>

              {/* Certifications */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                  Certifications
                </Typography>
                {certifications.map((cert, index) => (
                  <Card key={index} sx={{ mb: 2, border: '1px solid', borderColor: 'divider' }}>
                    <CardContent sx={{ py: 2 }}>
                      <Typography variant="body2" fontWeight={600}>
                        {cert.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {cert.issuer} • {cert.year}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* Contact & Links */}
              <Box>
                <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                  Contact & Links
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <GitHubIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" secondary={personalInfo.github} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LinkedInIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" secondary={personalInfo.linkedin} />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Resume; 