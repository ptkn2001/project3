import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Main from './components/Main';
import Header from './components/Header';
import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  const handleActivePage = (activePage) => {
    setActivePage(activePage);
  };

  const [loginStatus, setLoginStatus] = useState(true);

  const handleLoginStatus = (status) => {
    setLoginStatus(status);
  };

  return (
    <ApolloProvider client={client}>
      <div>
        <div><Header /></div>
        <div className="flex-row">
          <div className="col-2"><Navbar loggedIn={loginStatus} changeActivePage={handleActivePage} loginStatus={handleLoginStatus} /></div>
          <div className="col-8"><Main activePage={activePage} loggedIn={loginStatus} loginStatus={handleLoginStatus}/></div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
