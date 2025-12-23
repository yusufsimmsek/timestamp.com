import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  role: z.string().min(1),
  company: z.string().optional(),
  message: z.string().min(10),
  type: z.enum(['sponsor', 'speaker', 'general']),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // Log to console (in production, you'd save to database or send email)
    console.log('Contact Form Submission:', {
      ...validated,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Thank you! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

