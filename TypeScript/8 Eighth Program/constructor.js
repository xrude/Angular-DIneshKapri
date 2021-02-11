var Person = /** @class */ (function () {
    function Person(TheFirstName, TheLastName, TheAge) {
        this.firstName = TheFirstName;
        this.lastName = TheLastName;
        this.age = TheAge;
    }
    Person.prototype.getName = function () {
        console.log("The values for " + this.firstName + "is" + this.lastName + this.age);
    };
    ;
    Person.prototype.doAction = function () { };
    ;
    return Person;
}());
var per1 = new Person("Dinesh", "kapri", 21);
per1.getName();
console.log(per1);
