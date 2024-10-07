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
        onClick={toggleCollapse}         
      >
        <h4 className="collapse-title">{label}</h4>
                    <i
                    className={`fa-solid arrow-icon ${
                      isOpen ? "fa-chevron-down" : "fa-chevron-up"
                    }`}
                    onClick={toggleCollapse} // Le collapse se déclenche uniquement au clic sur l'icône
                  ></i>
                </div>
          
                {isOpen && <div className="collapse-content">{children}</div>}
              </div>
            );
          };
export default CollapseItem;