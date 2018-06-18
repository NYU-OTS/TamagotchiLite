import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

class Router extends React.Component<{}, {}> {
  public render(): any {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default Router;