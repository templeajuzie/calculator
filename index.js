
//input
let input = document.getElementById("input");


//submit
let submit = document.getElementById("submit");

//clear
let clear = document.getElementById("clear");


//numbers
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");

//symbols
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let divide = document.getElementById("divide");
let times = document.getElementById("times");
let dot = document.getElementById("dot");

//number values
let calc1 = 1;
let calc2 = 2;
let calc3 = 3;
let calc4 = 4;
let calc5 = 5;
let calc6 = 6;
let calc7 = 7;
let calc8 = 8;
let calc9 = 9;
let calc0 = 0;


//symbol values
let calcplus = "+";
let calcminus = "-";
let calctimes = "*";
let calcdivide = "/";
let calcdot = ".";


//submit function



//number function

one.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calc1;
        console.log(calc1);
        console.log("this input is empty")
    }
    else {
        input.value += calc1;
        console.log(calc1);
        console.log("this input is not empty")
    }
})

two.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calc2;
        console.log(calc2);
        console.log("this input is empty")
    }
    else {
        input.value += calc2;
        console.log(calc2);
        console.log("this input is not empty")
    }
})

three.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calc3;
        console.log(calc3);
        console.log("this input is empty")
    }
    else {
        input.value += calc3;
        console.log(calc3);
        console.log("this input is not empty")
    }
})

four.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calc4;
        console.log(calc4);
        console.log("this input is empty")
    }
    else {
        input.value += calc4;
        console.log(calc4);
        console.log("this input is not empty")
    }
})

five.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calc5;
        console.log(calc5);
        console.log("this input is empty")
    }
    else {
        input.value += calc5;
        console.log(calc5);
        console.log("this input is not empty")
    }
})

six.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calc6;
        console.log(calc6);
        console.log("this input is empty")
    }
    else {
        input.value += calc6;
        console.log(calc6);
        console.log("this input is not empty")
    }
})

seven.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calc7;
        console.log(calc7);
        console.log("this input is empty")
    }
    else {
        input.value += calc7;
        console.log(calc7);
        console.log("this input is not empty")
    }
})

eight.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calc8;
        console.log(calc8);
        console.log("this input is empty")
    }
    else {
        input.value += calc8;
        console.log(calc8);
        console.log("this input is not empty")
    }
})

nine.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calc9;
        console.log(calc9);
        console.log("this input is empty")
    }
    else {
        input.value += calc9;
        console.log(calc9);
        console.log("this input is not empty")
    }
})

zero.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calc0;
        console.log(calc0);
        console.log("this input is empty")
    }
    else {
        input.value += calc0;
        console.log(calc0);
        console.log("this input is not empty")
    }
})


//symbol function
plus.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calcplus;
        console.log(typeof calcplus);
        console.log("this input is empty")
    }
    else {
        input.value += calcplus;
        console.log(calcplus);
        console.log("this input is not empty")
    }

})

minus.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calcminus;
        console.log(calcminus);
        console.log("this input is empty")
    }
    else {
        input.value += calcminus;
        console.log(calcminus);
        console.log("this input is not empty");
    }
})

times.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calctimes;
        console.log(calctimes);
        console.log("this input is empty")
    }
    else {
        input.value += calctimes;
        console.log(calctimes);
        console.log("this input is not empty")
    }
})

divide.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calcdivide;
        console.log(calcdivide);
        console.log("this input is empty")
    }
    else {
        input.value += calcdivide;
        console.log(calcdivide);
        console.log("this input is not empty")
    }
})

dot.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        input.value = calcdot;
        console.log(calcdot);
        console.log("this input is empty")
    }
    else {
        input.value += calcdot;
        console.log(calcdot);
        console.log("this input is not empty")
    }
})


let a = 10;
let b = 20;

let c = "+"

let total = a + b;


submit.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(input.value);
    console.log(total)

    const result = eval(input.value);
    input.value = result;

})

clear.addEventListener("click", () => {
    input.value = "";
})




