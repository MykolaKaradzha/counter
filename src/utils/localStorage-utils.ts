// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
import {AppStateType} from "../redux/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app-state');
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined
    }
}

export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('app-state', serializedState)
    } catch {
        throw Error('Error!')
    }
}