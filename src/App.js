import React from 'react';
import Main from './Components/MainComponent';

import $ from 'jquery';

import './CSS/Main.css'

function App() {

  $(window).on('resize', function () {
    var $containerHeight = $(window).height();
    var $containerWidth = $(window).width();

    if ($containerHeight <= 1200 || $containerWidth <= 1500) {
      alert('Do not move away from the website');
      var alertmsg = document.getElementById('alert-msg');
      alertmsg.innerHTML = "Do not move away from the website";
    }
  });


  $(document).ready(function () {
    $('#nav-disable').bind("contextmenu", function (e) {
      e.preventDefault();
    });
  });

  var ar = new Array(37, 38, 39, 40);
  $(document).keydown(function (e) {
    var key = e.which;
    if ($.inArray(key, ar) > -1 && e.shiftKey) {
      e.preventDefault();
      var alertmsg = document.getElementById('alert-msg');
      alertmsg.innerHTML = "Function Disabled";
      return false;
    }
    return true;
  });

  return (
    <Main />
  );


}

export default App;
