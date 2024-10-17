import React, { useEffect, useRef, useState } from "react";

const CollapseItem = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState("0px");
    const contentRef = useRef(null);


    const toggleCollapse = (e) => {
      e.stopPropagation();
        setIsOpen(!isOpen);
    }

    useEffect(() => {
      if (isOpen) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`); // Ajuste dynamiquement en fonction du contenu
      } else {
        setMaxHeight("0px");
      }
    }, [isOpen]);

return (
<div>
      <div className="collapse-item">
        <h4 className="collapse-title">{label}</h4>
                    <i
                    onClick={toggleCollapse}   
                    className={`fa-solid fa-chevron-up arrow-icon ${
                      isOpen ? "rotate" : ""
                    }`}
                    
                  ></i>
                </div>
          <div
                ref={contentRef}
        className={`collapse-content ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: maxHeight, 
          overflow: "hidden",
          transition: "max-height 0.4s ease", 
        }}
        >
        {children}
      </div>
              </div>
            );
          };
export default CollapseItem;