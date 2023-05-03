"use strict";

let counter = document.querySelector(".counter");

const dates = document.querySelector(".today");

let perDay = document.querySelector(".per-day-count");

let daysleft = document.querySelector(".day-count");

const btn = document.querySelector(".btn");

const curYear = document.querySelector(".year");

let localdata;
let perDaydata;

// localStorage.clear();

const data = {
    setCounter: 1008,
    // prettier-ignore
    months :[ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
};

// today's date
const date = new Date();
dates.textContent = `${data.months[date.getMonth()]} ${date.getDate()}`;

// copyright year
curYear.textContent = `${date.getFullYear()}`;

// last date
let lastDate = new Date("4/8/2024");

const days = (lastDate, date) => {
    let difference = lastDate.getTime() - date.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
};

// days left
const dayLeft = days(lastDate, date);
daysleft.textContent = dayLeft;

// btn function
const completed = btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Per day task
    perDay.textContent = `${Math.round(Number(data.setCounter) / dayLeft)}`;

    counter.textContent = ` ${data.setCounter - +perDay.textContent}`;
    data.setCounter = +counter.textContent;

    // SetItem
    localStorage.setItem("Remaining", data.setCounter);
    localStorage.setItem("perDay", perDay.textContent);
});

// retrieve data from localStorage
localdata = localStorage.getItem("Remaining");
if (localdata) {
    counter.textContent = `${localdata}`;
    data.setCounter = +counter.textContent;
}
perDaydata = localStorage.getItem("perDay");
if (perDaydata) {
    perDay.textContent = `${perDaydata}`;
}
