console.log("fetch api")
// when you want to make to any api

fetch("text.txt")
.then(res=> 
    // {
    // console.log(res)
    res.text()
    )
    .then(response=> console.log(response)
)
.catch((error)=> console.log(error));
