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

    const background = {"January":'https://www.tomswallpapers.com/large/201612/85654.jpg', "February": 'https://wallpaperaccess.com/full/92653.jpg',
    "March": 'https://wallpaperaccess.com/full/2210016.jpg', "April": 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/01/800x450.jpg',
    "May": 'https://wallpaperaccess.com/full/4659626.jpg', "June": 'https://wallpaperaccess.com/full/4330694.jpg',
    "July":'https://www.wallpapers4u.org/wp-content/uploads/sky_nature_lake_clear_90817_1920x1080.jpg', "August": 'https://media.istockphoto.com/photos/sunflower-picture-id490787358?k=6&m=490787358&s=612x612&w=0&h=urWlgaYbRhsaqPXr-nnx8Ek5EfvkvoRBJberzn-wFMM=',
    "September": 'https://www.wallpapertip.com/wmimgs/98-984551_september-background-hd.jpg', "October": 'https://media.istockphoto.com/photos/halloween-pumpkin-against-an-old-wood-background-picture-id1032952614?k=6&m=1032952614&s=612x612&w=0&h=97NLRDLPmSroJf1ewu8hD5Zv5Bw0SK3G5IGKkjghQ3U=',
    "November": 'https://www.wallpapertip.com/wmimgs/29-295683_desktop-background-november.jpg',
    "December": 'data:image/jpeg;base64,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'}

    // Sets the background image
    const setBackground = (image) => {
        document.body.style.backgroundImage = `url("${background[image]}")`;
    };
    
    // checks the month to our background object
    for (let month in background) {
        if (months[date.getMonth()] == month){
            setBackground(month)
        }
    }

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
  