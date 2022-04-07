// const employee = {
//     name: "Name",
//     streetAddress: "address",
// };

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return {
//         ...employee,
//         [key]: value,
//     };                                                                                                       
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee 
// };

// function deleteFromEmployeeByKey(employee) {
//     const newEmp = {...employee} ;
//     delete newEmp.name;
//     return newEmp
// };

// function destructivelyDeleteFromEmployeeByKey(employee) {
//     delete employee.name;
//     return employee;
// };



const employee = {
    name: "Name" ,
    streetAddress: "address"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value) {
    return {employee, [key]: value};

}






























