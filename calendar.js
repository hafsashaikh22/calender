function generateCalendar(year, month) {
    const calendar = document.getElementById('calendar');
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0).getDate();


    calendar.innerHTML = '';


    const header = document.createElement('div');
    header.className = 'calendar-header';
    header.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
    calendar.appendChild(header);


    const daysHeader = document.createElement('div');
    daysHeader.className = 'calendar-days';
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        daysHeader.appendChild(dayElement);
    });
    calendar.appendChild(daysHeader);


    const daysGrid = document.createElement('div');
    daysGrid.className = 'calendar-days';


    for (let i = 0; i < date.getDay(); i++) {
        const emptyElement = document.createElement('div');
        emptyElement.className = 'day';
        daysGrid.appendChild(emptyElement);
    }


    for (let i = 1; i <= lastDay; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = i;
        daysGrid.appendChild(dayElement);
    }

    calendar.appendChild(daysGrid);
}

const now = new Date();
generateCalendar(now.getFullYear(), now.getMonth() + 1);
