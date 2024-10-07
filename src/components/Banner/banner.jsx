import React from "react";
export default function Banner({ picture, text }) {
    return ( 
        <div className="App-banner">
            <img src={picture} className="banner-picture" alt="bannière" />
            <div className="banner-text">
                <h1>{text}</h1>
            </div>
        </div>        
        
        );
} 