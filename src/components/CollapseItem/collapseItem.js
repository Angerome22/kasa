import React, { useState } from "react";


const CollapseItem = ({ label, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }


return (
<div>
      <div className="collapse-item"
        onClick={toggleCollapse}         
      >
        <h4 className="collapse-title">{label}</h4>
        {!isOpen ? (
                    <i className="fa-solid fa-chevron-up arrow-icon"></i>
                ) : (
                    <i className="fa-solid fa-chevron-down arrow-icon"></i>
                )}
      </div>
      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
</div>
  );

};
export default CollapseItem;