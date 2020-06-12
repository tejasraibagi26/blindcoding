import React from 'react';
import Header from './HeaderComponents';
import TextContainer from './TextFieldComponent';
import $ from 'jquery';
// import Details from './Details';

function Main() {

    $(window).on('resize', function() {
        var $containerHeight = $(window).height();
        var $containerWidth = $(window).width();

        if($containerHeight <= 1200 || $containerWidth <= 1500){
            alert('Do not move away from the website');
        }
    });

    return (
        <main>
            <Header />
            <TextContainer />
        </main>
    );
}

export default Main;