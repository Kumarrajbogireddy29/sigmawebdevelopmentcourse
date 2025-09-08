/*let mobile ={
    brand: "Apple",
    color : "White",
    model:"iphone 16"

};
console.log(mobile);
*/

class Mobile{
    constructor(brand,color,price){
        this.brand = brand;
        this.color = color;
        this.price = price;

    }
    getBrand(){
        return this.brand;
    }
    setBrand(brand){
        this.brand= brand;
    }
    getcolor(){
        return this.color;  
    }
    setcolor(color){
        this.color = color;
    }
    getprice() {
        return this.price;
    }
    setprice(price){
        this.price = price;
    }
    printSpecification(){
        let spec = `Brand: ${this.brand}, Color: ${this.color}, Price: ${this.price}`;
        console.log(spec);
        
    }
}

let mobile = new Mobile('Apple', 'white', 90000);
mobile.printSpecification();
mobile.setprice(85000);
mobile.setcolor('red');
mobile.printSpecification();