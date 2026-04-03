import { subscribeToNewsletter } from '../../lib/mailchimp';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid email address',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Subscribe to newsletter
    const result = await subscribeToNewsletter(email);

    // Return appropriate status code
    const statusCode = result.success ? 200 : 400;

    return new Response(JSON.stringify(result), {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Newsletter API error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Server error',
        error: error.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
