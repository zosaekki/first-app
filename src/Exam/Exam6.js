import { useEffect, useState } from "react";

function Hello() {
    useEffect(() => {
        console.log('Hello!');
        // 클린업 함수
        return () => { 
            console.log('Bye!');
        }
    }, [])

    return (
        <div>
            <strong>Hello</strong>
        </div>
    )
}

export default function Eaxm6() {
    const [ showing, setShowing ] = useState(false);
    const onClickBtn = () => {
        setShowing(preVal => !preVal)
    }

    return (
        <div>
            <button onClick={onClickBtn}>{showing ? 'hide' : 'show'}</button>
            { showing ? <Hello /> : null }
        </div>
    )
}