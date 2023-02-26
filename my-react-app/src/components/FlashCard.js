import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'

function FlashCard(props) {
    var [isFront, setIsFront] = useState(true)

    useEffect(()=>{
        setIsFront(true)
    },[props.card])

    var flip = () => {
        setIsFront(!isFront)
    }

    var display = () => {
        if(isFront)
            return props.card.front
        return props.card.back
    }
    
    return <div>
        {props.card && <div>
            <h2> {display()} </h2>
            <Button onClick={flip}>Flip</Button>
            </div>}
        </div>
}

export default FlashCard;