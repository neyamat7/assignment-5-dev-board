// complete button handler

const completeBtn = document.querySelectorAll(".complete-btn");

for (const btn of completeBtn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    // add disable attribute and disable class
    event.target.setAttribute("disabled", "");
    event.target.classList.remove("cursor-pointer");
    event.target.classList.add("cursor-not-allowed");
    console.log(event.target);

    // dynamic subtract task value functionality
    // get initial task value
    const taskValue = document.getElementById("task-value");
    const convertedTaskValue = parseInt(taskValue.innerText);
    taskValue.innerText = convertedTaskValue - 1;
    console.log(convertedTaskValue - 1);

    // get complete-task to increase
    const completeTaskValue = document.getElementById("complete-task");
    const convertedCompleteTaskValue = parseInt(completeTaskValue.innerText);
    console.log(convertedCompleteTaskValue);
    completeTaskValue.innerText = convertedCompleteTaskValue + 1;

    // add history data
    // get history container element
    const historyContainer = document.getElementById("history-container");
    console.log(historyContainer);
  });
}
