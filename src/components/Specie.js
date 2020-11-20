import React from 'react';
import { Nav } from 'react-bootstrap';

const Specie = (props) => {

    return(
        <Nav variant="tabs" defaultActiveKey="all">
            <Nav.Item>
                <Nav.Link onSelect={() => props.changeSpecie("all")} eventKey="all">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onSelect={() => props.changeSpecie("fanged wyvern")} eventKey="fanged wyvern">Fanged wyvern</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onSelect={() => props.changeSpecie("bird wyvern")} eventKey="bird wyvern">Bird wyvern</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onSelect={() => props.changeSpecie("brute wyvern")} eventKey="brute wyvern">Brute wyvern</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onSelect={() => props.changeSpecie("flying wyvern")} eventKey="flying wyvern">Flying wyvern</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onSelect={() => props.changeSpecie("piscine wyvern")} eventKey="piscine wyvern">Piscine wyvern</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onSelect={() => props.changeSpecie("fanged beast")} eventKey="fanged beast">Fanged beast</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onSelect={() => props.changeSpecie("elder dragon")} eventKey="elder dragon">Elder dragon</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Specie;
