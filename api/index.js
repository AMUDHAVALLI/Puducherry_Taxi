import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'SafeRidePro API is running' });
});

// Serve static files
const distPath = resolve(__dirname, '..', 'dist', 'public');

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  
  // Catch-all handler for SPA
  app.get('*', (req, res) => {
    res.sendFile(resolve(distPath, 'index.html'));
  });
} else {
  app.get('*', (req, res) => {
    res.json({ message: 'SafeRidePro - Build files not found' });
  });
}

export default app;