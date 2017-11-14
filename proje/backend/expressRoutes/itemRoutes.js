var express = require('express');
var app = express();
var itemRoutes = express.Router();

var Item = require('../models/Item');

itemRoutes.route('/add').post(function(req,res) {
	var item = new Item(req.body);
	item.save()
	.then(item =>{
		res.status(200).json({'item': 'Item added succesfully'})

	})
	.catch(err=>{
		res.status(400).send("unable to save to db");
	});
});

itemRoutes.route('/').get(function(req,res) {
	Item.find(function(err,items) {
		(err)?(console.log(err)):(res.json(items))
	});
});

itemRoutes.route('/edit/:id').get(function(req,res) {
	var id = req.params.id;
	Item.findById(id, function(err,item) {
		(err)?(console.log(err)):(res.json(item))
	});
});

//  Defined update route
itemRoutes.route('/update/:id').post(function (req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.name = req.body.name;
      item.price = req.body.price;

      item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
itemRoutes.route('/delete/:id').get(function (req, res) {
  Item.findByIdAndRemove({_id: req.params.id}, function(err, item){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = itemRoutes;


