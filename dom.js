// document.getElementById("test")
// document.getElementsByTagName("h1")
// document.getElementsByClassName("box")
//  Question -- 4
function click() {
    const h1 = document.getElementsByClassName('head');
    h1[0].innerText = "Hello World!!!";

}

const button = document.getElementsByClassName('btn')
button[0].addEventListener('click', click);

// Question -- 5
function changeDir() {
    const column = document.getElementsByClassName('child')

    console.log(column)
    column[0].style.backgroundColor = "blue"
    column[1].style.backgroundColor = "blue"
    column[2].style.backgroundColor = "blue"
    column[3].style.backgroundColor = "blue"
    column[4].style.backgroundColor = "blue"

    column[0].style.borderRadius = "10px"
    column[1].style.borderRadius = "10px"
    column[2].style.borderRadius = "10px"
    column[3].style.borderRadius = "10px"
    column[4].style.borderRadius = "10px"

    // column
    const column1 = document.getElementsByClassName('parent')

    column1[0].style.flexDirection = "column"

   
}

function returnDir() {
    const column1 = document.getElementsByClassName('parent')

    column1[0].style.flexDirection = "row"

    const column = document.getElementsByClassName('child')
    column[0].style.borderRadius = "0px"
    column[1].style.borderRadius = "0px"
    column[2].style.borderRadius = "0px"
    column[3].style.borderRadius = "0px"
    column[4].style.borderRadius = "0px"

    const h1 = document.getElementsByTagName('h1')
    h1[0].innerText = "Column converted into Row"

}

// Question --7
function heading() {
    document.getElementById("colorchange").style.color = "yellow";
}

// Question -- 8
function replace() {
    let result = document.getElementById("Text").innerText = "Welcome to Elevation Academy";

}

// Question -- 9
function clock() {
    const date = new Date();

    let hours = date.getHours();
    console.log(hours);

    const min = date.getMinutes();
    console.log(min);

    const sec = date.getSeconds();
    console.log(sec);

    let meridian;
    if (hours > 12) {
        meridian = "PM"
        hours -= 12;
    }
    else {
        meridian = "AM"
    }

    const hoursSlot = document.getElementsByClassName("hours")
    hoursSlot[0].innerHTML = `${hours} :`;

    const minsSlot = document.getElementsByClassName("mins")
    minsSlot[0].innerHTML = `${min} :`;

    const secsSlot = document.getElementsByClassName("secs")
    secsSlot[0].innerHTML = sec;

    const meridianSlot = document.getElementsByClassName("meridian")
    meridianSlot[0].innerHTML = meridian;
}

setInterval(() => {
    clock();
}, 1000);

// Question -- 10
function getOption() {
    var result = document.getElementById("text1");
    var result2 = result.value
    document.getElementById("output").innerText = result2
}