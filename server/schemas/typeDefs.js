const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

  type Query {
    user(userName: String!): User
    users: [User]
    categories: [Category]
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
  }
`;

module.exports = typeDefs;
