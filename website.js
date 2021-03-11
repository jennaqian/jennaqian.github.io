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
    
})