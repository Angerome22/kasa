export default function Banner({ picture, text, dark }) {
    return ( 
        <div className={`banner ${dark ? "banner-dark" : ""}`}>
            <img src={picture} alt="bannière" />
            <div>
                <h1> {text && <h1>{text}</h1>}</h1>
            </div>
        </div>        
        
        );
} 