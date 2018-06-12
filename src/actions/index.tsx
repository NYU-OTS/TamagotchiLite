import * as constants from '../constants'
import {IStoreState} from '../types'

// Interfaces //
export interface IFeedPet{
    type: constants.FEED;
    payload: IStoreState;
}

export interface IPlayPet{
    type: constants.PLAY;
    payload: IStoreState;
}

export interface IWorkPet{
    type: constants.WORK;
    payload: IStoreState;
}

export interface IHealPet{
    type: constants.HEAL;
    payload: IStoreState;
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
export const feedPet = (state: IStoreState) => ({
    type: constants.FEED,
    payload: state
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