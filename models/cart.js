'use strict';
const mongoose = require('mongoose')
  , Schema = mongoose.Schema
  ;

var CartSchema = new mongoose.Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  total: {type: Number, default: 0},
  items: [{
    item: {type: Schema.Types.ObjectId, ref: 'Product'},
    quantity: {type: Number, default: 1},
    price: {type: Number, default: 0}
  }],
  cartState: String
}, {collection: 'Cart'});
module.exports = mongoose.model('Cart', CartSchema);
