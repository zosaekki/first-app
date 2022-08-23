import Button from "./Button";
import { useState } from 'react';
import './Eaxm3.css';

export default function Exam3() {
    const [ val, setVal ] = useState(10);
    return (
        <div>
            <Button text="btn1" color="red" />
            <Button text={val} color="red" />
            <Button color="red" />
        </div>
    )
}