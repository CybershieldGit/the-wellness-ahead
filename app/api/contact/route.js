import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      name,
      company,
      email,
      phone,
      website,
      businessType,
      serviceRequired,
      projectStage,
      approximateRequirement,
      description
    } = data;

    // Basic validation
    if (!name || !company || !email || !businessType || !serviceRequired || !projectStage || !description) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;

    // If webhook is configured, forward to Google Apps Script
    if (webhookUrl && webhookUrl.startsWith('http')) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
          name,
          company,
          email,
          phone: phone || 'N/A',
          website: website || 'N/A',
          businessType,
          serviceRequired,
          projectStage,
          approximateRequirement: approximateRequirement || 'N/A',
          description
        }),
      });

      if (!response.ok) {
        console.error('Google Sheet Webhook returned an error:', await response.text());
      }
    } else {
      // If webhook is not yet set up, log in dev console so leads are not lost during testing
      console.log('Lead Submission Received (Webhook not yet configured):', data);
    }

    return NextResponse.json(
      { success: true, message: 'Enquiry submitted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
