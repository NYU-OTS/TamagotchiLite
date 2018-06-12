import * as constants from '../constants'
import {IStoreState} from '../types'

// Interfaces //
export interface IFeedPet{
    type: constants.FEED;
}

export interface IPlayPet{
    type: constants.PLAY;
}

export interface IWorkPet{
    type: constants.WORK;
}

export interface IHealPet{
    type: constants.HEAL;
}

export interface IHungerDeplete{
    type: constants.HUNGER_DEPLETE;
    hunger: number;
}

export interface IHappyDeplete{
    type: constants.HAPPY_DEPLETE;
    happiness: number;
}

// Functions //
export function feedPet(state: IStoreState) {
    return {
        state,
        type: constants.FEED
    };
}

export function playPet(state: IStoreState){
    return {
        state,
        type: constants.PLAY
    }
}

export function workPet(state: IStoreState){
    return {
        state,
        type: constants.WORK
    }
}

export function healPet(state: IStoreState){
    return {
        state,
        type: constants.HEAL
    }
}

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