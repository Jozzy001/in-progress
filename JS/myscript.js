const player = document.getElementsByClassName('object');
const left = document.getElementById('btn-1');
const up = document.getElementById('btn-2');
const down = document.getElementById('btn-3');
const right = document.getElementById('btn-4');

function moveUp()
{
   document.getElementsByClassName('object').style.backgroundColor = 'red';
};

up.addEventListener("click", moveUp);
