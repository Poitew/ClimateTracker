import React, { useRef, useEffect } from "react";
import "/src/css/stats.css";
import FetchForm from './form';

function Stats(){

    const dataRef = useRef(null);
    let date = new Date().toDateString()

    useEffect(() => {
        dataRef.current.innerHTML = `${date}`;
    })

    return (
        <div className="stato">

            <FetchForm></FetchForm>

            <h1 id="descrizione">Null</h1>

            <p id="data" ref={dataRef}></p>

            <aside className="stats" >

                <div className="row1 center">
                    <img src="" alt="stato meteorologico" id="immagine" /> 
                </div>

                <div className="row2 center">
                    <h2 id="temperatura">0°</h2>
                    <hr />
                </div>

                <div className="row3 center">
                    <label>Paese:</label>
                    <p id="nome">IT</p>
                </div>

                <div className="row4 center">
                    <label>Umidità:</label>
                    <p id="umidita">0%</p>
                </div>
                
                <div className="row5 center">
                   <label>Velocità del vento:</label>
                    <p id="vento">0Km/h</p> 
                </div>
            
            </aside>
        </div>
    );
}

export default Stats;