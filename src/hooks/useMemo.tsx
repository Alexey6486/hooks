import React, {useState, useMemo, useEffect} from "react";
import {log} from "util";

// создадим функцию имитрующую долгие вычесления
const complexCompute = (num: number) => {
    console.log('complex computation')
    let i = 0;
    while (i < 1000000000) i++;
    return num * 2;
}

export const UseMemo = () => {

    const [num, setNum] = useState(42);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'tomato'
    }), [colored]);


    // для вычеслений num будет задержка, имитация сложных вычеслений
    // однако, если мы будем менять цвет colored, то снова будет задежка, хотя вычислений сложных не происходит
    // происходит перерисовка и запуск computed; это не правильно, для этого используем useMemo
    // оборачиваем функцию, возвращаем ее из колбека, передаем зависимость

    const computed = useMemo(() => {
        return complexCompute(num);
    }, [num]);

    // другое применения данного хука - работа с объектами
    // при изменении num будет также выводиться в консоль styles changed
    // поскольку у объектов ссылочная связь при перерендеринг будет создан новый объект styles
    // ниже useEffect следит за styles, но после рендеринга это уже новый объект, новая ссылка
    // поэтому содержимое хука будет вновь запущено, что не правильно
    // для этого выше, обернем styles в хук useMemo
    useEffect(() => {
        console.log('styles changed')
    }, [styles])

    return (
        <div>
            <div style={styles}>UseMemo {computed}</div>
            <button onClick={() => setNum( prev => prev + 1)}>inc</button>
            <button onClick={() => setNum( prev => prev - 1)}>dec</button>
            <button onClick={() => setColored( prev => !prev)}>change</button>
        </div>
    );
};