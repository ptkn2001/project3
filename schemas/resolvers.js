const { User, Category, Expense, MonthlyBudget } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    categories: async () => {
      return Category.find();
    },
    expenses: async () => {
      return Expense.find().populate('Category');
    },
    monthlyBudget: async (parent, { monthlyBudgetId }) => {
      return MonthlyBudget.findOne({ monthlyBudgetId });
    },
    monthlyBudgets: async () => {
      return MonthlyBudget.find().populate('Category');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return { user };
    },
    addCategory: async (parent, args) => {
      const category = await Category.create(args);
      return category;
    },

    updateCategory: async (parent, { categoryId, name }) => {
      const category = await Category.findOneAndUpdate({ _id: categoryId },
        {
          name: name,
        },
        { new: true }
      );
      return category;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await User.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    
    removeUser: async (parent, { userId }) => {
      const user = await User.findOneAndDelete({ _id: userId })
      return user;
    },

    updateUser: async (parent, { userId, username, password, email }) => {
      const user = await User.findOneAndUpdate({ _id: userId },
        {
          username: username,
          password : password,
          email : email
        },
        { new: true }
      );
      return user;
    },

    addExpense: async (parent, args) => {
      const expense = await Expense.create(args);
      return expense;
    },
    removeExpense: async (parent, { expenseId }) => {
      const expense = await Expense.findOneAndDelete({ _id: expenseId })
      return expense;
    },
    updateExpense: async (parent, { expenseId, description, amount, category }) => {
      const expense = await Expense.findOneAndUpdate({ _id: expenseId },
        {
          description: description,
          amount: amount,
          category: category,
        },
        { new: true }
      );
      return expense;
    },
    addMonthlyBudget: async (parent, args) => {
      const monthlyBudget = await MonthlyBudget.create(args);
      return monthlyBudget;
    },
    removeMonthlyBudget: async (parent, args) => {
      const monthlyBudget = await MonthlyBudget.findOneAndDelete({ _id: monthlyBudgetId })
      return monthlyBudget;
    },
    updateMonthlyBudget: async (parent, { monthlyBudgetId, description, amount, category }) => {
      const monthlyBudget = await MonthlyBudget.
        findOneAndUpdate({ _id: monthlyBudgetId },
          {
            description: description,
            amount: amount,
            category: category,
          },
          { new: true }
        );
      return monthlyBudget;
    },
  }
};

module.exports = resolvers;
