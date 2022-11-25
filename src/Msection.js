import "./Msection.css"
import { useState } from "react";
import Pak from "../src/Images/Pak.jpg"
import Pak_1 from "../src/Images/Pak_1.jpg"
function Msection(){
    const [card, setCard] = useState(
      [
        {

          image: (
            
            <img style={{height:"300px",width:"725px"}} src={Pak} alt="...."/>
          ),
          text: <b> "Pakistan Win T20 World Cup and tried hard in 2022. Babar Azam tried hard this time but did not made it. though we were very close" </b>
          
          
        },
        { 
            image: (
                <img style={{height:"300px",width:"725px"}} src={Pak_1} alt="...."/>
            ),
            text: <b> "Shan and Iftikhar played well against New Zealand to make pakistan qualify for the semi-Final " </b>
            
            
          }])
    return(
        <div>
      {card.map((cdata) => 
      (
      <article class="card">
               <div class="card-body">
        <b>New Zealand News</b>
        </div>
        <div class="card">
</div>
        <div class="card__thumb">{cdata.image}</div>
        <div style={{width:"725px"}} class="card__content">
          <h3  class="card__title">{cdata.text}</h3>
        </div>
        <hr></hr>      
    </article>
    
      ))}
      
    </div>
    );
    }
    export default Msection;