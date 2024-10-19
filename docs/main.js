const navBtn = document.getElementById("nav-mobile-btn");
const mobileNav = document.getElementById("nav-mobile");
const body = document.querySelector("body");

navBtn.addEventListener("click" , () => {
    mobileNav.classList.add("show");
    mobileNav.classList.add("leftAnim");
    body.classList.add("hidden");
})

window.addEventListener("click" ,(e)=>{
    if(e.target != mobileNav  && e.target.parentElement != navBtn){
        mobileNav.classList.remove("show");
        mobileNav.classList.remove("leftAnim");
        body.classList.remove("hidden");
    }
})


//Smooth scroll on click link
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        //get id from link
        const targetId = this.getAttribute('href');
        //get section from id
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'
            });
        }
    });
});