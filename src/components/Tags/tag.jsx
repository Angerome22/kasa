export default function Tags({tags}) {
    
    return ( 
        
        <div className="App-tags"> 
        {tags.map((tag, index) => (
            <span key={index} className="tags-button">
                {tag}
                </span>
        ))}  
        </div>
    );        
            
        
    
} 