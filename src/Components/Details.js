import React from 'react';
import { Button } from 'react-bootstrap';

function Details() {
    return (
        <div className="container">
            <div className="header-content">
                <h1 className="heading-title"> CAN YOU WRITE CODE BLIND? </h1>
                <p className="details-para"> Think you are confident enough to write a code / paragraph without looking?
                <br></br>Then you are at the right spot! We are organizing a competition just for you guys!
                <br></br>So go ahead and register!
                </p>
                <div className="row justify-content-center">
                    <Button>REGISTER NOW</Button>
                </div>
            </div>
        </div>
    )
}

export default Details;