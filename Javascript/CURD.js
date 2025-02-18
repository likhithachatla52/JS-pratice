var data={
    Name: "Likhitha",
    RoleNo: 552,
    phNo: 988765433,
    City: "Nellore",
    Email: "likhitha@gmail.com",
};

//Read a property
var Read= data.phNo;
console.log(Read);

//Update a property
data.City = "Hyderbad";
console.log(data);

//Insert a property
data.Course = "MERN";
console.log(data);

//Delete a property
delete data.RoleNo;
console.log(data);

