const taskInput = document.getElementById('taskInput');
const addTaskBtn =  document.getElementById('addTaskBtn');
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener('click', add_task);

function add_task(){
    const taskText = taskInput.value.trim() ;
    if (taskText !== "" ){
        const li_task = document.createElement('li');
        li_task.innerText = taskText;
        taskList.appendChild(li_task);
        taskInput.value = "";
        li_task.addEventListener('click', markTaskAsCompleted);
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", deleteTask);
        li_task.appendChild(deleteBtn);
        const statusSelect = document.createElement('select');
        // Create options and append them to the select element
        const option1 = document.createElement("option");
        option1.text = "Complete";
        option1.value = "complete";
        
        const option2 = document.createElement("option");
        option2.text = "In progress";
        option2.value = "in progress";
        
        const option3 = document.createElement("option");
        option3.text = "Delay";
        option3.value = "delay";
        statusSelect.appendChild(option1);
        statusSelect.appendChild(option2);
        statusSelect.appendChild(option3);
        li_task.appendChild(statusSelect);
        statusSelect.addEventListener("change", Updatetask);
    } else {
        alert("Please enter a task!")
    }
}

function deleteTask(event) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
}

function markTaskAsCompleted(event) {
    const listItem = event.target;
    listItem.classList.toggle('completed');
}

function Updatetask(event) {
    const status = event.target.value
    const listItem = event.target.parentElement;
    if (status === "complete"){
        listItem.style.textDecoration = 'line-through';
    } else if (status === "delay")
    {
        listItem.style.color = 'red'
    }else {
        listItem.style.textDecoration = "none";
        listItem.style.color = "inherit";
    }
}
