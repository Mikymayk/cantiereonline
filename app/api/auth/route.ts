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

  // We explicitly define the redirect_uri to match exactly what is configured in GitHub App
  // This helps avoid mismatches if the request comes from different subdomains/protocols
  const redirectUri = 'https://www.cantiereonline.it/api/callback';

  const target = 'https://github.com/login/oauth/authorize';
  const params = new URLSearchParams({
    client_id: clientId,
    scope: 'repo,user',
    redirect_uri: redirectUri
  });

  return NextResponse.redirect(`${target}?${params.toString()}`);
}