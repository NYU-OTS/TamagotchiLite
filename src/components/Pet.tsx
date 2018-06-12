import * as React from 'react'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'

import bored from '../images/_bored.png'
import excited from '../images/_excited.png'
import happy from '../images/_happy.png'
import hungry from '../images/_hungry.png'
import sick from '../images/_rip.png'
import {IStoreState} from '../types/Types'


export interface IPetProps{
    face: any,
    happiness: number,
    hunger: number
}

class Pet extends React.Component<IPetProps, {}>{
    constructor(props: IPetProps){
        super(props);
    }

    public render(){
        return(
            <img src={this.props.face} alt="pet" className="imageSize"/>
        )
    }
}

const faceSelector = createSelector(
    [(s: IStoreState) => s.hunger, (s: IStoreState) => s.happiness ],
    (hunger: IStoreState["hunger"], happiness: IStoreState["happiness"]) => {
       if (hunger === 10 && happiness === 10){
           return excited;
       }
       else if (hunger === 0 && happiness === 0){
           return sick;
       }
       else if (hunger <= 5){
           return hungry;
       }
       else if (happiness <= 5){
           return bored;
       }
       else{
           return happy;
       }
    }
)

const mapStateToProps = (state:IStoreState) => ({
    face: faceSelector(state),
    happiness: state.happiness,
    hunger: state.hunger
})

export default connect(mapStateToProps)(Pet)