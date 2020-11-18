import React from 'react';
import Card from 'react-bootstrap/Card';
import './Main.css';
import * as utils from '../utils.js';

const Main = (props) => {

    const myCard = () => {
        //check if props.monsters is not empty
        if (props.monsters.length !== 0) {    
            //console.log(props.monsters[0])
            let monster = props.monsters[0];
            let mySrc = "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-"+utils.toSnakeCase(monster.name)+"_render_001.png";
            return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={mySrc} alt={monster.name} />
                    <Card.Body>
                        <Card.Title>{monster.name}</Card.Title>
                        <Card.Text>
                            Specie : {monster.species}
                        </Card.Text>
                    </Card.Body>
                </Card>
                )
        } else {
            return (
                <div className="Card" />
            )
        }
    }
    return (
        <div className="Card">
            {myCard()}
        </div>
    )
}

export default Main;
