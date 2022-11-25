
import { useState } from "react";
import "./Rsidebar.css";
function Rsidebar(){
    const[score,setScore]=  useState([
        {
            name: "Wolrd Cup",   
            team1: "Pakistan*",
            team2: "India",
            tscore: "349/1",
            over: "(40.5 ov)"

        },
        {
            name: "",
            team1: "England*",
            team2: "New Zeland",
            tscore: "252/4",
            over: "(30 ov)"

        },
        {
            name: "",
            team1: "Bangladesh*",
            team2: "Afghanistan",
            tscore: "307/5",
            over: "(35.5 ov)"


        }
    ]);    
    return(
        <div>
        {score.map((totalscore) => (
    <div>
      <div class="wrapper">
        <div class="grid grid--4">
          <div class="grid__item">
            <article>
                <h4>{totalscore.name}</h4>
              <h6>{totalscore.team2}</h6>
            </article>
            <article>
              <h6>{totalscore.team1} &nbsp;  &nbsp; &nbsp; &nbsp;
              <span>{totalscore.tscore}</span> <span>{totalscore.over}</span>
              </h6> 
            </article>
            <br></br>
            <br></br>
            
          </div>
        </div>
      </div>
    </div>
  ))}

    </div>       

    );
    }
    export default Rsidebar;