// set up

var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration =================
mongoose.connect('mongodb://silo.cs.indiana.edu:23334/cricket');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// define model =================
var Task = mongoose.model('Task', { text : String });

// routes ======================================================================

// get all products
app.get('/api/products', function(req, res) {
  Task.find(function(err, products) {
    if (err) res.send(err)
    res.json(products); // return all products in JSON format
    });
  });

// create product and send back all products after creation
app.post('/api/products', function(req, res) {
  // create a product, information comes from AJAX request from Angular
  Task.create({ text : req.body.text, done : false},
              function(err, product) {
                if (err) res.send(err);
                // get and return all the products after you create another
                Task.find(function(err, products) {
                  if (err) res.send(err)
                  res.json(products);
                });
              });
  });

// delete a product
app.delete('/api/products/:product_id', function(req, res) {
  Task.remove({ _id : req.params.product_id},
              function(err, product) {
                if (err) res.send(err);
                // get and return all the products after you create another
                Task.find(function(err, products) {
                            if (err) res.send(err)
                            res.json(products);
                          });
              });
  });

var port = process.env.PORT || 23333; // set the port

// listen (start app with node server.js)
// ======================================
app.listen(port);
console.log("App listening on port " + port);
