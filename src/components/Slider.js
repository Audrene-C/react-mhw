import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import * as utils from '../utils.js';
import './Slider.css';

const Slider = (props) => {

    const mySlider = () => {
        //check if state is not empty
        if (props.monsters.length !== 0) {
            //object where key is the image's name and value is a module
            let thumbnails = utils.thumbnails;
            //loop on each monster of the state
            return props.monsters.map((item, i) => {
                let image = utils.toSnakeCase(item.name)+".png"
                return (
                    <Carousel.Item className="w-33" key={i} onClick={() => props.changeMonster(item)}>
                        <img
                        className="d-block w-100"
                        src={thumbnails[image].default}
                        alt={item.name}
                        />
                        <p>{item.name}</p>
                    </Carousel.Item>
                )
            })
        } else {
            return (
                <></>
            )
        }
    }
    return (
        <Carousel interval={null}>
            {mySlider()}
        </Carousel>
    )
}

export default Slider;
