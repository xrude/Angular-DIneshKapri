class Person{
    firstName: string;
    lastName : string;
    age      : number;


    constructor(TheFirstName , TheLastName , TheAge){
        this.firstName = TheFirstName;
        this.lastName = TheLastName;
        this.age = TheAge;

    }

    getName(){
        console.log("The values for " + this.firstName + "is" + this.lastName + this.age);
    };

    doAction(){};
}

var per1 = new Person("Dinesh" , "kapri" , 21);


per1.getName();

console.log(per1);

