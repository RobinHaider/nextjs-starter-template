import { NextRequest, NextResponse } from 'next/server';
import { limiter } from '../config/limiter';

export async function GET(req: NextRequest) {
  const origin = req.headers.get('origin');

  const remainingRequests = await limiter.removeTokens(1);
  console.log('remainingRequests: ', remainingRequests);

  if (remainingRequests < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: 'Too Many Requests',
      headers: {
        'Access-Control-Allow-Origin': origin || '*',
        'Content-Type': 'application/json',
      },
    });
  }

  return NextResponse.json({ message: 'Hello World!' });
}
