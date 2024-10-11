export default function Banner({ picture, text }) {
    return ( 
        <div className="banner">
            <img src={picture} alt="bannière" />
            <div>
                <h1>{text}</h1>
            </div>
        </div>        
        
        );
} 