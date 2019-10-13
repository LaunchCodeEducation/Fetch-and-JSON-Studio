window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        // Access the JSON in the response
        response.json().then( function(json) {
            // console.log(json);
            json = reorderArrayObjects(json); // bonus mission

            const para = document.getElementById("count"); // bonus mission
            para.innerHTML += `These ${json.length} extraordinary people are a few of the handful of humankind who have had the privilege of looking down on our beautiful planet from the quiet darkness of outer space.`;

            const div = document.getElementById("container");
            let skillset;
            for ( i = 0; i < json.length; i++ ) { // loop through each astronaut's data
                skillset = json[i].skills[0]; // build new string from skills array
                for ( j = 1; j < json[i].skills.length; j++ ) {
                    skillset += `, ${json[i].skills[j]}`;
                }
                if (json[i].active) { // bonus mission
                    div.innerHTML += `
                        <div class = "astronaut">
                            <div class = "bio">
                                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                <ul>
                                    <li><b>Hours in space:</b> ${json[i].hoursInSpace}</li>
                                    <li style="color:green"><b>Active:</b> ${json[i].active}</li>
                                    <li><b>Skills:</b> ${skillset}</li>
                                </ul>
                            </div>
                            <img class = "avatar" src = ${json[i].picture} />
                        </div>
                    `;
                } else {
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
            }   
        });
    }); 
});

function reorderArrayObjects(jsonArray) { // bonus mission

    // create empty array to hold reordered objects
    let reordered = [];

    // make array of hours only and sort in reverse
    let hours = [];
    for (m=0; m < jsonArray.length; m++ ) {
        hours.push(jsonArray[m].hoursInSpace);
    }
    hours.sort().reverse();

    // iterate through hours array and json and match hours to objects
    // get new indices and push to new array in new order
    for ( n = 0; n < hours.length; n++ ) {
        for ( p = 0; p < jsonArray.length; p++) {
            if (jsonArray[p].hoursInSpace === hours[n]) {
                reordered.push(jsonArray[p]);
                break;
            }
        }    
    }
    return reordered;
}