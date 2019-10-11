window.addEventListener("load", function() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        // Access the JSON in the response
        response.json().then( function(json) {
            console.log(json);
            const div = document.getElementById("container");
            let skillset;
            for ( i = 0; i < json.length; i++) { // loop through each astronaut's data
                skillset = json[i].skills[0]; // build new string from skills array
                for ( j = 1; i < json[i].skills.length; i++) {
                    skillset += `, ${json[i].skills[j]}`;
                }
                div.innerHTML += `
                    <div class = "astronaut">
                        <div class = "bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li><b>Hours in space:</b> ${json[i].hoursInSpace}</li>
                                <li><b>Active:</b> ${json[i].active}</li>
                                <li><b>Skills:</b> ${skillset}</li>
                            </ul>
                        </div>
                        <img class = "avatar" src = ${json[i].picture} />
                    </div>
                `;
            }   
        });
    }); 

});