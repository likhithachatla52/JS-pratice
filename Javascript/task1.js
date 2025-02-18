var data ={
    Name : "Likhitha",
    Id :552,
    Address:{
        City: "Nellore",
        State:{
        state1: "MP",
        state2: "UP",
        state3: "TS",
        }
    }
};
data.Address.state =  "Andhra Pradesh";
console.log(data);
console.log(data.Address.State.state3);
