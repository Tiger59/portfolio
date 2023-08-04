const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
 
};

module.exports = function(app) {
  app.use(
    "/api/v2/**",
    createProxyMiddleware({
      target: "https://note.com",
      changeOrigin: true,
      secure: false
    })
  );
  }