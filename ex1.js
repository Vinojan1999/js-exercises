function showMessage() {
    var message = {
        string1: "Hello Vinojan Abhimanyu",
        string2: "Babyyy"
    }
    document.getElementById('hello').innerHTML = message.string2
    // document.getElementById('hello').innerHTML = typeof message.string1;

    document.getElementById('date').innerHTML = Date()
}