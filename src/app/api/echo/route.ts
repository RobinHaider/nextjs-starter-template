import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  //   const name = searchParams.get('name');
  //   const instrument = searchParams.get('instrument');

  //   return NextResponse.json({
  //     message: `Hello ${name}! I see you play the ${instrument}.`,
  //   });

  // echo back the query string
  const obj = Object.fromEntries(searchParams.entries());
  return NextResponse.json(obj);
}
