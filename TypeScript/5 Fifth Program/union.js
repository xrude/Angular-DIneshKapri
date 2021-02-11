var k = "Here";
console.log(k);
//If we use ANY keyword as a type then it means that we can use any type for a variable
var k1 = 47;
console.log(k1);
//Another way to give type of any variable is that we can union any different type for a particualr variable
var k2 = "5";
console.log(k2);
function fun1(para1) {
    if (typeof para1 == "string") {
        console.log("Para 1 is a String " + para1);
    }
    else if (typeof para1 == "number") {
        console.log("Para 1 is a Number " + para1);
    }
    else if (typeof para1 == "boolean") {
        console.log("Para 1 is a Boolean " + para1);
    }
    else {
        console.log("Para 1 is a String Array " + para1);
    }
}
fun1("hey");
fun1(28);
fun1(true);
fun1(["Hey", " Hello", "World"]);
