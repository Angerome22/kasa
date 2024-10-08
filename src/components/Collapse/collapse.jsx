import CollapseItem from "../CollapseItem/collapseItem";

    export default function Collapse({ data }) {
    return (
      <div className="collapse-container">
        {data.map((item) => (        
        <CollapseItem key={item.id} label={item.label}> 
        {item.content}
        </CollapseItem>
      ))}     
      </div>
    );

  }