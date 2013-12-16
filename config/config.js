var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'whosin'
    },
    port: 3000,
    db: 'mongodb://localhost/whosin-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'whosin'
    },
    port: 3000,
    db: 'mongodb://localhost/whosin-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'whosin'
    },
    port: 4016,
    db: 'mongodb://localhost/whosin-production'
  }
};

module.exports = config[env];
