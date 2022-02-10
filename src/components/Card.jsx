import React from 'react';
import './Card.css';
import { HomeContext } from '../contexts/HomeContext';
import { sortItem } from '../api/api';

const Card = ({item}) => {
    const {dine,setDine} = React.useContext(HomeContext)
    const addCards = ()=>{
        const idf = dine.some((e)=>(e.id === item.id));
        if(!idf){
            setDine([...dine,item])
        }
        else{
            const element = sortItem(item.id,dine);
            setDine([...element])
           
        }
    }
   
    return (
        <li className='card' onClick={addCards}>
            <div className='card__images'>
                <img className='card__img' src={item.foodImg} alt="dish" />            
            </div>
            <h2 className='card__title'>{item.foodName}</h2>
            <p className='card__price'>$ {item.foodPrice}</p>
            <p className='card__count'>{item.isAvailable}</p>
        </li>
    );
};

export default Card;