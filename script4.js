console.log("without callback methods")
console.log("start")
function getName(name){
    //return "hello " + name
    setTimeout(()=>
    {
 console.log("inside hello"); 
 return "hello " + name
    }, 1000);
}

var name=getName("Ajay")
console.log(name);
console.log("end");
