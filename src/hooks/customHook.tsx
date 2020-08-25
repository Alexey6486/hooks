import React, {ChangeEvent, useEffect, useState} from "react";

export const useLogger = (value: string) => {
    useEffect(() => {
        console.log('val changed: ', value)
    }, [value])
}

export const useInput = (initialValue: string) => {

    const [value, setValue] = useState(initialValue);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    const clear = () => {
        setValue('');
    }

    return {
        bind: { value, onChange },
        value,
        clear,
    }
}

export const CustomHook = () => {

    // const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    //
    // const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setName(e.currentTarget.value);
    // };
    // const changeLastNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setLastName(e.currentTarget.value);
    // };

    const name = useInput('');
    const lastName = useInput('');

    return (
        <div>
            <div>
                Custom Hook {name.value} {lastName.value}
            </div>
            {/*<input type="text" value={input.val} onChange={(e) => input.onChange(e)}/>*/}
            {/*<input type="text" value={input.val} onChange={(e) => input.onChange(e)}/>*/}

            {/* т.к. в кастомном хуке мы использовали теже названия value и onChange, то можно передать параметры вот так: */}
            {/* т.к. помимо value и onChange у нас есть другие свойства в хуке, то мы объединяем их в bind, чтобы
            jsx не ругался и вызывам соответствующи образом */}
            <input type="text" {...name.bind}/>
            <input type="text" {...lastName.bind}/>
            <button onClick={() => {
                name.clear()
                lastName.clear()
            }}>Clear</button>
        </div>
    )
}