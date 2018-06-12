import {combineReducers} from 'redux'

import {ActionTypes} from '../actions'
import * as constants from '../constants/index'
import {IStoreState} from '../types/index'

const initialState: {
    happiness: number,
    hunger: number,
    money: number} =

    {happiness: 0,
    hunger: 0,
    money: 0
}
export function feedReducer(state = initialState, action: ActionTypes): IStoreState{
    switch (action.type){
        case constants.HUNGER_DEPLETE:
            if (state.hunger > 0){
                return {...state, hunger: action.hunger - 1}
            }
            else{
                return state;
            }
        case constants.FEED:
            if (state.hunger < 10 && state.money > 0 && state.hunger > 0){
                return {...state, hunger: state.hunger + 1};
            }
            else{
                return state;
            }
        case constants.HEAL:
            if (state.hunger === 0 && state.happiness === 0){
                return {...state, hunger: state.hunger + 5};
            }
            else{
                return state;
            }
        default: 
            return state;
    }
}

export function playReducer(state = initialState, action: ActionTypes): IStoreState{
    switch (action.type){
        case constants.HAPPY_DEPLETE:
            if (state.happiness > 0){
                return {...state, happiness: state.happiness - 1}
            }
            else{
                return state;
            }
        case constants.PLAY:
            if (state.happiness < 10 && state.hunger > 0){
                return {...state, happiness: state.happiness + 1};
            }
            else{
                return state;
            }
        case constants.HEAL:
            if (state.hunger === 0 && state.happiness === 0){
                return {...state, happiness: state.happiness + 5};
            }
            else{
                return state;
            }
        default: 
            return state;
    }
}

export function moneyReducer(state = initialState, action: ActionTypes): IStoreState{
    switch (action.type){
        case constants.FEED:
            if (state.money > 0 && state.hunger < 10 && state.hunger > 0){
                return {...state, money: state.money - 1}
            }
            else{
                return state
            }
        case constants.WORK:
            if (state.hunger > 0 && state.happiness > 0){
                return {...state, money: state.money + 1};
            }
            else{
                return state;
            }
        case constants.HEAL:
            if (state.money >= 5){
                return {...state, money: state.money - 5};
            }
            else{
                return state;
            }
        default: 
            return state;
    }
}

export default combineReducers({
    happiness: playReducer,
    hunger: feedReducer, 
    money: moneyReducer
})