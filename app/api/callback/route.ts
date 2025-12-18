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

    const message = `authorization:${provider}:success:${JSON.stringify({
      token: token,
      provider: provider,
    })}`;

    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Auth Success</title>
      </head>
      <body>
      <h3>Authentication Successful!</h3>
      <p>Sending credentials to the CMS...</p>
      <script>
        const receiveMessage = () => {
          if (window.opener) {
            console.log("Found opener, sending message...");
            // Sending to * to ensure delivery
            window.opener.postMessage('${message}', '*');

            // Close the window after a delay to ensure message is sent
            setTimeout(() => {
                console.log("Closing window...");
                window.close();
            }, 1000);
          } else {
             document.body.innerHTML += "<p style='color:red'>Error: Could not find the parent window (opener is null). Please ensure you did not block popups.</p>";
          }
        };
        receiveMessage();
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