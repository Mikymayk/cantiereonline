import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 });
  }

  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json({ error: 'Missing OAuth credentials configuration' }, { status: 500 });
  }

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await response.json();

    if (data.error) {
        return NextResponse.json({ error: data.error_description || 'Unknown GitHub Error' }, { status: 400 });
    }

    const token = data.access_token;
    const provider = 'github';

    // Construct the standard Decap CMS authorization message
    const message = `authorization:${provider}:success:${JSON.stringify({
      token: token,
      provider: provider,
    })}`;

    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Auth Success</title>
        <style>
          body { font-family: sans-serif; text-align: center; padding: 50px; }
          .success { color: green; font-weight: bold; font-size: 1.2em; }
        </style>
      </head>
      <body>
      <div class="success">✅ Login Successful!</div>
      <p>Closing window...</p>
      <script>
        const message = '${message}';

        // Aggressive message sender to overcome race conditions
        const interval = setInterval(() => {
           if (window.opener) {
             window.opener.postMessage(message, '*');
             console.log("Message sent to opener");
           }
        }, 500);

        // Stop sending and close after 4 seconds
        setTimeout(() => {
           clearInterval(interval);
           window.close();
        }, 4000);
      </script>
      </body>
      </html>
    `;

    return new NextResponse(content, {
      headers: { 'Content-Type': 'text/html' },
    });

  } catch (error) {
    console.error('OAuth Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}