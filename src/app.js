/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = () => {
  document.querySelector("#excuse").innerHTML = main();
};
const getRandomElement = array => {
  return array[Math.floor(Math.random() * array.length)];
};
const getGuilty = () => {
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  return getRandomElement(who);
};
const getAction = () => {
  const action = ["ate", "peed", "crushed", "broke"];
  return getRandomElement(action);
};
const getTarget = () => {
  const what = ["my homework", "my phone", "the car"];
  return getRandomElement(what);
};
const getWhen = () => {
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  return getRandomElement(when);
};

const getMessage = (guilty, action, target, when) => {
  return `${guilty} ${action} ${target} ${when}`;
};

const main = () => {
  const guilty = getGuilty();
  const action = getAction();
  const target = getTarget();
  const when = getWhen();
  const message = getMessage(guilty, action, target, when);
  return message;
};
