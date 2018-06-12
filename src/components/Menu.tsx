import * as React from 'react'
import {connect} from 'react-redux'

import './Menu.css'

import { feedPet, healPet, playPet, workPet} from '../actions'
import medicine from '../images/medicine.png'
import toy from '../images/play.png'
import riceball from '../images/riceball.png'
import shovel from '../images/shovel.png'
import {IStoreState} from '../types'

export interface IMenuProps{
    happiness: number,
    hunger: number, 
    money: number

    feedPet: (state: IStoreState) => void
    playPet: (state: IStoreState) => void, 
    healPet: (state: IStoreState) => void,
    workPet: (state: IStoreState) => void
}

class Menu extends React.Component<IMenuProps, {}> {
    constructor(props: IMenuProps){
        super(props);
    }

    public render() { 
        return(
            <div id="myMenu">
                <figure>
                    <input type="image" src={riceball} alt="riceball" className="icon" onClick={this.props.feedPet.bind(this.props)}/>
                    <figcaption>Feed</figcaption>
                </figure>

                <figure>
                    <input type="image" src={toy} alt="toy" className="icon" onClick={this.props.playPet.bind(this.props)}/>
                    <figcaption>Play</figcaption>
                </figure>

                <figure>
                    <input type="image" src={medicine} alt="medicine" className="icon" onClick={this.props.healPet.bind(this.props)}/>
                    <figcaption>Heal</figcaption>
                </figure>

                <figure>
                    <input type="image" src={shovel} alt="medicine" className="icon" onClick={this.props.workPet.bind(this.props)}/>
                    <figcaption>Work</figcaption>
                </figure>
            </div> 
        )
    }
}

const mapStateToProps = (state:any) => ({
    happiness: state.happiness,
    hunger: state.hunger,
    money: state.money
})


const mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        feedPet: (state: IStoreState) => dispatch(feedPet(state)),
        healPet: (state: IStoreState) => dispatch(healPet(state)), 
        playPet: (state: IStoreState) => dispatch(playPet(state)),
        workPet: (state: IStoreState) => dispatch(workPet(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)