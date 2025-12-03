import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();

    // In a real app, this would push to Kafka/ClickHouse
    console.log('[TELEMETRY RECEIVED]', data);

    // Simple rule engine simulation
    if (data.process_name === 'powershell.exe' && data.parent_name === 'cmd.exe') {
        console.log('[ALERT TRIGGERED] Suspicious Process Chain');
        // Here we would trigger the alert creation logic
    }

    return NextResponse.json({ status: 'received' });
}
