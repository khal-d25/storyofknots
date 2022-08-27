import React from "react";
import  './app.css'
// import { ReactComponent as Pot } from './Atts/plant-pot-svgrepo-com.svg';


const App = ()=>{


    return(
        <div id="mainContainer">
            <div id="top">
            {/* <div id="pot"><Pot/></div> */}
                <div id="header">
                    <div id="sok">
                    storyofknots.com
                    </div>
                    <div id="topRight">
                        <div>follow us</div>
                        <div id="icons">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div id="bottom">
                <div id="bottomMain">
                    <div id="card">
                        <div>

                        <div id="soon" className="cDiv">We're Coming soon!</div>
                        <div id="till" className="cDiv">Till then, Let us contact you!</div>
                        </div>
                        <form>
                            <div id="inputsDiv">
                                <input className="sDivs" type='text' placeholder="Name . . ."/>
                                <input className="sDivs" type='text' placeholder="Email . . ."/>
                                <input className="sDivs" type='number' placeholder="Contact"/>
                            </div>
                            <button id="submit">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App;