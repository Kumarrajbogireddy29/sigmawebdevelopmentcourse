import {Employee} from '../Employee/app.js';
import {customer} from '../Customers/app.js';
let employee =new Employee("John","Doe",30,"Developer");
employee.greet();

let customer = new customer("Jane","Smith",28,"New York");
customer.greet();


/* by using import and export we can use the classes in different files and modules */