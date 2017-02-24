import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './Meal.model';

@Pipe ({
  name: "caloriesfilter",
  pure: false

})

export class CaloriesFilterPipe implements PipeTransform {
  transform(input: Meal[], caloriesLevel){
    var output: Meal[] =[];
    if(caloriesLevel === "lowCaloriesMeal"){
      for(var i=0; i<input.length; i++){
        if(input[i].calories<=500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (caloriesLevel === "highCaloriesMeal") {
      for(var i=0; i<input.length; i++){
        if(input[i].calories>500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
