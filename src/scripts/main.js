'use strict';

const employees = document.querySelectorAll('li');
const employeesOfArray = [...employees];
const employeesList = document.querySelector('ul');

sortList(employeesOfArray).forEach((li) => employeesList.append(li));

function replacer(str) {
  return str.replace(/[$,]/g, '');
}

function sortList(list) {
  return [...list].sort(
    (a, b) => +replacer(b.dataset.salary) - +replacer(a.dataset.salary),
  );
}

function getEmployees(list) {
  const arr = [];

  for (let i = 0; i < list.length; i++) {
    arr[i] = {
      name: list[i].textContent.trim(),
      position: list[i].dataset.position,
      salary: list[i].dataset.salary,
      age: list[i].dataset.age,
    };
  }

  return arr;
}
getEmployees(sortList(employeesOfArray));
