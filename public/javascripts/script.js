// let menuIcon=document.querySelector("#menu")
// let navbar= document.querySelector(".navbar")
// menuIcon.onclick = ()=>{
//     menuIcon.classList.toggle('bx-x')
//     navbar.classList.toggle('active')
// }


// Scroll section

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')
window.onscroll = () =>{
    
    
    sections.forEach(sec =>{
        let top =window.scrollY;
       let offset = sec. offsetTop - 100;
       let height = sec.offsetHeight;
    let id = sec.getAttribute('id')
    if (top >=offset && top < offset + height) {
        navlinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a [href*=' +id + ']').classList.add('active');
        })
    }

        })
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100); 

// remove toggle icon and click navbar link


menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')

}



// gsap page1

var tl= gsap.timeline({ })


tl.from(".header a",{
    // delay :0,
    opacity: 0,
duration:.8,
y:-30

})
tl.from(".navbar",{
    // delay :0,
    opacity: 0,
duration:.3,
y:-30

})
tl.from(".home-content h3",{
    // delay :0.3,
    opacity: 0,
    duration:.2,
    x:-90
    
})
tl.from(".home-content h2",{
    // delay :0.8,
    opacity: 0,
    duration:.3,
    x:-90
    
})
tl.from(".home-content h1",{
    // delay :0.8,
    opacity: 0,
    duration:.3,
    x:-90
    
})
tl.from(".text-animate",{
    // delay :1.3,
    opacity: 0,
duration:.3,
x:-90

})

tl.from(".home-content p",{
    // delay :1.6,
    opacity: 0,
duration:.3,
x:-90

})

tl.from(".home-img",{
    // delay :1.4,
    opacity: 0,
duration:.4,
scale:.2
// x:190

})

tl.from(".btn-box",{
    // delay :1.9,
    opacity: 0,
duration:.3,
x:-90

})
tl.from(".home-sci",{
    // delay :3.1,
    opacity: 0,
duration:.3,
x:-90

})
tl.from(".home-img img",{
    // delay :3,
    opacity: 0,
duration:.9,
y:190

})


// page3  gsap

gsap.from(".about-img ",{
    delay :.1,
    opacity: 0,
duration:1,

x:-90,
scrollTrigger:{
    trigger:".about-img",
    scroller:"body",
    // start:"top 30%",
    // markers:true

   } 


})

gsap.from(" .about-img img",{
    delay :.1,
    opacity: 0,
duration:1,
y:190,
scale:0.2,

scrollTrigger:{
    trigger:".about-img img",
    scroller:"body",
    // start:"top 30%",
    // markers:true

   }  

})

gsap.from(".heading",{
    delay :.3,
    opacity: 0,
duration:1,
x:90,
scrollTrigger:{
    trigger:".heading",
    scroller:"body",
    // start:"top 30%",
    // markers:true

   } 
})
gsap.from(".about-content h3",{
    delay :.8,
    opacity: 0,
duration:1,
x:90,
scrollTrigger:{
    trigger:".about-content h3",
    scroller:"body",
    // start:"top 30%",
    // markers:true

   } 
})

gsap.from(".about-content p",{
    delay :1,
    opacity: 0,
duration:1,
x:130,
scrollTrigger:{
    trigger:".about-content p",
    scroller:"body",
    // start:"top 30%",
    // markers:true

   } 
})




