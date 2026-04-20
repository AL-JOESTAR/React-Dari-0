import { useMemo, useState } from "react"


function App(){
  const [likeCounter, setLikeCounter] = useState(0);
  const [subcribeCounter, setSubscribeCounter] = useState(0);

  function pesanLike(){
    console.log('pesan like render');
    return (likeCounter < 10) ? 'like kurang dari 10' : 'gg bang'
  }
  
  const displatPesanLike = useMemo(()=> pesanLike(),[likeCounter]);
  return (
  <>
    <p>
      <button onClick={()=>setLikeCounter(likeCounter + 1)}>{likeCounter} Like</button> {displatPesanLike}
    </p>
    <p>
      <button onClick={()=>setSubscribeCounter(subcribeCounter + 1)}>{subcribeCounter} Subscribe</button>
    </p>
  </>
)
}

export default App