import React, { useState } from 'react';
import { Button, Container, Typography, Paper, Grid } from '@mui/material';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import ContactForm from './contact';
import ScrollAnimationObserver from './ScrollAnimationObserver';
import './style.css';
import valen from './images/valen.png'
import factory from './images/factory.jpg'
import sales from './images/Salesforce.com_logo.png'
import zen from './images/Zendesk-Logo.png'
import lotus from './images/lotus.png'

import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icon for the lightbulb button


const logoStyle = {
  height: '180px', // Set the height you desire
  width: '250px',
};

const salesStyle = {
  height: '150px',
  width: '150px'
}

const appBarStyle = {
  background: 'linear-gradient(45deg, #263238 30%, #FF8E53 90%)', // Gradient background
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)', // Add box shadow for dimension
};


function App() {
  // State variable to track dark mode status

  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply the 'dark-mode' class to the body element when dark mode is enabled
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  return (
    <div>
      <AppBar position="static" style={appBarStyle}>
        <Container>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h3" sx={{ marginBottom: '0', color: 'white', fontFamily: 'nunito' }}>
              Valencia AI
            </Typography>
            <div>
              <Button href="#about" color="inherit">
                About
              </Button>
              <Button href="#testimony" color="inherit">
                Testimony
              </Button>
              <Button href="#contact" color="inherit">
                Contact
              </Button>
              <IconButton color="inherit" onClick={toggleDarkMode}>
                <Brightness4Icon /> {/* Lightbulb icon */}
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <section id="hero" className="hero animate-on-scroll" style={{
        backgroundImage: `url(${factory})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        textAlign: 'center',
        color: '#fff'
      }}>
        <Container maxWidth="sm">
          <div>
            <img src={valen} alt='logo' style={logoStyle} />
            {/* <Typography variant="h2" sx={{ marginBottom: '18px', color: 'white' }}>
              Valencia AI
            </Typography> */}
            {/* <Typography variant="h5" sx={{ marginBottom: '40px', color: 'white' }}>
              Driving Innovation with AI: Revolutionizing Auto Manufacturing
            </Typography> */}
          </div>
        </Container>
      </section>

      <ScrollAnimationObserver animationType="fade-in"
        duration={1000} // Animation duration (in milliseconds)
        className="about-section" // Add the CSS class you defined
      >
        <section id="about" className="aboutly" style={{ padding: '60px 0', textAlign: 'center' }}>
          <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: '20px' }}>
              <Typography variant="h2" sx={{ marginBottom: '18px' }}>
                About Us
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ textAlign: 'left' }}>
                    Welcome to Valencia AI, a visionary force in the realm of automotive artificial intelligence. At Valencia AI, our commitment to driving innovation knows no bounds, as we tirelessly endeavor to reshape the landscape of the auto manufacturing industry. Our mission is rooted in the belief that the fusion of artificial intelligence and automotive technology can herald a new era of efficiency, sustainability, and exceptional user experiences.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ textAlign: 'left' }}>
                    At Valencia AI, we stand at the forefront of the evolution of vehicle design. Our state-of-the-art AI technologies allow us to analyze and interpret vast amounts of data, enabling us to create sleek, functional, and environmentally conscious vehicle designs that meet the ever-changing demands of the market. Our creative approach to design is underpinned by the belief that form should seamlessly merge with function to provide exceptional driving experiences.                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button href="#contact" variant="contained" color="primary">
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </section>
      </ScrollAnimationObserver>

      <section id="testimony" className="testimony" style={{ padding: '60px 0', textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ marginBottom: '18px' }}>
            Testimonies
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ padding: '20px' }}>
                <Typography variant="h5" sx={{ textAlign: 'left' }}>
                  "Outstanding resources that enable us to be at our best! Valencia is paving the way for new-age vertical integration for the automotive industry"
                </Typography>
                <img src={sales} alt='alt' style={salesStyle} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ padding: '20px' }}>
                <Typography variant="h5" sx={{ textAlign: 'left' }}>
                  "Valencia AI has created some cutting edge tools for the automotive industry that are yet to show the full extent of their impact"
                </Typography>
                <img src={zen} alt='zen' style={salesStyle} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ padding: '20px' }}>
                <Typography variant="h5" sx={{ textAlign: 'left' }}>
                  "Artificial-Intelligence Optimiziation is the future of vertically integrated automotive design, and Valencia AI is paving the way."
                </Typography>
                <img src={lotus} alt="lotus" style={salesStyle} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>

      <ScrollAnimationObserver>
        <section id="contact" className="contact animate-on-scroll" style={{ padding: '30px 0', textAlign: 'center' }}>
          <Container maxWidth="sm">
            <ContactForm />
          </Container>
        </section>
      </ScrollAnimationObserver>

      <footer style={{ backgroundColor: '#444', color: '#fff', textAlign: 'center', padding: '20px 0' }}>
        <Container>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Valencia AI. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default App;
