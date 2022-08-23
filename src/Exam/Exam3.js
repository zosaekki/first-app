import { memo, useState } from "react";
import Button from "./Button";
import './Eaxm3.css';

export default function Exam3() {
    const [ val, setVal ] = useState('버튼1');
    const btn10nClick = () => setVal('Button1');
    const MemorizedBtn = memo(Button);
    return (
        <div>
            <MemorizedBtn text={val} color="red" onClick={btn10nClick} />
            <MemorizedBtn text="버튼2" color="blue" />
            <MemorizedBtn text="버튼3" color="pink" />
        </div>
    )
}