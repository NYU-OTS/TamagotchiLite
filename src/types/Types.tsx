export interface IStoreState{
    happiness: number,
    happinessID: number| null,
    hunger: number,
    hungerID: number| null,
    money: number
}

export interface IStateProps {
    happiness: number, 
    hunger: number,
    money: number
}

export interface IMenuDispatchProps {
    setHappiness: (happiness: number) => void,
    setHappinessTimer: (timerID: number) => void,
    setHunger: (hunger: number) => void,
    setHungerTimer: (timerID: number) => void,
    setMoney: (money: number) => void
}

export interface IMenuStateProps { 
    happiness: number,
    happinessID: number | null,
    hunger: number,
    hungerID: number | null,
    money: number
}
export interface IPetMapProps{
    face: string,
    happiness: number,
    hunger: number
}