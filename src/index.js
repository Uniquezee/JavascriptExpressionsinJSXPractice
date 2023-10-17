import React from "react";
import ReactDom from "react-dom";
const yourName = "Amarachi";
const currentYear = new Date();
const year = currentYear.getFullYear();

ReactDom.render(
  <div>
    <p>Created by {yourName}</p>
    <p> Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
