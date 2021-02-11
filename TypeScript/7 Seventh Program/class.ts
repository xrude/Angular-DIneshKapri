class Person{
    firstName: string;
    lastName : string;
    age      : number;


    getName(){
        console.log("The values for " + this.firstName + "is" + this.lastName + this.age);
    };

    doAction(){};
}

var per1 = new Person();
per1.firstName = "Dinesh";
per1.lastName = "kapri";
per1.age = 21;

per1.getName();

console.log(per1);

