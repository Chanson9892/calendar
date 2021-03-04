const date = new Date()
date.setDate(1)

const monthDays = document.querySelector(".days")

const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate()
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

const firstDayIndex = date.getDay()
const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay()
const nextDays = 7 - lastDayIndex - 1

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

document.querySelector('.date h1').innerHTML = months[date.getMonth()]

document.querySelector('.date p').innerHTML = date.toDateString()

for(let j = firstDayIndex; j > 0; j--){
    const newDiv = document.createElement("div")
    newDiv.innerHTML = prevLastDay - j + 1
    newDiv.setAttribute('class', 'prev-date')
    monthDays.append(newDiv)
}

for(let i = 1; i <= lastDay; i++){
    const newDiv = document.createElement("div")
    newDiv.innerHTML = i
    monthDays.append(newDiv)
}

for(let k = 1; k <= nextDays; k++){
    const newDiv = document.createElement("div")
    newDiv.innerHTML = k
    newDiv.setAttribute('class', 'next-date')
    monthDays.append(newDiv)
}