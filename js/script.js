console.log("Portfolio Loaded Successfully");


// ===============================
// More Dashboards Button
// ===============================

const moreProjectsBtn = document.getElementById("moreProjectsBtn");

if (moreProjectsBtn) {

    moreProjectsBtn.addEventListener("click", function () {

        const hiddenProjects = document.querySelectorAll(".more-project");

        hiddenProjects.forEach(function(project) {
            project.style.display = "block";
        });

        this.style.display = "none";

    });

}


// ===============================
// Typing Animation
// ===============================

const typingElement = document.getElementById("typing");

if (typingElement) {

    const text = [
        "Data Analyst",
        "Power BI Developer",
        "Dashboard Creator"
    ];

    let index = 0;
    let charIndex = 0;

    function typeEffect() {

        if (charIndex < text[index].length) {

            typingElement.innerHTML +=
                text[index].charAt(charIndex);

            charIndex++;

            setTimeout(typeEffect, 100);

        } else {

            setTimeout(() => {

                typingElement.innerHTML = "";
                charIndex = 0;
                index = (index + 1) % text.length;

                typeEffect();

            }, 1500);
        }
    }

    typeEffect();
}