var request = require('request');
module.exports = {
  // calculate: function(subtotal, state, done) {
  //   request.post({
  //     url: 'https://some-tax-service.com/request',
  //     method: 'POST',
  //     json: {
  //       subtotal: subtotal // added the subtotal in the request payload
  //     }
  //   }, function(error, response, body) {
  //     done(body);
  //   });
  // }

  calculate: function(subtotal, state, done) {
    if (state !== 'CA') {
      done({ amount: 0 });
    }

    request.post({
      url: 'https://some-tax-service.com/request',
      method: 'POST',
      json: {
        subtotal: subtotal
      }
    }, function(error, response, body) {
      done(body);
    });
  }
};
