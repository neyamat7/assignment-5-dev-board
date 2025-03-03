// complete button handler
const completeBtn = document.querySelectorAll(".complete-btn");

for (const btn of completeBtn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();

    // add disable attribute and disable class
    event.target.setAttribute("disabled", "");
    event.target.classList.remove("cursor-pointer");
    event.target.classList.add("cursor-not-allowed");

    // dynamic subtract task value functionality
    // get initial task value
    const taskValue = document.getElementById("task-value");
    const convertedTaskValue = parseInt(taskValue.innerText);
    taskValue.innerText = convertedTaskValue - 1;

    // get complete-task to increase
    const completeTaskValue = document.getElementById("complete-task");
    const convertedCompleteTaskValue = parseInt(completeTaskValue.innerText);
    completeTaskValue.innerText = convertedCompleteTaskValue + 1;

    // successful alert after clicking complete button
    if (taskValue.innerText === "0") {
      alert("Board Updated Successfully");
      alert("congrates!!! You have completed all the current task");
    } else {
      alert("Board Updated Successfully");
    }

    // get card title
    const title =
      event.target.parentNode.parentNode.parentNode.querySelector(
        ".title"
      ).innerText;

    // add history data
    // get history container element
    let date = new Date();
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add(
      "text-gray-600",
      "mt-5",
      "m-6",
      "bg-light-blue",
      "rounded-lg",
      "p-2",
      "py-3"
    );
    div.innerHTML = `
    <p>You have Complete The Task <span class="font-medium" >${title}</span> at ${date.toLocaleTimeString()}</p>
    `;
    historyContainer.appendChild(div);

    // update task value if it has double zero
    if (taskValue.innerText === "0") {
      taskValue.innerText = "";
    }
  });
}

// click to go blog page handler
function blogPage() {
  window.location.href = "../blog.html";
}

// clear history handler
function clearHistory() {
  document.getElementById("history-container").innerHTML = "";
}

// dynamic date changing
let date = new Date();
let dateFormat = {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
};

let formatedDate = date.toLocaleDateString("en-US", dateFormat).split(" ");

const dayName = formatedDate[0];
const monthName = formatedDate[1];
const dateNumber = formatedDate[2].replace(",", "");
const yearName = formatedDate[3];

document.getElementById("day-name").innerText = dayName;
document.getElementById(
  "date"
).innerText = `${monthName} ${dateNumber} ${yearName}`;
