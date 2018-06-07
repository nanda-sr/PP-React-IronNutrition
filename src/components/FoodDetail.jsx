import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export const FoodDetail = ({food})=>{
  return (
    <div>

    
      <Card>
    <CardHeader
      title={food.name}
      subtitle= {food.calories}
      avatar={food.image}
    />
  </Card>

    </div>
  )
}