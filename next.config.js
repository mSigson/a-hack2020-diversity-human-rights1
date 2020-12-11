const path = require("path");

const dotEnvResult = require("dotenv").config({
  path: __dirname + "/.env.build",
});

const dev = process.env.NODE_ENV === "development";

if (dev && dotEnvResult.error) {
  throw dotEnvResult.error;
}

module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
    API_URL: dev ? "https://convoy.ngrok.io" : process.env.API_URL,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: "openid email profile",
    REDIRECT_URI: "https://convoy.ngrok.io/api/callback",
    POST_LOGOUT_REDIRECT_URI: "https://convoy.ngrok.io",
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: 7200,
  },
  webpack: (config) => {
    config.resolve.alias["~"] = path.resolve(__dirname);
    return config;
  },
};
