import React from "react";
import {useAlertContext} from "./alertContext";

export const Main = () => {

    const toggleAlert = useAlertContext().toggleAlert;

    return (
        <div>
            <div>
                Для работы с хуком UseContext:
            </div>
            <button onClick={toggleAlert}>Показать alert</button>
        </div>
    )
};