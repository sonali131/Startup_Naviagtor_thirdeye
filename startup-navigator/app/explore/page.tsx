"use client";
import { useEffect, useState } from 'react';
import { 
  Container, 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  Box, 
  CircularProgress,
  Paper
} from '@mui/material';
import Grid from '@mui/material/Grid'; // Using Grid2 for TS compatibility

type Resource = {
  id: string | number;
  category: string;
  title: string;
  content: string;
};

export default function ExplorePage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/resources')
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Server returned status ${res.status}`);
        }
        return res.json();
      })
      .then(data => { 
        if (Array.isArray(data)) {
          setResources(data); 
        }
        setLoading(false); 
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <CircularProgress />
    </Box>
  );

  return (
    <Box sx={{ bgcolor: '#f9fafb', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        {/* Main Title - Explicit Dark Color for Visibility */}
        <Typography 
          variant="h4" 
          sx={{ fontWeight: '800', color: '#111827', mb: 1 }}
        >
          Startup Knowledge Base
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ color: '#4b5563', mb: 5, fontSize: '1.1rem' }}
        >
          Explore topics on Funding, Legal Compliance, Marketing, and AI tools for your business.
        </Typography>

        {/* Cards Grid */}
        <Grid container spacing={3}>
          {resources.length > 0 ? (
            resources.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  borderRadius: 3, 
                  bgcolor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': { 
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  } 
                }}>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Chip 
                      label={item.category || 'General'} 
                      color="primary" 
                      size="small" 
                      sx={{ mb: 2, fontWeight: '600' }} 
                    />
                    <Typography 
                      variant="h6" 
                      sx={{ fontWeight: '700', color: '#111827', mb: 1.5, lineHeight: 1.3 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ color: '#374151', lineHeight: 1.6 }}
                    >
                      {item.content && item.content.length > 130 
                        ? `${item.content.substring(0, 130)}...` 
                        : item.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid size={{ xs: 12 }}>
              <Paper sx={{ p: 4, textAlign: 'center', bgcolor: '#ffffff', borderRadius: 2 }}>
                <Typography sx={{ color: '#374151', fontWeight: '500' }}>
                  No resources found in database yet.
                </Typography>
                <Typography variant="body2" sx={{ color: '#6b7280', mt: 1 }}>
                  Go to <b>/admin</b> page to add new articles!
                </Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}