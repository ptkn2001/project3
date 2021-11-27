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
import Report from '../pages/Reports';


const Main = (props) => {
  const { loading, data } = useQuery(QUERY_CATEGORY);
  const categories = data?.categories || [];

  const setStatus = (status) => {
    console.log(`loginStatus = ${status}`);
    props.loginStatus(status);
  }

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
          {loading ? (
            <div>Loading...</div>
          ) : (<Category categories={categories} />
          )}
        </div>
      );
    case "Expense":
      return (
        <div><Expense /></div>
      );
    case "Report":
      return (
        <div><Report /></div>
      );
    case "Login":
      return (
        <div><Login setLoginStatus={setStatus} /></div>
      );
    case "Signup":
      return (
        <div><Signup setLoginStatus={setStatus} /></div>
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