    function diligence_menu(){
        let click = document.getElementById("diligence-admin");
        if(click.style.display === "none"){
            click.style.display = "block";

        }else{
            click.style.display = "none";

        }
    }

        function work_menu(){
        let click = document.getElementById("work-admin");
        if(click.style.display === "none"){
            click.style.display = "block";

        }else{
            click.style.display = "none";

        }
    }

        function dp_menu(){
        let click = document.getElementById("address-admin");
        if(click.style.display === "none"){
            click.style.display = "block";

        }else{
            click.style.display = "none";

        }
    }

/*==================== SHOW NAVBAR ====================*/
/*
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('fa-times')
        })
    }
}
showMenu('header-toggle','navbar')
*/
//calendar

let date = new Date();

const renderCalender = () => {
    
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    document.querySelector('.year_month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];

    if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift(PLDate - i);
        }
    }

    for (let i = 1; i < 7 - TLDay; i++){
        nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);

    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
                        ? 'this'
                        : 'other';
        dates[i] = `<div class="date"><span class=${condition}>${date}</span></div>`;
    });

    document.querySelector('.dates').innerHTML = dates.join(' ');

    const today = new Date();
    if(viewMonth === today.getMonth() && viewYear === today.getFullYear()){
        for ( let date of document.querySelectorAll('.this')) {
            if (+date.innerText === today.getDate()) {
                date.classList.add('today');
                break;
            }
        }
    }
};

renderCalender();


const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalender();
};

const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalender();
};

const goToday = () => {
    date = new Date();
    renderCalender();
};

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))


//adress filter

const adressFilter = document.querySelector('.filter__select');
const adressNameFilter = document.querySelector('.adress__table-wrap');
const adress = document.querySelectorAll('.adress_table_tr');
adressFilter.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;
    if(filter == null){
        return;
    }
    console.log(filter);

    adress.forEach((adress_table_tr) => {
       console.log(adress_table_tr.dataset.type);
       if(filter === '*' || filter === adress_table_tr.dataset.type) {
        adress_table_tr.classList.remove('invisible');
       } else{
        adress_table_tr.classList.add('invisible');
       }
    });
});


