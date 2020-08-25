import React, { useState } from 'react';
import './App.css';
import { UseState } from './hooks/useState';
import { UseEffect } from "./hooks/useEffect";
import { UseRef } from "./hooks/useRef";
import { UseMemo } from "./hooks/useMemo";
import { UseCallback } from "./hooks/useCallback";
import { UseContext } from "./hooks/useContext";
import {CustomHook} from "./hooks/customHook";
import {LocalStorageCustomHook} from "./hooks/localStorageCustomHook";

function App() {

    return (
        <div className="App">
            {/*<UseState />*/}
            {/*<UseEffect/>*/}
            {/*<UseRef/>*/}
            {/*<UseMemo/>*/}
            {/*<UseCallback/>*/}
            {/*<UseContext/>*/}
            {/*<CustomHook/>*/}
            <LocalStorageCustomHook/>
        </div>
    );
}

export default App;
