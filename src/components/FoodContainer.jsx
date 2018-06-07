import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {FoodList} from './FoodList';
import { networkInterfaces } from 'os';

const comida = [
  {
    "name": "Pizza",
    "calories": 400,
    "image": "https://i.imgur.com/eTmWoAN.png",
    "quantity": 0
  },
  {
    "name": "Salad",
    "calories": 150,
    "image": "https://i.imgur.com/DupGBz5.jpg",
    "quantity": 0
  },
  {
    "name": "Sweet Potato",
    "calories": 120,
    "image": "https://i.imgur.com/hGraGyR.jpg",
    "quantity": 0
  },
  {
    "name": "Gnocchi",
    "calories": 500,
    "image": "https://i.imgur.com/93ekwW0.jpg",
    "quantity": 0
  },
  {
    "name": "Pot Roast",
    "calories": 350,
    "image": "https://i.imgur.com/WCzJDWz.jpg",
    "quantity": 0
  },
  {
    "name": "Lasagna",
    "calories": 750,
    "image": "https://i.imgur.com/ClxOafl.jpg",
    "quantity": 0
  },
  {
    "name": "Hamburger",
    "calories": 400,
    "image": "https://i.imgur.com/LoG39wK.jpg",
    "quantity": 0
  },
  {
    "name": "Pad Thai",
    "calories": 475,
    "image": "https://i.imgur.com/5ktcSzF.jpg",
    "quantity": 0
  },
  {
    "name": "Almonds",
    "calories": 75,
    "image": "https://i.imgur.com/JRp4Ksx.jpg",
    "quantity": 0
  },
  {
    "name": "Bacon",
    "calories": 175,
    "image": "https://i.imgur.com/7GlqDsG.jpg",
    "quantity": 0
  },
  {
    "name": "Hot Dog",
    "calories": 275,
    "image": "https://i.imgur.com/QqVHdRu.jpg",
    "quantity": 0
  },
  {
    "name": "Chocolate Cake",
    "calories": 490,
    "image": "https://i.imgur.com/yrgzA9x.jpg",
    "quantity": 0
  },
  {
    "name": "Wheat Bread",
    "calories": 175,
    "image": "https://i.imgur.com/TsWzMfM.jpg",
    "quantity": 0
  },
  {
    "name": "Orange",
    "calories": 85,
    "image": "https://i.imgur.com/abKGOcv.jpg",
    "quantity": 0
  },
  {
    "name": "Banana",
    "calories": 175,
    "image": "https://i.imgur.com/BMdJhu5.jpg",
    "quantity": 0
  },
  {
    "name": "Yogurt",
    "calories": 125,
    "image": "https://i.imgur.com/URhdrAm.png",
    "quantity": 0
  }
];

class FoodContainer extends Component{
  
  state = {
    foods: comida,
    showFoods: comida
  }

onChange = (e) =>{
  const value = e.target.value;
  const newList = this.state.foods.filter(food=>food.name.toLowerCase().includes(value));
  console.log(newList)
  this.setState({showFoods:newList});
};

  

render(){
    return (
      <div>
        <div>
        <TextField
          onChange={this.onChange}
          hintText="Search Food"
          type="text"
          /><br />
        </div>
       <FoodList foods={this.state.showFoods}/>
      </div>
    )
  }

}

export default FoodContainer;

