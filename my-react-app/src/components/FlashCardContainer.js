import { useState } from "react";
import FlashCard from "./FlashCard"
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function FlashCardContainer(){
    var cards = [];
    var [index, setIndex] = useState(0);
    cards.push(new Card('Front!', 'Back'))
    cards.push(new Card('Front! 2', 'Back 2'))
    cards.push(new Card('Front! 3', 'Back 3'))

    var click = () => {
        if(cards.length === index+1){
            setIndex(0)
        } else {
            setIndex(index + 1)  
        }
    }

    var prev = () => {
        if(index === 0){
            setIndex(cards.length-1)
        } else {
            setIndex(0)
        }
    }


    return <Container>
        <div className="card">
            <FlashCard card={cards[index]}/>
            </div>
            <h3>Card {index+1} of {cards.length}</h3>
            <Row>
                <Col>
                <ButtonGroup size="lg">
                    <Button className="btn btn-secondary btn-block"onClick={prev}>Prev</Button>
                    <Button className="btn btn-primary" onClick={click}>Next</Button>
                </ButtonGroup>
                </Col>
            </Row>
        </Container>
}

class Card {
    constructor(front, back){
        this.front = front;
        this.back = back;
    }
}

export default FlashCardContainer