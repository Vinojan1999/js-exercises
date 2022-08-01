// function showMessage() {
//     var message = {
//         string1: "Hello Vinojan Abhimanyu",
//         string2: "Babyyy"
//     }
//     document.getElementById('hello').innerHTML = message.string2
//     // document.getElementById('hello').innerHTML = message.string1.length
//     // document.getElementById('hello').innerHTML = typeof message.string1;

//     document.getElementById('date').innerHTML = Date()
// }

function showResult() {
    var num = prompt("Enter the number to culculate...!");
    let result = num * num;

    document.getElementById('number').innerHTML = "Entered the number is :" + num;
    document.getElementById('result').innerHTML = "The Result is :" + result;
}