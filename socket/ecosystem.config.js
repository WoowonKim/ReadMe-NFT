module.exports = [{
  script: 'dist/server.js',
  name: 'NFTeam_Socket_Server',
  exec_mode: 'cluster',
  instances: 2,
  env_production: {
    NODE_ENV: "production"
  },
}]
