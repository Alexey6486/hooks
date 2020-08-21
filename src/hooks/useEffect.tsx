import React, {ChangeEvent, useEffect, useState} from "react";

export const UseEffect = () => {

    const [type, setType] = useState('users');

    // будет вызываться каждый раз при новом рендере
    // useEffect(() => {
    //     console.log('render 1')
    // })

    // данный хук будет вызван первый раз и далее, только если меняется стейт type, рендер при других изменениях не будет
    // затрагивать данный хук
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     console.log('render 2')
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(response => response.json())
    //         .then(json => setData(json));
    //     return () => {
    //         console.log('clean type');
    //     }
    // }, [type])

    // передавая массив пустых зависимостей, хук отработает один раз и на дальнейшие изменения регировать, перерендериваться
    // не будет
    // useEffect(() => {
    //     console.log('component did mount')
    // }, []);

    const [pos, setPos] = useState({
        x: 0,
        y: 0,
    });
    // ставим пустой массив зависимости, один раз рендерим и один раз вешаем слушателя
    // useEffect(() => {
    //     window.addEventListener('mousemove', event => {
    //         setPos({
    //             x: event.clientX,
    //             y: event.clientY,
    //         })
    //     })
    // }, []);
    // проблема в том, что любые слушатели, которые мы добавляем, нужно удалять
    // чтобы понять, когда нам нужно это сделать, сделаем следующее
    // вынесем callback отдельно
    const mouseMoveHandler = (event: MouseEvent) => {
        setPos({
            x: event.clientX,
            y: event.clientY,
        })
    }
    // передадим его как референс
    // в хуке добавим return функции, которая позволяет очищать слушателя, когда заокнчится действие useEffect
    // в данной реализации мы не увидим работу клинера, потому что она сработает когда компонент будет удалять
    // добавим очистку в примере с фетч, каждый раз когда будут приходить новые данные с сервера, будет происходить очистка
    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler);
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        }
    }, []);

    return (
        <div>
            <div>{type}</div>
            <button onClick={() => setType('users')}>users</button>
            <button onClick={() => setType('posts')}>posts</button>
            <button onClick={() => setType('comments')}>comments</button>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}