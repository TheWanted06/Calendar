const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];

const currentDate = document.querySelector(".currentDate");
const daytag = document.querySelector(".days");
const dates = document.querySelector(".days");
const navs = document.querySelectorAll('#prev, #next');


//geting new date, current year and month
let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

console.log(date, currYear, currMonth);

const renderCalendar = () =>{
    

    const start = new Date(currYear,currMonth,1).getDay();
    const endDate = new Date(currYear, currMonth + 1,0).getDate();
    const end = new Date(currYear, currMonth,endDate).getDate()
    const endDatePrev = new Date(currYear,currMonth,0).getDate();
    //getting the last day of the month
    let lastDateofMonth = new Date(currYear,currMonth+1,0).getDate();
    let lastDayofMonth = new Date(currYear,currMonth+1,0).getDay();
    console.log(end);

    let datesHtml = "";
    let liTag ="";
    for (let j = start; j >0; j--) {
        liTag += `<li class="inactive">${endDatePrev-j +1}</li>`
        console.log(endDatePrev-j +1);
    }
    
    for (let i = 1; i <= lastDateofMonth; i++) {
        let className =(
            i === date.getDate() &&
            currMonth === new Date().getMonth() &&
            currYear === new Date().getFullYear()
        )? 'class="active"': '';
        liTag += `<li ${className}>${i}</li>`
    }

    for (let k = lastDayofMonth; k <6; k++) {
        liTag += `<li class="inactive">${k+1}</li>`
        console.log(k)
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daytag.innerHTML = liTag;
}

navs.forEach(nav => {
    nav.addEventListener('click', e =>{
        const btnId = e.target.id;

        if(btnId ==='prev' && currMonth ===0){
            currYear--;
            currMonth=11;
        }else if(btnId ==='next'&& currMonth === 11){
            currYear++;
            currMonth=0;
        }
        else{
            currMonth = btnId==="next" ? currMonth+1 : currMonth-1;
        }

        date = new Date(currYear, currMonth, new Date().getDate());
        currYear = date.getFullYear();
        currMonth = date.getMonth();
        
        renderCalendar();
    })
})

renderCalendar();

