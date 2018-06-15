import * as React from 'react'

export interface ICounterProps{
    hunger: number,
    happiness: number,
    money: number
}

class CounterComponent extends React.Component<ICounterProps, {}>{
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

export default CounterComponent;