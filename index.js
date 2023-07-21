// Write your solution in this file!
let employee = {
  name: "Ahmed",
  streetAddress: "12 logs street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newObj = {
    ...employee,
    [key]: value,
  };
  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = {
    ...employee,
  };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
