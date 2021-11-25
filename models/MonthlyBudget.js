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
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const MonthlyBudget = mongoose.model('MonthlyBudget', monthlyBudgetSchema);

module.exports = MonthlyBudget;
