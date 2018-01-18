
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CustomSchema = new Schema({
  name: {
    type: String,
    required: 'Please Enter Name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  phone:{
    type: Number,
    required: 'Please Enter Phone'
  },
  email:{
    type: String,
    required: 'Please Enter Email'
  },
  address:{
    type: String   

  }

},{
    versionKey: false // You should be aware of the outcome after set to false
   } );



module.exports = mongoose.model('Custom', CustomSchema);