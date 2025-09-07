class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;

    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    greet(){
        let msg = `Welcome  Mr/Ms :${this.getFirstName()} ${this.getLastName()}`;
        console.log(msg);
    }
}

class Employee extends Person{
    constructor(firstName,lastName,age,designation){
        super(firstName,lastName);
        this.age = age;
        this.designation = designation;

    }
    getAge(){
        return this.age;
    }
    getDesignation(){
        return this.designation;
    }
    greet(){
        let msg = `Welcome  Mr/Ms :${this.getFirstName()} ${this.getLastName()},Age:${this.getAge()},Designation:${this.getDesignation()}`;
        console.log(msg);
    }

}
let employee =new Employee("John","Doe",30,"Developer");
Employee.greet();
 
class customer extends Person{
    constructor(firstName,lastName,age, location){
        super(firstName,lastName);
        this.age = age;
        this.location= location;
    }
    getAge(){
        return this.age;
    }
    getLocation(){
        return this.location;
    }
}
let customer = new customer("Jane","Smith",28,"New York");
customer.greet();






class Car {
constructor(brand) {
    this.carname = brand;
  }
present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();

// Expected Output: I have a Ford, it is a Mustang
