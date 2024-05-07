import React, { useEffect } from "react";
import "/src/css/form.css";

function FetchForm(){

    useEffect(() =>{
        handleFetch();
    })

    function handleFetch(){
        let input = document.getElementById("paese").value || "napoli";

        fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${input}&appid=&units=metric&lang=it`)
        .then(response => {
            if(!response.ok){
                throw new error("Could not fetch resources");
            }
            return response.json();
        })
        .then(data => {
            const fetch_immagine = data.weather[0].icon;
            const fetch_nome = data.sys.country;
            const fetch_città = data.name;
            const fetch_descrizione = data.weather[0].description;
            const fetch_temperatura = data.main.temp;
            const fetch_umidita = data.main.humidity;
            const fetch_vento = data.wind.speed;
            
            const body = document.body;
            const immagine = document.getElementById("immagine");
            const nome = document.getElementById("nome");
            const descrizione = document.getElementById("descrizione");
            const temperatura = document.getElementById("temperatura");
            const umidita = document.getElementById("umidita");
            const vento = document.getElementById("vento");
            
            immagine.src = "http://openweathermap.org/img/wn/" + fetch_immagine + "@2x.png";
            immagine.style.visibility = "visible";
            nome.innerHTML = `${fetch_nome}, ${fetch_città}`;
            descrizione.innerHTML = fetch_descrizione;
            temperatura.innerHTML = `${Math.floor(fetch_temperatura)}°C`;
            umidita.innerHTML = `${fetch_umidita}%`;
            vento.innerHTML = `${Math.floor(fetch_vento * 3.6)}km/h`;

            switch(fetch_descrizione.toLowerCase()){

                case "pioggia": case "pioggerella": case "pioggia leggera": case "pioggia moderata": case "forte pioggia": case "temporale":
                    body.style.background = "url(/assets/backgrounds/heavy_rain.jpg)";
                    body.style.backgroundSize = "cover";
                break;

                case "nubi sparse": case "cielo coperto":
                    body.style.background = "url(/assets/backgrounds/clouds_rain.jpg)"
                    body.style.backgroundSize = "cover";
                break;

                default:
                    body.style.background = "url(/assets/backgrounds/clouds.jpg)"
                    body.style.backgroundSize = "cover";
            }

        })  
        .catch(error => console.error(error));
    }

    return(
        <div className="form" >
            <label>Inserisci città: </label> <br />
            <input type="text" id="paese" />
            <button onClick={handleFetch} id="fetch-button" >Cerca</button>
        </div>
    );
}

export default FetchForm;
