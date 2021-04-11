import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Accueil } from './pages/Accueil';


export class App extends React.Component {


  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Accueil style={{ height: "100%", width: "100%" }} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

