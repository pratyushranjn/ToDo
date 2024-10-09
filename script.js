let date = document.querySelector(".date");
let inp = document.querySelector("#new-task")
let def = document.querySelector(".default")
let addBtn = document.querySelector("#add-task-btn")
let ol = document.querySelector(".tasks");

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

date.textContent = formattedDate;


function addTask() {
    let newTask = inp.value;
    console.log(newTask);


    if (newTask) {
        def.remove(); 
    }

    if (newTask) {
        let newli = document.createElement("li")
        newli.classList.add("task-item");

        let span = document.createElement("span");
        span.classList.add("task-text");
        span.innerText = newTask;

        let delBtn = document.createElement("button");
        delBtn.classList.add("delete-btn");
        delBtn.innerHTML = "&#10006";

        delBtn.addEventListener("click", () => {
            ol.removeChild(newli);
            console.log("Task Deleted: ", newTask);
        });

        newli.appendChild(span);
        newli.appendChild(delBtn);

        ol.appendChild(newli);
        console.log("Task added:", newTask);
    }
}

addBtn.addEventListener("click", () => {
    addTask();
    inp.value = "";
});

inp.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
        inp.value = "";
    }
});

