let employee = {
    name: "gopi",
    designation: "king",
    salary: 1000000,
    skills: ["dancer", "singer", "fighter"],
    address: {
        area: "btmlayout",
        city: "bangalore",
        pincode: 573901
    }
}
//console.log(employee.skills[0])
//console.log(employee.address.city);
console.log(delete employee.address.area);
console.log(employee);