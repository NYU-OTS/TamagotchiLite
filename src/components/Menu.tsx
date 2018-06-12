import * as React from 'react'
import {connect} from 'react-redux'

import './Menu.css'

import {SetHappiness, SetHunger, SetMoney} from '../actions/Actions'
import medicine from '../images/medicine.png'
import toy from '../images/play.png'
import riceball from '../images/riceball.png'
import shovel from '../images/shovel.png'

export interface IMenuProps{
    happiness: number,
    hunger: number, 
    money: number

    setHunger: (hunger: number) => void,
    setHappiness: (happiness: number) => void, 
    setMoney: (money: number) => void,
    feed: () => void,
    play: () => void,
    work: () => void,
    heal: () => void
}

class Menu extends React.Component<IMenuProps, {}> {
    constructor(props: IMenuProps){
        super(props);
        this.props.feed.bind(this);
        this.props.play.bind(this);
        this.props.heal.bind(this);
        this.props.work.bind(this);
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

const mapStateToProps = (state:any) => ({
    happiness: state.happiness,
    hunger: state.hunger,
    money: state.money
})


const mapDispatchToProps = (dispatch: (action: any) => void) => {
    return{
        setHappiness: (happiness: number) => dispatch(SetHappiness(happiness)),
        setHunger: (hunger: number) => dispatch(SetHunger(hunger)),
        setMoney: (money: number) => dispatch(SetMoney(money))
    }
  }
  
  const mergeProps = (sp: any, dp: any, op: any) => {
    return {...sp, ...dp, ...op, 
      feed: () => {
        if (sp.hunger < 10 && sp.hunger > 0 && sp.money > 0){
            dp.setHunger(sp.hunger + 1);
            dp.setMoney(sp.money - 1);
        }
      },

      play: () => {
          if (sp.happiness < 10 && sp.happiness > 0 && sp.hunger > 0){
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
            if (sp.hunger === 0 && sp.happiness === 0 && sp.money > 5){
                dp.setHunger(sp.hunger + 5);
                dp.setMoney(sp.money - 5);
            }
        }
    };
  
  }

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Menu)