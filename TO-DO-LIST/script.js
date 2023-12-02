function addtask() {
    var taskcontainer = document.getElementById("taskcontainer")
    var newTask = document.createElement("p")
    var TSpan = document.createElement("span")
    var Del = document.createElement("sapn")
    var taskManager = document.createElement("div")
    newTask.textContent = "New Task "
    newTask.classList.add("todo")
    newTask.id = "newtask"
    TSpan.textContent = "T"
    TSpan.classList.add("T")
    TSpan.id = "T"
    Del.textContent = "X"
    Del.classList.add("Del")
    Del.id = "Del"
    taskManager.classList.add("taskmanager")
    newTask.onclick = function () {
        changestate(newTask)
    }
    TSpan.onclick = function(){
        changetext(newTask)
    }
    Del.onclick = function () {
        deleteTask(taskManager)
    }
    newTask.style.display = "inline"
    TSpan.style.display = "inline"
    Del.style.display = "inline"
    TSpan.style.marginLeft = "5px"
    Del.style.marginLeft = "5px"
    taskManager.appendChild(newTask)
    taskManager.appendChild(TSpan)
    taskManager.appendChild(Del)
    taskcontainer.appendChild(taskManager)
}

function changestate(task) {
    if (task.classList.contains("todo")) {
        task.classList.remove("todo")
        task.classList.add("inprogress")
    }
    else if (task.classList.contains("inprogress")) {
        task.classList.remove("inprogress")
        task.classList.add("completed")
    }
    else if (task.classList.contains("completed")) {
        task.classList.remove("completed")
        task.classList.add("todo")
    }
}

function changetext(task) {
    tasktext = prompt("Change task text (max 40 characters)", task.textContent)
    if (tasktext.length == 0 ) {
        task.textContent = "New Task "
    }
    else if (tasktext.length > 40) {
        task.textContent = tasktext.substring(0,40)
    }
    else{
        task.textContent = tasktext
    }
}

function deleteTask(task) {
    taskcontainer.removeChild(task)
}