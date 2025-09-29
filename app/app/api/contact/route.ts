
import { NextRequest, NextResponse } from 'next/server';

// This API route is disabled - using PHP backend instead
export async function POST(request: NextRequest) {
  return NextResponse.json(
    { error: 'API moved to PHP backend' },
    { status: 404 }
  );
}

export async function GET(request: NextRequest) {
  return NextResponse.json(
    { error: 'API moved to PHP backend' },
    { status: 404 }
  );
}
