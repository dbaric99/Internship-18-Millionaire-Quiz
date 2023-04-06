import { createContext, useContext } from "react";

const defaultContext = {
    FIFTY_FIFTY: false,
    ASK_THE_AUDIENCE: false,
    PHONE_A_FRIEND: false,
}

export const ActionContext = createContext(defaultContext);

const ActionProvider = ({ children }) => {
    
}