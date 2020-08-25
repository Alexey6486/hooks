import React, {useEffect, useState} from "react";

export const ItemsList = ({ getItems }: any) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems = getItems();
        setItems(newItems);
        console.log('ItemsList render')
    }, [getItems])

    return (
        <ul>
            { items.map(i => <li key={i}>{i}</li>)}
        </ul>
    )
}