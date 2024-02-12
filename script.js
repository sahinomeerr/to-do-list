const inputBox = document.getElementById('input-box');
const addButton = document.querySelector('button');
const list = document.getElementById('list-container');

function addTask(){
    if(inputBox.value != ""){
        const listItem = document.createElement('li');
        listItem.innerHTML = inputBox.value;
        list.appendChild(listItem);
        let closeIcon = document.createElement('span');
        closeIcon.innerHTML = '\u00d7';
        listItem.appendChild(closeIcon);
        inputBox.value = '';
    }

    else{
        alert('Please enter a task');
    }
    saveData()
}

list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
});

inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && inputBox.value !== "") {
      addTask();
    }
    else if (e.key === "Enter" && inputBox.value === "") {
      alert("Please enter a task");
    }
  });

function saveData(){
    localStorage.setItem('data', list.innerHTML);
}

function loadData(){
    list.innerHTML = localStorage.getItem('data');
}

loadData();