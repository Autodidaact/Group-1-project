const input = document.querySelector("input");
input.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    /* handlingServeGet(e.target.input.value);
    form.reset(); */
    
    
})
/* function handlingServeGet(e){
    fetch(" http://localhost:3000/restaurants")
    .then((resp) => resp.json())
    .then((json) => renderResult(json));

    function renderResult(data) {

        const info = document.querySelector('.meal-item');
        players.forEach(player => {
            const h2 = document.createElement('h2');
            h2.innerHTML = player.name;
            info.appendChild(h2);
        }); 
        data.filter(item => {
            if (item["neighborhood"] ===  e){
                const card = document.createElement('li');
                card.className ="card"
                h2.innerHTML = `
                <img src="${item.photograph}">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p>
                      At <span>${item.address}</span>
                    </p>
                    <p>
                    Type of Cuisine: <span>${item.cuisine_type}</span>
                    </p>
                    <div class="working_hours">
                        <h2>Operation hours<?h2>
                        <p>
                            Mondays: <span>${item.operating_hours.Monday}</span>
                        </p>
                        <p>
                            Tusdays: <span>${item.operating_hours.Tuesday}</span>
                        </p>
                        <p>
                            Wednesdays: <span>${item.operating_hours.Wednesday}</span>
                        </p>
                        <p>
                            Thursdays: <span>${item.operating_hours.Thursday}</span>
                        </p>
                        <p>
                            Fridays: <span>${item.operating_hours.Monday.Friday}</span>
                        </p>
                        <p>
                            Saturdays: <span>${item.operating_hours.Saturday}</span>
                        </p>
                        <p>
                            Sundays: <span>${item.operating_hours.Sunday}</span>
                        </p>
                    </div>
                   
                    <p>
                  
                    </p>
                </div>
                for (review in item.reviews){
                    <h2>Reviews</h2>
                    <p>${review.name}</p>
                    <p>${review.date}</p>
                    <p>${review.rating}</p>
                    <p>${review.comments}</p>
                }
                `;
                info.appendChild(h2);
            }
            else{
                const h = document.createElement('h2');
                h.innerHTML = "Sorry! We don/'t currently have data for your location"
                info.appendChild(h); 
            }
        })
        

    }
}

 */