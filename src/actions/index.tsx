import * as constants from '../constants'

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



/*
// Interfaces //
export interface IFeedPet{
    type: constants.FEED;
    payload: number;
}

export interface IPlayPet{
    type: constants.PLAY;
    payload: number;
}

export interface IWorkPet{
    type: constants.WORK;
    payload: number;
}

export interface IHealPet{
    type: constants.HEAL;
    payload: number;
}

export interface IHungerDeplete{
    type: constants.HUNGER_DEPLETE;
    hunger: number;
}

export interface IHappyDeplete{
    type: constants.HAPPY_DEPLETE;
    happiness: number;
}


// Action Creators //
export const feedPet = (hunger: number) => ({
    type: constants.FEED,
    payload: 
});

export const playPet = (state: IStoreState) => ({
    type: constants.PLAY,
    payload: state
});

export const workPet = (state: IStoreState) => ({
    type: constants.WORK,
    payload: state
});

export const healPet = (state: IStoreState) => ({
    type: constants.HEAL,
    payload: state
});

export function hungerDeplete(hunger: number){
    return {
        hunger,
        type: constants.HUNGER_DEPLETE
    }
}

export function happyDeplete(happiness: number){
    return {
        happiness,
        type: constants.HAPPY_DEPLETE
    }
}

export type ActionTypes = 
    IFeedPet |
    IPlayPet |
    IWorkPet |
    IHealPet |
    IHungerDeplete |
    IHappyDeplete;
    

export default ActionTypes;

*/