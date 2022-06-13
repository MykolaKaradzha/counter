

const initialState = {
    count: 0,
    max: 0,
    min: 0,
    isEditModeOn: true,
    isAlternativeOn: true,
}

export type InitialStateType = typeof initialState;
type addCountACType = ReturnType<typeof addCountAC>;
type setMaxValueACType = ReturnType<typeof setMaxValueAC>;
type setMinValueACType = ReturnType<typeof setMinValueAC>;
type resetCountACType = ReturnType<typeof resetCountAC>;
type setEditModeACType = ReturnType<typeof setEditModeAC>;
type setAlternativeACType = ReturnType<typeof setAlternativeAC>;
export type ActionType = addCountACType
    | setMaxValueACType
    | setMinValueACType
    | resetCountACType
    | setEditModeACType
    | setAlternativeACType;

export const CounterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType  => {
    switch(action.type) {
        case "ADD-COUNT":
            return {...state, count: state.count + 1}
        case "SET-MAX-VALUE":
            return {...state, max: action.payload.newValue, isEditModeOn: true}
        case "SET-MIN-VALUE":
            return {...state, min: action.payload.newValue, isEditModeOn: true}
        case "RESET-COUNT":
            return {...state, count: state.min}
        case "SET-EDIT-MODE":
            return {...state, isEditModeOn: action.payload.isEditModeOn}
        case "SET-ALTERNATIVE":
            return {...state, isAlternativeOn: !state.isAlternativeOn}

        default:
            return state

    }
}

export const addCountAC = () => (
    {type: 'ADD-COUNT'} as const
)
export const setMaxValueAC = (newValue: number) => (
    {
        type: 'SET-MAX-VALUE',
        payload: {newValue}
    } as const
)
export const setMinValueAC = (newValue: number) => (
    {
        type: 'SET-MIN-VALUE',
        payload: {newValue}
    } as const
)
export const resetCountAC = () => (
    {
        type: 'RESET-COUNT',
    } as const
)
export const setEditModeAC = (isEditModeOn: boolean) => (
    {
        type: 'SET-EDIT-MODE',
        payload: {isEditModeOn}
    } as const
)
export const setAlternativeAC = () => (
    {
        type: 'SET-ALTERNATIVE'
    } as const
)

