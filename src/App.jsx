import { useMemo, useState } from "react"
import ChildComponent from "./ChildComoponent";


function App(){
  const [likeCounter, setLikeCounter] = useState(0);
  const [subcribeCounter, setSubscribeCounter] = useState(0);
  const [name, setName] = useState("nafthify");

  function handlerName(){
    let channelName = '';
    if(name == 'nafthify'){
      channelName = "al-joestar"
    } else{
      channelName = "nafthify"
    }

    setName(channelName);
    console.log(`setnaem run ${name}`);
  }

  return (
  <>
    <p>
      <button onClick={()=>setLikeCounter(likeCounter + 1)}>{likeCounter} Like</button> 
    </p>
    <p>
      <button onClick={()=>setSubscribeCounter(subcribeCounter + 1)}>{subcribeCounter} Subscribe</button>
    </p>

    <ChildComponent name={name}/>

    <button onClick={handlerName}>ganti nama chanel gak?</button>
  </>
)
}

export default App