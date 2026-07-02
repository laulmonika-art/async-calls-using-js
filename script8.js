console.log("promise demo")

// to create promise
const promise=new Promise((resolve, reject)=>
{
    const error=true;
    setTimeout(()=>
    {
        if(!error)
        {
            resolve();
        }
        else 
        {
            reject();
        }
    },1000);
})
// call / consume promise

promise.then(()=> console.log(
    "promise has been respolved"))
    .catch(()=> console.log("error"));