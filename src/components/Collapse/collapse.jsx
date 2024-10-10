import CollapseItem from "../CollapseItem/collapseItem";

    export default function Collapse({ data }) {
    return (
      <div className="collapse-container">
        {data.map((item, index) => (        
        <CollapseItem key={index} label={item.label}> 
        {item.content}
        </CollapseItem>
      ))}     
      </div>
    );

  }