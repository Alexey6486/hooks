import React, {useState} from 'react';

const computeInitialCounter = () => {
    console.log('func is called')
    return Math.trunc(Math.random() * 20);
}

export const UseState = () => {

    // const [item, setItem] = useState(0);

    //const [item, setItem] = useState(computeInitialCounter())
    // если мы будем вычислять базовое значение через функцию, то при каждом рендеринге, функция будет вызываться два раза
    // для inc и dec, что увеличивает загруку
    // чтобы оптимизировать данный процесс в хук useState можно передавать callback функцию, которая вычислит значение один
    // раз более не будет вызывать функцию
    const [item, setItem] = useState(() => {
        return computeInitialCounter();
    })

    // хук работает асинхронно
    //
    // если мы захотим изменить item дважды в функции inc
    // и используем две записи вида setItem(item + 1), то item увличится только на еденицу
    // т.к. для изменения должен произойти цикл рендеринга
    // чтобы решить данную проблему setItem можте принимать callback функциюю, принимающую предыдущее состояние
    // т.е. елси нам нужно точно основываться на том состоянии, которое появилось после первого изменения, и далее
    // работать с уже изменненным состоянием внутри все той же функции до перерендерига, то нужно использовать
    // описанную форму записи

    const inc = () => {
        setItem((prev) => {
            return prev + 1;
        })
        setItem((prev) => {
            return prev + 1;
        })
    };

    const dec = () => setItem((prev) => +prev - 1);

    // если стейт объект, что бывает редко, то поля его нужно менять иммутабельно, через prev
    const [state, setState] = useState({
        title: 'counter',
        date: Date.now(),
    })

    const changeTitle = () => {
        setState(prev => {
            return {
                ...prev,
                title: 'new title'
            }
        })
    }

    return (
        <div className="App">
            <div>counter {item}</div>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
            <button onClick={changeTitle}>change title</button>
        </div>
    );
}
