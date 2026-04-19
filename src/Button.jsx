import { useEffect, useState } from "react";

function Button (){

    const [countLike, setCountlike] = useState(0);
    const [countDislike, setCountDislike] = useState(0);

    useEffect(() => {
        console.log(`test like ${countLike} | dislike ${countDislike}`);
    }, []);
    

    return (
        <>
        <button onClick={() => setCountlike(countLike + 1)}>{countLike} Like</button>
        <button onClick={() => setCountDislike(countDislike + 1)}>{countDislike} Dislike</button>
        </>
    )
}

export default Button