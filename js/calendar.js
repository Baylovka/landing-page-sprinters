document.addEventListener("DOMContentLoaded", () => {
    const calendarDays = document.querySelector(".calendar__days");
    const currentMonthEl = document.querySelector(".calendar__month-display");
    const prevMonthBtn = document.querySelector(".calendar__button--prev");
    const nextMonthBtn = document.querySelector(".calendar__button--next");

    let currentDate = new Date();

    const highlightDates = [2, 4, 20, 24];

    function renderCalendar(date) {
        calendarDays.innerHTML = "";
        const year = date.getFullYear();
        const month = date.getMonth();

        currentMonthEl.textContent = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
        });

        // Перший та останній день місяця
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Кількість днів у попередньому місяці
        const prevMonthDays = new Date(year, month, 0).getDate();

        // Додавання днів з попереднього місяця
        for (let i = firstDay - 1; i >= 0; i--) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = prevMonthDays - i;
            dayDiv.classList.add("calendar__day", "calendar__day--other-month");
            calendarDays.appendChild(dayDiv);
        }

        // Додавання днів поточного місяця
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = i;
            dayDiv.classList.add("calendar__day", "calendar__day--current-month");

            if (highlightDates.includes(i)) {
                dayDiv.classList.add("calendar__day--highlight");
            }

            calendarDays.appendChild(dayDiv);
        }

        // Додавання днів наступного місяця
        const remainingDays = 7 - (calendarDays.children.length % 7);
        if (remainingDays < 7) {
            for (let i = 1; i <= remainingDays; i++) {
                const dayDiv = document.createElement("div");
                dayDiv.textContent = i;
                dayDiv.classList.add("calendar__day", "calendar__day--other-month");
                calendarDays.appendChild(dayDiv);
            }
        }
    }

    prevMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
