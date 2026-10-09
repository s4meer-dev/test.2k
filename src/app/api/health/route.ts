import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const uptimeSeconds = Math.floor(process.uptime());
  const memoryUsage = process.memoryUsage();

  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: `${uptimeSeconds}s`,
    environment: process.env.NODE_ENV ?? 'development',
    system: {
      heapUsedMb: Math.round((memoryUsage.heapUsed / 1024 / 1024) * 100) / 100,
      heapTotalMb: Math.round((memoryUsage.heapTotal / 1024 / 1024) * 100) / 100,
      rssMb: Math.round((memoryUsage.rss / 1024 / 1024) * 100) / 100,
    },
  });
}
