import { BsFillBellFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
function Menu(){
    return(
    <div>
        <div >
            <nav class="navbar navbar-expand-lg bg-primary" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:"white",fontSize:"30px"}}>ESPN CricInfo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            LiveScore
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">LiveScore Home</a></li>
            <li><a class="dropdown-item" href="#">Reults</a></li>
            <li><a class="dropdown-item" href="#">Season view</a></li>
            <li><a class="dropdown-item" href="#">Desktop Scoreboard</a></li>
            <li><a class="dropdown-item" href="#">Schedule</a></li>
            <li><a class="dropdown-item" href="#">Month View</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Series</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:"white"}}>Teams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:"white"}}>Feauture</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:"white"}}>Videos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:"white"}}>Stats</a>
        </li>
      </ul>
      <div className="icons">
      <BsFillBellFill style={{color:"white"}}/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <BsFillMoonFill style={{color:"white"}}/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <BsGrid3X3GapFill style={{color:"white"}}/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <BsSearch style={{color:"white"}}/>
      </div>
    </div>
  </div>
</nav>
        </div>
    </div>
    );
    }
    export default Menu;