'use strict';
const listContainer=document.querySelector('#target');
const labels=['First item', 'Second item', 'Third item'];
listContainer.innerHTML=labels.map(label=>`<li>${label}</li>`).join('');
