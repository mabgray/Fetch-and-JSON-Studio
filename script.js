window.addEventListener("load", function() {

this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(json)
    { //json() formats response into a js object. 
        let astroData = "";//make a string and put the whole string in 
        for(let i = 0; i < json.length; i++) {
            let astronaut = json[i];
           
            

         astroData +=  ` <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
           <ul>
           <li>Hours in space: ${astronaut.hoursInSpace}</li>
           <li> Active: ${astronaut.active}</li>
           <li> Skills: ${astronaut.skills.join(", ")}</li>
         <img src="${astronaut.picture}" alt="image of astronaut"/>

         </ul>
         
    ` 

    
    
        }
        const astroDiv = document.getElementById("container");
        astroDiv.innerHTML = astroData;
            
        
        
    });

})



});