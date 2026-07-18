
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth, request) => {
  const { nextUrl } = request;
  
  // Public list: Sirf /admin ko protect karenge, baaki sab open rakhenge test ke liye
  const isAdminRoute = nextUrl.pathname.startsWith('/admin');

  if (isAdminRoute) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Next.js internals skip karein
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};