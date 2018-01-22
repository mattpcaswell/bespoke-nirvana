import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import ConcreteFile from '../assets/concrete.jpg';
import TaxiFile from '../assets/taxi.png';
import FriendsFile from '../assets/friends.png';
import GondolaFile from '../assets/gondola.jpg';
import WalkingFile from '../assets/walking.png';
import './FourPanel.css';

class FourPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {showingImage: false};
    }
    render() {
        let concreteStyle = {
            background: 'url(' + ConcreteFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'
        };
        let TaxiStyle = {
            background: 'url(' + TaxiFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'
        };
        let FriendsStyle = {
            background: 'url(' + FriendsFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'
        };
        let GondolaStyle = {
            background: 'url(' + GondolaFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'
        };
        let WalkingStyle = {
            background: 'url(' + WalkingFile + ') no-repeat center center scroll',
            backgroundSize: 'cover'
        };


        return (
            <div className='four-panel panel' style={concreteStyle}>
                <div className="four-panel-text">
                    For travelers from around the world, Hotel Nirvana is the destination for all things New York. Broadway entertainment, shopping, romance, food.
                </div>
                <div className="four-panel-container">
                    <div className="panel">
                        <Fade up className="panel-image" duration={2000} fraction={.25} onReveal={ () => this.setState({showingImage: true}) }><div className="panel-image" style={TaxiStyle}></div></Fade>
                        <div className={"panel-text" + (this.state.showingImage ? " fade-out" : "")}>Veniam duis sunt labore ipsum esse adipisicing id proident esse sunt nisi labore aliqua elit.</div>
                        <div className={"diamond fuchsia" + (this.state.showingImage ? " fade-out" : "")}>&#9670;</div>
                    </div>
                    <div className="panel">
                        <Fade down className="panel-image" duration={2000} fraction={.25}><div className="panel-image" style={FriendsStyle}></div></Fade>
                        <div className={"panel-text" + (this.state.showingImage ? " fade-out" : "")}>Veniam duis sunt labore ipsum esse adipisicing id proident esse sunt nisi labore aliqua elit.</div>
                        <div className={"diamond dark-sea-green" + (this.state.showingImage ? " fade-out" : "")}>&#9670;</div>
                    </div>
                    <div className="panel">
                        <Fade up className="panel-image" duration={2000} fraction={.25}><div className="panel-image" style={GondolaStyle}></div></Fade>
                        <div className={"panel-text" + (this.state.showingImage ? " fade-out" : "")}>Veniam duis sunt labore ipsum esse adipisicing id proident esse sunt nisi labore aliqua elit.</div>
                        <div className={"diamond cyan" + (this.state.showingImage ? " fade-out" : "")}>&#9670;</div>
                    </div>
                    <div className="panel">
                        <Fade down className="panel-image" duration={2000} fraction={.25}><div className="panel-image" style={WalkingStyle}></div></Fade>
                        <div className={"panel-text" + (this.state.showingImage ? " fade-out" : "")}>Veniam duis sunt labore ipsum esse adipisicing id proident esse sunt nisi labore aliqua elit.</div>
                        <div className={"diamond yellow" + (this.state.showingImage ? " fade-out" : "")}>&#9670;</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FourPanel;
