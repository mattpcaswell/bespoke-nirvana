import React, { Component } from 'react';
import Topbar from '../general/Topbar';
import HeroImage from '../general/HeroImage';
import FourPanel from './FourPanel';
import ImageAndDetail from './ImageAndDetail';
import TiledImagesAndDetail from './TiledImagesAndDetail';

class Home extends Component {
    render() {
        return (
            <div className="page">
                <Topbar />
                <HeroImage text='New York City: The Bliss is Yours.'/>
                <FourPanel />
                <ImageAndDetail />
                <TiledImagesAndDetail />
            </div>
        );
    }
}

export default Home;