const createProxyMiddleware = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(["/", "/auth/google"],
    createProxyMiddleware('/api/', {
      target: process.env.PROD ? `http://${process.env.BACKEND_HOST}:5000` : "http://localhost:5000",
    })
  );
};
