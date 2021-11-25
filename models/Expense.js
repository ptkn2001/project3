const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const expenseSchema = new Schema({
    description: {
      type: String
    },
    amount: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp)
    },
    category: {  
      type: Schema.Types.ObjectId,
      ref: 'Category'
    },
    user:{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
    
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
