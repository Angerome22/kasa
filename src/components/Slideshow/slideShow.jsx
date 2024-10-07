import React, { useState } from "react";


export default function SlideShow({ pictures }) {

const [currentIndex, setCurrentIndex] = useState(0);

const nextPicture = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
};

const prevPicture = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1);
};


    return (         
        <div className="App-slideShow">
            
            <div role="button" onClick={prevPicture} className="slideShow-button prev fa-solid fa-chevron-left "></div>
            
            <div className="slideShow-picture">
            <img src={pictures[currentIndex]}  alt={`logement ${currentIndex + 1}`} /> 
            </div> 
            
            
            <div role="button" onClick={nextPicture} className="slideShow-button next fa-solid fa-chevron-right"></div>
           

            
            
            
        </div>
        );
} 