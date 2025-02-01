import { NextResponse } from 'next/server';

export async function GET() {
  // Fetch appointments from the database
  return NextResponse.json([{ id: 1, patient: 'John Doe', date: '2023-10-15' }]);
}