
// Write your solution in this file!



const employee = {
    name: `Sam`,
    streetAdress: `11 Broadway`, 
};


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    // newEmployee.key = value;
    return newEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key){
    const deleteEmpKey = {... employee};
    delete deleteEmpKey[key];
    return deleteEmpKey;
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}