interface ThePerson {
    FirstName : string,
    LastName  : string,
    Age       : number|string,
    greetings : () => string
}

var Person :ThePerson = {
    FirstName : "Dinesh",
    LastName  : "Kapri",
    Age       : 21,
    greetings : () => { return "hey"}
}
