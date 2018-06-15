import {connect} from 'react-redux'

import MenuComponent from './MenuComponent'

import {SetHappiness, SetHappinessTimer, SetHunger, SetHungerTimer, SetMoney} from '../actions/Actions'
import {IMenuDispatchProps, IMenuStateProps, IStoreState} from '../types/Types'

const mapStateToProps = (state:IStoreState): IMenuStateProps => ({
    happiness: state.happiness,
    happinessID: state.happinessID,
    hunger: state.hunger,
    hungerID: state.hungerID,
    money: state.money
})


const mapDispatchToProps = (dispatch: (action: any) => void):IMenuDispatchProps  => {
    return{
        setHappiness: (happiness: number) => dispatch(SetHappiness(happiness)),
        setHappinessTimer: (timerID: number) => dispatch(SetHappinessTimer(timerID)),
        setHunger: (hunger: number) => dispatch(SetHunger(hunger)),
        setHungerTimer: (timerID: number) => dispatch(SetHungerTimer(timerID)),
        setMoney: (money: number) => dispatch(SetMoney(money))
    }
  }
  
  const mergeProps = (sp: IStoreState, dp: IMenuDispatchProps, op: {}) => {
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MenuComponent)