import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharing-data-between-components';
  currentBeverage = "Coffee";
  beverages = ['Milk','Tea','Coffee','Juice'];

  addBeverage(newBeverage: string){
    this.beverages.push(newBeverage);
  }
}
