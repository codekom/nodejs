const sum = (a,b) => a+b;
const PI = 3.14;
class SomeMath{
    constructor(){
        console.log("Object Created!");
    }
}
module.exports = {
    Sum: sum,
    Pi: PI,
    somemath : SomeMath
};