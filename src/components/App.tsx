import * as React from 'react'

import './App.css'
import Counter from './Counter'
import Header from './Header'
import Menu from './Menu'
import Pet from './Pet'

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="App">
        <Header />
        <Pet />
        <Counter />
        <Menu />
      </div>
    );
  }
}

export default App;