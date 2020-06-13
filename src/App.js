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
    }
  });


  $(document).ready(function () {
    $('#nav-disable').bind("contextmenu", function (e) {
      e.preventDefault();
    });
  });

  return (
    <Main />
  );


}

export default App;
