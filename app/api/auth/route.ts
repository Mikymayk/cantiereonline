import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get('provider');

  // Decap CMS sends 'provider=github'
  if (provider && provider !== 'github') {
    return NextResponse.json({ error: 'Unsupported provider' }, { status: 400 });
  }

  const clientId = process.env.OAUTH_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json({ error: 'Missing OAUTH_CLIENT_ID configuration' }, { status: 500 });
  }

  const redirectUri = 'https://github.com/login/oauth/authorize';
  const params = new URLSearchParams({
    client_id: clientId,
    scope: 'repo,user', // 'repo' grants full access to private and public repositories.
    // We do not enforce redirect_uri here so GitHub uses the one configured in the OAuth App.
    // It should be configured to: https://your-domain.com/api/callback
  });

  return NextResponse.redirect(`${redirectUri}?${params.toString()}`);
}