"use client";
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
// Grid2 use karna Next.js 15+ ke liye mandatory hai error se bachne ke liye
import Grid from '@mui/material/Grid'; 
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HubIcon from '@mui/icons-material/Hub';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PsychologyIcon from '@mui/icons-material/Psychology'; // AI Icon
import TerminalIcon from '@mui/icons-material/Terminal'; // Software Icon
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'; // Automation
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'; // Software

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
      
      {/* 1. Centered Hero Section */}
      <Box sx={{ 
        bgcolor: '#f8fafc', 
        borderBottom: '1px solid #e2e8f0',
        py: { xs: 8, md: 10 },
        textAlign: 'center' // Center aligning all text
      }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: '#1a237e', fontWeight: 700, letterSpacing: 2, display: 'block' }}>
            ESTABLISHED 2024
          </Typography>
          <Typography variant="h1" sx={{ 
            fontWeight: 900, 
            color: '#0f172a', 
            fontSize: { xs: '2.5rem', md: '3.8rem' },
            lineHeight: 1.2,
            mt: 2, mb: 3
          }}>
            Helping founders <span style={{ color: '#1a237e' }}>build</span> the future of software & AI.
          </Typography>
          <Typography variant="h6" sx={{ color: '#475569', fontWeight: 400, lineHeight: 1.6, mb: 6 }}>
            Startup Navigator is a digital-first platform dedicated to providing entrepreneurs the tools, software expertise, and AI-support needed to scale.
          </Typography>

          {/* Centered AI & Software Icons Grid */}
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {[
              { icon: <PsychologyIcon sx={{ fontSize: 40 }} />, label: 'AI Powered' },
              { icon: <TerminalIcon sx={{ fontSize: 40 }} />, label: 'Software First' },
              { icon: <SettingsSuggestIcon sx={{ fontSize: 40 }} />, label: 'Automation' },
              { icon: <IntegrationInstructionsIcon sx={{ fontSize: 40 }} />, label: 'Smart Tech' }
            ].map((item, index) => (
              <Grid size={{ xs: 6, sm: 3 }} key={index}>
                <Box sx={{ 
                  p: 2, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  color: '#64748b'
                }}>
                  {item.icon}
                  <Typography variant="caption" sx={{ fontWeight: 700, mt: 1, textTransform: 'uppercase' }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 2. Impact Stats - Centered */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          {[
            { label: 'Startup Guides', value: '500+' },
            { label: 'Active Founders', value: '10k+' },
            { label: 'AI Queries Solved', value: '50k+' },
            { label: 'Tech Partners', value: '20+' },
          ].map((stat, i) => (
            <Grid size={{ xs: 6, md: 3 }} key={i}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#1a237e' }}>{stat.value}</Typography>
              <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 600 }}>{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider />

      {/* 3. Our Philosophy - Centered Stack */}
      <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: '#0f172a' }}>
            Why we do what we do.
          </Typography>
          <Typography variant="body1" sx={{ color: '#475569', mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
            Starting a business in India is hard. Between legal compliances, fundraising, and software choices, founders often lose focus. 
            We built Startup Navigator to be the &quot;GPS&quot; for your business.
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 6, alignItems: 'center' }}>
            {[
              { icon: <VerifiedUserIcon color="primary" />, title: 'Legal Transparency', desc: 'Simplified legal advice for DPIIT and MSME.' },
              { icon: <HubIcon color="primary" />, title: 'Ecosystem Access', desc: 'Connecting you with the right venture capital base.' },
              { icon: <SupportAgentIcon color="primary" />, title: '24/7 AI Support', desc: 'Always awake to help you with growth strategy.' }
            ].map((item, index) => (
              <Paper variant="outlined" key={index} sx={{ 
                p: 3, 
                display: 'flex', 
                gap: 3, 
                alignItems: 'center', 
                borderRadius: 3,
                width: '100%',
                maxWidth: '600px',
                textAlign: 'left'
              }}>
                {item.icon}
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                </Box>
              </Paper>
            ))}
          </Box>
      </Container>

      {/* 4. Core Values - Dark Centered Section */}
      <Box sx={{ bgcolor: '#0f172a', py: 10, color: 'white', textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 8 }}>
            Our Operating Principles
          </Typography>
          <Grid container spacing={3}>
             {[
               { t: 'Innovation First', d: 'Embracing AI and new software to solve business problems.' },
               { t: 'Founder Obsessed', d: 'Every feature is built to save a founder&apos;s time.' },
               { t: 'Radical Clarity', d: 'No corporate jargon. Just actionable startup advice.' }
             ].map((val, i) => (
               <Grid size={{ xs: 12, md: 4 }} key={i}>
                 <Box sx={{ 
                   p: 4, 
                   border: '1px solid rgba(255,255,255,0.1)', 
                   borderRadius: 4,
                   height: '100%' 
                 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: '#38bdf8', fontWeight: 800 }}>0{i+1}.</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>{val.t}</Typography>
                    <Typography sx={{ color: '#94a3b8' }}>{val.d}</Typography>
                 </Box>
               </Grid>
             ))}
          </Grid>
          
          <Box sx={{ mt: 8 }}>
             <RocketLaunchIcon sx={{ fontSize: 50, color: '#38bdf8', mb: 2 }} />
             <Typography variant="h6">Ready to launch your dream?</Typography>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}