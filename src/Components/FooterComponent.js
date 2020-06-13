import React from 'react';
import { Container } from 'react-bootstrap';

function FooterComponent() {
    return (
        <footer className = "footer-container">
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                    Made with &hearts; by <a href="https://tejasraibagi26.github.io/info/"> Tejas Raibagi </a>
                </Container>
            </div>
        </footer>
    );
}

export default FooterComponent;