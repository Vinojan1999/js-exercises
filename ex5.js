function viewDetails() {
    let person = {
        firstName: "Vinojan",
        secondName: "Abhimanyu",
        age: 23,
        liveAddress: "Mullaittivu"
    }

    document.getElementById('details').innerHTML = "My name is " + person.firstName + " " + person.secondName + ". I\'m " + person.age + " years old." + " I live in " + person.liveAddress
}