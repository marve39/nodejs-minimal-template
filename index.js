const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to handle Coder's proxy headers
app.use((req, res, next) => {
  // Set proper headers for Coder's reverse proxy
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  next();
});

app.get('/', (req, res) => {
  const host = req.get('host');
  const protocol = req.protocol;
  res.send(`
    <h1>Hello World from DevContainer!</h1>
    <p>Running on Coder at: ${protocol}://${host}</p>
    <p>Workspace: ${process.env.CODER_WORKSPACE_NAME || 'N/A'}</p>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});