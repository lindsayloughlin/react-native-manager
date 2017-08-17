
"use strict";

var func = new Function()
func.property = "some property";

console.log(typeof func, func);


var funcAsNative = function(){
    this.property = "some property";
};
console.log(typeof funcAsNative, func);

function helloWorld() {
    var helloworld = function myHelloWorld(input) {
        console.log(`${this} hello ${input}`);
    }
    helloworld.bind(this);
    return helloworld;
}

let helloWorld2 = helloWorld();
helloWorld2('today');