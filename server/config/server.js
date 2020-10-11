module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'c0efd8f74dc3fd0cf3f570f3a2aa0fd5'),
    },
  },
});
