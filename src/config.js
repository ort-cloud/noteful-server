module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://esjhcajwboixum:b5a625c9ae826d63724d51b7eb5f4c7507811f203cfda1607d8dc22f6eb3ab3a@ec2-184-72-236-57.compute-1.amazonaws.com:5432/dbf78c40nrngn",
  TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL ||
    "postgresql://ort_cloud:order66@localhost/noteful-server-test",
};
