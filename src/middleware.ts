import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // if(request.url.includes('/api/')) {}

  const regx = new RegExp('/api/*');
  if (regx.test(request.url)) {
  }

  console.log('middleware!!');

  console.log(request.url);
  console.log(request.method);

  const origin = request.headers.get('origin');
  console.log(origin);
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
