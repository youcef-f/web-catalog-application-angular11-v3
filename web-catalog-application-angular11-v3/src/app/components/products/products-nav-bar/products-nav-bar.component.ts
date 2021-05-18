import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from '../../../state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  @Output() productEventEmitterNarBar: EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts(): void {
      this.productEventEmitterNarBar.emit({type: ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts(): void {
    this.productEventEmitterNarBar.emit({type: ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts(): void {
    this.productEventEmitterNarBar.emit({type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS });
  }

  onNewProducts(): void {
    this.productEventEmitterNarBar.emit({type: ProductActionsTypes.NEW_PRODUCT });
  }

  onSearch(dataForm: any): void {
    this.productEventEmitterNarBar.emit({type: ProductActionsTypes.SEARCH_PRODUCTS, PayloadParamFun: dataForm });
  }
}
