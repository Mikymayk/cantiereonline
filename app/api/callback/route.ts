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
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; padding: 40px; text-align: center; color: #333; }
          .success { color: #2e7d32; font-size: 24px; margin-bottom: 20px; }
          .status { margin-bottom: 30px; color: #666; }
          button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
        </style>
      </head>
      <body>
      <div class="success">✅ Authentication Successful!</div>
      <div id="status" class="status">Initializing handshake...</div>

      <script>
        const receiveMessage = () => {
          const statusDiv = document.getElementById("status");

          if (window.opener) {
            statusDiv.innerText = "Found parent window. Sending credentials...";
            console.log("Found opener, sending message...");

            // Sending to * to ensure delivery across protocols/subdomains
            window.opener.postMessage('${message}', '*');

            statusDiv.innerText = "Credentials sent! Closing window in 3 seconds...";

            // Close the window after a delay to ensure message is sent
            setTimeout(() => {
                console.log("Closing window...");
                window.close();
            }, 3000);
          } else {
             statusDiv.innerHTML = "<span style='color:red'>Error: Could not find the parent window.</span><br>Please ensure you did not block popups or use an incognito window that separates contexts.";
          }
        };
        receiveMessage();
      </script>

      <button onclick="window.close()">Close this window manually</button>
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