import faker from "faker";

const cartText = `<div> you have ${faker.random.number()} item in your cart`;
document.querySelector("#dev-cart").innerHTML = cartText;
