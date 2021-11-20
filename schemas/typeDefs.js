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
    user: User
  }

  type MonthlyBudget {
    _id: ID
    description: String
    amount: String!
    category: Category
    user: User
  }



  type Query {
    user(userName: String!): User
    users: [User]
    categories: [Category]
    expenses: [Expense]
    monthlyBudget(category: ID!): MonthlyBudget
    monthlyBudgets: [MonthlyBudget]
    
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
      user: ID!
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
    addMonthlyBudget(
      description: String
      amount: String!
      category: ID!
      user: ID!
     ): MonthlyBudget 
    updateMonthlyBudget(
     monthlyBudgetId: ID!
      description: String
      amount: String!
      category: ID!
     ): MonthlyBudget
    removeMonthlyBudget(
      monthlyBudgetId: ID!
     ): MonthlyBudget
  }
`;

module.exports = typeDefs;