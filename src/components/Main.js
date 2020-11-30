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
            const locations = () => {return monster.locations.map((location, i) => {
                return <span key={i}>{location.name}</span>
            })}
            return (
                <Card>
                    <div className="myImage">
                        <Card.Img variant="top" src={utils.images[image].default} alt={monster.name} />
                    </div>
                    <Card.Body>
                        <Card.Title>{monster.name}</Card.Title>
                        <Card.Text>
                            <b>Specie :</b> {monster.species}
                            <br></br>
                            <b>Description :</b> {monster.description}
                            <br></br>
                            <b>Location :</b> {locations()}
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
