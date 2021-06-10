// TODO: add code here
window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(response => response.json()).then(json => {
        console.log(json);

        // get our astronaut container:
        const astronautContainerDiv = document.getElementById('container');
        console.log(astronautContainerDiv);

        // how do you create a new HTML div element?
        const newDivElement = document.createElement("div");
        
        // how do you create a new HTML h3 element?
        const newH3Element = document.createElement("h3");

        // how do you set the new HTML h3 elements innerText?
        newH3Element.innerText = `${json[0].firstName} ${json[0].lastName}`;

        // how do you add this new HTML h3 element (with text) to the newDivElement?
        newDivElement.appendChild(newH3Element);

        const unorderedListElement = document.createElement("ul");

        const listItemHoursInSpaceElement = document.createElement("li");
        listItemHoursInSpaceElement.innerText = "Hours is space: " + json[0].hoursInSpace;
        unorderedListElement.appendChild(listItemHoursInSpaceElement)
        
        const listItemActiveElement = document.createElement("li");
        listItemActiveElement.innerText = "Active: " + json[0].active;
        unorderedListElement.appendChild(listItemActiveElement);

        const listItemSkills = document.createElement("li");
        listItemSkills.innerText = "Skills: " + json[0].skills.join(", ");
        unorderedListElement.appendChild(listItemSkills);

        newDivElement.appendChild(unorderedListElement);

        // how do you add this new div with all its children to the astronautContainerDiv?
        astronautContainerDiv.appendChild(newDivElement);

    });
});