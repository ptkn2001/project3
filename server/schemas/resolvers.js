const { User, Category, Expense } = require('../models');
const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const resolvers = {
  Date: dateScalar,
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
    addExpense: async (parent, args) => {
      const expense = await Expense.create(args);
      return expense;
    },
    removeExpense: async (parent, {expenseId}) => {
      const expense = await Expense.findOneAndDelete({_id: expenseId})
      return expense;
    },
    updateExpense: async (parent, {expenseId, description, amount, category}) => {
      const expense = await Expense.findOneAndUpdate({_id: expenseId},
        {
          description: description,
          amount: amount,
          category: category,
        },
        { new: true }
        );
        return expense;
    }
  },
};

module.exports = resolvers;
