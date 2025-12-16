'use strict';

const employees = document.querySelectorAll('li');
const employeesOfArray = [...employees];

function sortList(list) {
  return [...list].sort(
    (a, b) =>
      +b.dataset.salary.replace(/[$,]/g, '') -
      +a.dataset.salary.replace(/[$,]/g, ''),
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
