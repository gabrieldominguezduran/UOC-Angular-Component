import { Component, OnInit } from '@angular/core';
import { Wine } from '../../model/wine';
import { Food } from '../../model/food';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css'],
})
export class WineitemComponent implements OnInit {
  public wine: Wine;
  public food1: Food;
  public food2: Food;
  public saleClass: { 'on-sale': boolean; 'not-on-sale': boolean };
  public wines: [];

  constructor() {}

  ngOnInit(): void {
    this.wine = new Wine(
      'Kai Simone Cabernet Suavignon',
      'wine3.jpg',
      20,
      true,
      1,
      [
        (this.food1 = new Food('Meat', 300, false, 100)),
        (this.food2 = new Food('Cheese', 300, false, 100)),
      ]
    );
    this.saleClass = {
      'on-sale': this.wine.isOnSale,
      'not-on-sale': !this.wine.isOnSale,
    };
    this.wines = [].constructor(20);
  }
  increaseQuantity(): void {
    this.wine.quantityInCart = this.wine.quantityInCart + 1;
  }

  decreaseQuantity(): void {
    this.wine.quantityInCart = this.wine.quantityInCart - 1;
  }
}
