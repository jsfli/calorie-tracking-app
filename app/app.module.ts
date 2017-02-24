import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesFilterPipe } from'./caloriesfilter.pipe';
import { TotalCaloriesComponent } from './total-calories.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    NewMealComponent,
    CaloriesFilterPipe,
    TotalCaloriesComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
