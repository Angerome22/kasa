
export default function Host({ name, picture }) {
    

    return ( 
        
        <div className="App-host">            
                
                <img src={picture} className="host-picture" alt="portrait de l'hôte" />
                <div className="host-name">
                    <h2>{name}</h2>
                </div>
                
            
        </div>
    );
    
} 
