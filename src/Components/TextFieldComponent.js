import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

function TextContainer() {

    $(document).ready(function () {

        if (localStorage.getItem('isAttemptDone') == null) {
            localStorage.setItem('isAttemptDone', false);
            console.log(localStorage.getItem('isAttemptDone'));
        }
        if (localStorage.getItem('isAttemptDone')) {
            window.location.replace("https://tejasraibagi26.github.io/blindcode/no_attempts");
            // window.location.replace("http://localhost:3000/blindcode/no_attempts");

        }
        else {
            localStorage.setItem('isAttemptDone', true);
            console.log(localStorage.getItem('isAttemptDone'));
        }
        if(localStorage.getItem('isAttemptDone') != null){
            localStorage.removeItem('isAttemptDone');
        }

        var errorCount = 0;
        var attemptLeft = 1;

        $('#code-template').bind("contextmenu", function (e) {
            e.preventDefault();
            var alertmsg = document.getElementById('alert-msg');
            alertmsg.innerHTML = "Right Click disabled."
            errorCount += 1;
            console.log(errorCount);
            if (errorCount === 3) {
                attemptLeft -= 1;
                console.log("Function called");
                window.location.replace("https://tejasraibagi26.github.io/blindcode/exit")
                // window.location.replace("http://localhost:3000/blindcode/exit");
                ;
            }
        });
        var el = document.getElementById('textarea');
        el.addEventListener('keydown', function (event) {
            const key = event.key;
            if (key === "Backspace" || key === "Delete") {
                event.preventDefault();
                var alertmsg = document.getElementById('alert-msg');
                alertmsg.innerHTML = "You cannot delete!."
                // alert('You cannot delete!');
            }
        });
        document.body.addEventListener('keydown', event => {
            if (event.ctrlKey && 'cvxspwuazA'.indexOf(event.key) !== -1 || event.ctrlKey && event.shiftKey && 'cjikzeKCJIZE'.indexOf(event.key) !== -1) {
                event.preventDefault();
                var alertmsg = document.getElementById('alert-msg');
                alertmsg.innerHTML = "Function Disabled";
                errorCount += 1;
                console.log(errorCount);
                if (errorCount === 3) {
                    attemptLeft -= 1;
                    console.log("Function called");
                    window.location.replace("https://tejasraibagi26.github.io/blindcode/exit");
                    // window.location.replace("http://localhost:3000/blindcode/exit");

                }
            }
        })

        if(attemptLeft == 0){
            window.location.replace("https://tejasraibagi26.github.io/blindcode/no_attempts");
        }

        $('#button').click(function () {
            var mistakeCounter = 0;
            attemptLeft -= 1;
            var string1 = $('#text').text();
            var string2 = $('#textarea').val();
            var strSplit = string1.split(" ");
            var strSplit2 = string2.split(" ");
            console.log(strSplit, strSplit2);
            if (string2 !== "") {
                for (var i = 0; i <= strSplit.length - 1; i++) {
                    var result = strSplit[i].localeCompare(strSplit2[i]);
                    console.log(i);
                    console.log(result);
                    if (result !== null) {
                        if (result === -1) {
                            var alertmsg = document.getElementById('alert-msg');
                            alertmsg.innerHTML = "Total Mistakes " + mistakeCounter;
                            mistakeCounter += 1;
                            console.log("Total Mistakes " + mistakeCounter);
                        }
                        else {
                            var alertmsg = document.getElementById('alert-msg');
                            alertmsg.innerHTML = "Strings Matched";
                            console.log("Total Mistakes " + mistakeCounter);
                            alertmsg.innerHTML = "Total Mistakes " + mistakeCounter;
                        }
                    }
                    else {
                        var alertmsg = document.getElementById('alert-msg');
                        alertmsg.innerHTML = "Enter string please";
                    }
                }
                var totalLetters = strSplit.length;
                var percentage = ((totalLetters - mistakeCounter) / 100) * 100;
                console.log(percentage);
            }
        })
    });

    return (
        <div id="code-template">
            <p className="note" align="center">Note: You cannot delete any text, so make sure to type precisely!</p>
            <Row className="justify-content-md-center">
                <Col sm={5}>
                    <div className="container">
                        <div className="header">
                            <h2 className="text-head"> Paragraph to copy </h2>
                            <p name="quest" className="text" id="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="container">
                        <div className="header">
                            <h2 className="text-head"> Write here (Hidden) </h2>
                            <textarea name="answer" id="textarea" className="answer-holder" rows='13' cols='33' placeholder="Answer"></textarea>
                        </div>
                    </div>
                </Col>

            </Row>
            <div className="row justify-content-center">
                <h4 id="alert-msg" className="row justify-content-center alerts"></h4>
                <Button id="button">SUBMIT</Button>
            </div>
        </div>
    );
}

export default TextContainer;