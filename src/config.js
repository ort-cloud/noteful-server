module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || "postgresql://ort_cloud:order66@localhost/noteful-server",
  TEST_DB_URL: process.env.TEST_DB_URL || "postgresql://ort_cloud:order66@localhost/noteful-server-test"
};