import { Dishes } from "../assets/Dishes";


const GetItem = (id) =>{
    for(let i of Dishes){
        if(i.id === id){
            return i.item
        }
    } 

}

const sortItem = (id,item) => {
    for(let i of item){
        if(i.id === id){
            i.count += 1;
            i.totalPrice += i.foodPrice;
        }
    }
   return item;
}
const deleteItem = (id,list) =>{
    for(let i of list){
        if(i.id === id){
            if(i.count > 1){
                i.count -= 1;
                i.totalPrice -= i.foodPrice;
                return list;
            }
            else{
                return null;
            }
        }
    }
}

export {GetItem,sortItem,deleteItem}