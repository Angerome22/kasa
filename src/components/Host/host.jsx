export default function Host({ name, picture }) {
    const modifiedName = name.replace(' ', '\n');

    return ( 
        
        <div className="host">            
            <h2 className="host-name" >{modifiedName}</h2>           
            <img src={picture} className="host-picture" alt="portrait de l'hôte" />
        </div>
    );
    
} 
