/**
 * Mailchimp Integration
 * Handles newsletter subscriptions
 */

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER;

if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER) {
  console.warn('⚠️ Mailchimp credentials not fully configured');
}

export async function subscribeToNewsletter(email) {
  if (!email || !MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER) {
    throw new Error('Missing Mailchimp configuration or email');
  }

  const url = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

  const data = {
    email_address: email,
    status: 'pending', // User needs to confirm subscription
    tags: ['newsletter', 'artedesign'],
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      // Handle specific errors
      if (result.title === 'Member Exists') {
        return {
          success: true,
          message: 'Email already subscribed',
          status: 'already_subscribed',
        };
      }

      throw new Error(result.detail || 'Failed to subscribe');
    }

    return {
      success: true,
      message: 'Subscription successful! Check your email for confirmation.',
      status: 'subscribed',
      data: result,
    };
  } catch (error) {
    console.error('Mailchimp subscription error:', error);

    return {
      success: false,
      message: error.message || 'Subscription failed',
      status: 'error',
      error: error.message,
    };
  }
}

export async function getSubscriberCount() {
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER) {
    return null;
  }

  const url = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch list stats');
    }

    const data = await response.json();
    return data.stats.member_count;
  } catch (error) {
    console.error('Error fetching subscriber count:', error);
    return null;
  }
}
