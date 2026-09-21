console.log("Portfolio Loaded Successfully");

const buttons = document.querySelectorAll(".btn-outline-primary");

buttons.forEach(btn=>{
btn.addEventListener("click",()=>{
alert("Project details will be added soon!");
});
});
console.log("Portfolio Loaded Successfully");

const buttons = document.querySelectorAll(".btn-outline-primary");

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        alert("Project details will be added soon!");
    });
});

// Typing Animation

const text = [
    "Data Analyst",
    "Power BI Developer",
    "Dashboard Creator"
];

let index = 0;
let charIndex = 0;

function typeEffect() {

    if(charIndex < text[index].length){

        document.getElementById("typing").innerHTML +=
        text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);
    }
    else{

        setTimeout(()=>{

            document.getElementById("typing").innerHTML="";
            charIndex=0;
            index=(index+1)%text.length;

            typeEffect();

        },1500);
    }
}

typeEffect();
document.getElementById("moreProjectsBtn").addEventListener("click", function () {

    const hiddenProjects = document.querySelectorAll(".more-project");

    hiddenProjects.forEach(function(project) {
        project.style.display = "block";
    });

    this.style.display = "none";

});