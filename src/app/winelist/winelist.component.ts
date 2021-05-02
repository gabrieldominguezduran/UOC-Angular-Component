import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';
import { Food } from '../model/food';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css'],
})
export class WinelistComponent implements OnInit {
  public wineObj: Array<Wine>;
  constructor() {}

  ngOnInit(): void {
    this.wineObj = [
      new Wine(1, 'Kai Simone Cabernet Suavignon', 'wine3.jpg', 20, true, 1, [
        new Food('Meat', 300, false, 100),
        new Food('Cheese', 300, false, 100),
      ]),
      new Wine(2, 'Mono Talamonti', 'wine2.jpg', 18, false, 1, [
        new Food('Bread', 300, false, 100),
        new Food('Fruits', 300, false, 100),
      ]),
      new Wine(3, 'Harl Bordoux Suavignon Blanc', 'wine1.jpg', 25, true, 1, [
        new Food('Fish', 300, false, 100),
        new Food('Sweets', 300, false, 100),
      ]),
    ];
  }

  onClickQuantity(id, qty): void {
    console.log(`Have selected ${qty} bottles from the wine number ${id}`);
  }
}
