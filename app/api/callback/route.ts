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

    // Decap CMS expects a message in a specific format via postMessage
    // 'authorization:github:success:{"token":"..."}'
    const message = `authorization:github:success:${JSON.stringify({
      token: token,
      provider: 'github',
    })}`;

    const content = `
      <!DOCTYPE html>
      <html>
      <body>
      <script>
        const receiveMessage = () => {
          window.opener.postMessage(
            '${message}',
            '*'
          );
          window.close();
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