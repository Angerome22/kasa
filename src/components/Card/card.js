import PropTypes from 'prop-types'


export default function Card({ cover = '', title=''}) {
    return ( 
        <div className="gallery-card">
            <article className="card">               
                    <img src={cover} className="gallery-picture" alt="apartment" />
                    <div className="gallery-title">
                        <h2 >{title}</h2>
                    </div> 
            </article>        

        </div>        
        
        );
} 

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,    
  }


