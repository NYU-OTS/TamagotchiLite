import * as constants from '../constants/Constants'

export interface ISetHunger{
    type: constants.SET_HUNGER;
    hunger: number;
}

export interface ISetHappiness{
    type: constants.SET_HAPPINESS;
    happiness: number;
}

export interface ISetMoney{
    type: constants.SET_MONEY;
    money: number;
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


export type ActionTypes = 
ISetHappiness |
ISetHunger |
ISetMoney ;