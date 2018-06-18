import {combineReducers} from 'redux'

import {ActionTypes} from '../actions/Actions'
import * as constants from '../constants/Constants'

const initialState: {
    happiness: number,
    happinessID: number | null,
    hunger: number,
    hungerID: number | null,
    money: number} =

    {happiness: 5,
    happinessID: null,
    hunger: 3,
    hungerID: null,
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

export function happinessTimerReducer(state = initialState.happinessID, action: ActionTypes): number | null {
    switch (action.type){
        case constants.SET_HAPPINESS_TIMER:
            return action.timerID;
        default:
            return state;        
    }
}

export function hungerTimerReducer(state = initialState.hungerID, action: ActionTypes): number | null {
    switch (action.type){
        case constants.SET_HUNGER_TIMER:
            return action.timerID;
        default:
            return state;        
    }
}

export default combineReducers({
    happiness: happinessReducer,
    happinessID: happinessTimerReducer,
    hunger: hungerReducer, 
    hungerID: hungerTimerReducer,
    money: moneyReducer
})