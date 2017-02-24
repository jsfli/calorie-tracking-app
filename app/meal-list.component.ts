import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'mealList',
  template:`

  <!-- Meal listing section-->
  <div class="container">
    <h3>Logged food</h3>
    <div>
    <select (change)="onChange($event.target.value)">
      <option value = "all" selected="selected">Show All</option>
      <option value = "lowCaloriesMeal">Low Calories Meal</option>
      <option value = "highCaloriesMeal">High Calories Meal</option>
    </select>
    </div>
      <div class="mealList" *ngFor="let currentMeal of childMealList | caloriesfilter:caloriesLevel">
        <h4><strong>Name: </strong>{{currentMeal.name}}</h4>
        <p><strong>Details: </strong>{{currentMeal.details}}</p>
        <p><strong>Calories: </strong>{{currentMeal.calories}}</p>
        <button (click)="showEditDetails(currentMeal)">Edit</button>
      </div>
  </div>

<!--Meal editing Section-->
  <div class="container">
    <div *ngIf="selectedMeal">
      <h3>Edit Meal</h3>
      <div>
        <label>Enter Meal Name: </label>
        <input [(ngModel)] = "selectedMeal.name">
      </div>
      <div>
        <label>Enter Meal Details: </label>
        <input [(ngModel)] = "selectedMeal.details">
      </div>
      <div>
        <label>Enter Meal Calories: </label>
        <input [(ngModel)] = "selectedMeal.calories">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal [];

  public caloriesLevel: string ="all";

  onChange(optionFromCaloriesMenu){
    this.caloriesLevel = optionFromCaloriesMenu;
  }

  selectedMeal: Meal = null;
  showEditDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}
