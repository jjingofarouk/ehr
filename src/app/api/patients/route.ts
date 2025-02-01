import { NextResponse } from 'next/server';

export async function GET() {
  // Fetch patients from the database
  return NextResponse.json([{ id: 1, name: 'John Doe' }]);
}