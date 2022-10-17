/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generator() {
  let x = who[Math.floor(Math.random() * who.length)];
  let y = what[Math.floor(Math.random() * what.length)];
  let z = when[Math.floor(Math.random() * when.length)];
  return x + " " + y + " " + z;
}

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = generator();
  console.log("Look Mom! I'm on the internet!");
};
