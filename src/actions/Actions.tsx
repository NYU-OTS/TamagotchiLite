import * as constants from '../constants/Constants'

export interface ISetHappiness{
    type: constants.SET_HAPPINESS;
    happiness: number;
}

export interface ISetHunger{
    type: constants.SET_HUNGER;
    hunger: number;
}

export interface ISetMoney{
    type: constants.SET_MONEY;
    money: number;
}

export interface ISetHappinessTimer{
    type: constants.SET_HAPPINESS_TIMER;
    timerID: number;
}

export interface ISetHungerTimer{
    type: constants.SET_HUNGER_TIMER;
    timerID: number;
}



export const SetHunger = (hunger: number) => ({
    hunger,
    type: constants.SET_HUNGER
});

export const SetHappiness = (happiness: number) => ({
    happiness,
    type: constants.SET_HAPPINESS
});

export const SetMoney = (money: number) => ({
    money,
    type: constants.SET_MONEY
});

export const SetHappinessTimer = (timerID: number) => ({
    timerID,
    type: constants.SET_HAPPINESS_TIMER
});

export const SetHungerTimer = (timerID: number) => ({
    timerID,
    type: constants.SET_HUNGER_TIMER
});

export type ActionTypes = 
ISetHappiness |
ISetHappinessTimer |
ISetHunger |
ISetHungerTimer |
ISetMoney;