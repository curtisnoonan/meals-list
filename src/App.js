import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  
  
  constructor(){

    super();
      this.state={
        meals: [],
        searchField: ''
      };
    }

  componentDidMount(){
    const nutrition = {
      "meal":[
        {
          "name":"Breakfast", 
          "description":"Egg Whites, Spinach, Avocado",
          "food":[" egg white, "," boiled spinach, "," avocado "],
          "quantity":[" 8 "," 303 g ","1 87 g "],
          'calories':[" 128 "," 70 "," 300 "],
          "imgurl": 'https://www.custommealplanner.com/fitness/uploads/thumb_eggwhitesspinachavocado__49214254691496251723.jpg',
          'id':'0'
        },
        {
          "name":"Lunch", 
          "description":"Salmon And Asparagus",
          "food":[" grilled salmon, "," thyme, "," ground black pepper, "," boiled spinach "],
          "quantity":[" 165 g "," 0.2 tsp "," 0.2 tsp "," 982 g "],
          'calories':[" 302 "," 0 "," 0 "," 226" ],
          'imgurl': 'https://www.custommealplanner.com/fitness/uploads/thumb_img4771__5585660221496796384.jpg',
          'id':'1'
        },
        {
          "name":"Dinner", 
          "description":"Chicken And Cheesy Spinach",
          "food":[" boneless, skinless chicken breast, "," boiled spinach "," cheddar cheese "],
          "quantity":[" 160 g  "," 305 g  "," 25 g  "],
          'calories':[" 265 "," 70 "," 100 "],
          'imgurl':'https://www.custommealplanner.com/fitness/uploads/thumb_chickenspinach__82806017571496962954.jpg',
          'id':'2'
        }
      ]
    }
    this.setState({
      meals: nutrition.meal
    });
  }
  
  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  
  render(){
    const { meals, searchField } = this.state;
    const filteredMeals = meals.filter(meal =>
      meal.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Meal Planner</h1>
        <SearchBox placeholder='search meals' 
          handleChange={this.handleChange}/>
       <CardList meals = {filteredMeals}>
        </CardList>
      </div>
    );
    }
}

export default App;
