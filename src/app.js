/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuse_generator = document.getElementById("excuse");
  function generateExcuse() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    console.log("onload");
    let randomnumber = Math.random() * 3;
    console.log(Math.floor(randomnumber));
    let whoIndx = Math.floor(randomnumber);
    let actionIndx = Math.floor(randomnumber);
    let randomnumber2 = Math.random() * 2;
    let whatIndx = Math.floor(randomnumber2);
    let randomnumber3 = Math.random() * 4;
    let whenIndx = Math.floor(randomnumber3);

    return (
      who[whoIndx] +
      " " +
      action[actionIndx] +
      " " +
      what[whatIndx] +
      " " +
      when[whenIndx]
    );
  }
  excuse_generator.innerHTML = generateExcuse();
};
