import React from 'react';
import Header from './HeaderComponents';
import TextContainer from './TextFieldComponent';
import FooterComp from './FooterComponent';

class Main extends React.Component {

    render() {
        return (
            <main>
                <Header />
                <TextContainer />
                <FooterComp />
            </main>
        );
    }
}

export default Main;