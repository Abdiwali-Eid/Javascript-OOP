//functional programming 
var shoes =100;
var stateText=1.2;
function totalprice(shoes,tax){
    return shoes*tax;
}
var topay=totalprice(shoes,stateText);
console.log(topay)

//oop1
var purchase1={
    shoes:100,
    stateText:1.2,
    totalprice:function(){
        var calculation=purchase1.shoes*purchase1.stateText;
        console.log("total price:",calculation);
    }

}
purchase1.totalprice();//120

//OOP2
var purchase2={
    shoes:50,
    stateText:1.2,
    totalprice:function(){
        var calculation=purchase2.shoes*purchase2.stateText;
        console.log("total price:",calculation);
    }

}
purchase1.totalprice();//60

class car {
    constructor(color, speed){
        this.color=color;
        this.speed=speed;
    }
    turboOn(){
        console.log("turbo is on")
    }
}

//inheritence
var bird={
    haswin:true,
    canfly:true,
    hasfeathers:true
}
var eagle1=Object.create(bird);
console.log("eagle1", eagle1);
console.log("eagle1 has wings", eagle1.haswin)
console.log("eagle1 has wings", eagle1.canfly)
console.log("eagle1 has wings", eagle1.hasfeathers)

var eagle2=Object.create(bird);
console.log("eagle2 has wings", eagle2.haswin)
var pening1=Object.create(bird)
pening1.canfly=false;
console.log("pengin1", pening1)
console.log("peing1  has can fly", eagle1.canfly)
console.log("peing1  has can feathers", eagle1.hasfeathers)

//DOM
const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});

