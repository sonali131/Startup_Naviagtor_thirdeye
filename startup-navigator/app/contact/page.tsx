"use client";
import { useState } from 'react';
import { 
  Container, Typography, TextField, Button, Box, 
  Paper, Snackbar, Alert 
} from '@mui/material';
// ERROR FIXED: Grid2 use karein size prop ke liye
import Grid from '@mui/material/Grid'; 
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

export default function ContactPage() {
  const [formData, setFormData] = useState({ full_name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setOpen(true);
        setFormData({ full_name: '', email: '', message: '' });
      } else {
        setErrorOpen(true); // Agar API fail hui toh ye dikhega
      }
    } catch (err) {
      console.error("Frontend Error:", err);
      setErrorOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: '#f4f7fa', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography variant="overline" sx={{ color: '#1976d2', fontWeight: 'bold', display: 'block', mb: 1 }}>
                CONTACT US
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#1a237e', mb: 2 }}>
                Let&apos;s Talk!
              </Typography>
              <Typography variant="body1" sx={{ color: '#374151', mb: 4, fontSize: '1.1rem' }}>
                Have questions? Our experts are ready to help you grow your startup.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon sx={{ color: '#1a237e' }} />
                  <Typography sx={{ color: '#111827', fontWeight: 500 }}>support@startupnavigator.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <PhoneIcon sx={{ color: '#1a237e' }} />
                  <Typography sx={{ color: '#111827', fontWeight: 500 }}>+91 98660 91111</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationOnIcon sx={{ color: '#1a237e' }} />
                  <Typography sx={{ color: '#111827', fontWeight: 500 }}>Banjara Hills, Hyderabad</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, bgcolor: '#ffffff' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#111827' }}>
                Send us a Message
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <TextField 
                  label="Full Name" 
                  fullWidth required 
                  value={formData.full_name}
                  onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                  slotProps={{ input: { sx: { color: 'black' } } }} 
                />
                <TextField 
                  label="Email Address" 
                  type="email" fullWidth required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  slotProps={{ input: { sx: { color: 'black' } } }}
                />
                <TextField 
                  label="Message" 
                  multiline rows={4} fullWidth required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  slotProps={{ input: { sx: { color: 'black' } } }}
                />

                <Button 
                  variant="contained" 
                  size="large" 
                  type="submit"
                  disabled={loading}
                  endIcon={!loading && <SendIcon />}
                  sx={{ py: 1.5, fontWeight: 'bold', bgcolor: '#1a237e' }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={open} autoHideDuration={5000} onClose={() => setOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="success" variant="filled">Success! Your message was sent.</Alert>
      </Snackbar>

      <Snackbar open={errorOpen} autoHideDuration={5000} onClose={() => setErrorOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="error" variant="filled">Error! Check your API/Database connection.</Alert>
      </Snackbar>
    </Box>
  );
}