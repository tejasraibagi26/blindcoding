import React from 'react';
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery';

function TextContainer() {

    $(document).ready(function () {
        // $('#textarea').bind("cut copy paste", function (e) {
        //     e.preventDefault();
        //     var alertmsg = document.getElementById('alert-msg');
        //     alertmsg.innerHTML = "You cannot cut/copy/paste into this text field."
        //     // alert("You cannot cut/copy/paste into this text field.");
        //     $('#textarea').bind("contextmenu", function (e) {
        //         e.preventDefault();
        //         var alertmsg = document.getElementById('alert-msg');
        //         alertmsg.innerHTML = "Right Click disabled."
        //     });
        // });
        $('#code-template').bind("contextmenu", function (e) {
            e.preventDefault();
            var alertmsg = document.getElementById('alert-msg');
            alertmsg.innerHTML = "Right Click disabled."
        });
        // var el = document.getElementById('textarea');
        // el.addEventListener('keydown', function (event) {
        //     const key = event.key;
        //     if (key === "Backspace" || key === "Delete") {
        //         event.preventDefault();
        //         var alertmsg = document.getElementById('alert-msg');
        //         alertmsg.innerHTML = "You cannot delete!."
        //         // alert('You cannot delete!');
        //     }
        // });
        document.body.addEventListener('keydown', event => {
            if (event.ctrlKey && 'cvxspwuazA'.indexOf(event.key) !== -1) {
              event.preventDefault();
              var alertmsg = document.getElementById('alert-msg');
              alertmsg.innerHTML = "Function Disabled";
            }
          })
    });

    return (
        <div id="code-template">
            <div className="row row-4 justify-content-center">
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
                            <textarea onFocus="null" id="textarea" className="answer-holder" rows='12' cols='33' onpaste="return false;" placeholder="Answer"></textarea>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <h4 id="alert-msg" className="row justify-content-center alerts"></h4>
                <Button onClick = {compare()}>SUBMIT</Button>
            </div>
        </div>
    );

    function compare(){
        // var string1 = 'ABC';
        // var string2 = document.getElementById('textarea').innerHTML;
        // var result = string1.localeCompare(string2);
        // if(result != null){
        //     return true;
        // }
    }
}

export default TextContainer;