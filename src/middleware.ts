import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname.startsWith('/api/graphql')) {
//       return NextResponse.rewrite(new URL('/about-2', request.url))
//     }
//   return NextResponse.redirect(new URL('/about-2', request.url));
// }

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === 'admin',
    },
  }
);

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/graphql'],
};
