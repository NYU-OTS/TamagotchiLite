import * as React from 'react'
import {connect} from 'react-redux'

import './Menu.css'

import {SetHappiness, SetHappinessTimer, SetHunger, SetHungerTimer, SetMoney} from '../actions/Actions'
import medicine from '../images/medicine.png'
import toy from '../images/play.png'
import riceball from '../images/riceball.png'
import shovel from '../images/shovel.png'
import {IStoreState} from '../types/Types'

export interface IMenuProps{
    happiness: number,
    happinessID: number | null,
    hunger: number, 
    hungerID: number | null,
    money: number,    

    setHunger: (hunger: number) => void,
    setHungerTimer: (timerID: number) => void,
    setHappiness: (happiness: number) => void, 
    setHappinessTimer: (timerID: number) => void,
    setMoney: (money: number) => void,
    feed: () => void,
    play: () => void,
    work: () => void,
    heal: () => void,
    depleteHunger: () => void,
    depleteHappiness: () => void
}

class Menu extends React.Component<IMenuProps, {}> {
    constructor(props: IMenuProps){
        super(props);
        this.props.feed.bind(this);
        this.props.play.bind(this);
        this.props.heal.bind(this);
        this.props.work.bind(this);

    }

      // Decrement the pet's hunger and happiness values over time
    public componentDidMount() {
        this.props.setHappinessTimer( window.setInterval( () => { this.props.depleteHappiness();  }, 5000) );
        this.props.setHungerTimer (window.setInterval( () => { this.props.depleteHunger();  }, 5000) );
    }

    public componentWillUnmount() {
        if (this.props.happinessID){
            clearInterval(this.props.happinessID);
        }
        if (this.props.hungerID){
            clearInterval(this.props.hungerID);
        }
    }


    public render() { 
        return(
            <div id="myMenu">
                <figure>
                    <input type="image" src={riceball} alt="riceball" className="icon" onClick={this.props.feed}/>
                    <figcaption>Feed</figcaption>
                </figure>

                <figure>
                    <input type="image" src={toy} alt="toy" className="icon" onClick={this.props.play}/>
                    <figcaption>Play</figcaption>
                </figure>

                <figure>
                    <input type="image" src={medicine} alt="medicine" className="icon" onClick={this.props.heal}/>
                    <figcaption>Heal</figcaption>
                </figure>

                <figure>
                    <input type="image" src={shovel} alt="shovel" className="icon" onClick={this.props.work} />
                    <figcaption>Work</figcaption>
                </figure>
            </div> 
        )
    }
}

const mapStateToProps = (state:IStoreState) => ({
    happiness: state.happiness,
    happinessID: state.happinessID,
    hunger: state.hunger,
    hungerID: state.hungerID,
    money: state.money
})


const mapDispatchToProps = (dispatch: (action: any) => void) => {
    return{
        setHappiness: (happiness: number) => dispatch(SetHappiness(happiness)),
        setHappinessTimer: (timerID: number) => dispatch(SetHappinessTimer(timerID)),
        setHunger: (hunger: number) => dispatch(SetHunger(hunger)),
        setHungerTimer: (timerID: number) => dispatch(SetHungerTimer(timerID)),
        setMoney: (money: number) => dispatch(SetMoney(money))

    }
  }
  
  const mergeProps = (sp: any, dp: any, op: any) => {
    return {...sp, ...dp, ...op, 
      feed: () => {
        if (sp.hunger < 10 && sp.hunger >= 0 && sp.money > 0){
            dp.setHunger(sp.hunger + 1);
            dp.setMoney(sp.money - 1);
        }
      },

      play: () => {
          if (sp.happiness < 10 && sp.happiness >= 0){
              dp.setHappiness(sp.happiness + 1);
          }

          else if (sp.hunger === 0 && sp.happiness === 0){
              dp.setHappiness(sp.happiness + 5);
          }
        },

        work: () => {
            if (sp.happiness > 0){
                dp.setMoney(sp.money + 1);
                dp.setHappiness(sp.happiness - 1);
            } 
        },

        heal: () => {
            if (sp.hunger === 0 && sp.happiness === 0 && sp.money >= 5){
                dp.setHunger(sp.hunger + 5);
                dp.setHappiness(sp.happiness + 5);
                dp.setMoney(sp.money - 5);
            }
        },

        depleteHunger: () => {
            if (sp.hunger > 0){
                dp.setHunger(sp.hunger - 1);
            }
        },

        depleteHappiness: () => {
            if (sp.happiness > 0){
                dp.setHappiness(sp.happiness - 1);
            }
        }
        
    };
  
  }

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Menu)