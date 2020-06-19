import React from 'react';
import Header from './HeaderComponents';
import TextContainer from './TextFieldComponent';
import FooterComp from './FooterComponent';

class Main extends React.Component {

    render() {
        return (
            <section id="main">
                <main>
                    <Header />
                    <TextContainer />
                    <FooterComp />
                </main>
            </section>
        );
    }
}

export default Main;