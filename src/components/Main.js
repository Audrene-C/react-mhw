import React from 'react';
import jQuery from 'jquery';
import Card from 'react-bootstrap/Card';
import Weaknesses from './Weaknesses.js';
import './Main.css';
import * as utils from '../utils.js';

const Main = (props) => {

    const myCard = () => {
        //check if props.monster is not empty
        if (!jQuery.isEmptyObject(props.monster)) {   
            let monster = props.monster
            let image = utils.toSnakeCase(monster.name)+"_render.png"
            return (
                <Card style={{ width: "75vw" }}>
                    <Card.Img variant="top" style={{ width: "70vw" }} src={utils.images[image].default} alt={monster.name} />
                    <Card.Body>
                        <Card.Title>{monster.name}</Card.Title>
                        <Card.Text>
                            Specie : {monster.species}
                            <br></br>
                            Description : {monster.description}
                        </Card.Text>
                        <Weaknesses weak={monster.weaknesses} />
                    </Card.Body>
                </Card>
                )
        } else {
            return (
                <></>
            )
        }
    }
    return (
        <React.Fragment>
            {myCard()}
        </React.Fragment>
    )
}

export default Main;
