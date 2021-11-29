import React from 'react';
import { QUERY_CATEGORY } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Signup';
import Extra from '../pages/Extra';
import Budget from '../pages/Budgets';
import Category from '../pages/Categories';
import Expense from '../pages/Expenses';


const Main = (props) => {
  const categoryData = useQuery(QUERY_CATEGORY);
  const categories = categoryData.data?.categories || [];

  switch (props.activePage) {
    case "Dashboard":
      return (
        <div><Dashboard /></div>
      );
    case "Budget":
      return (
        <div>
          {categoryData.loading? (
            <div>Loading...</div>
          ) : (<Budget categories={categories} />
          )}
        </div>
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
          {categoryData.loading ? (
            <div>Loading...</div>
          ) : (<Expense categories={categories}/>
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
      return (
        <div><Dashboard /></div>
      );
  }
};

export default Main;