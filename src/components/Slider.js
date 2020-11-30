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
                        className="d-block"
                        src={thumbnails[image].default}
                        alt={item.name}
                        />
                        <Carousel.Caption onClick={() => props.changeMonster(item)}>{item.name}</Carousel.Caption>
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
        <Carousel activeIndex={props.index} onSelect={() => props.handleSelect()} interval={null} indicators={false}>
            {mySlider()}
        </Carousel>
    )
}

export default Slider;
