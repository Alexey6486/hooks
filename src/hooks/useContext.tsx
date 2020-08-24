import React from "react";
import {Main} from "../misc/main";
import {Alert} from "../misc/alert";
import {AlertProvider} from "../misc/alertContext";

export const UseContext = () => {

    return (
        <AlertProvider>
            <div>
                <div>
                    UseContext:
                </div>
                <Main />
                <Alert/>
            </div>
        </AlertProvider>
    )
};