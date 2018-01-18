import React, { Component } from 'react';
import './HeroImage.css';
import HeroImageFile from '../assets/nyc-night.jpg';

class HeroImage extends Component {
    render() {
        let style = {
            background: 'url(' + HeroImageFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'  
        };

        return (
            <div className='hero-image panel' style={style}>
                <div className='hero-image-text'>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default HeroImage;