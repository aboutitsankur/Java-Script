// function myFunction()
//         {
//             var carname="Welcome";
//             document.getElementById("demo").innerHTML=carname;
//         }

// var person ={
//     firstname:"John",
//     lastname:"Doe",
//     id:5566,
//     //access multiple properties of objects.
//     getinfo: function(){
//         return this.firstname + "" + this.lastname;
//     }
// };
// //Display data from the object:
// document.getElementById("demo").innerHTML=person.getinfo();

// var a=10;

// function functionA(){
//     console.log("Start Function A");

//     function functionB(){
//         console.log("In function B");
        
//     }
//     functionB();
// }

// functionA();

// console.log("Global Context");

// var name1='John';

// function first(){
//     var a='Hello';
//     second();
//     var x= a + name1;
//     console.log(x);
// }

// function second(){
//     var b='Hii';
//     third();
//     var z=b + name1;
//     console.log(z);
// }

// function third(){
//     var c='Hey';
//     var z=c + name1;
//     console.log(z);
// }

// first();

// var a=5;
// function add(){
//     var b=45;
//     console.log(a+b);

//     function mul(){
//         var c=25;
//         console.log(a*c);
//     }
//     mul();
// }
// add();
// var a='Hii'
// console.log(a);


// var age=20;

// if(age>18){
//     document.write("<b> You are eligible to cast the vote.</b>")
// 

// var count;
// document.write("Starting Loop" + "<br/>");
// for(count=0; count<10; count++){
//     document.write("Current Count :" +count);
//     document.wri
// }

// for(var i=0;i<10;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i +"is a even number.");
//     }
//     else{
//         console.log(i +"is a odd number.");
//     }
// }

// function my(){
//     alert("Hello World");
// }

// function say(){
//     alert("Hello");
// }

// function information(firstName, lastName, language){
//     if(arguments.length===3){
//         console.log(firstName);
//         console.log(lastName);
//         console.log(language);
//     }
// }
// information();
// information('Jitendra','abhi','vivek');

// function sayHello(){
//     alert("Hello Ankur");
// }

// function over(){
//     document.getElementById('mytext').style.color="green";
// }
// function mout(){
//     document.getElementById('mytext').style.color="magenta";
// }

// var retVal=confirm("Do you want to continue ?");if(retVal==true){
//     alert("user wants to continue!");
// }else{
//     alert("user does not want to continue!");
// }

// var retval=prompt("Enter your name: ","your name here");
// alert("You have entered:"+retval);

// var mname=prompt("Enter your name","name");
// document.write("<h2>Hello"+mname+"</h2>");

// var questions="what is 10+10";
// var answer=20;
// var correct='<img src="checked.png" height=50px width=50px>';
// var incorrect='<img src="close.png" height=50px width=50px>';
// var response=prompt(questions,"0");
// for(count=0;count<3;count++)
// {
//     if(response!=answer)
//     {
//         confirm("wrong.press ok for another chance");
//         response=prompt(questions,"0");
//         if(count==2)
//         {
//             alert("Better luck next time");
//         }
//     }
//     else
//     {
//         alert("Great! you are right");
//         count=3;
//     }
// }
// var output=(response==answer)?correct:incorrect;
// document.write("</BR>");
// document.write(output);

// function redirect(){
//     window.location="https://www.facebook.com";
// }
// document.write("You will be redirected to main page in 10sec.");
// setTimeout('redirect()',10000);

// function validateform(){
//     var x=document.forms["myForm"]["fname"].value;
//     if(x==null||x=="")
//     {
//         alert("First name must be filled out");
//         return false;
//     }
// }

// function validateform(){
//     var name=document.getElementById("fname");

// }

// function validateform(){
//     var y=document.forms["myForm"]["call"].value;
//     if(y.length!=10)
//     {
//         alert('enter 10 digit valid number');
//         return false;
//     }

//     if(y.match(/^[0-9]{10}$/))
//     {
//         alert('only digits please');
//         return false;
//     }
// }

function validateform()
{
    var x=document.forms["myform"]["email"].value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf("");
    if(atpos<1||dotpos<atpos+2||dotpos+2>=x.length)
    {
        alert("Not a valid email address");
        return false;
    }
}