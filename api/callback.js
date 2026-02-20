// OAuth callback handler for Sveltia CMS GitHub authentication
export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    res.status(400).send('Missing authorization code');
    return;
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.OAUTH_GITHUB_CLIENT_ID,
      client_secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await tokenResponse.json();

  if (data.error) {
    res.status(401).send('Authorization failed: ' + (data.error_description || data.error));
    return;
  }

  const content = JSON.stringify({ token: data.access_token, provider: 'github' });

  res.setHeader('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html>
<html><body><script>
(function() {
  var content = ${JSON.stringify(content)};
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:' + content,
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script></body></html>`);
}
