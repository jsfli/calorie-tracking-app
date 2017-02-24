import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'totalCalories',
  template: `
  <div class="container">
    <p><strong>Total Calories Consumed: </strong> {{TotalCaloriesMethod(totalCaloriesList)}}</p>
  </div>
  `
})

export class TotalCaloriesComponent {
  @Input () totalCaloriesList: Meal [];
  public total: number =0;
  TotalCaloriesMethod(totalCaloriesList){
    this.total = 0;
    for(var i=0; i<totalCaloriesList.length; i++) {
      this.total += parseInt(totalCaloriesList[i].calories);
    }
    console.log(this.total);
    return this.total;
  }

}
