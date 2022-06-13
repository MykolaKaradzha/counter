import {
    addCountAC,
    CounterReducer,
    InitialStateType,
    resetCountAC, setAlternativeAC, setEditModeAC,
    setMaxValueAC,
    setMinValueAC
} from "./counter-reducer";

let startState: InitialStateType;




beforeEach(() => {
    startState = {
        count:0,
        max:5,
        min:0,
        isEditModeOn:false,
        isAlternativeOn:true,
    }


})

test('count should be increased by one', () => {
    const endState = CounterReducer(startState, addCountAC())
    expect(endState.count).toBe(1)
})
test('max should be set to required value', () => {
    const endState = CounterReducer(startState, setMaxValueAC(10))
    expect(endState.max).toBe(10)
})
test('min should be set to required value', () => {
    const endState = CounterReducer(startState, setMinValueAC(6))
    expect(endState.min).toBe(6)
})
test('count should be set to min value', () => {
    startState.count = 5;
    const endState = CounterReducer(startState, resetCountAC())
    expect(endState.count).toBe(startState.min)
})
test('isEditModeOn should be set to required value', () => {
    const endState = CounterReducer(startState, setEditModeAC(true));
    expect(endState.isEditModeOn).toBe(true)
})
test('isAlternativeOn should be set to required value', () => {
    const endState = CounterReducer(startState, setAlternativeAC());
    expect(endState.isAlternativeOn).toBe(false)
})