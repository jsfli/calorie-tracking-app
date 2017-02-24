import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesFilterPipe } from'./caloriesfilter.pipe';

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
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
