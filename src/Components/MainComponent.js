import React from 'react';
import Header from './HeaderComponents';
import TextContainer from './TextFieldComponent';
// import Details from './Details';

class Main extends React.Component {

    render() {
        return (
            <main>
                <Header />
                <TextContainer />
            </main>
        );
    }
}

export default Main;