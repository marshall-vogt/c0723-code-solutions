const $userList = document.querySelector('#user-list');

const xmlHR = new XMLHttpRequest();
console.log(xmlHR);
xmlHR.open('GET', 'https://jsonplaceholder.typicode.com/users');
xmlHR.responseType = 'json';
xmlHR.addEventListener('load', handleLoadEvent);

function handleLoadEvent() {
  console.log(xmlHR.status);
  console.log(xmlHR.response);

  for (let i = 0; i < xmlHR.response.length; i++) {
    const $li = document.createElement('li');
    $li.textContent = xmlHR.response[i].name;
    $userList.append($li);
  }
}

xmlHR.send();
