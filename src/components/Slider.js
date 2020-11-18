import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import * as utils from '../utils.js';
import barroth from '../thumbnails/barroth.png';
import './Slider.css';

const Slider = (props) => {

    const mySlider = () => {
        if (props.monsters.length !== 0) {
            let thumbnails = utils.thumbnails;
            return props.monsters.map((item, i) => {
                let image = utils.toSnakeCase(item.name)+".png"
                console.log("barroth", barroth);
                return (
                    <Carousel.Item>
                        <img
                        className="d-block w-25"
                        src={thumbnails[image].default}
                        alt={item.name}
                        />
                        <Carousel.Caption>
                        <h3>{item.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        } else {
            return (
                <div className="Slider" />
            )
        }
    }
    return (
        <Carousel>
            {mySlider()}
        </Carousel>
    )
}

export default Slider;
