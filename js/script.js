/*

*/

// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
    .scrollIntoView({

        behavior: "smooth"

    });

});

});




// Fade-in animation while scrolling

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.classList.add("visible");

    }


});

});




document.querySelectorAll(".card, .section")
.forEach((element)=>{

observer.observe(element);

});
