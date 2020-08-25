import React from "react";
import {Main} from "../misc/forUseContext/main";
import {Alert} from "../misc/forUseContext/alert";
import {AlertProvider} from "../misc/forUseContext/alertContext";

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