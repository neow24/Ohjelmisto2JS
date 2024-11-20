'use strict';
const listContainer=document.querySelector('#target');
const labels=['First item', 'Second item', 'Third item'];
labels.forEach((label,index)=>{const item=document.createElement('li');
item.textContent=label;if(index===1){item.classList.add('my-item');}
listContainer.appendChild(item);});
