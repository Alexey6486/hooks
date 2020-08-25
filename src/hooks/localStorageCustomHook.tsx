import React from "react";
import {SecondFruit} from "../misc/forLocalStorageCustomHook/secondFruit";
import { useLocalState } from "../misc/forLocalStorageCustomHook/hook";

export const LocalStorageCustomHook = () => {

    const [fruit, setFruit] = useLocalState('fruit');

    return (
        <div>
            <div>Local Storage Custom Hook</div>

            <div>Fruit: {fruit}</div>
            <button onClick={() => setFruit('Apple')}>Apple</button>
            <button onClick={() => setFruit('Banana')}>Banana</button>

            <SecondFruit/>
        </div>
    )

}