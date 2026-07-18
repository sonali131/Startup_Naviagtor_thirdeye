"use client";
import { useState } from 'react';
import { 
  Container, TextField, Button, Paper, Typography, Box, 
  CircularProgress, Alert, Snackbar, Chip, Avatar
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import HistoryIcon from '@mui/icons-material/History';
import SmartToyIcon from '@mui/icons-material/SmartToy'; // AI Robot Icon
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'; // Magic Icon

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const askAI = async () => {
    const trimmed = input.trim();
    if (!trimmed) {
      setError('Please enter a question.');
      setSnackbarOpen(true);
      return;
    }
    setLoading(true);
    setError(null);
    
    // History update (limit to 5)
    if (!history.includes(trimmed)) {
      setHistory(prev => [trimmed, ...prev].slice(0, 5)); 
    }

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: trimmed }),
      });

      if (!res.ok) {
        throw new Error('AI Service is currently busy. Please try again.');
      }

      const data = await res.json();
      setResponse(data.text);
    } catch (e) { 
      console.error(e); 
      setError(e instanceof Error ? e.message : 'Error connecting to AI');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: '#f0f2f5', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        
        {/* 1. Header Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar sx={{ bgcolor: '#1a237e', width: 60, height: 60, mx: 'auto', mb: 2 }}>
            <SmartToyIcon sx={{ fontSize: 35 }} />
          </Avatar>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a237e' }}>
            Startup AI Consultant
          </Typography>
          <Typography variant="body1" sx={{ color: '#546e7a', mt: 1 }}>
            Ask anything about funding, registration, or business growth.
          </Typography>
        </Box>

        {/* 2. Response Area */}
        <Paper elevation={0} sx={{ 
          p: 4, mb: 4, minHeight: '300px', 
          borderRadius: 4, bgcolor: '#ffffff',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          border: '1px solid #e0e0e0',
          position: 'relative'
        }}>
          {!response && !loading && (
            <Box sx={{ textAlign: 'center', mt: 8, opacity: 0.5 }}>
              <AutoAwesomeIcon sx={{ fontSize: 50, mb: 1 }} />
              <Typography>Your AI-powered startup guide is ready to help.</Typography>
            </Box>
          )}

          {loading ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
              <CircularProgress size={40} thickness={5} sx={{ mb: 2 }} />
              <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                Consulting Startup Navigator AI...
              </Typography>
            </Box>
          ) : (
            response && (
              <Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Chip label="AI Response" color="primary" size="small" sx={{ fontWeight: 'bold' }} />
                </Box>
                <Typography sx={{ 
                  whiteSpace: 'pre-wrap', 
                  lineHeight: 1.8, 
                  color: '#2c3e50',
                  fontSize: '1.05rem'
                }}>
                  {response}
                </Typography>
              </Box>
            )
          )}
        </Paper>

        {/* 3. Search Bar Area */}
        <Paper elevation={6} sx={{ 
          p: 1, borderRadius: 10, display: 'flex', alignItems: 'center', 
          bgcolor: 'white', border: '1px solid #1a237e' 
        }}>
          <TextField 
            fullWidth 
            placeholder="e.g., How to get DPIIT recognition?" 
            variant="standard"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && askAI()}
            sx={{ 
              ml: 3, flex: 1, 
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottom: "none" },
              "& input": { color: 'black' } // Visibility Fix
            }}
          />
          <Button 
            variant="contained" 
            onClick={askAI}
            disabled={loading}
            sx={{ 
              borderRadius: 8, px: 4, py: 1.2, 
              bgcolor: '#1a237e', fontWeight: 'bold',
              '&:hover': { bgcolor: '#0d1240' }
            }}
            startIcon={<SendIcon />}
          >
            Ask
          </Button>
        </Paper>

        {/* 4. History Chips Section */}
        {history.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, mb: 2 }}>
              <HistoryIcon sx={{ color: '#546e7a', fontSize: 20 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#546e7a' }}>
                RECENT QUERIES
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {history.map((item, index) => (
                <Chip 
                  key={index} 
                  label={item} 
                  onClick={() => setInput(item)}
                  sx={{ 
                    bgcolor: 'white', border: '1px solid #e0e0e0', 
                    '&:hover': { bgcolor: '#e8eaf6', borderColor: '#1a237e' } 
                  }} 
                />
              ))}
            </Box>
          </Box>
        )}

      </Container>

      {/* Snackbar for Notifications */}
      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="error" variant="filled">
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}