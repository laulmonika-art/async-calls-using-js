console.log("fetch api")
// when you want to make to any api

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
.catch((error)=> console.log(error));
