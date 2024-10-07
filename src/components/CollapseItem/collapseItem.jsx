import React, { useState } from "react";


const CollapseItem = ({ label, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = (e) => {
      e.stopPropagation();
        setIsOpen(!isOpen);
    }


return (
<div>
      <div className="collapse-item"
              
      >
        <h4 className="collapse-title">{label}</h4>
                    <i
                    onClick={toggleCollapse}   
                    className={`fa-solid fa-chevron-up arrow-icon ${
                      isOpen ? "rotate" : ""
                    }`}
                    
                  ></i>
                </div>
          
                {isOpen && <div className="collapse-content">{children}</div>}
              </div>
            );
          };
export default CollapseItem;