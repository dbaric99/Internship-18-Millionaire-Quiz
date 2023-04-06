import { createContext, useContext, useState } from "react";

const defaultContext = {
    FIFTY_FIFTY: true,
    ASK_THE_AUDIENCE: true,
    PHONE_A_FRIEND: true,
}

export const ActionContext = createContext(defaultContext);

const ActionProvider = ({ children }) => {
    const [activeJokers, setActiveJokers] = useState(defaultContext);

    const utilizeAJoker = (jokerConstant) => {
        setActiveJokers((prev) => ({...prev, [jokerConstant]: false}));
    }

    return (
        <ActionContext.Provider value={{activeJokers, utilizeAJoker}}>
            {children}
        </ActionContext.Provider>
    );
};

export const useAction = () => useContext(ActionContext);

export default ActionProvider;