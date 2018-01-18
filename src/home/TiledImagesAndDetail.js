import React, { Component } from 'react';
import './TiledImageAndDetail.css';
import NySkylineFile from '../assets/nyc-skyline.png';
import TimeSquareFile from '../assets/times-square.png';
import TeaFile from '../assets/tea.jpg';
import MuffinFile from '../assets/muffin.png';
import SquiggleFile from '../assets/squiggle.png';

class TiledImageAndDetail extends Component {
    render() {
        let NySkylineStyle = {
            background: 'url(' + NySkylineFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'  
        };
        let TimesSquareStyle = {
            background: 'url(' + TimeSquareFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'  
        };
        let TeaStyle = {
            background: 'url(' + TeaFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'  
        };
        let MuffinStyle = {
            background: 'url(' + MuffinFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'  
        };
        let SquiggleStyle = {
            background: 'url(' + SquiggleFile + ') repeat-x center center scroll'
        };

        return (
            <div className='tiled-image-and-detail panel'>
                <div className="left-picture" style={NySkylineStyle}></div>
                <div className="text-container">
                    <div className="squiggle" style={SquiggleStyle}></div>
                    Eiusmod voluptate amet deserunt do cillum amet ea aliqua officia magna velit cillum. Occaecat quis cupidatat occaecat nulla esse fugiat dolor dolore magna commodo esse in voluptate. Adipisicing incididunt aliqua velit veniam nulla non magna nulla qui cillum consectetur pariatur deserunt velit. Ut aute elit veniam enim proident cillum dolore elit nostrud irure nostrud incididunt. Amet quis sint officia ad. Aliquip nulla aute aliquip deserunt consectetur laboris quis laborum sit cillum sit nostrud.
                </div>
                <div className="right-picture-container">
                    <div className="top-picture" style={TimesSquareStyle}></div>
                    <div className="bottom-picture-container">
                        <div className="bottom-left-picture" style={MuffinStyle}></div>
                        <div className="bottom-right-picture" style={TeaStyle}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TiledImageAndDetail;