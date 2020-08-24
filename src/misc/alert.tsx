import React from "react";
import {useAlertContext} from "./alertContext";

export const Alert = () => {

    const alert = useAlertContext().alert;

    if (!alert) {
        return null;
    }

    return (
        <div>
            <div style={{
                backgroundColor: "tomato",
                color: "#ffffff",
                padding: "5px 10px",
                borderRadius: "5px",
                margin: "5px 0",
                width: "max-content"
            }}>
                Alert работы с хуком UseContext
            </div>
        </div>
    )
};