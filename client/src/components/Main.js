import React from 'react';
import { QUERY_CATEGORY, QUERY_BUDGET, QUERY_EXPENSE } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Signup';
import Extra from '../pages/Extra';
import Budget from '../pages/Budgets';
import Category from '../pages/Categories';
import Expense from '../pages/Expenses';


const Main = (props) => {
  const userId = localStorage.getItem('user_id');

  const categoryData = useQuery(QUERY_CATEGORY);
  const categories = categoryData.data?.categories || [];
  const budgetData = useQuery(QUERY_BUDGET, { variables: { "user": userId}});
  const budgets = budgetData.data?.monthlyBudgets || [];
  const expenseData = useQuery(QUERY_EXPENSE, { variables: { "user": userId}});
  const expenses = expenseData.data?.expenses || [];

  switch (props.activePage) {
    case "Dashboard":
      return (
        <div>
          {categoryData.loading || budgetData.loading || expenseData.loading? (
            <div>Loading...</div>
          ) : (<Dashboard expenses={expenses} budgets={budgets} />
          )}
        </div>
      );
    case "Category":
      return (
        <div>
          {categoryData.loading || budgetData.loading || expenseData.loading? (
            <div>Loading...</div>
          ) : (<Category categories={categories} />
          )}
        </div>
      );
      case "Budget":
      return (
        <div>
          {categoryData.loading || budgetData.loading || expenseData.loading? (
            <div>Loading...</div>
          ) : (<Budget categories={categories} budgets={budgets} />
          )}
        </div>
      );
    case "Expense":
      return (
        <div>
          {categoryData.loading ? (
            <div>Loading...</div>
          ) : (<Expense categories={categories} expenses={expenses}/>
          )}
        </div>
      );
    case "Login":
      return (
        <div><Login/></div>
      );
    case "Signup":
      return (
        <div><Signup/></div>
      );
    case "Extra":
      return (
        <div><Extra /></div>
      );
    default:
      return null;
  }
};

export default Main;