const bar = document.querySelector(".bar");
const close = document.querySelector(".close");
const navigation = document.querySelector(".navigation");

bar.addEventListener("click" , function() {
    close.style.visibility = "visible";
    navigation.style.visibility = "visible";
    bar.style.visibility = "hidden";
})

close.addEventListener("click" , function() {
    close.style.visibility = "hidden";
    navigation.style.visibility = "hidden";
    bar.style.visibility = "visible";
})




















// const home = document.querySelector(".home a")
// const homeline = document.querySelector(".home-line")

// home.addEventListener("click", function(){
//     homeline.style.visibility = "visible";
// })


// const destination = document.querySelector(".destination")
// const destinationline = document.querySelector(".destination-line")

// destination.addEventListener("click", function(){
//     destinationline.style.visibility = "visible";
// })


// const crew = document.querySelector(".crew")
// const crewline = document.querySelector(".crew-line")

// crew.addEventListener("click", function(){
//     crewline.style.visibility = "visible";
// })


// const technology = document.querySelector(".technology")
// const technologyline = document.querySelector(".technology-line")

// technology.addEventListener("click", function(){
//     technologyline.style.visibility = "visible";
// })