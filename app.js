const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const header = document.getElementById("currentMonth");
const daysContainer = document.querySelector(".days");

function renderCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    header.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    daysContainer.innerHTML = "";

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement("div");
        daysContainer.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement("div");
        dateCell.textContent = day;

        if (currentDate.getDate() === day && currentDate.getMonth() ===
         currentMonth && currentDate.getFullYear() === currentYear) {
            dateCell.classList.add("today");
        }

        dateCell.addEventListener("click", () => {
            dateCell.classList.toggle("selected");
        });

        daysContainer.appendChild(dateCell);
    }
}

document.getElementById("prevMonthBtn").addEventListener("click", () => {
    if (currentMonth === 0) {
        currentYear--;
        currentMonth = 11;
    } else {
        currentMonth--;
    }
    renderCalendar();
});

document.getElementById("nextMonthBtn").addEventListener("click", () => {
    if (currentMonth === 11) {
        currentYear++;
        currentMonth = 0;
    } else {
        currentMonth++;
    }
    renderCalendar();
});

renderCalendar();