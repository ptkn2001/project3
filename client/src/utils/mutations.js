import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
        _id
        name
    }
  }
`;

export const UPDATE_CATEGORY =gql`
mutation updateCategory($categoryId: ID!, $name : String!) {
  updateCategory( categoryId:$categoryId, name:$name) {
    name
  }
}
`;

export const ADD_EXPENSE= gql`
  mutation addExpense($description:String!, $amount:String!, $categoryId: ID!, $userId:ID!) {
    addExpense(description:$description, amount:$amount, category:$categoryId, user:$userId) {
        _id
        description
        amount
        category
        {
          _id
          name
        }
        user
        {
          _id
        }
    }
  }
`;

export const REMOVE_EXPENSE = gql `
  mutation removeExpense ($expenseId: ID!) {
    removeExpense (expenseId: $expenseId) {
      _id
    }
  }
`;


export const ADD_MONTHLY_BUDGET = gql `
  mutation addMonthlyBudget ($description: String, $amount: String!, $categoryId: ID!, $userId: ID!) {
    addMonthlyBudget(description: $description, amount: $amount, category: $categoryId, user: $userId ) {
      description
      amount
      category {
        _id
        name
      }
    }
  }
`;

export const REMOVE_MONTHLY_BUDGET = gql `
  mutation removeMonthlyBudget ($monthlyBudgetId: ID!) {
    removeMonthlyBudget (monthlyBudgetId: $monthlyBudgetId) {
      _id
    }
  }
`;