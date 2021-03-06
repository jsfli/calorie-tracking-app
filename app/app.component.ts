import {Component} from '@angular/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'my-app',
  template:`
  <div class="container">
    <h1>Meal Tracker App</h1>
        <mealList
          [childMealList]="masterMealList"
        ></mealList>
        <totalCalories
          [totalCaloriesList]="masterMealList"
        ></totalCalories>
        <newMeal
          (newMealSender)="addMeal($event)"
        ></newMeal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal []=[
    new Meal ("Hamburger","Didn't get a soda or cheese on my burger", 354),
    new Meal ("Fries", "I only ate half of them.", 365),
    new Meal ("Chicken Rice","Lunch", 800),
    new Meal ("Noodles","Dinner", 1000)
  ];

  addMeal(newMealFromChild: Meal){
    this.masterMealList.push(newMealFromChild);
  }
}
