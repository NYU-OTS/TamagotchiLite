import {combineReducers} from 'redux'

import {ActionTypes} from '../actions/Actions'
import * as constants from '../constants/Constants'

const initialState: {
    happiness: number,
    hunger: number,
    money: number} =

    {happiness: 5,
    hunger: 3,
    money: 0
}

export function hungerReducer(state = initialState.hunger, action: ActionTypes): number{
    switch (action.type){
        case constants.SET_HUNGER:
            return action.hunger;
        default:
            return state;        
    }
}

export function happinessReducer(state = initialState.happiness, action: ActionTypes): number{
    switch (action.type){
        case constants.SET_HAPPINESS:
            return action.happiness;
        default:
            return state;        
    }
}

export function moneyReducer(state = initialState.money, action: ActionTypes): number{
    switch (action.type){
        case constants.SET_MONEY:
            return action.money;
        default:
            return state;        
    }
}

export default combineReducers({
    happiness: happinessReducer,
    hunger: hungerReducer, 
    money: moneyReducer
})