import React from 'react';
import { QUERY_CATEGORY , QUERY_EXPENSE} from '../utils/queries';
import { useQuery } from '@apollo/client';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Signup';
import Extra from '../pages/Extra';
import Budget from '../pages/Budgets';
import Category from '../pages/Categories';
import Expense from '../pages/Expenses';
import Report from '../pages/Reports';


const Main = (props) => {
  const categoryData = useQuery(QUERY_CATEGORY);
  const categories = categoryData.data?.categories || [];

  const expenseData = useQuery(QUERY_EXPENSE);
  const expenses = expenseData.data?.expenses || [];

  switch (props.activePage) {
    case "Dashboard":
      return (
        <div><Dashboard /></div>
      );
    case "Budget":
      return (
        <div><Budget /></div>
      );
    case "Category":
      return (
        <div>
          {categoryData.loading ? (
            <div>Loading...</div>
          ) : (<Category categories={categories} />
          )}
        </div>
      );
    case "Expense":
      return (
        <div>
          {expenseData.loading ? (
            <div>Loading...</div>
          ) : (<Expense expenses={expenses} />
          )}
        </div>
      );
    case "Report":
      return (
        <div><Report /></div>
      );
    case "Login":
      return (
        <div><Login setLoginStatus={props.loginStatus} /></div>
      );
    case "Signup":
      return (
        <div><Signup setLoginStatus={props.loginStatus} /></div>
      );
    case "Extra":
      return (
        <div><Extra /></div>
      );
    default:
      return (
        <div><Dashboard /></div>
      );
  }
};

export default Main;