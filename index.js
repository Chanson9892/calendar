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
    "September": 'https://lh3.googleusercontent.com/proxy/On1WaOZW-NhoBdjyH5cCdqjKXfDqe-5IY8hp4BRamJK1oOWG-qNpBfVF_GP0qdSid11xikfesn-P8QY5BaGwjZjzNQKN8xvFMV7BxxEDhI9sSeQ', 
    "October": 'https://media.istockphoto.com/photos/halloween-pumpkin-against-an-old-wood-background-picture-id1032952614?k=6&m=1032952614&s=612x612&w=0&h=97NLRDLPmSroJf1ewu8hD5Zv5Bw0SK3G5IGKkjghQ3U=',
    "November": 'https://www.wallpapertip.com/wmimgs/29-295683_desktop-background-november.jpg',
    "December": 'https://www.pixelstalk.net/wp-content/uploads/2016/11/Merry-Christmas-Tree-HD-Wallpaper.jpg'}
    

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

    // displays the month at the top of the calendar
    document.querySelector('.date h1').innerHTML = months[date.getMonth()]

    // displays the date right under the month
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
  