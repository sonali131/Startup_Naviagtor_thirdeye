import { 
  ClerkProvider, 
  SignInButton, 
  UserButton,
  Show
} from "@clerk/nextjs";

import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body style={{ margin: 0 }}suppressHydrationWarning={true}>
          <AppBar position="static" sx={{ bgcolor: '#1a237e' }}>
            <Container maxWidth="lg">
              <Toolbar disableGutters>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                  <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
                    STARTUP NAVIGATOR
                  </Link>
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Link href="/explore" style={{ color: 'white', textDecoration: 'none' }}>Explore</Link>
                  <Link href="/resources" style={{ color: 'white', textDecoration: 'none' }}>Resources</Link> 
                  <Link href="/search" style={{ color: 'white', textDecoration: 'none' }}>AI Search</Link>
                  <Link href="/admin" style={{ color: 'white', textDecoration: 'none' }}>Admin</Link>
                  <Link href="/about" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>About</Link>
            <Link href="/contact" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Contact</Link>
                  
                  {/* Clerk Components */}
                  <Show when="signed-out">
                    <SignInButton mode="modal">
                      <Button variant="contained" color="secondary">Login</Button>
                    </SignInButton>
                  </Show>

                  <Show when="signed-in">
                    <UserButton />
                  </Show>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}