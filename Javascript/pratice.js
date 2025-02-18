var info = {
    name: "likhitha",
    RollNo: 552,
    Batch: 23,
    Course: "CSE",
};
var value = info.name;//read the name property
console.log(value);

delete info.Batch;// delete batch property
console.log(info);

info.Course ="MERN"; //update the course property
console.log(info);

info.city ="Hyderabad";//add city property
console.log(info);

