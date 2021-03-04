// grabs the date 
const date = new Date()

const createCalendar = () => {
    
    // sets day of the month to be 1
    date.setDate(1)

    const monthDays = document.querySelector(".days")

    // grabs last day of this month
    const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate()

    // grabs last day of last month
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

    // gets day of the week of the date of this month
    const firstDayIndex = date.getDay()

    // gets day of the week of the last day of last month
    const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay()

    // gets days of next week shown on calendar
    const nextDays = 7 - lastDayIndex - 1

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    document.querySelector('.date h1').innerHTML = months[date.getMonth()]

    document.querySelector('.date p').innerHTML = new Date().toDateString()

    // creates the days of last month that show on this month's calendar
    for(let j = firstDayIndex; j > 0; j--){
        const newDiv = document.createElement("div")
        newDiv.innerHTML = prevLastDay - j + 1
        newDiv.setAttribute('class', 'prev-date')
        monthDays.append(newDiv)
    }

    // creates the days of this month
    for(let i = 1; i <= lastDay; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            const newDiv = document.createElement("div")
            newDiv.innerHTML = i
            newDiv.setAttribute('class', 'today')
            monthDays.append(newDiv)
        } else {
            const newDiv = document.createElement("div")
            newDiv.innerHTML = i
            monthDays.append(newDiv)
        }
    }

    // creates the days of next month that show on this month's calendar
    for(let k = 1; k <= nextDays; k++){
        const newDiv = document.createElement("div")
        newDiv.innerHTML = k
        newDiv.setAttribute('class', 'next-date')
        monthDays.append(newDiv)
    }
}

// changes to last month
document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    document.querySelector(".days").innerHTML = "";
    createCalendar();
});
  
// changes to next month
document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    document.querySelector(".days").innerHTML = "";
    createCalendar();
});

createCalendar()
  