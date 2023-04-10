//installing node which is an environment created to run 
//javascript outside a browser, it is build on top of v8 which
//is the chrome engine to run javascript, so here node is installed 
//to run javascript outside the browser

//changing the count to 6
//document.getElementById("count").innerHTML = 6

// creating a variable and printing it to the terminal 

// mathematical operations
// let jhonWickAge = 36;
// let dogAgeRatio = 6;

// let daizyAge = jhonWickAge*dogAgeRatio;

// console.log("Daizy Age : ",daizyAge);

let count = 0;
let countStudent = document.getElementById("count")
let periodStudent = document.getElementById("period")
let value = "PERIOD WISE : ";

function increment(){

    count += 1;
    countStudent.innerHTML = count;
    console.log("The increme button was clicked");
}

function clearAll(){

    count = 0;
    countStudent.innerHTML = count;
    console.log("The clear button was clicked");
}

function save(){

    value = value + count + " : ";
    periodStudent.innerHTML = value;
    console.log("The save button was clicked");

}