import { useContext, useState } from "react"
import { createContext } from "react"

function Child1() {
  const data = useContext(Context)
   return <>
  <div>child 1 : {data.nama}</div>
  <Child2 />
  </>
}
function Child2(){
  const data = useContext(Context)
  return <>
  <div>child 2 : {data.nama}</div>
  <Child3 />

  </>
}
function Child3() {
  const data = useContext(Context)
  function clickHandler(){
    if(data.nama == 'joko'){
      data.setNama('eko')
    } else {
      data.setNama('joko')
    }
  }
  return (
    <>
      {data.nama}
      {data.umur}
      <button onClick={clickHandler}>ganti nama</button>
    </>
  )
}

const Context = createContext();

function App () {
  const [nama,setNama] = useState("joko")
  return (
    <>
    <Context.Provider value={{ nama, setNama, umur: 25}}>

      <Child1 name="joko"/>
    </Context.Provider>
    </>
  )
}

export default App