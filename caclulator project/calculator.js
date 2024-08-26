let display = document.getElementById("displayInput")

function displayButton(input){
    display.value += input
}

function calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}

function clearInput(){
    display.value = ""
}