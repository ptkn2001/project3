const mongoose = require('mongoose');

const { Schema } = mongoose;

const monthlyTotalBudgetSchema = new Schema({
  description: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  }
    
});

const Expense = mongoose.model('MonthlyTotalBudget', monthlyTotalBudgetSchema);

module.exports = MonthlyTotalBudget;
