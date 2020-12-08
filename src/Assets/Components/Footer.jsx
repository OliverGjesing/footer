import "./Footer.css"
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Footer = () => {
    return (<Router>
        <footer>    
        <div>
                <i className="small fab fa-facebook"></i>
                <a className="footerTekst" href="https://auningby.dk/om-auning">www.AuningBy.dk - info@auningby.dk</a>
                <a href="https://www.facebook.com/haandboldaif/"><i className="large fab fa-facebook"></i></a>
        </div>
        
        </footer>
        </Router>
    )
}

export default Footer