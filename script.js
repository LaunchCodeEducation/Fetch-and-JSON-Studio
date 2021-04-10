// TODO: add code here
window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    console.log(response)
    response.json().then(function(json){
        console.log(json);
        let astronauts = "";
        let counter = 0;
        let container = document.getElementById("container");
        for(astronaut of json){
            console.log(astronaut);
            astronauts +=`<div class="astronaut">
            <div class="bio">
               <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
               <ul>
                  <li>Hours in space: ${astronaut.hoursInSpace}</li>
                  <li>Active: ${astronaut.active}</li>
                  <li>Skills:${astronaut.skills}</li>
                  <li>Skills:${astronaut.skills.join(', ')}</li>
               </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
         </div>`
         counter++
        }
        let count = document.getElementById("count");
        count.innerHTML = `<h3>Count: ${counter}</h3>`
        container.innerHTML = astronauts;
    })

    })
})
