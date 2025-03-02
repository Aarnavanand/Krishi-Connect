module.exports = {
  apps: [{
    name: 'fdss-backend',
    script: 'src/server/app.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
    },
  }],
};