import {connect} from 'react-redux'

import CounterComponent from './CounterComponent'

import {IStateProps, IStoreState} from '../types/Types'

const mapStateToProps = (state:IStoreState): IStateProps => {
    return {
    happiness: state.happiness,  
    hunger: state.hunger,
    money: state.money 
};}

export default connect(mapStateToProps)(CounterComponent)