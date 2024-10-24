import React, {useContext, useState} from "react";

const Appcontext = React.createContext()

const AppProvider = ({children}) => {
    

    return <Appcontext.Provider
    value={{'nothing': "jj"}}>
        {children}
    </Appcontext.Provider>

}

const useGlobalContext = () => {
    return useContext(Appcontext)
}

export {Appcontext, useGlobalContext, AppProvider}