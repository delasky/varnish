// enable babel transpiling for the rest of the codebase (reads .babelrc)
require('babel-core/register');

// require the project
var server = require('./server');

// start the server
server.listen();