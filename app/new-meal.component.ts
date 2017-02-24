import {Component, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector:'newMeal',
  template:`
  <div class="container">
    <button (click)="showAddMenu()">Log A New Meal</button>
    <div *ngIf="showAddMeal">
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
        <button (click)="
          addNewMealClicked(newName.value, newDetails.value, newCalories.value);
          newName.value='';
          newDetails.value='';
          newCalories.value='';
        ">Add Meal</button>
      </div>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  showAddMeal: boolean = false;
  addNewMealClicked(name:string, details:string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
    this.showAddMeal = false;
  }
  showAddMenu (){
    this.showAddMeal = true;
  }
}
