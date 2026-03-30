const express = require('express');
const cors = require('cors');
const errorHandler = require('../middleware/errorHandler');
const { sendError } = require('../utils/response');
const { getAllowedOrigins } = require('./runtime');

/**
 * Create and configure Express app
 * Separated from server startup for better testing and modularity
 */
const createApp = () => {
  const app = express();
  const allowedOrigins = getAllowedOrigins();

  // Middleware
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
          return;
        }

        const corsError = new Error('CORS origin not allowed');
        corsError.statusCode = 403;
        callback(corsError);
      },
      credentials: true,
      methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  app.use(express.json({ limit: '16kb' }));
  app.use(express.urlencoded({ extended: true, limit: '16kb' }));

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.json({
      status: 'Server is running',
      timestamp: new Date().toISOString(),
    });
  });

  // API Routes
  app.use('/api/auth', require('./routes/auth'));
  app.use('/api/users', require('./routes/users'));
  app.use('/api/conversations', require('./routes/conversations'));
  app.use('/api/messages', require('./routes/messages'));

  // 404 handler
  app.use((req, res) => {
    res.status(404).json(sendError(`Route ${req.originalUrl} not found`, 404));
  });

  // Error handling middleware (must be last)
  app.use(errorHandler);

  return app;
};

module.exports = createApp;
