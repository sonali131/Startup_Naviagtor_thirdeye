"use client";
import { Container, Typography, Button, Box, Card, CardContent, Grid } from '@mui/material'; 
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Box>
      
      <Box sx={{ bgcolor: '#f5f5f5', py: 10, textAlign: 'center', borderBottom: '1px solid #ddd' }}>
        <Container maxWidth="md">
          {/* ERROR FIXED: fontWeight moved to sx */}
          <Typography variant="h2" color="primary" sx={{ fontWeight: '800', mb: 2 }}>
            Master Your Startup Journey
          </Typography>
          
          {/* ERROR FIXED: paragraph replaced with mb in sx */}
          <Typography variant="h5" color="textSecondary" sx={{ mb: 4 }}>
            From registration to fundraising—get AI-powered guidance for every step of your business growth.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              size="large" 
              component={Link} 
              href="/explore" 
              startIcon={<RocketLaunchIcon />}
            >
              Explore Topics
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              component={Link} 
              href="/search" 
              startIcon={<SearchIcon />}
            >
              Try AI Search
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        
        <Grid container spacing={4}>
          {[
            { title: "Legal & Compliance", desc: "Understand GST, company registration, and laws.", icon: <MenuBookIcon color="primary" /> },
            { title: "Funding Guide", desc: "Learn how to pitch to VCs and raise capital.", icon: <RocketLaunchIcon color="primary" /> },
            { title: "AI Tools", desc: "Discover AI workflows to automate your business.", icon: <SearchIcon color="primary" /> }
          ].map((item, index) => (
            // ERROR FIXED: Using Grid2 size instead of item/xs/md
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 2, borderRadius: 3, boxShadow: 2 }}>
                <CardContent>
                  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}