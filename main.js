"use strict";

const email = document.getElementById("email");
const submit = document.getElementById("submit");
const form = document.forms[0];
const errormsg1 = document.getElementById("error1");
const errormsg2 = document.getElementById("error2");

function valid(event) {
  const pattern = /^[a-z]{1,50}@[a-z]{4,10}[.]{1}com$/;
  var entry = email.value;
  if (pattern.test(entry) == true) {
    alert("Email Sent");
  } else if (entry == "") {
    event.preventDefault;
    errormsg2.className = "show";
    errormsg2.style.marginTop = "0.5rem";
    email.style.border = "1px solid hsl(354, 100%, 66%)";
  } else {
    event.preventDefault;
    errormsg1.className = "show";
    errormsg1.style.marginTop = "0.5rem";
    email.style.border = "1px solid hsl(354, 100%, 66%)";
  }
}

function error() {
  errormsg1.className = "hide";
  errormsg2.className = "hide";
  email.style.border = "1px solid black";
}

email.addEventListener("focus", error);
submit.addEventListener("click", valid);
