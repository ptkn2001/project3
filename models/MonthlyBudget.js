const mongoose = require('mongoose');

const { Schema } = mongoose;

const monthlyBudgetSchema = new Schema({
  description: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
});

const Expense = mongoose.model('MonthlyBudget', monthlyBudgetSchema);

module.exports = MonthlyBudget;
