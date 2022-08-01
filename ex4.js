function viewVolume() {
    let lenght = prompt("Enter the Lenght: ");
    let width = prompt("Enter the Width: ");
    let height = prompt("Enter the Height: ");
    
    let volume = lenght * width * height;

    document.getElementById('result').innerHTML = "The Volume:" + volume;
}