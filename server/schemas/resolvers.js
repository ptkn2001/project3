const { AuthenticationError } = require('apollo-server-express');
const { User, Category } = require('../models');
const { signToken } = require('../utils/auth');

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
  },
};

module.exports = resolvers;
