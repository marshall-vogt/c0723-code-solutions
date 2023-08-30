const business = {
  opens: '7am',
  closes: '8pm',
  totalEmployees: 4,
  daysOpen: ['M', 'Tu', 'W', 'Th', 'F'],
  employees: {
    marshall: {
      position: 'c.e.o',
      daysOfWeekWorking: ['Tu', 'W', 'Th'],
    },
    nicholas: {
      position: 'marketing director',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    justin: {
      position: 'administrative assistant',
      daysOfWeekWorking: ['M', 'Tu', 'W'],
    },
    frankie: {
      position: 'project manager',
      daysOfWeekWorking: ['W', 'Th', 'F'],
    },
  },
};

const { daysOpen, employees } = business;
const employeePositions = [
  'salesperson',
  'software engineer',
  ' c.f.o.',
  'c.o.o.',
];

// add weekends to employee schedules
function addWeekends(object) {
  const weekends = ['Sa', 'Su'];
  business.daysOpen = [...daysOpen, ...weekends];
  for (const employee in object) {
    object[employee].daysOfWeekWorking =
      object[employee].daysOfWeekWorking.concat(weekends);
  }
}

const createEmployeeObj = {};

// create object of new employees
function createEmployee(response) {
  const employee1 = response[0].name.split(' ')[0].toLowerCase();
  const employee2 = response[1].name.split(' ')[0].toLowerCase();
  const employee3 = response[2].name.split(' ')[0].toLowerCase();
  const employee4 = response[3].name.split(' ')[0].toLowerCase();
  const newEmployees = [employee1, employee2, employee3, employee4];

  for (let j = 0; j < newEmployees.length; j++) {
    createEmployeeObj[newEmployees[j]] = {
      position: employeePositions[j],
      daysOfWeekWorking: createNewEmployeeSchedule(),
    };
  }
  addWeekends(createEmployeeObj);
  return createEmployeeObj;
}

// create a schedule for new employees
function createNewEmployeeSchedule() {
  const employeeSchedule = [];
  for (let i = 0; i < Math.floor(Math.random() * daysOpen.length + 1); i++) {
    const weekdays = daysOpen[Math.floor(Math.random() * 5)];

    if (!employeeSchedule.includes(weekdays)) {
      employeeSchedule.push(weekdays);
    }
  }
  const map = { M: 1, Tu: 2, W: 3, Th: 4, F: 5, Sa: 6, Su: 7 };
  return employeeSchedule.sort((a, b) => {
    return map[a] - map[b];
  });
}

// check if new employees are fulltime
function isFullTime(object) {
  for (const prop in object) {
    if (object[prop].daysOfWeekWorking.length > 5) {
      object[prop].fullTime = true;
    } else {
      object[prop].fullTime = false;
    }
  }
}

// add new employees from data list
function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    business.employees = { ...employees, ...createEmployee(xhr.response) };
    isFullTime(createEmployeeObj);
    business.totalEmployees += Object.keys(createEmployeeObj).length;
  });
  xhr.send();
}

// delete employee
function deleteEmployee(employeeName) {
  for (const employee in business.employees) {
    if (employeeName === employee) {
      delete business.employees[employee];
    }
  }
  business.totalEmployees = Object.keys(business.employees).length;
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

function handleDOMContentLoaded() {
  addWeekends(business.employees);
  isFullTime(business.employees);
  addEmployees();
  deleteEmployee('frankie');
}

console.log('business object', business);
