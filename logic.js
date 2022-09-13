var lSquare = document.getElementById("square")

lSquare.addEventListener("mouseover", function() {
    this.style.backgroundColor = "blue"

     //   console.log("working");
})
lSquare.addEventListener("mousedown", function() {
    this.style.backgroundColor = "red"

     //   console.log("working");
})
lSquare.addEventListener("mouseup", function() {
    this.style.backgroundColor = "yellow"

     //   console.log("working");
})
lSquare.addEventListener("dblclick", function() {
    this.style.backgroundColor = "green"

     //   console.log("working");
})
document.addEventListener("wheel", function (e) {
    lSquare.style.backgroundColor = "orange"

//        console.log("working");
})
var colorPick = function(key){
    if (key.keyCode == 82) {
        lSquare.style.backgroundColor = "red"
        console.log("r")
    } else if(key.keyCode == 66) {
        lSquare.style.backgroundColor = "blue"
    } else if(key.keyCode == 89 ){
        lSquare.style.backgroundColor = "yellow"
    } else if(key.keyCode == 71 ){
        lSquare.style.backgroundColor = "green"
    } else if (key.keyCode == 79 ) {
        lSquare.style.backgroundColor = "orange"
    } else {console.log ("no")}
}
window.addEventListener("keyup", colorPick) 
