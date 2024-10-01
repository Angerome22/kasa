import PropTypes from 'prop-types'
import CollapseItem from '../CollapseItem/collapseItem';


export default function HousingSheet ({ title='', location='', picture='', name='', tags='', rating=''}) {



    return ( 
        <div className="housingSheet">
            <article className="housingCard">           
				<h1 className="housingCard-title">{title}</h1>
				<h2 className="housingCard-location">{location}</h2>
                <img className="hostPicture" src={picture} alt="portrait de hôte"/>
                <p className="hostName">{name}</p>
                <div class="tags">{tags}</div>
				<div class="housingCard-rating">
					<i class="fa-xs fa-solid fa-star" aria-hidden="true">{rating}</i>					
					<i class="fa-xs fa-solid fa-star neutral-star" aria-hidden="true">{rating}</i>
					<span class="sr-only">Note de 4 sur 5</span>
				</div>					
			</article> 
            <CollapseItem />                   
        </div>
        );
} 

HousingSheet.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,    
  }