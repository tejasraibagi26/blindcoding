import React from 'react';
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery';

function TextContainer() {

    $(document).ready(function () {
        $('#textarea').bind("cut copy paste", function (e) {
            e.preventDefault();
            alert("You cannot cut/copy/paste into this text field.");
            $('#textarea').bind("contextmenu", function (e) {
                e.preventDefault();
            });
        });
        $('#code-template').bind("contextmenu", function (e) {
            e.preventDefault();
        });
    });

    return (
        <div id="code-template">
            <div className="row row-md-5 justify-content-center">
                <div className="container">
                    <div className="header">
                        <h2 className="text-head"> Paragraph to copy </h2>
                        <p className="text" id="text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="header">
                        <h2 className="text-head"> Write here (Hidden) </h2>
                        <Form>
                            <textarea id="textarea" className="answer-holder" rows='12' cols='33' onpaste="return false;" placeholder="Answer"></textarea>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <Button>SUBMIT</Button>
            </div>
        </div>
    );
}

export default TextContainer;