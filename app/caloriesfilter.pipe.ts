import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './Meal.model';

@Pipe ({
  name: "caloriesfilter",
  pure: false

})

export class CaloriesFilterPipe implements PipeTransform {
  transform(input: Meal[]){
    var output: Meal[] =[];
      for(var i=0; i<input.length; i++){
        if(input[i].calories>500) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
