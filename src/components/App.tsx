import * as React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import HowTo from './HowTo';
import MainComponent from './MainComponent';

class App extends React.Component<{}, {}> {
  public render(): any {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={MainComponent} />
          <Route path="/howto" component={HowTo} />
        </div>
      </HashRouter>
    );
  }
}

export default App;