//setup data layer



//we need this to track the basket
import React, {createContext, useContext, useReducer} from 'react'
import reducer from './reducer'
//thi is the data layer
export const StateContext = createContext();
//Build a provier
export const StateProvider = ({redcer, initialState, children}) => (
    <StateContext.Provider value= {useReducer(reducer, initialState)}>
         {children}
    </StateContext.Provider>
   

)
export const useStateValue = () => useContext(StateContext)