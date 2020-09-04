import React from 'react';

const Test = (props) => {

    const monsters = () => {
        return props.monsters.map((item, i) => {
            return(
                <li key={i}>
                    {item.name}
                    <img src="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-anjanath_icon.png" alt="anjanath" />
                </li>
            )
        })        
    }

  return (
    <div className="Test">
      <ul>
          {monsters()}
      </ul>
    </div>
  );
}

export default Test;
