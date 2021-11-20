const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    userName: String
    email: String
    password: String
  }

  type Category {
    _id: ID
    name: String
  }

  type Expense {
    _id: ID
    description: String
    amount: String
    date: Date
    category: Category
  }

  type Query {
    user(userName: String!): User
    users: [User]
    categories: [Category]
    expenses: [Expense]
  }

  type Mutation {
    addCategory(
      name: String!
    ): Category
    addUser(
      userName: String!
      email: String!
      password: String!
    ): User
    addExpense(
      description: String
      amount: String!
      category: ID!
    ): Expense
    updateExpense(
      expenseId: ID!
      description: String
      amount: String!
      category: ID!
      ): Expense
    removeExpense(
      expenseId: ID!
      ): Expense
  }
`;

module.exports = typeDefs;