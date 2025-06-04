import { NextRequest, NextResponse } from 'next/server';

interface WaitlistData {
    name: string;
    email: string;
    role: string;
    company: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: WaitlistData = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.role || !body.company) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Here you would normally:
        // 1. Store the data in your database (Supabase)
        // 2. Send a confirmation email via Postmark
        // 
        // For now, we'll simulate success and log the data
        console.log('Waitlist submission:', {
            ...body,
            timestamp: new Date().toISOString(),
        });

        // TODO: Integrate with Supabase
        // const { data, error } = await supabase
        //   .from('waitlist')
        //   .insert([{
        //     name: body.name,
        //     email: body.email,
        //     role: body.role,
        //     company: body.company,
        //     created_at: new Date().toISOString(),
        //   }]);

        // TODO: Send confirmation email via Postmark
        // await sendConfirmationEmail(body.email, body.name);

        return NextResponse.json(
            {
                message: 'Successfully joined the waitlist!',
                success: true
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Waitlist API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
    );
} 