document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("search_input");
    const btn = document.getElementById("search_btn")
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        handlingServeGet(input.value);
        
        
    })
})    
function handlingServeGet(e){
    fetch(" http://localhost:3000/restaurants")
    .then((resp) => resp.json())
    .then((json) => renderResult(json));

    function renderResult(data) {

        const info = document.querySelector('.location_item');
        data.filter(item => {
            if (item["neighborhood"] ===  e){
                const card = document.createElement('li');
                card.className ="card"
                card.innerHTML = `
                <img src="${item.photograph}">
                <div class="content">
                    <h4><b>Name:</b> ${item.name}</h4>
                    <p>
                    <b>Address:</b> ${item.address}
                    </p>
                    <p>
                    <b>Type of Cuisine:</b> ${item.cuisine_type}
                    </p>
                    <div class="working_hours">
                        <h5>Operation hours<?h5>
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

                info.appendChild(card);
            }
            
        })
        

    }
}

