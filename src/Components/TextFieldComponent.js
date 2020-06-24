import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

function TextContainer() {

    $(document).ready(function () {

        var errorCount = 0;
        var attemptLeft = 1;
        var mistakeCounter = 0;

        $('#code-template').bind("contextmenu", function (e) {
            e.preventDefault();
            var alertmsg = document.getElementById('alert-msg');
            alertmsg.innerHTML = "Right Click disabled."
            errorCount += 1;
            console.log(errorCount);
            if (errorCount === 3) {
                attemptLeft -= 1;
                console.log("Function called");
                // window.location.replace("/exit");
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
                mistakeCounter += 1;
                console.log(errorCount);
                if (errorCount === 3) {
                    attemptLeft -= 1;
                    console.log("Function called");
                }
            }
        })

        $('#button').click(function () {
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
                            mistakeCounter += 1;
                            alertmsg.innerHTML = "Total Mistakes " + mistakeCounter;
                            console.log("Total Mistakes " + mistakeCounter);
                        }
                        else {
                            var alertmsg = document.getElementById('alert-msg');
                            alertmsg.innerHTML = "Strings Matched";
                            console.log("Total Mistakes " + mistakeCounter);
                            alertmsg.innerHTML = "Total Mistakes " + mistakeCounter;
                            console.log(mistakeCounter);
                        }
                    }
                    else {
                        var alertmsg = document.getElementById('alert-msg');
                        alertmsg.innerHTML = "Enter string please";
                    }
                    if (mistakeCounter < 5) {
                        window.location.replace("https://airtable.com/shrwv95wKX8Yicec2");
                    }
                    else{
                        window.location.reload();
                    }
                }
            }
        })
    });

    const para = "I tend, as a reader, to prize and admire clarity, precision, plainness, lucidity, and the sort of magical compression that enriches instead of vitiates. Someone's ability to write this way, especially in nonfiction, fills me with envy, and awe. That might help explain why a fair number of Best American Essay pieces tend to be short, terse, and informal in usage/syntax. Readers who enjoy noodling about genre might welcome the news that several of this year's Best Essays are arguably more like causeries or propos than like essays per se, although one could counterargue that these pieces tend, in their essential pithiness, to be closer to what's historically been meant by 'essay.'"

    return (
        <section id="text-field">
            <div id="code-template">
                <p className="note" align="center">Note: You cannot delete any text, so make sure to type precisely!
            <br></br>Messing with the website will increase your mistake count.<br></br> Score less than 5 mistakes to win! You will be automatically redirected.
            </p>
                <Row className="justify-content-md-center">
                    <Col sm={5}>
                        <div className="container">
                            <div className="header">
                                <h2 className="text-head"> Paragraph to copy </h2>
                                <p name="quest" className="text" id="text">{para}</p>
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
        </section>
    );
}

export default TextContainer;