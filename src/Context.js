import React, { useState } from "react"

const appContext = React.createContext()


export const AppProvider = ({ children }) => {

    const [navHeight, setNavHeight] = useState(null)

    const value = {
        navHeight, setNavHeight
    }

    return <appContext.Provider value={value} >{children}</appContext.Provider>
}


const GlobalContext = () => React.useContext(appContext)

export default GlobalContext;