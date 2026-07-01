console.log("xhr object demo")

var xhr = new XMLHttpRequest();
console.log(xhr.readyState);
xhr.open("Get", "text.txt");
console.log(xhr.readyState);
xhr.onreadystatechange = readyStateChange;
xhr.send(null); // we are making call here

function readyStateChange()
{
   console.log(xhr.readyState) 
   if(xhr.readyState==4 && xhr.status==200)
   {
      console.log(xhr.responseText);
      document.getElementById("para1").innerHTML= xhr.responseText;
   }
}