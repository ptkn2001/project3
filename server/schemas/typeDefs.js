const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    password: String
  }

  type Query {
    user(username: String!): User
    users: [User]
  }

  type Mutation {
    addUser(
      userName: String!
      email: String!
      password: String!
    ): User
  }
`;

module.exports = typeDefs;
