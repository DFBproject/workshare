
/*==================== SHOW NAVBAR ====================*/
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


function passwordBtn(){
    confirm("관리자에게 임시비밀번호를 받겠습니까?");
  }