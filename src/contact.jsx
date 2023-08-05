import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Snackbar } from '@mui/material';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any desired action with the form data.
    // In this example, we just show a success message.
    setShowSnackbar(true);

    // Clear the form fields after submission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div>
      {/* Contact Section */}
      <section className="contact" style={{ padding: '60px 0', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h2" sx={{ marginBottom: '40px' }}>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Container>
      </section>
      {/* Snackbar for success message */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={4000}
        onClose={() => setShowSnackbar(false)}
        message="Form submitted successfully!"
      />
    </div>
  );
}

export default ContactForm;
