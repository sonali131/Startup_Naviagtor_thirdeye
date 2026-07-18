
"use client";
import { useState, useEffect } from 'react';
import { 
  Container, Typography, Box, Paper, List, ListItem, 
  ListItemIcon, Divider, Chip, CircularProgress, Stack 
} from '@mui/material';

import Grid from '@mui/material/Grid'; 
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import MenuBookIcon from '@mui/icons-material/MenuBook';

type Resource = {
  id: string;
  title: string;
  category: string;
  content: string;
  created_at: string;
};

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/resources')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setResources(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ bgcolor: '#f4f6f8', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#1a237e', mb: 2 }}>
            Startup Resource Library
          </Typography>
          <Typography variant="h6" sx={{ color: '#546e7a', fontWeight: 400, maxWidth: '700px', mx: 'auto' }}>
            Official documents and compliance checklists to help you grow your business.
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            
            {/* Sidebar Categories */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid #e0e0e0', position: { md: 'sticky' }, top: 20 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1a237e' }}>Categories</Typography>
                <Stack spacing={1}>
                  {['Legal', 'Funding', 'Taxation', 'Growth'].map((cat) => (
                    <Box key={cat} sx={{ 
                      display: 'flex', alignItems: 'center', gap: 2, p: 1.5, borderRadius: 2, 
                      '&:hover': { bgcolor: '#e8eaf6' }, cursor: 'pointer' 
                    }}>
                      <FolderIcon color="primary" sx={{ fontSize: 20 }} />
                      <Typography sx={{ fontWeight: 500, fontSize: '0.95rem' }}>{cat}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            {/* Resources List */}
            <Grid size={{ xs: 12, md: 9 }}>
              <Paper elevation={0} sx={{ borderRadius: 4, border: '1px solid #e0e0e0', overflow: 'hidden' }}>
                <List disablePadding>
                  {resources.length > 0 ? (
                    resources.map((item, index) => (
                      <Box key={item.id}>
                        <ListItem sx={{ py: 3, px: { xs: 2, md: 4 }, alignItems: 'flex-start', display: 'flex', gap: 2 }}>
                          {/* Left Icon */}
                          <ListItemIcon sx={{ minWidth: 'auto', mt: 0.5 }}>
                            <Box sx={{ bgcolor: '#e3f2fd', p: 1.5, borderRadius: '12px', display: 'flex' }}>
                              <DescriptionIcon color="primary" />
                            </Box>
                          </ListItemIcon>
                          
                          {/* Content Section (Replaced ListItemText) */}
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#2c3e50', mb: 0.5, lineHeight: 1.3 }}>
                              {item.title}
                            </Typography>
                            
                            <Typography variant="body2" sx={{ color: '#546e7a', mb: 2, lineHeight: 1.6 }}>
                              {item.content.length > 150 ? `${item.content.substring(0, 150)}...` : item.content}
                            </Typography>
                            
                            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                              <Chip 
                                label={item.category} 
                                size="small" 
                                sx={{ fontWeight: 600, bgcolor: '#f0f4f8', color: '#1a237e' }} 
                              />
                              <Typography variant="caption" sx={{ color: '#90a4ae' }}>
                                {new Date(item.created_at).toLocaleDateString()}
                              </Typography>
                            </Stack>
                          </Box>
                        </ListItem>
                        {index < resources.length - 1 && <Divider sx={{ mx: 4 }} />}
                      </Box>
                    ))
                  ) : (
                    <Box sx={{ p: 10, textAlign: 'center' }}>
                      <MenuBookIcon sx={{ fontSize: 60, opacity: 0.1, mb: 2 }} />
                      <Typography variant="body1" color="textSecondary">No resources available yet.</Typography>
                    </Box>
                  )}
                </List>
              </Paper>
            </Grid>

          </Grid>
        )}
      </Container>
    </Box>
  );
}