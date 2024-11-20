'use strict';
const students=[{
    name: 'John',
    id: '2345768',
  },{
    name: 'Paul',
    id: '2134657',
  },{
    name: 'Jones',
    id: '5423679',
  },];
const listContainer=document.querySelector('#target');
students.forEach((student)=>{
  const item=document.createElement('option');
  item.textContent=student.name;
  item.value=student.id;
  listContainer.appendChild(item);
});
