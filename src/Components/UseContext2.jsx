import React from 'react'
import { createContext } from 'react'

const AppContext = createContext()

const AppProvider = ({children}) => {
    const userData = {
        name:"ved",
        age:23
    }
  return (
    <AppContext.Provider value={userData}>{children}</AppContext.Provider>
  )
}

export {AppProvider,AppContext}