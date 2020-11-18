import React from 'react';
import Card from 'react-bootstrap/Card';

const Monsters = (props) => {

    function toSnakeCase(string) {
        if (string)
        return (string
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('_'));
    }
    
    const myCard = () => {
        //check if props.monsters is not empty
        if (props.monsters.length !== 0) {    
            //console.log(props.monsters[0])        
            return props.monsters.map((item, i) => {
                let mySrc = "../thumbnails/"+toSnakeCase(item.name)+".png";
                console.log(toSnakeCase(item.name))
                return (
                    <Card key={i} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={mySrc} alt={item.name} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                Specie : {item.species}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
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

export default Monsters;
