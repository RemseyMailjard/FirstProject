let count = 0;

function addTask() {
    count++;
    
   // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let Tasktemplate = `<li class="item list-group-item">Task ${count} ${time}</li>`;
    let element = document.getElementById("list");
    element.innerHTML += Tasktemplate;
}

