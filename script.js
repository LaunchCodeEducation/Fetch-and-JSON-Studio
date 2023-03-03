// TODO: add code here
window.addEventListener("load", function () {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const container = document.getElementById("container");
      let count = 0;
      for (count = 0; count < json.length; count++) {
        container.innerHTML += `
            <div class="astronaut">
              <div class="bio">
                <h3>${json[count].firstName} ${json[count].lastName}</h3>
                <ul>
                  <li>Hours in space: ${json[count].hoursInSpace}</li>
                  <li ${
                    json[count].active
                      ? 'style="color:green;"'
                      : 'style="color:red;"'
                  }>Active: ${json[count].active}</li>
                  <li>Skills: ${json[count].skills.join(", ")}</li>
                </ul>
              </div>
              <img class="avatar" src="${json[count].picture}">
            </div>
          `;
      }
      container.innerHTML += `<h4>Count of astronauts :${count}</h4>;`;
    });
});
