import Menu from "./Menu";
import Lsidebar from "./Lsidebar";
import Msection from "./Msection";
import Rsidebar from "./Rsidebar";
import Footer from "./Footer";
function Main(){
return(
    <div>
    <div className="row">

    <div className="col-md-12 col-12" style={{height:"auto"}}><Menu/></div>     
    <div className="col-md-3 col-12" style={{ border: "1px solid black", height:"auto" }}><Lsidebar/></div>
    <div className="col-md-6 col-12" style={{ border: "1px solid black", height:"1050px" }}><Msection/></div>  
    <div className="col-md-3 col-12" style={{ border: "1px solid black", height:"auto" }}><Rsidebar/></div>     
    
    </div>

    <div className="row">

     <div className="col-md-12 col-12" style={{ border: "1px solid black", height:"auto" }}><Footer/></div>     
    
    </div>
</div>
);
}
export default Main;