const httpProxy = require('http-proxy');
const http = require('http');

const proxy = httpProxy.createServer();
const reactFrontendUrl = 'http://localhost:3000';
const apiUrl = 'http://localhost:4000';
const apiPrefix = '/api';
const port = 80;

http.createServer((req, res) => {
    let target = reactFrontendUrl; // url by default (react frontend with static files)
    if (req.url.startsWith(apiPrefix)) { // if request starts with localhost:80/api/*
      req.url = req.url.replace(apiPrefix, '/')
      target = apiUrl;
    }
    proxy.web(req, res, { target }); // return proxied data

    // If requested url doesn't respond handle error
    proxy.on('error', (error) => {
      console.error(error); // log
      res.end(error.message); // return error message instead of proxied webpage
    })
}).listen(port, () => {
  console.log(`Proxy server working on port 80`)
});