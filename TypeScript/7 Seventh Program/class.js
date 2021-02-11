var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getName = function () {
        console.log("The values for " + this.firstName + "is" + this.lastName + this.age);
    };
    ;
    Person.prototype.doAction = function () { };
    ;
    return Person;
}());
var per1 = new Person();
per1.firstName = "Dinesh";
per1.lastName = "kapri";
per1.age = 21;
per1.getName();
console.log(per1);
