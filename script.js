
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "#0d1117";
    }else{
        nav.style.background = "rgba(13,17,23,.9)";
    }
});
