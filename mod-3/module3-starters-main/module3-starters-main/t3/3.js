'use strict';
const listContainer=document.querySelector('#target');
const names = ['John', 'Paul', 'Jones'];for(let i=0;i<names.length;i++)
{const item=document.createElement('li');item.textContent=names[i];
listContainer.appendChild(item);}
