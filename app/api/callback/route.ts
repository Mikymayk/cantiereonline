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
      <body>
      <script>
        const receiveMessage = () => {
          if (window.opener) {
            // We target the production origin specifically for security and reliability.
            // If you are testing locally (localhost), you might need to adjust this or use '*' strictly for development.
            // Given the user is testing on production (cantiereonline.it), this is correct.
            const targetOrigin = "https://www.cantiereonline.it";

            // Send the message expected by Decap CMS
            window.opener.postMessage('${message}', targetOrigin);

            console.log("Authentication successful, message sent to " + targetOrigin);

            // Close the window after a short delay
            setTimeout(() => {
                window.close();
            }, 200);
          } else {
             document.body.innerHTML = "Authentication successful. You can close this window.";
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