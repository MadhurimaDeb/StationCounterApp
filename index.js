// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let count = 0
function increment(){
    count++
    document.getElementById("count-el").textContent = count
}
function save(){
    let text = count + " - "
    document.getElementById("count").textContent += text
    count = 0
    document.getElementById("count-el").textContent = count 
}

