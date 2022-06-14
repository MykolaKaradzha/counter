import {CounterReducer} from "./counter-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {loadState, saveState} from "../utils/localStorage-utils";

const rootReducer = combineReducers({
    counter: CounterReducer
});


export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk)); // putting loadState() as argument getting state from LocalStorage each time app is reloaded.
                                                                                    // Replaces usage of UseEffect, if Redux is not used

store.subscribe( () => {
    saveState({
        counter: store.getState().counter
    })

})                                                                                      // saveState() is called every time store`s state changes.

export type AppStateType = ReturnType<typeof rootReducer>
