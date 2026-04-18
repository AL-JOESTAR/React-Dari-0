import { useState } from "react";

function Button (){

    const [counter, setCounter] = useState(0);

    let newCounter = 0;

function clickHandler() {
    newCounter = counter + 1;
    console.log(`saya diklik ${newCounter}`);
    setCounter(newCounter)

}

    return (
        <button onClick={clickHandler}>klik bray {counter}</button>
    )
}

export default Button