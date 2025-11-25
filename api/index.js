export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.url === '/api/health') {
    res.status(200).json({ 
      status: 'OK', 
      message: 'SafeRidePro API is running',
      timestamp: new Date().toISOString()
    });
    return;
  }

  // Default response for all other routes
  res.status(200).json({ 
    message: 'SafeRidePro Taxi Service',
    status: 'active',
    contact: '+91 80153 55460'
  });
}