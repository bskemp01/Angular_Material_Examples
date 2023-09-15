import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {
  pizzaMeatToppings,
  pizzaSauce,
  pizzaVeggieToppings,
} from 'src/app/consts/pizzaTopping.const';
import { pizzaToppingsModel } from 'src/app/models/models.model';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
  meatToppings: pizzaToppingsModel[] = [];
  veggieToppings: pizzaToppingsModel[] = [];
  sauceToppings: pizzaToppingsModel[] = [];

  ngOnInit(): void {
    pizzaMeatToppings.map((topping) => {
      this.meatToppings.push({ topping: topping, selected: false });
    });
    pizzaVeggieToppings.map((topping) => {
      this.veggieToppings.push({ topping: topping, selected: false });
    });
    pizzaSauce.map((topping) => {
      this.sauceToppings.push({ topping: topping, selected: false });
    });
  }

  selectTopping(item: pizzaToppingsModel, event: MatCheckboxChange) {
    if (this.meatToppings.includes(item)) {
      const index = this.meatToppings.indexOf(item);
      this.meatToppings[index].selected = event.checked;
    }
    if (this.veggieToppings.includes(item)) {
      const index = this.veggieToppings.indexOf(item);
      this.veggieToppings[index].selected = event.checked;
    }
    if (this.sauceToppings.includes(item)) {
      const index = this.sauceToppings.indexOf(item);
      this.sauceToppings[index].selected = event.checked;
    }
  }
}
