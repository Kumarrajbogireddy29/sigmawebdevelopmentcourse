// Js Scopes
/*let a =10; //global scope
{
    let a =50;
    {
        let a =30;
        {
            let a = 40;

        }
    }
}
console.log(a);
*/



/*let a =10; //global scope
{
    let a =50;
    {
        let a = 30;
        {
            console.log(a); // get local scope value as output

        }
    }
}
console.log(a); // get global scope value as output*/



// block scope
let course = 'Engineering';
if (course === 'Engineering'){
    let dept = 'Software';
}
console.log(course);
//console.log(dept); // dept is not defined error as dept is block scope variable


// function

/*let greet = function()
{
    let msg = "Hello Good Morning ";
    
}
greet();
console.log(msg); // msg is not defined error as msg is function scope variable

// by using return we can get it 
*/


let greet = function()
{
    let msg = "Hello Good Morning ";
    return msg;

    
}
let result = greet();
console.log(result); 