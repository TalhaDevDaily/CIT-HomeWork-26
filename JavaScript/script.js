const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const womanImg = document.querySelector(".woman");
womanImg.setAttribute(
  "src",
  "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
womanImg.alt = `Woman holding a coffee cup`;
womanImg.style = "width: 500px; border-radius: 20px";

const userNameEl = document.querySelector(".user-name");
userNameEl.innerHTML = `Name : ${user.name}`;
userNameEl.setAttribute("style", "margin-top: 50px;");

const emailEl = (document.querySelector(
  ".email"
).innerHTML = `Email : ${user.email}`);

const phoneEl = (document.querySelector(
  ".phone"
).innerHTML = `Phone : ${user.phone}`);

const websiteEl = (document.querySelector(
  ".website"
).innerHTML = `Website : ${user.website}`);

const addressEl = (document.querySelector(
  ".address"
).innerHTML = `Address : ${user.address.zipcode}`);

const streetEl = (document.querySelector(
  ".street"
).innerHTML = `Street : ${user.address.street}`);

const suiteEl = (document.querySelector(
  ".suite"
).innerHTML = `Suite : ${user.address.suite}`);

const compnayName = (document.querySelector(
  ".company-name"
).innerHTML = `Company : ${user.company.name}`);
const companyCityEl = (document.querySelector(
  ".company-city"
).innerHTML = `City : ${user.address.city}`);
const catchPhraseEl = (document.querySelector(
  ".catch-phrase"
).innerHTML = `Catch Phrase : ${user.company.catchPhrase}`);
const bsEl = (document.querySelector(
  ".bs"
).innerHTML = `BS : ${user.company.bs}`);

// Part 1 (For Loop)
let answer;
let multiplicant = document.querySelector("input");
let result = document.querySelector(".result");
const multiply = document.querySelector("button");

multiplicant.value = Number(multiplicant.value);

multiply.addEventListener("click", () => {
  if (multiplicant.value !== "") {
    result.innerHTML = ""; // Clear previous results
    for (let num = 1; num < 11; num++) {
      answer = `${multiplicant.value} x ${num} = ${multiplicant.value * num}`;
      console.log(answer);
      result.innerHTML += answer + "<br>";
    }
  } else {
    alert("Please enter a number");
  }
});

// x += 1 : x = x + 1
// result.innerHTML = 2 x 2 = 4 + answer
// result.innerHTML = answer
