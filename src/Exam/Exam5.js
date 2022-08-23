import { useState, useEffect } from 'react';

export default function Exam5() {
    const [ counter, setCounter] = useState(0);
    const [ keyword, setKeyWord] = useState('');

    const countUp = () => setCounter(preVal => preVal + 1); // call back 함수를 사용해서 안정적으로 사용
    const countDown = () => setCounter(preVal => preVal === 0 ? 0 : preVal - 1); // call back 함수를 사용해서 안정적으로 사용
    const onChangeText = (e) => { // e => input event
        setKeyWord(e.target.value);
    }

    useEffect(() => {
        if(keyword.length > 5) {
            console.log('AAA');
        }
    }, [keyword]); // keyword가 바뀔 때 마다 실행

    return (
        <div>
            <input
                type="text"
                placeholder='Seacrh here...'
                value={ keyword }
                onChange={ onChangeText }
            />
            <h1>{ counter }</h1>
            <button onClick={ countUp }>+</button>
            <button onClick={ countDown }>-</button>
        </div>
    )
}