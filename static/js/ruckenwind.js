// navbar scrolling

var lastScroll = window.scrollY;
var navbar = document.getElementById('navbar');
var navbarHeight = navbar.clientHeight

window.addEventListener("scroll", () => {
    // Determine the entire scollable area of the page
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = window.scrollY

    if (lastScroll > scrolled) {
        // console.log("Scrolling up.")
        // navbar.classList.remove("-translate-y-72")
    }
    else {
        // console.log("Scrolling down.")
        navbar.classList.add("bg-gray-100/30")
        if (scrolled > navbar.clientHeight) {
            // navbar.classList.add("-translate-y-72")
        }
        // if (scrolled > cover_image_height) {
        //     navbar.classList.replace("text-white", "text-gray-900")
        // }
    }

    if (scrolled <= 0) {
        // console.log("At the top")
        navbar.classList.remove("bg-gray-100/30")
    }

    // if (scrolled === scrollable) {
    //     // console.log("At the bottom")
    // }

    // console.log(scrolled);
    // store position
    lastScroll = scrolled

})


const btn = document.getElementById("menu-btn")
const nav = document.getElementById("menu")

btn.addEventListener("click", () => {
    btn.classList.toggle("open")
    nav.classList.toggle("flex")
    nav.classList.toggle("hidden")
})