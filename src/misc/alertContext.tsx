import React, {ReactChild, ReactChildren, useContext, useState} from "react";

type AlertContextType = {
    toggleAlert: () => void
    alert: boolean
};

const AlertContext = React.createContext<AlertContextType>({} as AlertContextType);

export const useAlertContext = () => {
    return useContext(AlertContext);
};

interface PropsType {
    children: ReactChild | ReactChildren;
}

export const AlertProvider = ({children}: PropsType) => {

    const [alert, setAlert] = useState(false);
    const toggleAlert = () => setAlert(prev => !prev);

    return (
        <AlertContext.Provider value={{alert, toggleAlert}}>
            {children}
        </AlertContext.Provider>
    )
};