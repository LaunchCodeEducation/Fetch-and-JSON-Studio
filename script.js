// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then (function (response) {
      response.json().then(function(json) {
        console.log(json);
        const div = document.getElementById("container");
        for (let i = 0; i < json.length; i++) {
          let astronautName = document.getElementById("astronautName");
          astronautName.innerHTML = `${json[i].firstName} ${json[i].lastName}`
          console.log(astronautName);
          let spaceHours = document.getElementById("spaceHours");
          spaceHours.innerHTML = `Hours in space: ${json[i].hoursInSpace}`;
          let currentStatus = document.getElementById("currentStatus");
          currentStatus.innerHTML = `Active: ${json[i].active}`;
          // for (let j = 0; j < json[i].skills.length; j++) {
          //   json[i].skills.length);
          // };
          let skillset = document.getElementById("skillset");
          skillset.innerHTML = `Skills: ${json[i].skills.join(', ')}`;
          let image = document.getElementById("image");
          image.innerHTML = `src = ${json[i].picture}`;
            
         };
      });         



// "id": 1,
// "active": false,
// "firstName": "Mae",
// "lastName": "Jemison",
// "skills": [
//       "Physician", "Chemical Engineer"
// ],
// "hoursInSpace": 190,
// "picture": "mae-jemison.jpg"

//       <div class="astronaut">
//         <div class="bio">
//            <h3>Mae Jemison</h3>
//            <ul>
//               <li>Hours in space: 190</li>
//               <li>Active: false</li>
//               <li>Skills: Physician, Chemical Engineer</li>
//            </ul>
//         </div>
//         <img class="avatar" src="images/mae-jemison.jpg">
//      </div>
     
     
  });
});





