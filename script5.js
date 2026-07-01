
console.log("with callback methods")
console.log("start")

function getName(name, callback){
    // return "hello " + name
    setTimeout(()=>
    {
 console.log("inside hello"); 
 callback("hello " + name);
    }, 1000);
}

getName("Ajay", (res)=> console.log(res));
// console.log(name);
console.log("end");
