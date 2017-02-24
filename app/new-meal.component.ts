import {Component, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector:'newMeal',
  template:`
  <div class="container">
    <h3>Log a new Meal</h3>
    <div>
      <label>Enter Meal Name: </label><br>
      <input #newName>
    </div>
    <div>
      <label>Enter Meal Details: </label><br>
      <input #newDetails>
    </div>
    <div>
      <label>Enter Meal Calories: </label><br>
      <input #newCalories>
      <button>Add Meal</button>
    </div>

  </div>
  `
})

export class NewMealComponent {

}
