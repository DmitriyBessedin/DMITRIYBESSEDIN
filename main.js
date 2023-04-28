document.addEventListener('DOMContentLoaded', function() {
    
const container = document.querySelector('.container');


const heading = document.createElement('h4');
heading.textContent = 'Life motto';


const mottoList = document.createElement('ul');


const motto = ['Eat', 'Sleep', 'Study', 'Repeat'];
motto.forEach(motto => {
  const mottoItem = document.createElement('li');
  mottoItem.textContent = motto;
  mottoList.appendChild(mottoItem);
});

// Append the new elements to the container
container.appendChild(heading);
container.appendChild(mottoList);

console.log(document);
});
