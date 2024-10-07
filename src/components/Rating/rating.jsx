
export default function Rating({rating}) {

    const maxRating = 5;
    
    return ( 
        
        <div className="App-rating">
        {Array.from({ length: maxRating }, (v, i) => (
            <i
                key={i}
                className={`fa-solid fa-star ${i < rating ? 'active' : 'inactive'}`}
            ></i>
        ))}
    </div>
        
    );
            
        
    
} 