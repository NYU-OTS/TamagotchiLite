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



export const SetHunger = (hunger: number): ISetHunger => ({
    hunger,
    type: constants.SET_HUNGER
});

export const SetHappiness = (happiness: number): ISetHappiness => ({
    happiness,
    type: constants.SET_HAPPINESS
});

export const SetMoney = (money: number): ISetMoney => ({
    money,
    type: constants.SET_MONEY
});

export const SetHappinessTimer = (timerID: number): ISetHappinessTimer => ({
    timerID,
    type: constants.SET_HAPPINESS_TIMER
});

export const SetHungerTimer = (timerID: number): ISetHungerTimer => ({
    timerID,
    type: constants.SET_HUNGER_TIMER
});

export type ActionTypes = 
ISetHappiness |
ISetHappinessTimer |
ISetHunger |
ISetHungerTimer |
ISetMoney;