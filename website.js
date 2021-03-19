document.addEventListener("DOMContentLoaded", () => {
    let homeBtn = document.getElementById("homeIcon")
    homeBtn.addEventListener("click", () => {
        let homeIcon = document.querySelector("#jyq")
        homeIcon.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    })
    let aboutBtn = document.getElementById("aboutIcon")
    aboutBtn.addEventListener("click", () => {
        let aboutIcon = document.querySelector("#aboutMe")
        aboutIcon.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
        });
    })
    let skillsBtn = document.getElementById("skillsIcon")
    skillsBtn.addEventListener("click", () => {
        let skillsIcon = document.querySelector("#skills")
        skillsIcon.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
        });
    })
    let projectsBtn = document.getElementById("projectsIcon")
    projectsBtn.addEventListener("click", () => {
        let projectsIcon = document.querySelector("#projects")
        projectsIcon.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
        });
    })
    let contactBtn = document.getElementById("contactIcon")
    contactBtn.addEventListener("click", () => {
        let contactIcon = document.querySelector("#contact")
        contactIcon.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
        });
    })
    

    const card = document.querySelector('.card')
    const subtitle = document.querySelector("#title")
    card.addEventListener('click', () => {
        console.log("mouse enter")
        if (subtitle.classList.contains('hide')) {
            console.log("if")
            subtitle.classList.remove('hide')
        } else {
            console.log("else")
            subtitle.classList.add('hide')
        }
    })
    const card2 = document.querySelector('.card2')
    const subtitle2 = document.querySelector("#title2")
    card2.addEventListener('click', () => {
        console.log("mouse enter")
        if (subtitle2.classList.contains('hide')) {
            console.log("if")
            subtitle2.classList.remove('hide')
        } else {
            console.log("else")
            subtitle2.classList.add('hide')
        }
    })


    let aboutMeNextBtn = document.getElementById("aboutMeNext")
    aboutMeNextBtn.addEventListener("click", () => {
        let aboutMeNext = document.querySelector("#aboutMe")
        aboutMeNext.scrollIntoView ({
            behavior: "auto",
            block: "start",
            inline: "center",
        });
    })
    let skillNextBtn = document.getElementById("skillsNext")
    skillNextBtn.addEventListener("click", () => {
        let skillsNext = document.getElementById("skills")
        skillsNext.scrollIntoView ({
            behavior: "auto",
            block: "start",
            inline: "center",
        })
    })
    let projectsNextBtn = document.querySelector("#projectsNext")
    projectsNextBtn.addEventListener("click", () => {
        let projectsNext = document.getElementById("projects")
        projectsNext.scrollIntoView ({
            behavior: "auto",
            block: "start",
            inline: "center",
        })
    })
    let contactMeNextBtn = document.querySelector("#contactMeNext")
    contactMeNextBtn.addEventListener("click", () => {
        let contactMeNext = document.getElementById("contact")
        contactMeNext.scrollIntoView ({
            behavior: "auto",
            block: "start",
            inline: "center",
        })
    })

})

function chBackcolor(black) {
    document.body.style.background = black;
    document.body.style.color = white;
 }

function convertLetterCase() {
    document.querySelector("allText").style.textTransform = "capitalize"
}