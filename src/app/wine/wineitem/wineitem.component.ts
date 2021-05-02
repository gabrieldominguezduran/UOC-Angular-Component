import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Wine } from '../../model/wine';

@Component({
  selector: 'app-wineitem',
  template: `
    <div
      class="wine-container"
      [class.on-sale]="wine.isOnSale"
      [class.not-on-sale]="!wine.isOnSale"
    >
      <img
        src="assets/images/{{ wine.imageUrl }}"
        alt="Wine photo"
        class="wine-img"
      />
      <h4>{{ wine.name }}</h4>
      <p>{{ wine.price }} €</p>
      <button
        class="btn"
        (click)="decreaseQuantity(wine.id, wine.quantityInCart)"
        *ngIf="wine.quantityInCart"
      >
        -
      </button>
      <span class="quantity">{{ wine.quantityInCart }}</span>
      <button
        class="btn"
        (click)="increaseQuantity(wine.id, wine.quantityInCart)"
      >
        +
      </button>

      <p>
        Good with: {{ wine.foodParing[0].name }} or
        {{ wine.foodParing[1].name }}
      </p>
    </div>
  `,
  styles: [
    `
      .wine-container {
        width: 200px;
        height: 420px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        margin: 1rem;
      }

      .on-sale {
        background-color: rgb(199, 241, 175);
      }

      .not-on-sale {
        background-color: rgb(241, 175, 175);
      }

      .wine-img {
        width: 70%;
      }

      .btn {
        padding: 0 0.5rem;
        cursor: pointer;
      }

      .quantity {
        margin: 0 0.3rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineitemComponent implements OnInit {
  @Input() public wine: Wine;

  @Output() public WineQuantityChange: EventEmitter<Wine>;
  constructor() {
    this.WineQuantityChange = new EventEmitter<Wine>();
  }

  increaseQuantity(id, qty): void {
    this.wine.quantityInCart += 1;
    this.WineQuantityChange.emit(this.wine);
  }

  decreaseQuantity(id, qty): void {
    this.wine.quantityInCart -= 1;
    this.WineQuantityChange.emit(this.wine);
  }

  ngOnInit(): void {}
}
