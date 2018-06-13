import * as React from 'react'
import {connect} from 'react-redux'

import {IStateProps, IStoreState} from '../types/Types'

export interface ICounterProps{
    hunger: number,
    happiness: number,
    money: number
}

class Counter extends React.Component<ICounterProps, {}>{
    constructor(props: ICounterProps){
        super(props);
    }

    public render(){
        return(
            <div>
                <p>Hunger: {this.props.hunger.toString()} </p>
                <p>Happiness: {this.props.happiness.toString()} </p>
                <p>Money: {this.props.money.toString()}</p>
            </div>
        );
    }
}

const mapStateToProps = (state:IStoreState): IStateProps => {
    return {
    happiness: state.happiness,  
    hunger: state.hunger,
    money: state.money 
};}

export default connect(mapStateToProps)(Counter)