  import React from 'react';
  import { Button, Container, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import ContactForm from './contact';
  import ScrollAnimationObserver from './ScrollAnimationObserver';


  function App() {
    return (
      
      <div>

        <AppBar position="static" style={{ backgroundColor: 'linear-gradient(45deg, #263238 30%, #FF8E53 90%)' }}>
          <Container>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* Logo */}
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  color: '#fff',
                  flexGrow: 1,
                  fontFamily: 'Montserrat, sans-serif', // Change to a modern sans-serif font
                  fontSize: '36px', // Adjust the font size
                  fontWeight: 'bold', // Make the text bold
                  letterSpacing: '1px', // Add some letter-spacing
                  textTransform: 'uppercase', // Optionally, make the text uppercase
                }}
              >
                Valencia AI
              </Typography>
              {/* Navigation */}
              <div>
                <Button color="inherit">About</Button>
                <Button color="inherit">Investment</Button>
                {/* Use anchor tag to jump to the contact section */}
                <Button href="#contact" color="inherit">
                  Contact
                </Button>
              </div>
              <IconButton color="inherit" edge="end">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        

        {/* Hero Section */}
        <ScrollAnimationObserver>
        <section id="hero" className="hero animate-on-scroll" style={{ backgroundImage: 'url("")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0', textAlign: 'center', color: '#fff' }}>
          <Container maxWidth="sm">
            <div>
              <Typography variant="h2" sx={{ marginBottom: '20px' }}>
                Valencia AI
              </Typography>
              <Typography variant="h5" sx={{ marginBottom: '40px' }}>
                Your captivating introduction goes here.
              </Typography>
              <Button variant="contained" color="secondary">
                Get Started
              </Button>
            </div>
          </Container>
        </section>
        </ScrollAnimationObserver>

        {/* Features Sectio n */}
        <ScrollAnimationObserver>
        <section className="features" style={{ backgroundColor: '#f9f9f9', padding: '60px 0', textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="h2" sx={{ marginBottom: '40px' }}>
              Features
            </Typography>
            <div className="feature">
              <img src="" alt="Feature 1" style={{ width: '200px', height: '200px', marginBottom: '20px' }} />
              <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                Feature 1
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', marginBottom: '20px' }}>
                Description of feature 1 goes here.
              </Typography>
            </div>
            {/* Add more feature items as needed */}
          </Container>      
        </section>
        </ScrollAnimationObserver>

        {/* Testimonials Section */}
        <section className="testimonials" style={{ backgroundColor: '#ebebeb', padding: '60px 0', textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="h2" sx={{ marginBottom: '40px' }}>
              Testimonials
            </Typography>
            <div className="testimonial">
              <img src="path/to/testimonial-1-image.jpg" alt="Testimonial 1" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px' }} />
              <Typography variant="body1" sx={{ color: '#555', marginBottom: '20px' }}>
                "Testimonial 1 text goes here."
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                - Testimonial Author
              </Typography>
            </div>
            {/* Add more testimonial items as needed */}
          </Container>
        </section>

        {/* Contact Section */}
        <ScrollAnimationObserver>
        <section  id="contact" className="contact animate-on-scroll" style={{ padding: '60px 0', textAlign: 'center' }}>
          <Container maxWidth="sm">
            <ContactForm />
          </Container>
        </section>
        </ScrollAnimationObserver>

        {/* Footer Section */}
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
