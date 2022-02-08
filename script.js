window.addEventListener('load',function(){
    let astronauts = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    astronauts.then(function(response){
        let data = response.json();
        data.then(function(data){
            let results = document.querySelector('#container');
            data.sort((a,b)=>b.hoursInSpace-a.hoursInSpace);
            for(let a=0;a<data.length;a++){
                results.innerHTML += `
                <div class="astronaut">
                
                    <div class="bio">
                    <h3>${data[a].firstName} ${data[a].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${data[a].hoursInSpace}</li>
                        <li id='color'>Active: ${data[a].active}</li>
                        <li>Skills: ${data[a].skills}</li>
                    </ul>
                    </div>
                    <img class="avatar" src="${data[a].picture}">
                </div>
                `;
            }
            let count = document.querySelector('h1');
            count.innerHTML += ` ${data.length}`;
            setColor();
        });
    }); 
});
function setColor(){
    let elements = document.querySelectorAll('li');
    for(let a=0;a<elements.length;a++){
        if(elements[a].innerHTML === 'Active: true'){
            elements[a].style.color = 'green';
        }
    }
}



