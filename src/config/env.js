export const ENV = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "Vyranza",
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/vyranza",
  JWT_SECRET: process.env.JWT_SECRET || "default_jwt_secret_key",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
};
