import { memo } from "react"

function ChildComponent (props) {
    console.log('child rendered')
    return (
        <>
        <h3>channel yt {props.name}</h3>
        <button onClick={props.aksi}>ganti nama chanel gak?</button>
        </>
    )
}

export default memo(ChildComponent)