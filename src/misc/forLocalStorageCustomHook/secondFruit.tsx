import React from "react";
import { useLocalState } from "./hook";

export const SecondFruit = () => {

    const [secondFruit, setSecondFruit] = useLocalState('secondFruit');

    return (
        <div>
            <div>Second Fruit: {secondFruit}</div>
            <button onClick={() => setSecondFruit('Pear')}>Pear</button>
            <button onClick={() => setSecondFruit('Peach')}>Peach</button>
        </div>
    )
}