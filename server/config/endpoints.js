var AWS = require('aws-sdk');
var config;

try {
  config = require("./config.js");
} catch(e) {
  console.log(e);
}

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID || config.accessKeyId,
  secretAccessKey:  process.env.SECRET_ACCESS_KEY || config.secretAccessKey,
  region: 'us-west-2'
});

//AWS cloudsearchdomain configuration
exports.cloudsearchdomain = new AWS.CloudSearchDomain({
  endpoint: 'https://search-csaproduct-ynu7562jrq54o6xnheotnbmrpi.us-east-1.cloudsearch.amazonaws.com',
  apiVersion: '2013-01-01'
});

exports.domain = "imorgo-search";
