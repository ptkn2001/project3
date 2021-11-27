import React, { useState } from 'react';
import { QUERY_CATEGORY } from '../utils/queries';
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
  const { loading, data } = useQuery(QUERY_CATEGORY);
  const categories = data?.categories || [];
  switch (props.activePage) {
    case "Dashboard":
      return (
        <div><Dashboard /></div>
      );
      break;
    case "Budget":
      return (
        <div><Budget /></div>
      );
      break;
    case "Category":
      return (
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (<Category categories={categories} />
          )}
        </div>
      );
      break;

    case "Expense":
      return (
        <div><Expense /></div>
      );
      break;
    case "Report":
      return (
        <div><Report /></div>
      );
      break;
    case "Login":
      return (
        <div><Login /></div>
      );
      break;
    case "Signup":
      return (
        <div><Signup /></div>
      );
      break;
    case "Extra":
      return (
        <div><Extra /></div>
      );
      break;
    default:
      return (
        <div><Dashboard /></div>
      );
      break;
  }
};

export default Main;