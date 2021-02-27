import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dev from './containers/Dev/Loadable';
import Blog from './containers/Blog/Loadable';
import Project from './containers/Project/Loadable';
import Contact from './containers/Contact/Loadable';
import NotFound from './containers/NotFound/Loadable';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/dev" />
        <Redirect exact from="/project-me" to="/dev" />
        <Route exact path="/dev" component={Dev} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
