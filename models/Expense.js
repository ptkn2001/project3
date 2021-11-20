const mongoose = require('mongoose');

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
      default: Date.now
    },
    category: {  
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
