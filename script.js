const expanderTitle = document.querySelectorAll(".expander__list-item--clickable");
const expandingSection = document.querySelectorAll(".expander__list-item--expand");

//Do not display by default
expandingSection.forEach((section) => {
    section.style.display = "none";
})

const expandItem = (section) => {
    //If not diplayed, display, and change + to -
    if (section.nextElementSibling.style.display == "none"){
        section.nextElementSibling.style.display = "inline-block";
        section.lastElementChild.firstElementChild.src = "./assets/icons/minus-icon.svg";
        section.lastElementChild.firstElementChild.alt = "Hide section";

    //If displayed, hide, and change - to +
    } else if(section.nextElementSibling.style.display == "inline-block"){
        section.nextElementSibling.style.display = "none";
        section.lastElementChild.firstElementChild.src = "./assets/icons/plus-icon.svg";
        section.lastElementChild.firstElementChild.alt = "Show section";
        
    } else{
        return;
    }
}

expanderTitle.forEach((section) => {
    section.addEventListener("click", () => {
        expandItem(section);
    });
})
