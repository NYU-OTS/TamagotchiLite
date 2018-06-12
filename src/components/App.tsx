import * as React from 'react'
import {connect} from 'react-redux'

import './App.css'
import Counter from './Counter'
import Header from './Header'
import Menu from './Menu'
import Pet from './Pet'

export interface IProps{
  hunger: number,
  happiness: number,
}

export interface IState{
  hungerTimer: any,
  happyTimer: any
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
      happyTimer: 0,
      hungerTimer: 0      
    }
  }

  /*
  // Decrement the pet's hunger and happiness values over time
  public componentDidMount() {
    if (this.props.hungerDeplete && this.props.happyDeplete){
      this.setState({
          happyTimer: this.props.happyDeplete ? setInterval( () => this.props.happyDeplete(this.props.happiness), 5000) : 0,
          hungerTimer: this.props.hungerDeplete ? setInterval( () => this.props.hungerDeplete(this.props.hunger), 5000) : 0,
          // happyTimer: setInterval( () => this.props.happyDeplete(this.props), 7500)
      });
      }
    }

  public componentWillUnmount() {
    clearInterval(this.state.hungerTimer);
    clearInterval(this.state.happyTimer);
  }
  */

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

const mapStateToProps = (state:any) => ({
  happiness: state.happiness,
  hunger: state.hunger,
  money: state.money
})

export default connect(mapStateToProps)(App);