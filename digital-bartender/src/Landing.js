import React, {useState} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Container';

import {ReactComponent as ReactLogo} from './drink.svg';

function Landing() {
    return <div className="dark-bkg green">
        <Row>
        <div className="col-lg-7 align-content-center pt-md-4">
            <h1>Explore new recipes and mix it up with Mixer!</h1>
        </div>
        <div className="col-lg-3 col-8 offset-2 offset-lg-1">
            <ReactLogo style={{maxWidth: '20rem'}}/>
        </div>
    </Row>
    </div>
    
}

export default Landing