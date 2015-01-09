var express = require('express');
var curl = require('curlrequest');
var router = express.Router();


var options = { url: 'http://api.popshops.com/v3/products.json?catalog=db46yl7pq0tgy9iumgj88bfj7&account=ezwzeo9wixt32s379knqt0084&keyword_brand=gucci', include: true };

curl.request(options, function (err, parts) {
    parts = parts.split('\r\n');
    var data = parts.pop()
      , head = parts.pop();
    console.log(data);
    console.log(head);
	router.get('/', function(req, res) {
  		res.render('index', { title: 'Ninfuku', data: data });
	});
});

/* GET home page. */


module.exports = router;
