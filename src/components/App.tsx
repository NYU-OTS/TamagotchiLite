import * as React from 'react'
import {connect} from 'react-redux'

import './App.css'
import Counter from './Counter'
import Header from './Header'
import Menu from './Menu'
import Pet from './Pet'

import {IStateProps, IStoreState} from '../types/Types'

export interface IProps{
  hunger: number,
  happiness: number,
}

class App extends React.Component<IProps, {}> {
  constructor(props: IProps){
    super(props);
  }

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

const mapStateToProps = (state:IStoreState):IStateProps => ({
  happiness: state.happiness,
  hunger: state.hunger,
  money: state.money
})

export default connect(mapStateToProps)(App);