import * as React from 'react'

import './App.css'
import Header from './Header'

import Counter from '../Counter/CounterContainer'
import Menu from '../Menu/MenuContainer'
import Pet from '../Pet/PetContainer'

class MainComponent extends React.Component<{}, {}> {
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

export default MainComponent;