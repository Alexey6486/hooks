import React, {useCallback, useState} from "react";
import { ItemsList } from "../misc/forUseCallback/itemsList";

export const UseCallback = () => {

    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styled = {
        color: colored ? 'tomato' : 'black'
    };

    // в данном примере если мы будем изменять цвет, то вызов рендера компонеты ul списка будет также срабатывать
    // и если здесь будет не просто статическа генерация тега, а запрос к серверу, то это будет тормозить работу
    // поэтому нужно использовать хук useCallback, который по сути делает тоже самое что и хук useMemo
    // оборачиваем колбек, который нужно захешить, и добавляем списаок зависимостей
    // useCallback оборачивает колбек, и его же возвращает generateItemsFromApi - это колбек;
    // в случае с useMemo, где мы оборачивали computed - возвращает значение
    const generateItemsFromApi = useCallback(() => {
        // нам нужны только индексы, поэтому сам элемента ставим _
        return new Array(count).fill("").map((_, i) => `element ${i + 1}`)
    }, [count]);

    return (
        <div>
            <div style={styled}>UseCallback: {count}</div>
            <button onClick={() => setCount( prev => prev + 1)}>inc</button>
            <button onClick={() => setColored( prev => !prev )}>change</button>
            <ItemsList getItems={generateItemsFromApi}/>
        </div>
    )
}