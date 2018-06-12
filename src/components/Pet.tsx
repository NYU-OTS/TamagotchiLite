import * as React from 'react'
import {connect} from 'react-redux'

import bored from '../images/_bored.png'
import excited from '../images/_excited.png'
import happy from '../images/_happy.png'
import hungry from '../images/_hungry.png'
import sick from '../images/_rip.png'

export interface IPetProps{
    happiness: number,
    hunger: number
}

export interface IPetState{
    face: any
}

class Pet extends React.Component<IPetProps, IPetState>{
    constructor(props: IPetProps){
        super(props);
        this.state = {
            face: happy
        }
    }

    public componentDidMount(){
        if (this.props.hunger === 10 && this.props.happiness === 10){
            this.setState({
                face: excited
            });
        }
        else if (this.props.hunger === 0 && this.props.happiness === 0){
            this.setState({
                face: sick
            });
        }
        else if (this.props.hunger <= 5){
            this.setState({
                face: hungry
            });
        }
        else if (this.props.happiness <= 5){
            this.setState({
                face: bored
            });
        }

        else{
            this.setState({
                face: happy
            });
        }
    }

    public render(){
        return(
            <img src={this.state.face} alt="pet" className="imageSize"/>
        )
    }
}

const mapStateToProps = (state:any) => ({
    happiness: state.happiness,
    hunger: state.hunger
})

export default connect(mapStateToProps)(Pet)