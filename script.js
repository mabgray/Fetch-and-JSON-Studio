window.addEventListener("load", function() {

this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(json){
        const astroDiv = document.getElementById("container");
        astroDiv.innerHTML = `
            //I'll put api info here
        
        `
        
    });

})



});