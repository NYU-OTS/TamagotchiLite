import * as React from 'react'
import { Route, Switch } from 'react-router-dom';

import './App.css'
import HowTo from './HowTo';
import MainComponent from './MainComponent'
import Nav from './Nav'


class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/howTo' component={HowTo} />
          <Route path='/' component={MainComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;