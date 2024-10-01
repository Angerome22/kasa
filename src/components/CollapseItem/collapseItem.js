import React, { useState } from "react";
import icon from '../../assets/arrow_back_ios-24px 2@2x.png'

const CollapseItem = ({ title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }


return (
<div className="app-collapse">
      <div className="collapse-item"
        onClick={toggleCollapse}         
      >
        <h4 className="collapse-title">{title}</h4>
        <img src={icon} alt="flèche de déroulement" className="arrowback"></img>
      </div>
      {isOpen && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );

};
export default CollapseItem;