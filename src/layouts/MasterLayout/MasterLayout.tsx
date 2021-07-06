import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Routes } from './../../routes/Routes';
import { Header } from '../../components';

export const MasterLayout = (props: any) => {
  return (
    <>
      <Header />
      <Switch>
        {Routes.map((route: any, index) => {
          return route.component ? (
            <Route {...route} key={route.path + index} />
          ) : (
            <Route
              path={route.path}
              exact={route.exact}
              key={route.path + index}
            >
              <Redirect to={route.redirectPath} />
            </Route>
          );
        })}
      </Switch>
    </>
  );
};
