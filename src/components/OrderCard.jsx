import React from 'react';
import './OrderCard.css';
import { AiOutlineDelete } from "react-icons/ai";
import { deleteItem } from '../api/api';
import { HomeContext } from '../contexts/HomeContext';
const OrderCard = ({item}) => {
    const {dine,setDine} = React.useContext(HomeContext)
    const deleteCard = () => {
        const element = deleteItem(item.id,dine)
        if(element){
            setDine([...element])
        }
        else{
            setDine(dine.filter((e)=>(e.id !== item.id)))
        }
    }
    return (
        <li className='order__card-item'>
            <div className='order__card-prise'>
                <div className='order__card-imgs'>
                    <div className='order__card-img'>
                        <img className='order__cardImg' src={item.foodImg} alt="" />
                    </div>
                    <div className='order__card-texts'>
                        <p className='orer__card-title'>{item.foodName.slice(0,20)}...</p>
                        <span>$ {item.foodPrice}</span>
                    </div>
                </div>
                <div className='order__card-block'>
                    <p className='order__card-count'>{item.count}</p>
                    <p className='order__card-prices'>$ {item.totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <div className='order__card-inputs'>
                <input placeholder='Please, just a little bit spicy only.' className='order__card-input' type="text" />
                <button onClick={deleteCard} className='order__card-btn'><AiOutlineDelete className='order__card-icon'/></button>
            </div>

        </li>
    );
};

export default OrderCard;