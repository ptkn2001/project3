import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($userName: String!) {
    user(userName: $userName) {
      _id
      userName
      email
    }
  }
`;
export const QUERY_CATEGORY = gql`
  query categories {
    categories {
     _id
     name
     }
  }
`;

export const QUERY_EXPENSE = gql`
  query expenses {
    expenses {
     _id
     description
     amount
     date
     category {
       _id
       name
     }
    }
  }
`;

