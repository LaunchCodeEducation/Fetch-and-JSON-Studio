// TODO: add code here 

window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(function(response) {
        return response.json();
    }).then(function(response) {
        // console.log(json);
        let sortedAstronauts = response.sort(function(a, b) { return a.hoursInSpace - b.hoursInSpace });

        //console.log(response);
       
    
        let myContainer = document.getElementById('container');
    
        myContainer.innerHTML += `<h3>Astronaut Count: ${sortedAstronauts.length}</h3>` ;
       sortedAstronauts.forEach(function(astronaut)  {
            let myHtml = `
            <div class="astronaut">
             <div class="bio">
             <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li ${astronaut.active ? 'class="green-text" ' : ' '}>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(",")}</li>
                </ul>
             </div>
            <img class="avatar" src="${astronaut.picture}">
            </div>
            `;
            myContainer.innerHTML += myHtml;
        })
      })
    
    });
    