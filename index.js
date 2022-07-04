const searchResults = document.querySelector('.location_item');
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("search_input");
    const btn = document.getElementById("search_btn");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        handlingServeGet(input.value);
        input.reset()
        
        
    })
})    
function handlingServeGet(userInput){
    fetch(" http://localhost:3000/restaurants")
    .then((resp) => resp.json())
    .then((json) => renderResult(json))
    .catch(function() {
        const div2 = document.createElement('div');
        div2.innerHTML = `<p><span>No result available for ${userInput}</span></p>`;
        searchResults.appendChild(div2);
        
      })

    function renderResult(data) {
        const locality = data.find(restaurant =>{
                            return restaurant.neighborhood === userInput || restaurant.neighborhood.toLowerCase() === userInput.toLowerCase() || restaurant.neighborhood.toLowerCase() === userInput.toUpperCase();
                    
                             })
       
        for (item of data){
            if (item.neighborhood === locality.neighborhood){
                const card = document.createElement('li');
                card.className ="card"
                card.innerHTML = `
                    <img src="${item.photograph}">
                    <div class="content">
                        <h4><b>Restaurant Name:</b> ${item.name}</h4>
                        <p>
                        <b>Address:</b> ${item.address}
                        </p>
                        <p>
                        <b>Type of Cuisine:</b> ${item.cuisine_type}
                        </p>
                        <div class="working_hours">
                            <h5>Operating hours<?h5>
                            <p>
                                <b>Mondays:</b> ${item.operating_hours.Monday}
                            </p>
                            <p>
                            <b>Tusdays:</b> ${item.operating_hours.Tuesday}
                            </p>
                            <p>
                            <b>Wednesdays:</b> ${item.operating_hours.Wednesday}
                            </p>
                            <p>
                            <b>Thursdays:</b> ${item.operating_hours.Thursday}
                            </p>
                            <p>
                            <b>Fridays:</b> ${item.operating_hours.Friday}
                            </p>
                            <p>
                            <b>Saturdays:</b> ${item.operating_hours.Saturday}
                            </p>
                            <p>
                                <b>Sundays:</b> ${item.operating_hours.Sunday}
                            </p>
                        </div>
                    
                        <p>
                    
                        </p>
                    </div>
                    
                    `
            

                    ;

                    searchResults.appendChild(card);
            }

        }
        
        
    }
   
        
}

