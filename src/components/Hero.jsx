import { motion } from 'framer-motion';
import {
  Typography,
  Button,
  Box,
  IconButton,
  Container
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  KeyboardArrowDown as ArrowDownIcon
} from '@mui/icons-material';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><defs><pattern id=\\"grid\\" width=\\"10\\" height=\\"10\\" patternUnits=\\"userSpaceOnUse\\"><path d=\\"M 10 0 L 0 0 0 10\\" fill=\\"none\\" stroke=\\"%23333\\" stroke-width=\\"0.5\\"/></pattern></defs><rect width=\\"100\\" height=\\"100\\" fill=\\"url(%23grid)\\"/></svg>")',
          opacity: 0.1,
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              color: 'text.primary',
              zIndex: 1,
              position: 'relative',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Hi, I'm <span style={{ color: '#00d4ff' }}>Prathap</span>
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  fontWeight: 400,
                }}
              >
                Full Stack MERN Developer
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: 600,
                  mx: 'auto',
                  fontSize: '1.2rem',
                  lineHeight: 1.8,
                }}
              >
                Passionate about creating innovative web applications using MongoDB, Express.js, React.js, and Node.js. 
                I specialize in building scalable, user-friendly solutions that drive business growth.
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => scrollToSection('projects')}
                  >
                    View My Work
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection('contact')}
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
                <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                  <IconButton
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'text.secondary', fontSize: '1.5rem' }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                  <IconButton
                    href="https://www.linkedin.com/in/prathap-p0955"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'text.secondary', fontSize: '1.5rem' }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                  <IconButton
                    href="mailto:prathap0955@gmail.com"
                    sx={{ color: 'text.secondary', fontSize: '1.5rem' }}
                  >
                    <EmailIcon />
                  </IconButton>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
          >
            <IconButton
              sx={{
                color: 'text.secondary',
                fontSize: '2rem',
                animation: 'bounce 2s infinite',
              }}
            >
              <ArrowDownIcon />
            </IconButton>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 