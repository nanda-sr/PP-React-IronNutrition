import React from 'react';
import {FoodDetail} from './FoodDetail';
import TextField from 'material-ui/TextField';

export const FoodList = ({foods}) => {
  
  return(
      <section>
        {foods.map((food, index)=>{
          return <FoodDetail key={index} food={food}/>
        })}
      </section>
    )
}

