import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // Forward to Python Backend
        const backendFormData = new FormData();
        backendFormData.append('file', file);

        const backendUrl = process.env.BACKEND_URL || 'http://127.0.0.1:8000';

        try {
            const response = await fetch(`${backendUrl}/detect/file`, {
                method: 'POST',
                body: backendFormData,
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Backend Error:', errorText);
                throw new Error(`Backend responded with ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            return NextResponse.json(data);

        } catch (fetchError: any) {
            console.error('Failed to connect to backend:', fetchError);

            // Fallback for demo purposes if backend is down
            if (fetchError.cause?.code === 'ECONNREFUSED') {
                return NextResponse.json({
                    error: 'Detection Engine Offline',
                    details: 'Please start the backend service: cd backend && uv run uvicorn main:app --reload'
                }, { status: 503 });
            }
            throw fetchError;
        }

    } catch (error: any) {
        console.error('Scan Error:', error);
        return NextResponse.json({
            error: error.message || 'Internal Server Error'
        }, { status: 500 });
    }
}
