import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from '../compenents/HomePage';
import Header from '../compenents/Header';
import BlogListPage from '../compenents/BlogListPage'
import BlogDetailsPage from '../compenents/BlogDetailsPage';
import ContactPage from '../compenents/ContactPage';
import Notfound from '../compenents/NotFound';




const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/blogs" component={BlogListPage} exact/>
          <Route path="/blogs:/id" component={BlogDetailsPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route component={Notfound}/>




        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
