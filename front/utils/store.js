import { createContext, useReducer } from "react"


export const Store = createContext()

const initialState = {
    latlong: '',
    stores: []
}

const reducer = (state, action) => {
    switch(action.type){
        case 'UPDATE':
            return {
                ...state, stores:action.payload
            }
        case 'LATLONG':
            return {
                ...state, latlong:action.payload
            }
        default:
            return state
    }
}

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}