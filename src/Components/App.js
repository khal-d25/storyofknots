import React from "react";
import './app.css'


const App = ()=>{
    return(
        <div id="mainContainer">
            <div id="backsMain">
                <div id="one"></div>
                <div id="two"></div>

            </div>
            
            <div id="card" className="ui card">
                
                <div id="top">
                    <div id="comingSoon">Coming Soon</div>
                    <div id="line">Till then, let us reach out to you.</div>
                </div>
                <div id="mid">
                    <form id="fform">
                        <div id="inputDiv">
                        <div className="ui input focus fourty">
                            <input className="trans" type="text" placeholder="Name . . ."/>
                        </div>
                        <div className="ui input focus fourty">
                            <input type="text" placeholder="Email . . ."/>
                        </div>
                        <div className="ui input focus fourty">
                            <input type="number" placeholder="Contact . . ."/>
                        </div>
                        </div>
                        <div id="submitBtn" class="ui animated button">
                            <div className="visible content">Submit</div>
                            <div className="hidden content">
                                <i class="right arrow icon"></i>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="bottom">
                <i className="fa fa-instagram"></i>
                <i className="fa fa-whatsapp"></i>
                <i className="fa fa-envelope"></i>
                </div>
            </div>
        </div>
    )
}


export default App;
