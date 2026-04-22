import { useRef } from "react"

function App (){
  const mesage = useRef(null)

  const displayPesan = useRef(null)

  function clickHandler() {
    console.log(mesage.current.value);
    displayPesan.current.innerHTML = mesage.current.value;

    displayPesan.current.style.padding = "5px";
    displayPesan.current.style.marginTop = "5px";
    displayPesan.current.style.backgroundColor = "#000";
    displayPesan.current.style.color = "#fff";
  }
  return (
    <>
      <div>
        <input type="text" ref={mesage} placeholder="kirim pesan"/>
      </div>

      <div>
        <button onClick={clickHandler}>klik saya</button>
      </div>

    <div ref={displayPesan}></div>
    </>
  )
}

export default App