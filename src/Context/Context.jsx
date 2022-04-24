import { useState, useEffect, createContext } from 'react';

const ContextRouter = createContext();

const ContextProvider = ({ children }) => {

    return (
        <ContextRouter.Provider
            value={{
            }}>
            {children}
        </ContextRouter.Provider>
    );
}

export {
    ContextRouter
}

export default ContextProvider;