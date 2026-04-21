import { memo } from "react"

function ChildComponent (props) {
    console.log('child rendered')
    return (
        <>
        <h3>channel yt {props.name}</h3>
        </>
    )
}

export default memo(ChildComponent)