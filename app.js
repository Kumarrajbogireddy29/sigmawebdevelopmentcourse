count = 0;
interval = 0;
let greet = () => {
    count++;
    console.log(`Hello, World!:${count}`);
    console.log(new Date().toLocaleDateString());
}
interval = setInterval(greet, 1000); //milliseconds

// setinterval used to stop after calling certain interval of time

console.log(new Date().toLocaleTimeString());

setTimeout(() =>{
    console.log("Goodbye, World!");
    clearInterval(interval);
}, 5000); //milliseconds                                         