export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;

  if (!clientId) {
    res.status(500).send('OAuth client ID not configured');
    return;
  }

  const scope = req.query.scope || 'repo,user';
  const authUrl = new URL('https://github.com/login/oauth/authorize');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('scope', scope);

  res.redirect(302, authUrl.toString());
}
