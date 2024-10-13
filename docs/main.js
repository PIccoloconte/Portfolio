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