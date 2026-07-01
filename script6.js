const students = [
    { name: "Ajay", subject: "Maths" },
    { name: "Deepak", subject: "Maths" },
    { name: "Sahil", subject: "English" }
];

function EnrollmentStudent(student)
{
    setTimeout(()=>
    {
        students.push(student);
        console.log("student has been added")
    },3000);
}

function GetStudents(){
    alert("a");
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

EnrollmentStudent({"name":"Depak", "subject":"eng"});
GetStudents();
