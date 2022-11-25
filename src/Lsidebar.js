import { useState } from "react";
function Lsidebar(){
    const[score,setScore]=  useState([
        {
            name: "Live match",   
            team1: "Pakistan*",
            team2: "India",
            tscore: "249/1",
            over: "(30.5 ov)"

        },
        {
            name: "Inning Break",
            team1: "England*",
            team2: "South Africa",
            tscore: "2152/4",
            over: "(10 ov)"

        },
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
    export default Lsidebar;