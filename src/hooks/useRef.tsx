import React, {useEffect, useRef, useState} from "react";

export const UseRef = () => {

    // получаем переменную, объект со свойстом current; не картеж, как в случае с useState;
    const renderCount = useRef(1);

    const [value, setValue] = useState('');

    // если в данном хуке испольховать useState - setValue, то компонент впадет в бесконечный цикл перерендеринга
    // при использовании useRef, перерендер будет происходить только при изменении value - при использовании setValue
    useEffect(() => {
        renderCount.current++
    })

    // другое использование данного хука - получение ссылок на дом элементы
    const inputRef = useRef<any>();

    useEffect(() => {
        if (inputRef) {
            console.log(inputRef.current.value)
        }
    })

    // ref часто используются для того, чтобы задавать фокус на элементы
    // теперь по клику на кнопку инпут станет активным, потому что мы поставили на него ссылку
    const focus = () => inputRef.current.focus()

    // еще одно использование хука - получение значения предыдущего стейта
    const prevVal = useRef('');
    useEffect(() => {
        prevVal.current = value;
    }, [value])

    return (
        <div>
            <div>UseRef {renderCount.current}</div>
            <input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
            <button onClick={focus}>focus</button>
            <div>last state: {prevVal.current}</div>
        </div>
    );
}