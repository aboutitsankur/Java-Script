// function myFunction()
//         {
//             var carname="Welcome";
//             document.getElementById("demo").innerHTML=carname;
//         }

var person ={
    firstname:"John",
    lastname:"Doe",
    id:5566,
    //access multiple properties of objects.
    getinfo: function(){
        return this.firstname + "" + this.lastname;
    }
};
//Display data from the object:
document.getElementById("demo").innerHTML=person.getinfo();