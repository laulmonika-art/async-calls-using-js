console.log("xhr object demo")

var xhr = new XMLHttpRequest();
console.log(xhr.readyState);
xhr.open("Get", "https://jsonplaceholder.typicode.com/users");
console.log(xhr.readyState);
xhr.onreadystatechange = readyStateChange;
xhr.send(null); // we are making call here

function readyStateChange()
{
   console.log(xhr.readyState) 
   if(xhr.readyState==4 && xhr.status==200)
   {
      // console.log(xhr.responseText);
      document.getElementById("para1").innerHTML= xhr.responseText;
   }

   if(xhr.readyState==4 && xhr.status==201)
   {
      console.log(xhr.responseText);
      document.getElementById("para1").innerHTML= xhr.responseText;
   }
}


function PostData()

{
xhr.open("Post", "https://jsonplaceholder.typicode.com/posts");
xhr.getResponseHeader('Content-Type', 'application/json');
params = {
     
    title: 'foo',
    body: 'bar',
    userId: 1
   }
  
console.log(xhr.readyState);
xhr.onreadystatechange = readyStateChange;
xhr.send(params); // we are making call here
  
}


