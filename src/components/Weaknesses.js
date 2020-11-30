import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import './Weaknesses.css';

const Weaknesses = (props) => {

    const weakTo = (x) => {
        //use x to sorts out the 2 types of weaknesses
        if (x === "element") {
            return props.weak.map((weakness, i) => {
                if (weakness.element === "fire" || weakness.element === "water" || weakness.element === "thunder" || weakness.element === "ice" || weakness.element === "dragon") {
                    return (
                        <ListGroup.Item key={i} className={weakness.element}>{weakness.element} : {weakness.stars}</ListGroup.Item>
                    )
                }
                return <></>
            })
        } else {
            return props.weak.map((weakness, i) => {
                if (weakness.element === "poison" || weakness.element === "sleep" || weakness.element === "paralysis" || weakness.element === "blast" || weakness.element === "stun") {
                    return (
                        <ListGroup.Item key={i} className={weakness.element}>{weakness.element} : {weakness.stars}</ListGroup.Item>
                    )
                }
                return <></>
            })
        }
    }

    return (
        <Row>
            <Col>
                <ListGroup>{weakTo("element")}</ListGroup>
            </Col>
            <Col>
                <ListGroup>{weakTo("status")}</ListGroup>
            </Col>
        </Row>
    )
}

export default Weaknesses;
