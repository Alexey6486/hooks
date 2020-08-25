import {useState} from "react";

export const useLocalState = (localItem: any) => {

    const [loc, setState] = useState(localStorage.getItem(localItem));

    const setLoc = (newItem: string) => {
        localStorage.setItem(localItem, newItem);
        setState(newItem);
    }

    return [loc, setLoc] as const;
};