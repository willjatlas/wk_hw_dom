document.addEventListener("DOMContentLoaded", ()=>{

    console.log("testing my java boiieeeeee ")

    // Form selectors 
    const formSubmit = document.querySelector("#sub-form");
    formSubmit.addEventListener("submit", handleFormSubmit);

    // Delete generator
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete All";
    deleteButton.id          = "delete-button";
    const buttonLocation = document.querySelector('#display-container');
    buttonLocation.appendChild(deleteButton);

    // Delete selector
    const deletePress = document.querySelector('#delete-button');
    deletePress.addEventListener("click", handleDeleteAll);

});

const handleFormSubmit = function(event){
    event.preventDefault();

    const recipeName  = event.target.recipe_name.value;
    const duration    = event.target.duration.value;
    const difficulty  = event.target.difficulty.value;
    const addedLink   = createLinkItem(event.target.link.value);

    const newListItem = document.createElement("li");
    newListItem.id    = "added-items";
    newListItem.textContent = `Recipe: ${recipeName} --|-- Duration: ${duration}
                               --|-- Difficulty: ${difficulty}`;

    const listParent  = document.querySelector("#saved-recipes");
    listParent.appendChild(newListItem);
    listParent.appendChild(addedLink);
    document.getElementById("sub-form").reset();

};

const createLinkItem = function(linkText){

    const addedLink       = document.createElement("a");
    addedLink.href        = linkText;
    addedLink.id          = "added-items";
    addedLink.style.color = "white";
    addedLink.innerHTML   = "Link to this recipe"; 
    return addedLink;

};

const handleDeleteAll = function(){

    document.getElementById("saved-recipes").innerHTML = "";

};