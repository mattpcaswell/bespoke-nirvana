import React, { Component } from 'react';
import './ImageAndDetail.css';
import BedImageFile from '../assets/bed.jpg';
import SilkBackgroundFile from '../assets/silk-background.jpg';

class ImageAndDetail extends Component {
    render() {
        let SilkBackgroundStyle = {
            background: 'url(' + SilkBackgroundFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'  
        };
        let BedImageStyle = {
            background: 'url(' + BedImageFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'  
        };

        return (
            <div className='image-and-detail panel' style={SilkBackgroundStyle}>
                <div className='detail-text'>
                    <div className='detail-title'>Lorem Ipsum</div>
                    <ul>
                        <li>Ipsum nostrud incididunt nulla sint.</li>
                        <li>Consectetur anim cillum consectetur consequat.</li>
                        <li>Esse aute Lorem fugiat enim mollit aliqua ut id cupidatat.</li>
                        <li>Aliqua mollit exercitation.</li>
                    </ul>
                </div>
                <div className='image' style={BedImageStyle}></div>
            </div>
        );
    }
}

export default ImageAndDetail;