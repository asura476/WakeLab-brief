import axios from "./axios";
async function getData() {
    try {
        const response = await axios.get("http://localhost:3000/api/activites");
        let activities = response
        return activities
    } catch (error) {
        console.error(`error is: ${error}`)
    }
}
getData()
function cardRender() {
    //CONTAINER
    const cardDiv = document.getElementById("cards")

    activities.forEach((activity) => {
        //CREATE AND APPEND SECTION TO CONTAINER
        const cardSection = document.createElement("section")
        cardSection.classList.add("card")
        cardSection.style = "max-width: 320px"
        cardDiv.appendChild(cardSection)

        //CREATE AND APPEND CARD BODY
        const div = document.createElement("div")
        div.classList.add("card-body")
        cardSection.appendChild(div)

        //CREATE AND APPEND H4, P, DIV FOR BUTTONS, AND A DIV FOR TIME
        const divH4 = document.createElement("h4")
        divH4.classList.add("card-title")
        divH4.textContent = `${activity.titre}`
        divH4.style = "overflow: hidden"
        const divP = document.createElement("p")
        divP.classList.add("card-text")
        divP.textContent = `${activity.objectifs}`
        const divButtons = document.createElement("div")
        divButtons.classList.add("buttons")
        const divTime = document.createElement("div")
        divTime.classList.add("card-footer", "fg-2")
        divTime.textContent = `${activity.createdAt}`
        div.append(divH4, divP, divButtons, divTime)

        //APPEND THE BUTTONS TO THEIR DIV
        const buttonD = document.createElement("button")
        buttonD.classList.add("buttonDelete")
        const iconDelete = document.createElement("i")
        iconDelete.classList.add("fa-solid", "fa-trash")
        buttonD.appendChild(iconDelete)
        const buttonME = document.createElement("button")
        buttonME.classList.add("buttonModifyE")
        const iconModify = document.createElement("i")
        iconModify.classList.add("fa-regular", "fa-pen-to-square")
        buttonME.appendChild(iconModify)
        const details = document.createElement("button")
        details.classList.add("btn-solid", "theme-success")
        details.setAttribute("type", "button")
        details.setAttribute("data-bs-toggle", "popover")
        details.setAttribute("data-bs-title", `duree: ${activity.duree}min`)
        details.setAttribute("data-bs-content", `${activity.description}`)
        details.textContent = "details"
        divButtons.append(buttonD, buttonME, details)
    })
}
function deleteActivity() {
    let deleteBtn = document.querySelectorAll(".buttonDelete")
    deleteBtn.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("yes")
        })
    })
}