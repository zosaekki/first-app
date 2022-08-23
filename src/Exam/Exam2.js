import { useState } from 'react'; // 리렌더링

function Exam2() {
    /*
    const data = useState(0); // 배열이 넘어옴, useState() 보내는 값은 0번방의 초기값
    const counter = data(0);
    const setCounter = data[1];
    */
    const [ counter, setCounter ] = useState(0);

    function countUp() {
        /*
        counter = counter + 1;
        console.log(counter);
        console.log(data);
        */
        // setCounter(counter + 1);
        setCounter(preVal => preVal + 1); // call back 함수를 사용해서 안정적으로 사용
    }

    return (
        <div>
            <h1>click counter : { counter }</h1>
            <button onClick={ countUp }>Click Me</button>
        </div>
    )
};

export default Exam2;