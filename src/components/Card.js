import React from 'react';

const Card = (props) => {
    
    function displayCard() {
        
        if (props.monsters.length !== 0) {
            
            const monster = props.monsters[1]
            console.log(monster)

            return (
                <div className="Card">
                    <ul>
                        <img src="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-anjanath_icon.png" alt="anjanath" />
                        <br />
                        {monster.name}
                    </ul>
                </div>
            );
        } else {

            return (
                <div className="Card" />
            )
        }
    }


    return (
        <>
            {displayCard()}
        </>
    )
}

export default Card;
