console.log("promise demo")
const students = [
    { name: "Ajay", subject: "Maths" },
    { name: "Deepak", subject: "Maths" },
    { name: "Sahil", subject: "English" }
];


function EnrollmentStudent(student)
{
    return new Promise((resolve, reject)=>
    
    {
    const error=false;
    setTimeout(()=>
    {
        if(!error)
        {
        students.push(student);
        console.log("student has been added")
        resolve(); // this will be invoked when you call promise using then
        }
        else 
        {
            reject("some error came");
            // callback here will be called by using catch block 
        }
    },3000);
});
};

function GetStudents(){
   setTimeout(()=>
{
  var temp="";
  students.forEach((student)=>
  {
    temp+=`<li> ${student.name} -- ${student.subject} </li>`;

  }
  )
  document.getElementById("list").innerHTML=temp;
}, 1000);
}

// call function that returns promise
EnrollmentStudent(
    {"name":"Depak", "subject":"eng"})
    .then((response)=>{ 
    console.log(response);
    GetStudents()})
.catch((error)=> console.log(error));
// GetStudents();
